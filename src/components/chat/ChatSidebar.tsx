import Image from "next/image";

function HistoryGroup({ title }: { title: string }) {
  return (
    <section className="chat__history-group">
      <h2 className="chat__history-title">{title}</h2>
      <ul className="chat__history-list">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="chat__history-item" />
        ))}
      </ul>
    </section>
  );
}

export function ChatSidebar({ showHistory = true }: { showHistory?: boolean }) {
  return (
    <aside className={`chat__sidebar${showHistory ? "" : " chat__sidebar--compact"}`}>
      <Image
        className="chat__logo"
        src="/images/logo-navbar.svg"
        alt="Football Manager"
        width={60}
        height={60}
        unoptimized
      />
      {showHistory && (
        <div className="chat__history">
          <HistoryGroup title="today" />
          <HistoryGroup title="yesterday" />
        </div>
      )}
    </aside>
  );
}
