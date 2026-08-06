import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="header">
        <Link href="/" className="logo">
          Cash-In
        </Link>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <Link href="/payment">Payment</Link>
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
            A simple and secure way to stay in control of your finances with
            Alvan, a very cool guy.
          </p>

          <Link href="/payment" className="primaryButton">
            Make a payment
          </Link>
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
