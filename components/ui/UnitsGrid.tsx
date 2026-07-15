"use client";

import { useState } from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import type { Unit } from "@/types/unit";

interface Props {
  units: Unit[];
  initialCount?: number;
}

export default function UnitsGrid({ units, initialCount = 9 }: Props) {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? units : units.slice(0, initialCount);
  const remaining = units.length - initialCount;
  const hasMore = units.length > initialCount;

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayed.map((unit) => (
          <PropertyCard key={unit.id} unit={unit} />
        ))}
      </div>

      {/* Show more / Show less */}
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3 border border-stone-300 text-stone-600 text-xs font-semibold tracking-widest uppercase hover:border-[#1B2B3A] hover:text-[#1B2B3A] transition-all rounded-lg"
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
