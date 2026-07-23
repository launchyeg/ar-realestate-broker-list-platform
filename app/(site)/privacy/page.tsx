import { Metadata } from "next";
import siteConfig from "@/siteConfig";
import HeroPageSection from "@/components/sections/HeroPageSection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect your personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false }, // privacy pages don't need to be indexed
};

export default function PrivacyPage() {
  return (
    <main>
      <HeroPageSection
        image="https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784164994508-1jfzi7wl588.png"
        title="Privacy Policy"
      />

      <div className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px]">
          {[
            {
              title: "1. Who we are",
              content: `${siteConfig.brokerName} is a registered real estate company operating in Egypt. Our registered office is at ${siteConfig.contact.address}. You can contact us at ${siteConfig.contact.email}.`,
              style: "bg-brand-surface",
            },
            {
              title: "2. What data we collect",
              content:
                "We collect information you provide directly to us when you fill out a contact form, enquire about a property, or communicate with our team. This includes your name, phone number, email address, and any details you share about your property interests.",
            },
            {
              title: "3. How we use your data",
              content:
                "We use your data solely to respond to your enquiries, provide property recommendations, and keep you informed about listings that match your interests. We do not sell, rent, or share your personal data with third parties outside of our organisation without your explicit consent.",
              style: "bg-brand-surface",
            },
            {
              title: "4. Data retention",
              content:
                "We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. If you wish to have your data deleted, please contact us at " +
                siteConfig.contact.email +
                ".",
            },
            {
              title: "5. Cookies",
              content:
                "Our website may use cookies to improve your browsing experience. These are small text files stored on your device. You can control cookie settings through your browser. We do not use cookies for advertising or tracking purposes.",
              style: "bg-brand-surface",
            },
            {
              title: "6. Your rights",
              content:
                "You have the right to access, correct, or delete your personal data at any time. You also have the right to object to our processing of your data. To exercise any of these rights, contact us at " +
                siteConfig.contact.email +
                ".",
            },
            {
              title: "7. Changes to this policy",
              content:
                "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.",
              style: "bg-brand-surface",
            },
            {
              title: "8. Contact",
              content: `If you have any questions about this Privacy Policy, please contact us at ${siteConfig.contact.email} or call us at ${siteConfig.contact.phone}.`,
            },
          ].map((section, i) => (
            <AnimateOnScroll type="fade-up">
              <div
                key={section.title}
                className={`${section.style} p-5 md:p-8 rounded-2xl`}
              >
                <h2 className="font-display text-[28px] md:text-4xl text-brand-text">
                  {section.title}
                </h2>
                <div className="my-4 border-t border-[#52525a33]" />
                <p className="text-brand-muted text-base font-medium leading-7">
                  {section.content}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
}
