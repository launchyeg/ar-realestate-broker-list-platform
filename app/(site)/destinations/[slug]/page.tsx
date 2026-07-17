import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/siteConfig";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import UnitsGrid from "@/components/ui/UnitsGrid";
import ProjectsSlider from "@/components/ui/ProjectsSlider";

interface Stat {
  label: string;
  value: string;
}

interface Destination {
  slug: string;
  label: string;
  image: string;
  heroImage: string;
  tagline: string;
  description: string;
  stats: Stat[];
  highlights: string[];
  whyInvest: string;
}

export const revalidate = 60;

export async function generateStaticParams() {
  return siteConfig.destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = siteConfig.destinations.find((d) => d.slug === slug);
  if (!destination) return {};
  return {
    title: `Properties in ${destination.label}`,
    description: destination.description.slice(0, 160),
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title: `Properties in ${destination.label} — ${siteConfig.brokerName}`,
      description: destination.description.slice(0, 160),
      url: `/destinations/${slug}`,
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: destination.label,
        },
      ],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = siteConfig.destinations.find((d) => d.slug === slug) as
    | Destination
    | undefined;
  if (!destination) notFound();

  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .eq("destination", slug)
    .order("created_at", { ascending: false });

  const availableUnits = (rawUnits || []).map(mapUnit);

  const destinationProjects = (siteConfig.projects as any[]).filter(
    (p) => p.destination === slug,
  );

  return (
    <main className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end pb-20 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-4">
            Destination
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-4">
            {destination.label}
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            {destination.tagline}
          </p>
          {/* Quick stats row */}
          <div className="flex flex-wrap gap-6 mt-10">
            {destination.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-[#C9A96E] pl-4"
              >
                <p className="text-white font-medium text-base">{stat.value}</p>
                <p className="text-white/50 text-xs tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center pb-20">
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-6">
              About {destination.label}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 leading-snug mb-6">
              Life in {destination.label}
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">
              {destination.description}
            </p>
          </div>
          {/* Image */}
          <div className="relative h-80 overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${destination.image})` }}
            />
          </div>
        </div>
        {destinationProjects.length > 0 && (
          <div>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3">
                  Projects
                </p>
                <h2 className="font-display text-3xl text-stone-900">
                  Projects in {destination.label}
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs text-[#C9A96E] font-semibold uppercase tracking-widest hover:underline"
              >
                View all projects
              </Link>
            </div>
            <ProjectsSlider projects={destinationProjects} />
          </div>
        )}
      </section>

      {/* ── SECTION 3: HIGHLIGHTS ──────────────────────────────── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3">
            Why {destination.label}
          </p>
          <h2 className="font-display text-3xl text-stone-900 mb-12">
            What makes it special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.highlights.map((highlight, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 p-6 rounded-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#C9A96E]/15 flex items-center justify-center mb-4">
                  <svg
                    className="w-4 h-4 text-[#C9A96E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHY INVEST ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-6">
            Investment case
          </p>
          <h2 className="font-display text-3xl text-stone-900 mb-6">
            Why invest in {destination.label}?
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-8">
            {destination.whyInvest}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors"
          >
            Talk to an advisor
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {destination.stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-[#C9A96E] pl-5">
              <p className="font-display text-3xl text-stone-900">
                {stat.value}
              </p>
              <p className="text-stone-400 text-xs tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: AVAILABLE UNITS ─────────────────────────── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3">
                Properties
              </p>
              <h2 className="font-display text-3xl text-stone-900">
                Available in {destination.label}
              </h2>
            </div>
            <span className="text-stone-400 text-sm">
              {availableUnits.length} propert
              {availableUnits.length === 1 ? "y" : "ies"}
            </span>
          </div>

          {availableUnits.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-stone-300 rounded-sm">
              <p className="text-stone-400 text-lg font-display mb-2">
                No properties listed yet
              </p>
              <p className="text-stone-400 text-sm mb-6">
                We're adding new units soon. Contact us to be notified.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3"
              >
                Get notified
              </Link>
            </div>
          ) : (
            <UnitsGrid units={availableUnits} />
          )}
        </div>
      </section>
    </main>
  );
}
