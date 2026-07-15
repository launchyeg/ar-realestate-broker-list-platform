"use client";

import { useState } from "react";
import siteConfig from "@/siteConfig";

interface Props {
  unit: { name: string; slug: string; priceLabel: string };
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ unit }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    `Hi, I'm interested in ${unit.name}. Please send me more information.`,
  );
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      name,
      phone,
      email,
      message,
      unit: unit.slug,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
      <h3 className="font-display text-xl text-stone-900 mb-1">
        {siteConfig.leadForm.heading}
      </h3>
      <p className="text-xs text-stone-400 mb-5">
        {siteConfig.leadForm.subheading}
      </p>

      {status === "success" ? (
        <div className="py-8 text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-emerald-500"
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
          <p className="font-medium text-stone-800">Enquiry sent!</p>
          <p className="text-sm text-stone-500 mt-1">
            We'll be in touch shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-3 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/40 focus:border-[#C9A96E] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+20 100 000 0000"
              className="w-full px-3 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/40 focus:border-[#C9A96E] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full px-3 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/40 focus:border-[#C9A96E] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/40 focus:border-[#C9A96E] transition resize-none"
            />
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-stone-300 rounded flex-shrink-0" />
            <span className="text-sm text-stone-500">I'm not a robot</span>
            <div className="ml-auto text-right">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-stone-300 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <p className="text-[10px] text-stone-400 mt-0.5">reCAPTCHA v3</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-xl bg-[#1B2B3A] text-white text-sm font-medium hover:bg-[#2D4258] active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {status === "sending" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>{siteConfig.leadForm.ctaLabel}</>
            )}
          </button>

          {status === "error" && (
            <p className="text-xs text-red-500 text-center">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-[11px] text-center text-stone-400 mt-2">
            Or call us directly:{" "}
            <a
              href={`tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`}
              target="_blank"
              className="text-[#C9A96E] font-medium"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
