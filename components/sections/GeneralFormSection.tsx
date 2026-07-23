"use client";

import { useState } from "react";
import Link from "next/link";
import siteConfig from "@/siteConfig";
import AnimateOnScroll from "../ui/AnimateOnScroll";

type Status = "idle" | "sending" | "success" | "error";

export default function GeneralFormSection() {
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
      <div className="flex flex-col items-center justify-center py-20 text-center">
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
        <p className="font-display text-2xl text-white mb-2">Message sent!</p>
        <p className="text-white text-base">
          We will contact you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <section className="relative bg-brand-accent z-10 -mt-6 rounded-t-3xl">
      <div className="max-w-[1380px] mx-auto px-6 md:px-8 pt-10 pb-[90px] md:pt-[70px] lg:py-[120px] flex flex-row justify-between flex-wrap gap-10 md:gap-16">
        <div className="lg:basis-[480px]">
          <AnimateOnScroll type="fade-up">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-white mb-4">
              Let’s find your next perfect property
            </h2>
            <p className="text-[#fffc] text-lg font-medium leading-7 mt-5 mb-8 md:mb-12 lg:mb-28">
              Have questions or ready to take the next step? Whether you’re
              buying, selling, or just exploring options.
            </p>

            <div className="flex flex-wrap gap-5 sm:gap-16">
              <div>
                <h2 className="text-[#fffc] text-base font-medium leading-7 mb-1">
                  Email Address
                </h2>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  target="_blank"
                  className="text-white text-base font-medium leading-7"
                >
                  {siteConfig.contact.email}
                </Link>
              </div>
              <div>
                <h2 className="text-[#fffc] text-base font-medium leading-7 mb-1">
                  Phone Call
                </h2>
                <Link
                  href={`tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  className="text-white text-base font-medium leading-7"
                >
                  {siteConfig.contact.phone}
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="basis-full lg:basis-xl">
          <AnimateOnScroll type="fade-up">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white text-base font-medium mb-3">
                    Full name
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
              <div>
                <label className="block text-white text-base font-medium mb-3">
                  Your desired budget
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="EGP 1,000,000"
                  className="w-full bg-transparent border-b border-[#fffc] text-white placeholder-[#fffc] text-base py-2 focus:outline-none focus:border-white transition-colors"
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
                  {status === "sending" ? "Sending…" : "Get a Quote"}
                </button>
              </div>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
