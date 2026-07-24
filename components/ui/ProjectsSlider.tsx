"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectsCard, { Project } from "@/components/ui/ProjectsCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ProjectsSlider({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);

  const total = projects.length;
  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  // Show 3 visible cards
  const visible = [
    projects[current % total],
    projects[(current + 1) % total],
    projects[(current + 2) % total],
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-14">
        {visible.map((projects, i) => (
          <AnimateOnScroll
            key={`${projects.slug}-${i}`}
            type="fade-up"
            delay={i * 100}
            className="min-w-full"
          >
            <ProjectsCard projects={projects} />
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

      {/* Dots */}
      {/* <div className="flex justify-center gap-2 mt-5">
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
      </div> */}
    </div>
  );
}
