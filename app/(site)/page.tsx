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
import CeoSection from "@/components/sections/CeoSection";
import ContactPageForm from "./contact/ContactPageForm";

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
      <HeroSection />

      <TrustBar />

      <section className="max-w-[1380px] mx-auto px-6 md:px-8 py-[50px] md:py-[70px] lg:py-[120px] flex flex-col gap-10 md:gap-16">
        <AnimateOnScroll type="fade-up">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
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

      <CeoSection />

      <section className="relative z-10 -mt-8">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-t-3xl"
          style={{
            backgroundImage:
              "url(https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/pensee-royal-azur-tourist-resort-pools-1-min-2048x1367.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/50 rounded-t-3xl" />
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 pt-[50px] md:pt-[70px] pb-20 md:pb-[170px]">
          <div className="relative max-w-xl bg-white p-5 md:px-10 md:py-12 rounded-2xl">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-4">
              Unlocking your Red Sea coastal lifestyle!
            </h2>
            <p className="text-brand-muted text-lg leading-7 mt-5 mb-10">
              Looking for expert guidance or ready to invest? Whether you are
              buying, selling, or exploring properties.
            </p>
            <Link
              href="/about"
              className="bg-transparent text-brand-accent border border-[#1629321a] text-base font-medium leading-8 px-6 py-3 rounded-full hover:border-[#16293237] transition-colors"
            >
              Explore More
            </Link>
            <h3 className="font-display text-2xl text-brand-text mt-12 md:mt-24 mb-3">
              Guiding your investments across Redsea.
            </h3>
            <p className="text-brand-muted text-base leading-7">
              Need expert assistance or ready for your next chapter? Whether you
              are buying, selling, or reviewing market options.
            </p>
          </div>
        </div>
      </section>

      {/* Destination */}
      {/* Testimonial */}

      <section className=" bg-brand-accent z-10 -mt-8 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 pt-10 pb-[90px] md:pt-[70px] lg:py-[120px] flex flex-row justify-between flex-wrap gap-10 md:gap-16">
          <div className="lg:basis-[480px]">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-white mb-4">
              Let’s find your next perfect property
            </h2>
            <p className="text-[#fffc] text-lg font-medium leading-7 mt-5 mb-8 md:mb-12 lg:mb-28">
              Have questions or ready to take the next step? Whether you’re
              buying, selling, or just exploring options.
            </p>

            <div className="flex flex-wrap gap-5 sm:gap-16">
              <div>
                <h2 className="text-[#fffc] text-base font-medium leading-7 mb-1">
                  Email Address
                </h2>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  target="_blank"
                  className="text-white text-base font-medium leading-7"
                >
                  {siteConfig.contact.email}
                </Link>
              </div>
              <div>
                <h2 className="text-[#fffc] text-base font-medium leading-7 mb-1">
                  Phone Call
                </h2>
                <Link
                  href={`tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  className="text-white text-base font-medium leading-7"
                >
                  {siteConfig.contact.phone}
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-full lg:basis-xl">
            <ContactPageForm />
          </div>
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
