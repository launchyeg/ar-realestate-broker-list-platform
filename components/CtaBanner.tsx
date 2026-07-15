import Link from "next/link";

const CtaBanner = () => {
  return (
    <section className="relative py-52 flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-3">
          Take the next step.
        </h2>
        <p className="text-white/60 text-sm mb-8">
          We accompany you reliably on the way to your dream property.
        </p>
        <Link
          href="/contact"
          className="inline-block border border-white text-white text-xs font-medium tracking-widest uppercase px-10 py-3 hover:bg-white hover:text-[#1B2B3A] transition-all"
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
