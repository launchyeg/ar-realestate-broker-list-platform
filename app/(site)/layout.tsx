import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import siteConfig from "@/siteConfig";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s — ${siteConfig.brokerName}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [
    "real estate Egypt",
    "property Egypt",
    "buy property Hurghada",
    "apartments Sahl Hasheesh",
    "villa Red Sea Egypt",
    "investment Egypt",
    "El Gouna property",
    "Soma Bay real estate",
    "Egypt holiday home",
    siteConfig.brokerName,
  ],
  authors: [{ name: siteConfig.brokerName, url: siteConfig.seo.siteUrl }],
  creator: siteConfig.brokerName,
  publisher: siteConfig.brokerName,

  // ── Canonical & Robots ────────────────────────────────────
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook, WhatsApp, LinkedIn) ─────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.brokerName,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.brokerName,
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
    creator: siteConfig.seo.twitterHandle,
  },

  // ── Icons ─────────────────────────────────────────────────
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },

  // ── Verification (add your codes from Google/Bing) ────────
  verification: {
    google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD — Local Business structured data for Google */}
        <script
          type={"application/ld+json"}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: siteConfig.brokerName,
              description: siteConfig.seo.defaultDescription,
              url: siteConfig.seo.siteUrl,
              telephone: siteConfig.contact.phone,
              email: siteConfig.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address,
                addressCountry: "EG",
              },
              openingHours: "Mo-Su 09:00-20:00",
              priceRange: "EGP 1,000,000 — EGP 20,000,000",
              areaServed: [
                "Hurghada",
                "Sahl Hasheesh",
                "El Gouna",
                "Soma Bay",
                "Makadi Bay",
                "Egypt",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <CtaBanner />
        <Footer />
      </body>
    </html>
  );
}
