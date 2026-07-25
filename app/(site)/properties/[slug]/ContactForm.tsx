"use client";

import { useState } from "react";
import siteConfig from "@/siteConfig";
import PhoneInput from "@/components/ui/PhoneInput";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

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
    <div className="bg-brand-surface p-5 md:p-8 rounded-3xl">
      {status === "success" ? (
        <div className="text-center">
          <AnimateOnScroll type="fade-up">
            <div className="flex flex-col items-center justify-center">
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
              <p className="font-display text-2xl text-brand-text mb-2">
                Message sent!
              </p>
              <p className="text-brand-muted text-base">
                We will contact you as soon as possible.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      ) : (
        <div>
          <h3 className="font-display text-3xl text-brand-text mb-2">
            {siteConfig.leadForm.heading}
          </h3>
          <p className="text-base font-medium text-brand-muted leading-7 mb-6">
            {siteConfig.leadForm.subheading}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-brand-text text-sm font-semibold mb-4">
                Full Name{" "}
                <span className="text-stone-500 font-normal">(required)</span>
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-white border border-stone-300 rounded-2xl px-5 py-4 text-brand-text placeholder-stone-400 text-base focus:outline-none focus:border-brand-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-brand-text text-sm font-semibold mb-4">
                Email Address{" "}
                <span className="text-stone-500 font-normal">(required)</span>
              </label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full bg-white border border-stone-300 rounded-2xl px-5 py-4 text-brand-text placeholder-stone-400 text-base focus:outline-none focus:border-brand-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-brand-text text-sm font-semibold mb-4">
                Phone Number{" "}
                <span className="text-stone-500 font-normal">(required)</span>
              </label>
              <PhoneInput
                value={phone}
                onChange={setPhone}
                placeholder="100 000 0000"
                required
                inputClassName="w-full bg-white border border-stone-300 rounded-2xl ml-3 px-5 py-4 text-brand-text placeholder-stone-400 text-base focus:outline-none focus:border-brand-accent transition-colors"
                triggerClassName=" bg-white border border-stone-300 rounded-2xl px-5 py-3 text-brand-text transition-colors"
              />
            </div>

            <div>
              <label className="block text-brand-text text-sm font-semibold mb-4">
                Message
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-2xl px-5 py-4 text-brand-text placeholder-stone-400 text-base focus:outline-none focus:border-brand-accent transition-colors"
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
                <p className="text-[10px] text-brand-muted mt-0.5">
                  reCAPTCHA v3
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-8 py-3.5 bg-brand-primary text-white text-base font-medium rounded-full hover:bg-brand-primaryLight transition-colors disabled:opacity-60"
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

            <div className="mt-2 space-y-2">
              <p className="text-base font-medium text-center text-brand-muted">
                Or call us directly:{" "}
                <a
                  href={`tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  className="text-brand-text font-medium"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              {siteConfig.features.enableWhatsApp && (
                <p className="text-base font-medium text-center text-emerald-600">
                  <a
                    href={`tel:+${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    className="flex items-center justify-center gap-3"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.535 5.832L.057 23.527a.75.75 0 00.916.916l5.695-1.478A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-5.01-1.392l-.36-.213-3.723.967.984-3.622-.234-.373A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </p>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
