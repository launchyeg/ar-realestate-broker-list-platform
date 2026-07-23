import siteConfig from "@/siteConfig";
import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import HeroPageSection from "@/components/sections/HeroPageSection";
import ContactPageForm from "./ContactPageForm";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact Us | AR Real Estate Redsea",
  description:
    "Get in touch with our local experts at AR Real Estate Redsea. We respond within 2 business hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | AR Real Estate Redsea",
    description:
      "Get in touch with our team for inquiries about Red Sea properties. We respond within 2 business hours.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <HeroPageSection
        image="https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784212336762-wyb9jurmdgm.jpg"
        title="Contact"
      />

      <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px]">
          <div className="flex flex-wrap lg:flex-nowrap gap-12">
            <AnimateOnScroll type="fade-up" className="w-full lg:w-[45%]">
              <div className="bg-brand-surface rounded-3xl overflow-hidden">
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src="https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/sunset-8627419_1280.jpg"
                    alt="contact us image office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                <div className="p-6 sm:py-8 space-y-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-text">
                    Egypt, Hurghada, Red Sea
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-brand-text" />
                      </div>
                      <a
                        href={`tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        className="text-brand-text font-medium transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="#0a0915"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.535 5.832L.057 23.527a.75.75 0 00.916.916l5.695-1.478A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-5.01-1.392l-.36-.213-3.723.967.984-3.622-.234-.373A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                        </svg>
                      </div>
                      <a
                        href={`https://wa.me/+${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        className="text-brand-text font-medium transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-brand-text" />
                      </div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        target="_blank"
                        className="text-brand-text font-medium transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-brand-text" />
                      </div>
                      <a
                        href={`mailto:${siteConfig.contact.googleMapsUrl}`}
                        target="_blank"
                        className="text-brand-text font-medium transition-colors"
                      >
                        {siteConfig.contact.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll type="fade-up" className="lg:w-[55%]">
              <ContactPageForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
