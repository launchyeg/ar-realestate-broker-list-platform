"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomSelect from "@/components/dashboard/CustomSelect";
import siteConfig from "@/siteConfig";

const SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
    label: "Sahl Hasheesh",
    heading: "Your new home\nin Egypt awaits",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80",
    label: "El Gouna",
    heading: "Life on the\nRed Sea coast",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
    label: "Hurghada",
    heading: "Invest where\nothers vacation",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [destination, setDestination] = useState("");
  const [project, setProject] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((i) => (i + 1) % SLIDES.length);
        setAnimating(false);
      }, 600);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  function goTo(i: number) {
    if (i === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
    }, 400);
  }

  function handleSearch() {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (project) params.set("project", project);
    if (price) params.set("price", price);
    router.push(`/properties?${params.toString()}`);
  }

  const slide = SLIDES[current];

  return (
    <section className="relative h-dvh min-h-[600px] flex items-center pb-16 pt-16 overflow-hidden">
      {/* ── BACKGROUND SLIDES ──────────────────────────────────── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : "scale(1.05)",
          }}
        />
      ))}

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Label */}
        <div
          className="transition-all duration-500"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "translateY(0)",
          }}
        >
          <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-4">
            {slide.label}
          </p>
        </div>

        {/* Heading */}
        <div
          className="transition-all duration-500 delay-75"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(16px)" : "translateY(0)",
          }}
        >
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 whitespace-pre-line">
            {slide.heading}
          </h1>
        </div>

        {/* Subtext */}
        <div
          className="transition-all duration-500 delay-100"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(16px)" : "translateY(0)",
          }}
        >
          <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-10">
            Discover stylish homes for purchase or rent in Egypt's best
            locations.
          </p>
        </div>

        {/* ── SEARCH BAR ─────────────────────────────────────────── */}
        <div
          className="transition-all duration-500 delay-150"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(16px)" : "translateY(0)",
          }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-wrap md:flex-nowrap gap-3 max-w-2xl">
            <div className="flex-1 min-w-[140px]">
              <p className="text-white/50 text-[9px] font-medium uppercase tracking-widest mb-1.5 px-1">
                Destination
              </p>
              <CustomSelect
                value={destination}
                placeholder="Any Destination"
                onChange={setDestination}
                options={[
                  ...(siteConfig.destinations as any[]).map((d) => ({
                    value: d.slug,
                    label: d.label,
                  })),
                ]}
              />
            </div>
            <div className="flex-1 min-w-[140px]">
              <p className="text-white/50 text-[9px] font-medium uppercase tracking-widest mb-1.5 px-1">
                Project
              </p>
              <CustomSelect
                value={project}
                placeholder="Any Project"
                onChange={setProject}
                options={[
                  ...(siteConfig.projects as any[]).map((p) => ({
                    value: p.slug,
                    label: p.label,
                  })),
                ]}
              />
            </div>
            <div className="flex-1 min-w-[140px]">
              <p className="text-white/50 text-[9px] font-medium uppercase tracking-widest mb-1.5 px-1">
                Price
              </p>
              <CustomSelect
                value={price}
                placeholder="Any Price"
                onChange={setPrice}
                options={[
                  { value: "0-2000000", label: "Under EGP 2M" },
                  { value: "2000000-5000000", label: "EGP 2M – 5M" },
                  { value: "5000000-10000000", label: "EGP 5M – 10M" },
                  { value: "10000000-999999999", label: "Above EGP 10M" },
                ]}
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full md:w-auto px-6 py-2.5 bg-[#C9A96E] text-white text-xs font-medium tracking-widest uppercase rounded-xl hover:bg-[#E8C98A] transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* ── SLIDE DOTS ─────────────────────────────────────────── */}
        <div className="flex items-center gap-2 mt-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-[#C9A96E]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
          <span className="ml-3 text-white/30 text-xs font-mono">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
