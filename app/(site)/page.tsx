import Link from "next/link";
import siteConfig from "@/siteConfig";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import PropertyCard from "@/components/ui/PropertyCard";
import CeoSection from "@/components/sections/CeoSection";
import ContactPageForm from "./contact/ContactPageForm";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import PropertySlider from "@/components/ui/PropertySlider";
import DestinationsGrid from "@/components/DestinationsGrid";

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

      <section className="relative z-10 -mt-6">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-t-3xl"
          style={{
            backgroundImage:
              "url(https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/pensee-royal-azur-tourist-resort-pools-1-min-2048x1367.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/50 rounded-t-3xl" />
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 pt-[50px] md:pt-[70px] pb-20 md:pb-[170px]">
          <AnimateOnScroll type="fade-up" delay={100}>
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
                Need expert assistance or ready for your next chapter? Whether
                you are buying, selling, or reviewing market options.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Destination */}
      <section className="max-w-[1380px] z-10 -mt-6 mx-auto px-6 md:px-8 py-[60px] md:py-[70px] lg:py-[120px] rounded-t-3xl">
        <div className="mb-10 md:mb-[60px] lg:mb-[74px]">
          <AnimateOnScroll type="fade-up">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-4">
              Customers love our findings
            </h2>
          </AnimateOnScroll>
        </div>

        <TestimonialsSection />
        {/* <PropertySlider units={villas} limit={8} /> */}
      </section>

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

      <DestinationsGrid />
    </div>
  );
}
