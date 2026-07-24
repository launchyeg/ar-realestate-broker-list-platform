"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What locations do you cover along the Red Sea?",
    answer:
      "We operate across premier destinations including El Gouna, Hurghada, Sahl Hasheesh, Makadi, and Somabay, ensuring you find the ideal coastal spot that matches your lifestyle and investment goals.",
  },
  {
    question: "What is included when I buy or sell with you?",
    answer:
      "House prices, inspections, negotiations, and other services are included in the house price, giving you a completely transparent, hassle-free transaction from start to finish.",
  },
  {
    question: "How much experience does your team have?",
    answer:
      "Our leadership brings over 9 years of experience in real estate in Hurghada and the Red Sea, offering deep local market insights you can completely trust.",
  },
  {
    question: "What types of properties do you offer?",
    answer:
      "Our portfolio features diverse coastal properties tailored to your preferences, ranging from luxury beachfront villas to modern resort apartments designed for comfort and high investment returns.",
  },
  {
    question: "How can I get in touch with your team?",
    answer:
      "You can call us anytime at +201060630544 or send us a message through our website, and our dedicated professionals will respond promptly to assist you.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
      <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-[60px] md:pt-[70px] md:pt-[80px] lg:py-[130px] flex flex-col gap-10 md:gap-16">
        <AnimateOnScroll type="fade-up">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
              Frequently asked questions
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto space-y-6 md:space-y-1">
          {FAQS.map((faq, i) => (
            <AnimateOnScroll key={i} type="fade-up" delay={i * 80}>
              <div className="">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left bg-brand-surface rounded-2xl overflow-hidden"
                >
                  <span
                    className={`text-lg font-medium leading-8 transition-colors ${
                      open === i ? "text-brand-accent" : "text-brand-text"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ml-4 text-brand-muted ${
                      open === i ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown />
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pt-4 pb-6 text-brand-muted text-base font-medium leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
