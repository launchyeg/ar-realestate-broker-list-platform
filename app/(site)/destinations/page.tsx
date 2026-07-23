import siteConfig from "@/siteConfig";
import HeroPageSection from "@/components/sections/HeroPageSection";
import DestinationCard from "@/components/ui/DestinationCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function DestinationsPage() {
  return (
    <main>
      <HeroPageSection
        image="https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784212598344-41qpj7az1zg.jpg"
        title="Explore Destinations"
      />

      <section className="relative z-10 -mt-6 rounded-t-3xl bg-white">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {siteConfig.destinations.map((dest, i) => (
            <AnimateOnScroll key={dest.slug} type="fade-up" delay={i * 100}>
              <DestinationCard destinations={dest} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </main>
  );
}
