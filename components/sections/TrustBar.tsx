"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PARTNERS = [
  "https://cdn.prod.website-files.com/66f262050f96e0f9e1e4568c/680ddc15f2f6d2dda42a14e4_Logos%20(5).svg",
  "https://cdn.prod.website-files.com/66f262050f96e0f9e1e4568c/680ddc1515e15addebdbe776_Logos%20(7).svg",
  "https://cdn.prod.website-files.com/66f262050f96e0f9e1e4568c/680ddc1585c88770bf80e6ad_Logos%20(10).svg",
  "https://cdn.prod.website-files.com/66f262050f96e0f9e1e4568c/680ddc1576983715104eebf2_Logos%20(9).svg",
  "https://cdn.prod.website-files.com/66f262050f96e0f9e1e4568c/680ddc1562ee533af9214ee4_Logos%20(8).svg",
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
    <section className="relative z-10 -mt-8 rounded-t-3xl bg-brand-accent py-8 md:py-14 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 md:px-8 flex items-center gap-7 md:gap-36 flex-wrap md:flex-nowrap">
        {/* ── Label — fixed left ────────────────────────────── */}
        <p className="text-brand-text text-xl font-medium w-full md:w-auto text-center md:text-left md:whitespace-nowrap flex-shrink-0">
          Trusted by leading companies
        </p>

        {/* ── Scrolling logos ──────────────────────────────── */}
        <div className="md:flex-1 overflow-hidden relative">
          {/* fade */}
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
    </section>
  );
}
