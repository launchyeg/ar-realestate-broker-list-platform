"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface HeroPageSectionProps {
  image: string;
  title: string;
}

export default function HeroPageSection({
  image,
  title,
}: HeroPageSectionProps) {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-[80px] md:pt-[150px] md:pb-[100px] lg:pt-[205px] lg:pb-[155px]">
        <AnimateOnScroll type="fade-up">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-7xl lg:text-[80px] leading-11 md:leading-[92px] text-white">
              {title}
            </h2>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
