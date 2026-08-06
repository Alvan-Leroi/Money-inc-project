"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./payment.css";

export default function PaymentPage() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlePayment(event) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/mpesa/stkpush", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          amount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Payment request failed.");
      }

      setMessage("STK Push sent. Check your phone and enter your M-Pesa PIN.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.paymentPage}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Cash-In
        </Link>

        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/payment">Payment</Link>
        </nav>
      </header>

      <form className={styles.paymentForm} onSubmit={handlePayment}>
        <h1>Pay with M-Pesa</h1>

        <p>Enter the amount and the M-Pesa phone number.</p>

        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min="1"
          step="1"
          placeholder="Enter amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          required
        />

        <label htmlFor="phone">M-Pesa phone number</label>
        <input
          id="phone"
          type="tel"
          placeholder="0712345678"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />

        <button type="submit" className={styles.payButton} disabled={loading}>
          {loading ? "Sending request..." : "Pay with M-Pesa"}
        </button>

        {message && <p className={styles.message}>{message}</p>}

        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>
      </form>
    </main>
  );
}
