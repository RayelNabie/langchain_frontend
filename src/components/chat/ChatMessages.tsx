import { Fragment } from "react";
import Image from "next/image";

export type Message = {
  role: "user" | "assistant";
  text: string;
};

function AssistantAvatar() {
  return (
    <Image
      className="chat__avatar"
      src="/images/logo-assistant.svg"
      alt=""
      width={60}
      height={60}
      unoptimized
    />
  );
}

export function ChatMessages({
  messages,
  pending,
}: {
  messages: Message[];
  pending?: boolean;
}) {
  return (
    <ul className="chat__messages">
      {messages.map((message, i) => (
        <li key={i} className={`chat__message chat__message--${message.role}`}>
          {message.role === "assistant" && <AssistantAvatar />}
          <p className="chat__bubble">
            {message.text.split("\n").map((line, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
          {message.role === "user" && (
            <span className="chat__avatar chat__avatar--user" aria-hidden="true">
              <span className="chat__avatar-ring" />
            </span>
          )}
        </li>
      ))}
      {pending && (
        <li className="chat__message chat__message--assistant">
          <AssistantAvatar />
          <p className="chat__bubble chat__bubble--typing">
            <span className="visually-hidden">FootballAI is aan het typen…</span>
            <span className="chat__typing-dot" aria-hidden="true" />
            <span className="chat__typing-dot" aria-hidden="true" />
            <span className="chat__typing-dot" aria-hidden="true" />
          </p>
        </li>
      )}
    </ul>
  );
}
