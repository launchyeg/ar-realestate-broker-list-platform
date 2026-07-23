import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroPageSection from "@/components/sections/HeroPageSection";
import GeneralFormSection from "@/components/sections/GeneralFormSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const TRUSTED = [
  {
    id: 1,
    image: "/about1.svg",
    title: "Personalized Search",
    subtitle:
      "Discover curated coastal properties tailored specifically to your lifestyle and investment.",
  },
  {
    id: 2,
    image: "/about2.svg",
    title: "Track Record",
    subtitle:
      "Rely on our proven history of successful transactions and satisfied clients across Red Sea.",
  },
  {
    id: 3,
    image: "/about3.svg",
    title: "Experienced Team",
    subtitle:
      "Benefit from deep local expertise and dedicated professionals guiding.",
  },
  {
    id: 4,
    image: "/about4.svg",
    title: "Client-Centric",
    subtitle:
      "Experience a seamless journey where your vision and satisfaction always come first.",
  },
];

const NUMBERS = [
  {
    id: 1,
    number: "5.0",
    title: "Client Satisfaction",
    subtitle:
      "Coastal living quality is defined by prime location, modern design, and luxury.",
  },
  {
    id: 2,
    number: "95%",
    title: "Successful Deals",
    subtitle:
      "Smooth transactions are ensured through integrated legal checks.",
  },
  {
    id: 3,
    number: "9+",
    title: "Years of Expertise",
    subtitle:
      "Investment growth relies on accurate local market insights and strategic.",
  },
  {
    id: 4,
    number: "10K+",
    title: "Properties Explored",
    subtitle:
      "Buying success is shaped by personal consultation, tailored options, and client.",
  },
];

export const metadata: Metadata = {
  title: "About Us | AR Real Estate Redsea",
  description:
    "Meet the team behind AR Real Estate Redsea — local experts helping buyers find their dream coastal home with transparent, all-inclusive pricing.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | AR Real Estate Redsea",
    description:
      "Meet the team behind AR Real Estate Redsea — local experts helping buyers find their dream coastal home.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <HeroPageSection
        image="https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/3.png"
        title="Our Story"
      />

      <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px]">
          <AnimateOnScroll type="fade-up">
            <h2 className="max-w-4xl font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
              A journey of passion, expertise, and dedication to your ultimate
              lifestyle.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll
            type="fade-up"
            delay={100}
            className="max-w-3xl mx-auto mt-10 md:mt-[50px] lg:mt-[62px]"
          >
            <p className="text-brand-text text-xl leading-8 mb-[30px] md:mb-[50px] lg:mb-[54px]">
              Your journey into the Red Sea’s real estate wonders starts here.
              Learn more about who we are, what we stand for, and how we can
              make your coastal aspirations a reality. A team of dedicated
              professionals on a mission to turn your dreams into reality,
              guided by passion, expertise, and an unwavering commitment to
              excellence.
            </p>

            <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-20 lg:gap-[100px]">
              <div>
                <h3 className="text-brand-text text-xl font-semibold leading-7 mb-4">
                  Our Mission
                </h3>
                <p className="text-brand-text text-base leading-7">
                  Our mission is forging enduring connections, preserving the
                  Red Sea’s natural beauty, and nurturing vibrant coastal
                  communities. We value excellence, trust, and connection to
                  deliver a seamless real estate path.
                </p>
              </div>
              <div>
                <h3 className="text-brand-text text-xl font-semibold leading-7 mb-4">
                  Our Vision
                </h3>
                <p className="text-brand-text text-base leading-7">
                  AR Real Estate’s vision is rooted in the Red Sea’s captivating
                  beauty and limitless possibilities. As your trusted partner,
                  we aim to unlock the coastal lifestyle you’ve always wanted,
                  blending luxury and nature.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative z-10 -mt-6 h-[280px] md:h-[600px] lg:h-[754px]">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-t-3xl"
          style={{
            backgroundImage:
              "url(https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784212337575-fp36yx02w14.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
      </section>

      <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px]">
          <AnimateOnScroll
            type="fade-up"
            className="mb-10 md:mb-[60px] lg:mb-[120px]"
          >
            <div className="flex flex-wrap justify-between items-center gap-4">
              <h2 className="lg:w-2/4 font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
                Don’t wait to buy real estate. Buy real estate and wait
              </h2>
              <p className="lg:w-[37%] text-brand-muted text-[20px] font-medium leading-9">
                Home value is determined by factors like location, property
                condition, recent sales of similar homes, and current market
                trends.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NUMBERS.map((num, i) => (
              <AnimateOnScroll type="fade-up" delay={i * 100}>
                <h1 className="font-display text-4xl md:text-8xl leading-10 md:leading-24 text-brand-accent">
                  {num.number}
                </h1>
                <h3 className="text-brand-text text-lg font-medium leading-7 mt-2 mb-[30px] md:mb-20">
                  {num.title}
                </h3>

                <p className="text-brand-muted text-base leading-7">
                  {num.subtitle}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6">
        <div
          className="absolute inset-0 bg-cover bg-bottom rounded-t-3xl"
          style={{
            backgroundImage:
              "url(https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784212338258-0s38rdckywy.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/50 rounded-t-3xl" />
        <AnimateOnScroll
          type="fade-up"
          delay={100}
          className="max-w-[1380px] mx-auto flex justify-end px-6 md:px-8 pt-[50px] md:pt-[70px] pb-20 md:pb-[170px]"
        >
          <div className="relative max-w-xl bg-white p-5 md:px-10 md:py-12 rounded-2xl shadow-2xl">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-4">
              Unlocking your Red Sea coastal lifestyle!
            </h2>
            <p className="text-brand-muted text-lg leading-7 mt-5 mb-10">
              Looking for expert guidance or ready to invest? Whether you are
              buying, selling, or exploring properties.
            </p>
            <Link
              href="/about"
              className="bg-transparent text-brand-accent border border-[#1629321a] text-base font-medium px-6 py-4 rounded-full hover:border-[#16293237] transition-colors"
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
        </AnimateOnScroll>
      </section>

      <section className="relative bg-brand-surface z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px] flex flex-col gap-10 md:gap-16">
          <AnimateOnScroll type="fade-up">
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
                Your Trusted Real Estate Partner
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUSTED.map((card, i) => (
              <AnimateOnScroll type="fade-up" delay={i * 100}>
                <div className="bg-white p-8 flex flex-col gap-10 md:gap-[72px] rounded-2xl">
                  <Image
                    src={card.image}
                    width={80}
                    height={80}
                    alt="Picture of the author"
                  />
                  <div>
                    <h3 className="font-display text-2xl text-brand-text mb-2">
                      {card.title}
                    </h3>
                    <p className="text-brand-muted text-base leading-7">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <GeneralFormSection />

      <TestimonialsSection />
    </main>
  );
}
