export default function Home() {
  return (
    <main>
      <header className="header">
        <a href="#home" className="logo">
          Cash-In
        </a>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroContent">
          <p className="eyebrow">SIMPLE · MODERN · RELIABLE</p>

          <h1>
            Your money,
            <span>made simple</span>
          </h1>

          <p className="heroText">
            A simple and secure way to stay in control of your finances With
            Alvan very cool guy
          </p>

          <a href="#about" className="primaryButton">
            Learn more
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Cash-In</h2>

        <p>
          Cash-In provides a simple and straightforward financial experience.
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Cash-In</p>
      </footer>
    </main>
  );
}
