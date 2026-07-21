"use client";

import { useState, useEffect } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const BG_SLIDES = [
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-02-at-12.23.59-PM.jpeg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-30-at-6.15.27-PM-5.jpeg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-30-at-6.15.28-PM.jpeg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-30-at-6.16.18-PM-1.jpeg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-30-at-6.16.18-PM-2.jpeg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-30-at-6.16.19-PM-1.jpeg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-30-at-6.16.19-PM-2.jpeg",
];

export default function CeoSection() {
  const [current, setCurrent] = useState(0);

  // ── Auto advance background ───────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % BG_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pb-[40px] md:pb-[70px] lg:pb-[120px]">
      <AnimateOnScroll type="fade-up">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-4">
            Interested in selling or buying?
          </h2>
          <p className="text-brand-muted text-base leading-relaxed">
            Buy or sell your home with us. House prices, expert inspections,
            skilled negotiations, and other essential professional services are
            included in the transparent house price.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll type="scale-in" delay={100}>
        <div className="relative rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto shadow-2xl">
          {/* ── SLIDING BACKGROUND ───────────────────────── */}
          {BG_SLIDES.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{
                backgroundImage: `url(${src})`,
                opacity: i === current ? 1 : 0,
              }}
            />
          ))}

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-display text-xl md:text-2xl font-medium mb-1">
              "Owning a home is a keystone of wealth..."
            </p>
            <p className="text-white/70 text-sm">
              Ahmed Rashad · CEO & Founder
            </p>
          </div>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {BG_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
