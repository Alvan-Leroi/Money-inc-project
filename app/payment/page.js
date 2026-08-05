"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Payment submitted successfully.");
  }

  return (
    <main className="paymentPage">
      <header className="header">
        <a href="/" className="logo">
          Cash-In
        </a>

        <a href="/">Home</a>
      </header>

      <form className="paymentForm" onSubmit={handleSubmit}>
        <h1>Make a payment</h1>
        <p>Total: KSh 2,500</p>

        <div className="paymentMethods">
          <button type="button" onClick={() => setMethod("card")}>
            Card
          </button>

          <button type="button" onClick={() => setMethod("mpesa")}>
            M-Pesa
          </button>
        </div>

        {method === "card" ? (
          <>
            <input type="text" placeholder="Name on card" required />
            <input type="text" placeholder="Card number" required />

            <div className="cardRow">
              <input type="text" placeholder="MM/YY" required />
              <input type="password" placeholder="CVV" required />
            </div>
          </>
        ) : (
          <input type="tel" placeholder="M-Pesa phone number" required />
        )}

        <button type="submit" className="payButton">
          Pay KSh 2,500
        </button>

        {message && <p className="successMessage">{message}</p>}
      </form>
    </main>
  );
}
