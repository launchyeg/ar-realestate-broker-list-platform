import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Unit } from "@/types/unit";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import siteConfig from "@/siteConfig";
import ImageSlider from "./ImageSlider";
import ContactForm from "./ContactForm";
import {
  LucideIcon,
  BedSingle,
  Bath,
  Scaling,
  CalendarDays,
} from "lucide-react";

export const revalidate = 60;

// ── Static Params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const { data } = await supabase.from("units").select("slug");
  return (data || []).map((u) => ({ slug: u.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const { data: unit } = await supabase
    .from("units")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!unit) return {};

  return {
    title: unit.name,
    description: unit.description?.slice(0, 160),
    alternates: { canonical: `/properties/${slug}` },
    openGraph: {
      title: `${unit.name} — ${unit.currency} ${unit.price?.toLocaleString("en-US")}`,
      description: unit.description?.slice(0, 160),
      url: `/properties/${slug}`,
      images: [
        { url: unit.cover_image, width: 1200, height: 630, alt: unit.name },
      ],
    },
  };
}

// ── Helper: Status Badge ──────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Unit["status"] }) {
  const styles: Record<Unit["status"], string> = {
    available: "bg-emerald-50 text-emerald-700 border-emerald-200",
    sold: "bg-red-50 text-red-600 border-red-200",
    reserved: "bg-amber-50 text-amber-700 border-amber-200",
  };
  const labels: Record<Unit["status"], string> = {
    available: "Available",
    sold: "Sold",
    reserved: "Reserved",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border tracking-wide uppercase ${styles[status]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "available"
            ? "bg-emerald-500"
            : status === "sold"
              ? "bg-red-500"
              : "bg-amber-500"
        }`}
      />
      {labels[status]}
    </span>
  );
}

// ── Helper: Stat Pill ─────────────────────────────────────────────────────────

function StatPill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200">
      <Icon size={20} color={siteConfig.theme.accent} />
      <span className="text-sm font-medium text-stone-700">{label}</span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: raw } = await supabase
    .from("units")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!raw) notFound();

  const unit = mapUnit(raw);

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* ── Image Slider ─────────────────────────────────────── */}
      <ImageSlider
        images={[unit.coverImage, ...(unit.gallery ?? [])]}
        destinationLabel={unit.destinationLabel}
        project={unit.projectLabel || unit.destinationLabel}
      />

      {/* ── Content Grid ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-10">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {siteConfig.features.showStatusBadge && (
                <StatusBadge status={unit.status as Unit["status"]} />
              )}
              <span className="text-xs font-medium text-stone-400 tracking-widest uppercase">
                {unit.type}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl text-stone-900 leading-tight mb-4">
              {unit.name}
            </h1>

            {siteConfig.features.showPrices && (
              <p className="text-2xl font-medium text-[#1B2B3A] mb-6">
                {unit.currency} {unit.price.toLocaleString("en-US")}
              </p>
            )}

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3">
              <StatPill icon={BedSingle} label={`${unit.beds} Bedrooms`} />
              <StatPill icon={Bath} label={`${unit.baths} Bathrooms`} />
              <StatPill icon={Scaling} label={`${unit.size} m²`} />
              {unit.deliveryYear && (
                <StatPill
                  icon={CalendarDays}
                  label={`Delivery ${unit.deliveryYear}`}
                />
              )}
            </div>
          </div>

          <hr className="border-stone-200" />

          {/* Description */}
          <div>
            <h2 className="font-display text-xl text-stone-800 mb-4">
              About this property
            </h2>
            <p className="text-stone-600 leading-relaxed text-[15px]">
              {unit.description}
            </p>
          </div>

          {/* Highlights */}
          {(unit.highlights ?? []).length > 0 && (
            <div>
              <h2 className="font-display text-xl text-stone-800 mb-5">
                Property Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(unit.highlights ?? []).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#C9A96E]/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#C9A96E]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-[14px] text-stone-600 leading-snug">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <ContactForm
              unit={{
                name: unit.name,
                slug: unit.slug,
                priceLabel: `${unit.currency} ${unit.price.toLocaleString("en-US")}`,
              }}
            />

            {/* WhatsApp CTA */}
            {siteConfig.features.enableWhatsApp && (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I'm interested in ${unit.name} (${unit.slug})`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-emerald-500 text-emerald-600 text-sm font-medium hover:bg-emerald-50 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.535 5.832L.057 23.527a.75.75 0 00.916.916l5.695-1.478A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-5.01-1.392l-.36-.213-3.723.967.984-3.622-.234-.373A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
                Chat on WhatsApp
              </a>
            )}

            {/* Broker card */}
            <div className="mt-4 p-4 rounded-xl bg-[#1B2B3A] text-white text-center">
              <p className="text-xs text-white/60 tracking-widest uppercase mb-1">
                Listed by
              </p>
              <p className="font-medium text-sm">{siteConfig.brokerName}</p>
              <p className="text-xs text-white/50 mt-0.5">
                License {siteConfig.brokerLicense}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
