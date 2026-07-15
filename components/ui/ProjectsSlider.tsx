"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
  slug: string;
  label: string;
  image: string;
  tagline: string;
  destinationLabel?: string;
}

export default function ProjectsSlider({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1));

  if (projects.length === 0) return null;

  return (
    <div className="relative">
      {/* ── SLIDER TRACK ───────────────────────────────────────── */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.slug} className="min-w-full">
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative h-72 md:h-96 overflow-hidden rounded-xl">
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-2">
                      Project
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                      {project.label}
                    </h3>
                    <p className="text-white/60 text-sm max-w-lg">
                      {project.tagline}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-white/80 text-xs font-semibold tracking-widest uppercase group-hover:text-[#C9A96E] transition-colors">
                      View project
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTROLS — only show if more than 1 project ────────── */}
      {projects.length > 1 && (
        <>
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-stone-200 flex items-center justify-center hover:bg-[#1B2B3A] hover:text-white hover:border-[#1B2B3A] transition-all shadow-md z-10"
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
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-stone-200 flex items-center justify-center hover:bg-[#1B2B3A] hover:text-white hover:border-[#1B2B3A] transition-all shadow-md z-10"
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

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-[#1B2B3A]"
                    : "w-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
