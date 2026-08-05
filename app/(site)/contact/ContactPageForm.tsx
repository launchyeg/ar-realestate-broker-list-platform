"use client";

import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import PhoneInput from "@/components/ui/PhoneInput";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPageForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const { executeRecaptcha } = useGoogleReCaptcha();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      if (!executeRecaptcha) {
        throw new Error("ReCaptcha not ready");
      }

      const token = await executeRecaptcha("contact_page_form");

      const payload = {
        name,
        phone,
        email,
        message,
        recaptchaToken: token,
      };

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
      <div className="bg-brand-surface p-5 md:p-8 rounded-3xl">
        <AnimateOnScroll type="fade-up">
          <div className="flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
              <Check size={30} className="text-emerald-500" />
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
          <label className="block text-brand-text text-sm font-semibold mb-4">
            Full Name{" "}
            <span className="text-stone-500 font-normal">(required)</span>
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full bg-white border border-stone-300 rounded-2xl p-5 text-brand-text placeholder-stone-400 text-base focus:outline-none focus:border-brand-accent transition-colors"
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
            placeholder="Enter your email"
            className="w-full bg-white border border-stone-300 rounded-2xl p-5 text-brand-text placeholder-stone-400 text-base focus:outline-none focus:border-brand-accent transition-colors"
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
            inputClassName="w-full bg-white border border-stone-300 rounded-2xl ml-3 p-5 text-brand-text placeholder-stone-400 text-base focus:outline-none focus:border-brand-accent transition-colors"
            triggerClassName="bg-white text-brand-text border border-stone-300 rounded-2xl p-4 hover:border-brand-accent transition-colors"
          />
        </div>

        <div>
          <label className="block text-brand-text text-sm font-semibold mb-4">
            Detailed inquiry
          </label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your opinion"
            className="w-full bg-white border border-stone-300 rounded-2xl p-5 text-brand-text placeholder-stone-400 text-base focus:outline-none focus:border-brand-accent transition-colors resize-none"
          />
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <ShieldCheck size={18} className="text-emerald-600" />
            <span>Protected by Google reCAPTCHA</span>
          </div>
          <p className="text-[10px] text-brand-muted">v3 Active</p>
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
            className="px-8 py-3.5 bg-brand-primary text-white text-base font-medium rounded-full hover:bg-brand-primaryLight transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {status === "sending" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
