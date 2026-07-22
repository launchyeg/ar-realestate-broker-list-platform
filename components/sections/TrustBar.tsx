"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const PARTNERS = [
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Cala.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Coves.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Il%20Bayou.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Majra.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Makadi%20Heights.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Makadina.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Mesca.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Miramar%20Residences.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Nautilus.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Ras%20Soma.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Reeftown.svg",
  "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Shedwan.svg",
];

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  // ── Auto scroll ───────────────────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animFrame: number;
    let position = 0;
    const speed = 0.5;

    function animate() {
      position += speed;
      // Reset when first half scrolled — seamless loop
      if (position >= track!.scrollWidth / 2) {
        position = 0;
      }
      track!.style.transform = `translateX(-${position}px)`;
      animFrame = requestAnimationFrame(animate);
    }

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // ── Duplicate logos for seamless loop ────────────────────
  const logos = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative z-10 -mt-6 rounded-t-3xl bg-brand-accent py-[30px] md:pt-14 md:pb-[60px] overflow-hidden">
      <AnimateOnScroll type="fade-in">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 flex items-center gap-7 md:gap-36 flex-wrap md:flex-nowrap">
          <p className="font-display text-brand-text text-2xl font-medium w-full md:w-auto text-center md:text-left md:whitespace-nowrap flex-shrink-0">
            Trusted by leading companies
          </p>

          <div className="md:flex-1 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-accent to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-accent to-transparent z-10" />

            <div
              ref={trackRef}
              className="flex items-center gap-10 will-change-transform"
              style={{ width: "max-content" }}
            >
              {logos.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 h-12 w-32 relative transition-opacity"
                >
                  <Image
                    src={src}
                    alt={`Partner ${(i % PARTNERS.length) + 1}`}
                    fill
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
