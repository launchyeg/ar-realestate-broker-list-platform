"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPageForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Buying");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const payload = { name, phone, email, interest, message };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center border border-stone-200 rounded-sm">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
          <svg
            className="w-7 h-7 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-display text-2xl text-stone-900 mb-2">
          Message sent!
        </p>
        <p className="text-stone-400 text-sm">
          We'll get back to you within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">
            Full Name *
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 border border-stone-200 text-sm focus:outline-none focus:border-[#C9A96E] transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">
            Phone *
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+20 100 000 0000"
            className="w-full px-4 py-3 border border-stone-200 text-sm focus:outline-none focus:border-[#C9A96E] transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-stone-500 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full px-4 py-3 border border-stone-200 text-sm focus:outline-none focus:border-[#C9A96E] transition"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-stone-500 mb-1">
          I am interested in
        </label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full px-4 py-3 border border-stone-200 text-sm focus:outline-none focus:border-[#C9A96E] transition bg-white"
        >
          <option>Buying</option>
          <option>Renting</option>
          <option>Selling my property</option>
          <option>Investment advice</option>
          <option>General enquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-stone-500 mb-1">
          Message
        </label>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're looking for..."
          className="w-full px-4 py-3 border border-stone-200 text-sm focus:outline-none focus:border-[#C9A96E] transition resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-xs text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase hover:bg-[#2D4258] transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
