import Link from "next/link";
import siteConfig from "@/siteConfig";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#1B2B3A] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-6">
        Error 404
      </p>
      <h1 className="font-display text-7xl md:text-9xl text-white mb-4">404</h1>
      <p className="font-display text-2xl text-white/60 mb-4">Page not found</p>
      <p className="text-white/40 text-sm max-w-sm mb-12">
        The page you're looking for doesn't exist or has been moved. Let us help
        you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3 bg-[#C9A96E] text-white text-xs font-medium tracking-widest uppercase hover:bg-[#E8C98A] transition-colors"
        >
          Back to home
        </Link>
        <Link
          href="/destinations"
          className="px-8 py-3 border border-white/30 text-white text-xs font-medium tracking-widest uppercase hover:border-white hover:bg-white/5 transition-colors"
        >
          Browse destinations
        </Link>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}`}
          className="px-8 py-3 border border-white/30 text-white text-xs font-medium tracking-widest uppercase hover:border-white hover:bg-white/5 transition-colors"
        >
          Contact us
        </a>
      </div>
    </main>
  );
}
