"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Destination {
  slug: string;
  label: string;
  image: string;
  tagline: string;
  destinationLabel?: string;
}

export default function DestinationSlider({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [current, setCurrent] = useState(0);

  const total = destinations.length;
  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  // Show 3 visible cards
  const visible = [
    destinations[current % total],
    destinations[(current + 1) % total],
    destinations[(current + 2) % total],
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-14">
        {visible.map((destinations, i) => (
          <AnimateOnScroll
            key={`${destinations.slug}-${i}`}
            type="fade-up"
            delay={i * 100}
            className="min-w-full"
          >
            <Link href={`/destinations/${destinations.slug}`}>
              <div className="relative h-80 md:h-[500px] overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${destinations.image})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-fit p-3 bg-white rounded-full">
                  <ArrowUpRight />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                    {destinations.label}
                  </h3>
                  <p className="text-white/60 text-sm max-w-lg">
                    {destinations.tagline}
                  </p>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll type="fade-in" delay={100}>
        <div className="flex justify-center gap-4">
          <button onClick={prev} className="text-brand-text cursor-pointer">
            <ChevronLeft size={32} />
          </button>
          <button onClick={next} className="text-brand-text cursor-pointer">
            <ChevronRight size={32} />
          </button>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
