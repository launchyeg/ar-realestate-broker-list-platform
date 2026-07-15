import Link from "next/link";
import siteConfig from "@/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Contact col */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">
            Contact
          </h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-[10px] tracking-widest text-[#C9A96E] uppercase mb-1">
                Phone
              </p>
              <a
                href={`tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                className="text-white/70 hover:text-white"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-[#C9A96E] uppercase mb-1">
                WhatsApp
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                className="text-white/70 hover:text-white"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-[#C9A96E] uppercase mb-1">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                target="_blank"
                className="text-white/70 hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            {siteConfig.social
              .filter((item) => item.href)
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${item.name} page`}
                  className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
          </div>
        </div>

        {/* Houses col */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">
            Destination
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            {siteConfig.destinations.slice(0, 5).map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Apartments col */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">
            Projects
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            {siteConfig.projects.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/destinations/${p.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info col */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">
            Information
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/destinations"
                className="hover:text-white transition-colors"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display text-[#C9A96E] text-2xl tracking-[0.2em] mb-1">
              {siteConfig.logo.textFallback}
            </div>
            <div className="text-white/20 text-[9px] tracking-[0.3em] uppercase">
              Real Estate
            </div>
          </div>
          <p className="text-white/20 text-xs text-end">
            © {new Date().getFullYear()} {siteConfig.brokerName}.
            <br />
            All rights reserved. Developed by{" "}
            <a
              href="https://aaaportfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors font-medium"
            >
              Launchy
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
