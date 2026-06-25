import { ChatInputBar } from "./ChatInputBar";

export function ChatEmptyState({
  onSend,
  pending,
}: {
  onSend: (prompt: string) => void;
  pending: boolean;
}) {
  return (
    <div className="chat__empty">
      <h1 className="chat__empty-heading">Goeiedag!</h1>
      <ChatInputBar onSend={onSend} pending={pending} />
    </div>
  );
}
