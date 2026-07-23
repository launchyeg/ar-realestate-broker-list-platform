"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPageForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const payload = { name, phone, email, message };
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
      <div className="bg-brand-surface p-5 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
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
        <p className="text-stone-500 text-base">
          We will contact you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-brand-surface p-5 md:p-8 rounded-3xl flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
          Reach out for any query
        </h2>
        <p className="text-brand-muted text-lg font-medium leading-7">
          Contact us today to discuss your property needs and choose the right
          plan. We’re here to guide you through every step of the process.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-stone-800 text-sm font-semibold mb-4">
            Full Name{" "}
            <span className="text-stone-500 font-normal">(required)</span>
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full bg-white border border-stone-300 rounded-2xl p-5 text-stone-800 placeholder-stone-400 text-base focus:outline-none focus:border-stone-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-stone-800 text-sm font-semibold mb-4">
            Email Address{" "}
            <span className="text-stone-500 font-normal">(required)</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-white border border-stone-300 rounded-2xl p-5 text-stone-800 placeholder-stone-400 text-base focus:outline-none focus:border-stone-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-stone-800 text-sm font-semibold mb-4">
            Phone Number{" "}
            <span className="text-stone-500 font-normal">(required)</span>
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+20 100 000 0000"
            className="w-full bg-white border border-stone-300 rounded-2xl p-5 text-stone-800 placeholder-stone-400 text-base focus:outline-none focus:border-stone-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-stone-800 text-sm font-semibold mb-4">
            Detailed inquiry
          </label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your opinion"
            className="w-full bg-white border border-stone-300 rounded-2xl p-5 text-stone-800 placeholder-stone-400 text-base focus:outline-none focus:border-stone-500 transition-colors resize-none"
          />
        </div>

        {status === "error" && (
          <p className="text-xs text-red-400">
            Something went wrong. Please try again.
          </p>
        )}

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-8 py-3.5 bg-brand-primary text-white text-base font-medium rounded-full hover:bg-brand-primaryLight transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
