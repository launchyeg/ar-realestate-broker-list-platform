import Link from "next/link";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const CtaBanner = () => {
  return (
    <section className="relative z-10 -mt-6 px-6 md:px-8 pt-[50px] pb-[80px] md:pt-[80px] mg:pb-[200px] lg:pt-[120px] lg:pb-[340px] flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-t-3xl"
        style={{
          backgroundImage:
            "url(https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784165522845-js7zku7xit.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
      <div className="relative max-w-3xl">
        <AnimateOnScroll type="fade-up">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white">
            Ready to make a move?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll type="fade-up" delay={100}>
          <p className="text-white text-xl leading-9 mt-5 mb-14">
            Contact us today to discuss your property needs and choose the right
            plan. We’re here to guide you through every step of the process.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll type="fade-up" delay={200}>
          <Link
            href="/contact"
            className="bg-brand-accent text-white text-base font-medium px-6 py-4 rounded-full hover:bg-brand-accentLight transition-colors"
          >
            Get Your Home
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CtaBanner;
