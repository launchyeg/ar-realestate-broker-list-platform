import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/siteConfig";
import HeroPageSection from "@/components/sections/HeroPageSection";
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
              <Link href={`/projects/${pro.slug}`}>
                <div className="bg-brand-surface rounded-2xl overflow-hidden">
                  <div className="relative h-56 w-full">
                    <Image
                      src={pro.image}
                      alt="contact us image office"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  <div className="px-4 py-6">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-text mb-4">
                      {pro.label}
                    </h3>

                    <div className="bg-white p-4 rounded-[10px] flex flex-wrap md:flex-nowrap justify-between items-center gap-2.5 md:gap-5">
                      <div className="md:w-4/6">
                        <h4 className="text-sm text-brand-text font-medium mb-1">
                          {pro.destinationLabel}
                        </h4>
                        <p className="text-sm text-brand-muted font-medium">
                          {pro.tagline}
                        </p>
                      </div>
                      <div className="md:w-2/6">
                        {pro.stats.slice(-1).map((stat) => (
                          <div key={stat.label}>
                            <p className="text-brand-text font-medium text-sm">
                              {stat.value}
                            </p>
                            <p className="text-brand-muted text-xs">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
