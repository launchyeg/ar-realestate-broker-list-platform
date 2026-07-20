import Link from "next/link";
import { Metadata } from "next";
import siteConfig from "@/siteConfig";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import DestinationsGrid from "@/components/DestinationsGrid";
import PropertySlider from "@/components/ui/PropertySlider";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import PropertyCard from "@/components/ui/PropertyCard";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Real Estate in Egypt — Buy, Rent & Invest",
  description:
    "Browse luxury villas, apartments and penthouses across Hurghada, Sahl Hasheesh, El Gouna and the Red Sea coast.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Real Estate in Egypt — Buy, Rent & Invest",
    description:
      "Browse luxury villas, apartments and penthouses across Egypt's Red Sea coast.",
    url: "/",
  },
};

export default async function HomePage() {
  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .order("created_at", { ascending: false });

  const allUnits = (rawUnits || []).map(mapUnit);

  const villas = allUnits.filter(
    (u) => u.type === "Villa" || u.type === "Penthouse",
  );
  const apartments = allUnits.filter(
    (u) => u.type === "Apartment" || u.type === "Studio",
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── TRUST Bar ───────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── PROPERTIES GRID ────────────────────────────────────── */}
      <section className="max-w-[1380px] mx-auto px-6 md:px-8 py-14 md:py-20 lg:py-32 flex flex-col gap-10 md:gap-16">
        <AnimateOnScroll type="fade-up">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl text-brand-text">
              Exclusive properties by {siteConfig.brokerName}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allUnits.slice(0, 6).map((unit, i) => (
            <AnimateOnScroll key={unit.id} type="fade-up" delay={i * 100}>
              <PropertyCard unit={unit} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll type="fade-up" delay={200}>
          <div className="text-center mt-[18px]">
            <Link
              href="/properties"
              className="bg-brand-primary text-white text-base font-medium px-8 py-[18px] rounded-xl hover:bg-brand-primaryLight transition-colors"
            >
              Explore All Listings
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── WELCOME SECTION ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-6">
            Welcome to {siteConfig.brokerName}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 leading-snug mb-8">
            Welcome to the Red Sea — where vibrant living meets endless
            horizons.
          </h2>
          <Link
            href="/about"
            className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors"
          >
            About us
          </Link>
        </div>
        <div className="space-y-5 pt-12">
          <p className="text-stone-500 text-sm leading-relaxed">
            Our carefully curated selection of exclusive properties includes
            villas, houses and apartments — from quiet villas with sea views to
            modern residences in exclusive resorts and stylish apartments in the
            best locations around Hurghada.
          </p>
          <p className="text-stone-500 text-sm leading-relaxed">
            With us, finding your new home means more than just luxury — it
            means finding a place where you can enjoy quality of life, comfort
            and investment security. As an officially registered real estate
            company in Egypt with an experienced team that has been successfully
            operating in the market for many years, we accompany you
            professionally, transparently and reliably at every step.
          </p>
        </div>
      </section>

      {/* ── HOUSES SECTION ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-stone-200 pt-6 mb-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
            Houses for rent / purchase
          </p>
        </div>
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 max-w-lg leading-snug">
            Your dream home in Egypt — whether to buy or rent, we find the right
            one for you.
          </h2>
          <Link
            href="/destinations"
            className="hidden md:inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors whitespace-nowrap"
          >
            View Destinations
          </Link>
        </div>
        <PropertySlider units={villas} limit={8} />
        <div className="mt-8 md:hidden">
          <Link
            href="/destinations"
            className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3"
          >
            View Destinations
          </Link>
        </div>
      </section>

      {/* ── WHY EGYPT SECTION ──────────────────────────────────── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-300 pb-3 mb-6">
              Living in Egypt
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 leading-snug mb-8">
              Why a property in Egypt?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors"
            >
              Get in touch
            </Link>
          </div>
          <div className="space-y-4 pt-12">
            {[
              "A Mediterranean climate with year-round sunshine",
              "Outstanding price-performance ratio compared to many European countries",
              "Attractive investment opportunities in a growing region",
              "A relaxed lifestyle between sea, culture and hospitality",
              "High quality of life with low cost of living",
              "Whether as a holiday home, retirement home or profitable capital investment — a property in Hurghada opens up new possibilities for you.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 w-1 h-1 rounded-full bg-[#C9A96E] flex-shrink-0 mt-2" />
                <p className="text-stone-500 text-sm leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APARTMENTS SECTION ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="border-t border-stone-200 pt-6 mb-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
            Apartments for rent / purchase
          </p>
        </div>
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 max-w-lg leading-snug">
            Your exclusive apartment in Egypt — perhaps soon your new home.
          </h2>
          <Link
            href="/projects"
            className="hidden md:inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors whitespace-nowrap"
          >
            View Projects
          </Link>
        </div>
        <PropertySlider units={apartments} limit={10} />
      </section>

      {/* ── FEATURED PROPERTY BANNER ───────────────────────────── */}
      <section className="relative h-[800px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative px-8 pb-8">
          <p className="font-display text-3xl md:text-5xl text-white font-light">
            5,000,000 – 18,000,000 EGP
          </p>
          <p className="text-white/60 text-xs tracking-widest uppercase mt-1">
            Blanca Project
          </p>
        </div>
      </section>

      {/* ── DESTINATIONS GRID ──────────────────────────────────── */}
      <DestinationsGrid />

      {/* ── SELL SECTION ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-6">
            Sell your property
          </p>
          <h2 className="font-display text-3xl text-stone-900 leading-snug mb-6">
            Your property in the best hands
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-4">
            We support you in selling your property in Hurghada, El Gouna, Sahl
            Hasheesh, Makadi and Soma Bay — on request also in other regions of
            Egypt. From valuation to optimal presentation to legally secure
            contract conclusion, we accompany you with local expertise and a
            reliable network of qualified buyers and investors.
          </p>
          <p className="text-stone-500 text-sm leading-relaxed mb-8">
            With professional exposés (DE/EN/AR), targeted online marketing and
            personal advice, we ensure optimal visibility and qualified
            viewings. Our goal: a smooth sale at fair conditions — accompanied
            transparently through to handover.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors"
          >
            Request free consultation
          </Link>
        </div>
        <div className="relative h-64 md:h-auto overflow-hidden rounded-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80)",
            }}
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-display text-5xl text-stone-900 mb-1">24/7</p>
            <p className="text-stone-400 text-sm">Available for our clients</p>
          </div>
          <div className="relative h-40 overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=400&q=80)",
              }}
            />
          </div>
          <div>
            <p className="font-display text-5xl text-stone-900 mb-1">100%</p>
            <p className="text-stone-400 text-sm">Legally secure processing</p>
          </div>
        </div>
      </section>
    </div>
  );
}
