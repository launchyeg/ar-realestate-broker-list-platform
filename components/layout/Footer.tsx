import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/siteConfig";

const Footer = () => {
  return (
    <footer className="relative bg-white z-10 -mt-6 rounded-t-3xl text-brand-text">
      <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-[50px] pb-6 md:pt-[70px] lg:pt-[120px] flex flex-col gap-10 md:gap-[60px] lg:gap-20">
        <div className="flex flex-col lg:flex-row justify-between gap-[30px]">
          <div>
            <Link href="/">
              <Image
                src="/ARLogo-3.png"
                alt={siteConfig.brokerName}
                width={140}
                height={40}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            <div className="space-y-2 text-lg text-brand-text font-medium mt-5 mb-6 sm:mt-8 sm:mb-10 lg:mb-14">
              <div>
                <a
                  href={`tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  target="_blank"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${siteConfig.contact.email}`} target="_blank">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              {siteConfig.social
                .filter((item) => item.href)
                .map((item) => (
                  <a
                    key={item.name}
                    href={item.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${item.name} page`}
                    className="p-3 hover:text-white border border-[#52525a4d] flex items-center justify-center hover:border-brand-accent hover:bg-brand-accent rounded-2xl transition-colors"
                  >
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={item.path} />
                    </svg>
                  </a>
                ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-[90px]">
            <div>
              <h4 className="text-lg font-semibold text-brand-text mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-base font-medium text-brand-muted">
                <li>
                  <Link
                    href="/"
                    className="hover:text-brand-text transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    className="hover:text-brand-text transition-colors"
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-brand-text transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/properties"
                    className="hover:text-brand-text transition-colors"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-brand-text transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-brand-text mb-4">
                Destinations
              </h4>
              <ul className="space-y-2.5 text-base font-medium text-brand-muted">
                {siteConfig.destinations.slice(0, 5).map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/destinations/${d.slug}`}
                      className="hover:text-brand-text transition-colors"
                    >
                      {d.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-brand-text mb-4">
                Office Location
              </h4>
              <ul className="space-y-2.5 text-base font-medium text-brand-muted">
                <li>
                  <p>
                    Hurghada, Red Sea, Egypt,
                    <br />
                    Floor 3, Building 2, Inter District
                  </p>
                </li>

                <li>
                  <Link
                    href="https://maps.app.goo.gl/TwjiXwdJrjJrsCNN8"
                    target="_blank"
                    className="flex gap-2 text-brand-text transition-colors"
                  >
                    <MapPin size={24} />
                    See on Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#52525a1a]">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-base font-medium text-brand-muted pt-6">
            <div className="flex flex-wrap items-center gap-4">
              <p>
                © {new Date().getFullYear()} {siteConfig.brokerName}
              </p>
              <div className="hidden lg:inline bg-[#203f301a] rounded-full w-2 h-2"></div>
              <p>
                Developed by{" "}
                <a
                  href="https://aaaportfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text transition-colors"
                >
                  Launchy
                </a>
              </p>
            </div>

            <div>
              <Link
                href="/privacy"
                className="hover:text-brand-text transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
