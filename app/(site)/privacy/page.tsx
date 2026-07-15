import { Metadata } from "next";
import siteConfig from "@/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect your personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false }, // privacy pages don't need to be indexed
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-3">
          Legal
        </p>
        <h1 className="font-display text-4xl text-stone-900 mb-3">
          Privacy Policy
        </h1>
        <p className="text-stone-400 text-sm mb-12">
          Last updated: January 2025
        </p>

        {[
          {
            title: "1. Who we are",
            content: `${siteConfig.brokerName} is a registered real estate company operating in Egypt. Our registered office is at ${siteConfig.contact.address}. You can contact us at ${siteConfig.contact.email}.`,
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
          },
          {
            title: "8. Contact",
            content: `If you have any questions about this Privacy Policy, please contact us at ${siteConfig.contact.email} or call us at ${siteConfig.contact.phone}.`,
          },
        ].map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="font-display text-xl text-stone-900 mb-3">
              {section.title}
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
