import { Fragment } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const messages: Message[] = [
  { role: "user", text: "Werkt dit ding?" },
  {
    role: "assistant",
    text: "Ja—ik kan reageren. Wat wil je precies dat ik voor je doe?",
  },
  { role: "user", text: "Analyseer mijn team" },
  {
    role: "assistant",
    text:
      "Dummytext 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Dummytext 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.\nDummytext 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    role: "user",
    text:
      "Je bent een expert analyticus, in kinderlijke taal analyseer dit team. Geef me 5 bullet points over elke speler en maak hier een perfecte tactiek voor die perfect aansluit op mijn team",
  },
];

// ponytail: geschiedenisitems zijn lege plaatshouders, zo staat het ook in de Figma-export
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

export default function Home() {
  return (
    <div className="chat">
      <aside className="chat__sidebar">
        <img className="chat__logo" src="/images/logo.png" alt="Football Manager" />
        <div className="chat__history">
          <HistoryGroup title="today" />
          <HistoryGroup title="yesterday" />
        </div>
      </aside>

      <div className="chat__main">
        <ul className="chat__messages">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`chat__message chat__message--${message.role}`}
            >
              {message.role === "assistant" && (
                <img
                  className="chat__avatar"
                  src="/images/avatar-assistant.png"
                  alt=""
                />
              )}
              <p className="chat__bubble">
                {message.text.split("\n").map((line, j) => (
                  <Fragment key={j}>
                    {j > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </p>
              {message.role === "user" && (
                <img
                  className="chat__avatar"
                  src="/images/avatar-user.png"
                  alt=""
                />
              )}
            </li>
          ))}
        </ul>

        <form className="chat__inputbar">
          <div className="chat__inputfield">
            <input
              className="chat__input"
              type="text"
              name="question"
              placeholder="Stel jouw football manager vraag hier"
              aria-label="Stel jouw football manager vraag hier"
            />
            <button type="button" className="chat__upload">
              <img src="/images/icon-plus.png" alt="" width={24} height={24} />
              Team.html
            </button>
          </div>
          <button type="submit" className="chat__send" aria-label="Verstuur bericht">
            <img src="/images/icon-send.png" alt="" width={24} height={24} />
          </button>
        </form>
      </div>
    </div>
  );
}
