"use client";

import { useState, useEffect } from "react";
import type { Unit } from "@/types/unit";
import PropertyCard from "@/components/ui/PropertyCard";

interface Props {
  units: Unit[];
  limit?: number;
}

export default function PropertySlider({ units, limit = 6 }: Props) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ── Apply limit ───────────────────────────────────────────
  const displayedUnits = units.slice(0, limit);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const slideWidth = isMobile ? 100 : 50;

  const prev = () =>
    setCurrent((i) => (i === 0 ? displayedUnits.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === displayedUnits.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * slideWidth}%)` }}
        >
          {displayedUnits.map((unit) => (
            <div key={unit.id} className="min-w-full md:min-w-[50%] px-3">
              <PropertyCard unit={unit} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute -left-5 top-1/3 -translate-y-1/2 w-10 h-10 bg-white border border-stone-200 flex items-center justify-center hover:bg-[#1B2B3A] hover:text-white hover:border-[#1B2B3A] transition-all shadow-sm"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute -right-5 top-1/3 -translate-y-1/2 w-10 h-10 bg-white border border-stone-200 flex items-center justify-center hover:bg-[#1B2B3A] hover:text-white hover:border-[#1B2B3A] transition-all shadow-sm"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {displayedUnits.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-[#1B2B3A] w-6" : "bg-stone-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
