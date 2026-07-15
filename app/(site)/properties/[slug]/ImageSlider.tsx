"use client";

import { useState } from "react";

interface Props {
  images: string[];
  destinationLabel: string;
  project: string;
}

export default function ImageSlider({
  images,
  destinationLabel,
  project,
}: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-72 md:h-[720px] bg-stone-200 overflow-hidden group">
      {/* ── SLIDES ─────────────────────────────────────────────── */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* ── GRADIENT OVERLAY ───────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      {/* ── BOTTOM LABEL ───────────────────────────────────────── */}
      <div className="absolute bottom-6 left-6">
        <p className="text-white/80 text-sm font-medium tracking-widest uppercase">
          {destinationLabel} · {project}
        </p>
      </div>

      {/* ── IMAGE COUNTER ──────────────────────────────────────── */}
      <div className="absolute bottom-6 right-6">
        <span className="text-white/60 text-xs font-medium">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* ── ARROWS — only show if more than 1 image ────────────── */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next image"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* ── DOTS ───────────────────────────────────────────────── */}
      {images.length > 1 && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
