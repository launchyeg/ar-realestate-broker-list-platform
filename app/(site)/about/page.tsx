import Link from "next/link";
import { Metadata } from "next";
import siteConfig from "@/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Prestige Properties — local experts helping international buyers find their dream home in Egypt.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative h-64 md:h-80 flex items-end pb-12 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#1B2B3A]/75" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-3">
            Who we are
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-6">
            Our story
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 leading-snug mb-6">
            A team built on trust, expertise, and passion for Egypt.
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-4">
            {siteConfig.brokerName} was founded with a single mission — to make
            buying property in Egypt simple, transparent, and rewarding for
            international buyers. We operate across Egypt's most sought-after
            coastal and urban destinations, with deep local knowledge and a
            network built over many years.
          </p>
          <p className="text-stone-500 text-sm leading-relaxed">
            Whether you're looking for a holiday home, a retirement sanctuary,
            or a high-yield investment, our team guides you from first enquiry
            through to key handover — in your language, at your pace.
          </p>
        </div>
        <div
          className="relative h-80 bg-cover bg-center rounded-sm"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=800&q=80)",
          }}
        />
      </section>

      {/* ── VALUES ─────────────────────────────────────────────── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-bold tracking-widests uppercase text-stone-400 mb-3">
            What drives us
          </p>
          <h2 className="font-display text-3xl text-stone-900 mb-12">
            Our values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                icon: "🔍",
                desc: "No hidden fees, no pressure. We give you honest advice even when it means telling you to wait.",
              },
              {
                title: "Local Expertise",
                icon: "📍",
                desc: "We live and work in Egypt. We know every, every developer, and every neighbourhood intimately.",
              },
              {
                title: "Full Service",
                icon: "🤝",
                desc: "From viewing to notary to rental management — we handle every step so you don't have to.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white border border-stone-200 p-8 rounded-sm"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl text-stone-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Properties sold" },
            { value: "12+", label: "Years in Egypt" },
            { value: "40+", label: "Nationalities served" },
            { value: "100%", label: "Legally secure" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl text-stone-900 mb-2">
                {s.value}
              </p>
              <p className="text-stone-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────────── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3">
            The people behind it
          </p>
          <h2 className="font-display text-3xl text-stone-900 mb-12">
            Meet our team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Hassan",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
              },
              {
                name: "Sarah Müller",
                role: "Head of Sales — European Clients",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
              },
              {
                name: "Karim Nasser",
                role: "Legal & Contracts Director",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="w-32 h-32 rounded-full bg-cover bg-center mx-auto mb-4"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <h3 className="font-display text-xl text-stone-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-stone-400 text-xs tracking-wide">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-3xl text-stone-900 mb-4">
          Ready to find your property?
        </h2>
        <p className="text-stone-500 text-sm mb-8">
          Talk to our team — no pressure, just honest advice.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-8 py-3 hover:bg-[#2D4258] transition-colors"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
