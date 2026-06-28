import { ChatInputBar } from "./ChatInputBar";

const SUGGESTIONS = [
  "Drills voor mijn positie",
  "Help me met een techniektraining",
  "Conditie opbouwen",
  "Tactisch advies",
];

export function ChatEmptyState({
  onSend,
  pending,
}: {
  onSend: (prompt: string) => void;
  pending: boolean;
}) {
  return (
    <div className="chat__empty">
      <div className="chat__empty-content">
        <h1 className="chat__empty-heading">Wat wil je verbeteren?</h1>
        <p className="chat__empty-sub">Jouw persoonlijke voetbalcoach staat klaar.</p>
      </div>
      <div className="chat__suggestions">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            className="chat__suggestion"
            onClick={() => onSend(s)}
            disabled={pending}
          >
            {s}
          </button>
        ))}
      </div>
      <ChatInputBar onSend={onSend} pending={pending} />
    </div>
  );
}
