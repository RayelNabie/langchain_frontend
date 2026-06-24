export default function Home() {
  return (
    <>
      {/* Navigatiebalk */}
      <header className="header">
        <div className="container">
          <nav className="nav" aria-label="Primaire navigatie">
            <a className="nav__logo" href="#">
              Workshop
            </a>
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#about">
                  Over
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#cards">
                  Kaarten
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link nav__link--cta" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero sectie (hoofdafbeelding) */}
        <section className="hero" id="about" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero__content">
              <h1 className="hero__title" id="hero-heading">BEM + SCSS Workshop</h1>
              <p className="hero__subtitle">
                Leer hoe je schaalbare, onderhoudbare CSS schrijft met de
                BEM-methodologie.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#cards">
                  Aan de slag
                </a>
                <a className="button button--outline" href="#contact">
                  Meer info
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kaarten sectie */}
        <section className="section" id="cards" aria-labelledby="cards-heading">
          <div className="container">
            <h2 className="section__title" id="cards-heading">Kaarten</h2>
            <div className="card-grid">
              {/* Kaart 1 — Blok */}
              <article className="card">
                <div className="card__image" aria-hidden="true"></div>
                <div className="card__body">
                  <h3 className="card__title">Blok</h3>
                  <p className="card__text">
                    De hoogste abstractie van een nieuw component. Een
                    zelfstandige entiteit die op zichzelf betekenis heeft.
                  </p>
                  <a className="card__link" href="#">
                    Lees meer
                  </a>
                </div>
              </article>

              {/* Kaart 2 — Element (uitgelicht met modifier) */}
              <article className="card card--featured">
                <div className="card__image" aria-hidden="true"></div>
                <div className="card__body">
                  <h3 className="card__title">Element</h3>
                  <p className="card__text">
                    Onderdelen van een blok zonder zelfstandige betekenis.
                    Gescheiden door dubbele underscore:{" "}
                    <code>blok__element</code>.
                  </p>
                  <a className="card__link" href="#">
                    Lees meer
                  </a>
                </div>
              </article>

              {/* Kaart 3 — Modifier */}
              <article className="card">
                <div className="card__image" aria-hidden="true"></div>
                <div className="card__body">
                  <h3 className="card__title">Modifier</h3>
                  <p className="card__text">
                    Vlaggen op blokken of elementen die het uiterlijk aanpassen.
                    Gescheiden door dubbel koppelteken:{" "}
                    <code>blok--modifier</code>.
                  </p>
                  <a className="card__link" href="#">
                    Lees meer
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contactformulier */}
        <section className="section section--dark" id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <h2 className="section__title" id="contact-heading">Contact</h2>
            <form className="form">
              {/* Naamveld */}
              <div className="form__group">
                <label className="form__label" htmlFor="name">
                  Naam
                </label>
                <input
                  className="form__input"
                  type="text"
                  id="name"
                  placeholder="Jouw naam"
                />
              </div>

              {/* E-mailveld */}
              <div className="form__group">
                <label className="form__label" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="form__input"
                  type="email"
                  id="email"
                  placeholder="jouw@email.nl"
                />
              </div>

              {/* Berichtveld */}
              <div className="form__group">
                <label className="form__label" htmlFor="message">
                  Bericht
                </label>
                <textarea
                  className="form__textarea"
                  id="message"
                  rows={4}
                  placeholder="Jouw bericht"
                ></textarea>
              </div>

              <button className="button button--primary" type="submit">
                Verstuur bericht
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer__copy">&copy; 2026 DSI Workshop</p>
        </div>
      </footer>
    </>
  );
}
