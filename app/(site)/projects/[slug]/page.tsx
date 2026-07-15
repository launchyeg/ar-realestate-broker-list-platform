import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import siteConfig from "@/siteConfig";
import UnitsGrid from "@/components/ui/UnitsGrid";

export const revalidate = 1800;

interface PaymentPlan {
  downPayment: string;
  installments: string;
  delivery: string;
  finishing: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Project {
  slug: string;
  label: string;
  image: string;
  heroImage: string;
  destination: string;
  destinationLabel: string;
  developer: string;
  tagline: string;
  description: string;
  stats: Stat[];
  highlights: string[];
  whyInvest: string;
  paymentPlan: PaymentPlan;
  gallery: string[];
}

export async function generateStaticParams() {
  return siteConfig.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug) as
    | Project
    | undefined;
  if (!project) return {};
  return {
    title: `${project.label} — ${siteConfig.brokerName}`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = siteConfig.projects.find((p: any) => p.slug === slug) as
    | Project
    | undefined;
  if (!project) notFound();

  // ── Fetch units from Supabase ─────────────────────────────
  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .eq("project", slug)
    .order("created_at", { ascending: false });

  const projectUnits = (rawUnits || []).map(mapUnit);

  return (
    <main className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end pb-20 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="mb-4">
            <Link
              href={`/destinations/${project.destination}`}
              className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase hover:underline"
            >
              {project.destinationLabel}
            </Link>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-4">
            {project.label}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-10">
            {project.tagline}
          </p>
          {/* Stats row */}
          <div className="flex flex-wrap gap-6">
            {project.stats.map((stat) => (
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
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-6">
            About the project
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 leading-snug mb-6">
            About {project.label}
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors"
          >
            Request brochure
          </Link>
        </div>
        {/* Gallery grid */}
        <div
          className="h-80 bg-cover bg-center rounded-sm"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
      </section>

      {/* ── SECTION 3: HIGHLIGHTS ──────────────────────────────── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3">
            Project features
          </p>
          <h2 className="font-display text-3xl text-stone-900 mb-12">
            What {project.label} offers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.highlights.map((highlight, i) => (
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

      {/* ── SECTION 4: PAYMENT PLAN + WHY INVEST ──────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        {/* Why invest */}
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-6">
            Investment case
          </p>
          <h2 className="font-display text-3xl text-stone-900 mb-6">
            Why invest in {project.label}?
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-8">
            {project.whyInvest}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors"
          >
            Talk to an advisor
          </Link>
        </div>

        {/* Payment plan */}
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-6">
            Payment plan
          </p>
          <h2 className="font-display text-3xl text-stone-900 mb-8">
            Flexible financing
          </h2>
          <div className="space-y-4">
            {Object.entries(project.paymentPlan).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between py-4 border-b border-stone-100"
              >
                <span className="text-stone-400 text-xs font-medium tracking-widest uppercase">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="font-display text-xl text-stone-900">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: AVAILABLE UNITS ─────────────────────────── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3">
                Units
              </p>
              <h2 className="font-display text-3xl text-stone-900">
                Available in {project.label}
              </h2>
            </div>
            <span className="text-stone-400 text-sm">
              {projectUnits.length} propert
              {projectUnits.length === 1 ? "y" : "ies"}
            </span>
          </div>

          {projectUnits.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-stone-300 rounded-sm">
              <p className="text-stone-400 text-lg font-display mb-2">
                No units listed yet
              </p>
              <p className="text-stone-400 text-sm mb-6">
                Contact us to get the full availability list.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3"
              >
                Request availability
              </Link>
            </div>
          ) : (
            <UnitsGrid units={projectUnits} />
          )}
        </div>
      </section>
    </main>
  );
}
