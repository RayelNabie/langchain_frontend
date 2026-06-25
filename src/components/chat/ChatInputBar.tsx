"use client";

import { useState, type FormEvent } from "react";

export function ChatInputBar({
  onSend,
  pending,
}: {
  onSend: (prompt: string) => void;
  pending: boolean;
}) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const prompt = value.trim();
    if (!prompt || pending) return;
    onSend(prompt);
    setValue("");
  }

  return (
    <form className="chat__inputbar" onSubmit={handleSubmit}>
      <div className="chat__inputfield">
        <input
          className="chat__input"
          type="text"
          name="question"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Stel jouw football manager vraag hier"
          aria-label="Stel jouw football manager vraag hier"
          disabled={pending}
        />
        <button type="button" className="chat__upload" disabled={pending}>
          <span className="chat__icon chat__icon--plus" aria-hidden="true" />
          Team.html
        </button>
      </div>
      <button
        type="submit"
        className="chat__send"
        aria-label="Verstuur bericht"
        disabled={pending || !value.trim()}
      >
        <span
          className={`chat__icon ${pending ? "chat__icon--spinner" : "chat__icon--arrow"}`}
          aria-hidden="true"
        />
      </button>
    </form>
  );
}
