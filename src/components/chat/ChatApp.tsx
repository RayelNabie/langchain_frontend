"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { ChatMessages, type Message } from "@/components/chat/ChatMessages";
import { ChatInputBar } from "@/components/chat/ChatInputBar";
import { ChatEmptyState } from "@/components/chat/ChatEmptyState";

function withViewTransition(update: () => void) {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => void };
  if (doc.startViewTransition) {
    doc.startViewTransition(() => flushSync(update));
  } else {
    update();
  }
}

export function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSend(prompt: string) {
    const appendUser = () => setMessages((prev) => [...prev, { role: "user", text: prompt }]);

    if (messages.length === 0) {
      withViewTransition(appendUser); // morft van de lege staat naar het gespreksoverzicht
    } else {
      appendUser();
    }

    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, sessionId }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.answer }]);
      } else {
        setError(data.error ?? "Er ging iets mis");
      }
    } catch {
      setError("Er ging iets mis");
    } finally {
      setPending(false);
    }
  }

  if (messages.length === 0) {
    return (
      <div className="chat">
        <ChatSidebar showHistory={false} />
        <ChatEmptyState onSend={handleSend} pending={pending} />
      </div>
    );
  }

  return (
    <div className="chat">
      <ChatSidebar />
      <div className="chat__main">
        <ChatMessages messages={messages} pending={pending} />
        {error && <p className="chat__error">{error}</p>}
        <ChatInputBar onSend={handleSend} pending={pending} />
      </div>
    </div>
  );
}
