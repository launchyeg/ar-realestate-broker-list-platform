import siteConfig from "@/siteConfig";
import HeroPageSection from "@/components/sections/HeroPageSection";
import ProjectsCard from "@/components/ui/ProjectsCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroPageSection
        image="https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784164711844-feg8u9wo5d9.png"
        title="Explore Projects"
      />

      <section className="relative z-10 -mt-6 rounded-t-3xl bg-white">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {siteConfig.projects.map((pro, i) => (
            <AnimateOnScroll key={pro.slug} type="fade-up" delay={i * 100}>
              <ProjectsCard projects={pro} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
