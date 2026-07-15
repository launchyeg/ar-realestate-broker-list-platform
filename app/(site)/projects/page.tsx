import ProjectsGrid from "@/components/ProjectsGrid";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative h-64 md:h-96 flex items-end pb-12 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#1B2B3A]/70" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-3">
            Locations
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight">
            Explore our projects
          </h1>
        </div>
      </section>

      {/* ── INTRO TEXT ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <h2 className="font-display text-3xl text-stone-900 leading-snug">
          Exclusive properties in Egypt's top locations
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          From the crystal waters of Sahl Hasheesh to the vibrant marina of El
          Gouna — each destination offers a unique lifestyle. Browse by location
          to find the property that matches where you want to live.
        </p>
      </section>

      {/* ── PROJECTS GRID ──────────────────────────────────── */}
      <ProjectsGrid />
    </div>
  );
}
