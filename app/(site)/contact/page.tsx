import siteConfig from "@/siteConfig";
import { Metadata } from "next";
import ContactPageForm from "./ContactPageForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team. We respond within 2 business hours.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative h-64 md:h-80 flex items-end pb-12 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#1B2B3A]/75" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-3">
            Reach out
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── CONTACT GRID ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        {/* Left — info */}
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-3 mb-8">
            Get in touch
          </p>
          <h2 className="font-display text-3xl text-stone-900 mb-6">
            We respond within 2 business hours.
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-10">
            Whether you have a question about a specific property, want to
            arrange a viewing, or just want to explore your options — our team
            is here to help. No pressure, no obligation.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1B2B3A"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">
                  Phone
                </p>
                <a
                  href={`tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  className="text-stone-800 font-medium hover:text-[#C9A96E] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1B2B3A">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.535 5.832L.057 23.527a.75.75 0 00.916.916l5.695-1.478A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-5.01-1.392l-.36-.213-3.723.967.984-3.622-.234-.373A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/+${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  className="text-stone-800 font-medium hover:text-[#C9A96E] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1B2B3A"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  target="_blank"
                  className="text-stone-800 font-medium hover:text-[#C9A96E] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1B2B3A"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">
                    Office
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.googleMapsUrl}`}
                    target="_blank"
                    className="text-stone-800 font-medium hover:text-[#C9A96E] transition-colors"
                  >
                    {siteConfig.contact.address}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <ContactPageForm />
      </section>
    </main>
  );
}
