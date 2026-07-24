"use client";

import { useState } from "react";
import type { Unit } from "@/types/unit";
import PropertyCard from "@/components/ui/PropertyCard";
import AnimateOnScroll from "./AnimateOnScroll";

interface Props {
  units: Unit[];
  initialCount?: number;
}

export default function UnitsGrid({ units, initialCount = 6 }: Props) {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? units : units.slice(0, initialCount);
  const remaining = units.length - initialCount;
  const hasMore = units.length > initialCount;

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {displayed.map((unit, i) => (
          <AnimateOnScroll key={i} type="fade-up" delay={i * 100}>
            <PropertyCard key={unit.id} unit={unit} />
          </AnimateOnScroll>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-[18px] bg-brand-primary hover:bg-brand-primaryLight text-white text-base font-medium transition-all rounded-xl"
          >
            {showAll ? (
              <>
                Show less
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                Show {remaining} more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
