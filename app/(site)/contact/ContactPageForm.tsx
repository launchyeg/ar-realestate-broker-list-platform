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
        <p className="text-stone-400 text-base">
          We'll get back to you within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Row 1 — Name + What do you want */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-white text-base font-medium mb-3">
            Name
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First and last name"
            className="w-full bg-transparent border-b border-[#fffc] text-white placeholder-[#fffc] text-base py-2 focus:outline-none focus:border-white transition-colors"
          />
        </div>
        <div>
          <label className="block text-white text-base font-medium mb-3">
            What do you want?
          </label>
          <select
            className="w-full bg-transparent border-b border-[#fffc] text-white text-base py-2 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
            style={{ colorScheme: "dark" }}
          >
            <option className="bg-brand-primary" value="buy">
              Buy a house
            </option>
            <option className="bg-brand-primary" value="rent">
              Rent a property
            </option>
            <option className="bg-brand-primary" value="invest">
              Invest
            </option>
            <option className="bg-brand-primary" value="sell">
              Sell my property
            </option>
          </select>
        </div>
      </div>

      {/* Row 2 — Location + Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-white text-base font-medium mb-3">
            Your preferred location
          </label>
          <select
            className="w-full bg-transparent border-b border-[#fffc] text-white text-base py-2 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
            style={{ colorScheme: "dark" }}
          >
            <option className="bg-brand-primary" value="">
              Select location
            </option>
            <option className="bg-brand-primary" value="hurghada">
              Hurghada
            </option>
            <option className="bg-brand-primary" value="sahl-hasheesh">
              Sahl Hasheesh
            </option>
            <option className="bg-brand-primary" value="el-gouna">
              El Gouna
            </option>
            <option className="bg-brand-primary" value="makadi-bay">
              Makadi Bay
            </option>
            <option className="bg-brand-primary" value="soma-bay">
              Soma Bay
            </option>
          </select>
        </div>
        <div>
          <label className="block text-white text-base font-medium mb-3">
            Your desired budget
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="EGP 1,000,000"
            className="w-full bg-transparent border-b border-[#fffc] text-white placeholder-[#fffc] text-base py-2 focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      {/* Row 3 — Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-white text-base font-medium mb-3">
            Your email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourmail@email.com"
            className="w-full bg-transparent border-b border-[#fffc] text-white placeholder-[#fffc] text-base py-2 focus:outline-none focus:border-white transition-colors"
          />
        </div>
        <div>
          <label className="block text-white text-base font-medium mb-3">
            Your phone number
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+20 100 000 0000"
            className="w-full bg-transparent border-b border-[#fffc] text-white placeholder-[#fffc] text-base py-2 focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-8 py-[18px] bg-brand-primary text-white text-base font-medium rounded-full hover:bg-brand-primaryLight transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Get a Quote"}
        </button>
      </div>
    </form>
  );
}
