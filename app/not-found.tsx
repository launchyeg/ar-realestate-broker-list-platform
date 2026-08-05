import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import HeroPageSection from "@/components/sections/HeroPageSection";
import Footer from "@/components/layout/Footer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <HeroPageSection
        image="https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784164711844-feg8u9wo5d9.png"
        title="404 Error!"
      />

      <div className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px]">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-10 lg:gap-12">
            <AnimateOnScroll type="fade-up" className="w-full md:w-[40%]">
              <Image
                src="https://cdn.prod.website-files.com/66f262050f96e0f9e1e4568c/670fa6725c3e21c179a05f2b_request-timeout-p-800.png"
                alt="contact us image office"
                width={420}
                height={420}
                className="object-cover"
              />
            </AnimateOnScroll>

            <AnimateOnScroll
              type="fade-up"
              className="w-full md:w-[53%] lg:w-[51%]"
            >
              <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-brand-muted text-lg font-medium leading-7 mt-3 mb-[30px] md:mb-12 max-w-lg">
                It looks like the page you’re looking for doesn’t exist. Don’t
                worry, we’ll help you get back on track!
              </p>
              <Link
                href="/"
                className="px-8 py-3.5 bg-brand-primary text-white text-base font-medium rounded-full hover:bg-brand-primaryLight transition-colors disabled:opacity-60"
              >
                Go back to Homepage
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
