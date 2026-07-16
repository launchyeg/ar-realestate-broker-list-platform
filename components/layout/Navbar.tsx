"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteConfig from "@/siteConfig";

// ── Dropdown Component ────────────────────────────────────────────────────────

function NavDropdown({
  label,
  items,
  onClose,
}: {
  label: string;
  items: { href: string; label: string; emoji?: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-white/70 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors"
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`
        absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52
        bg-white rounded-xl shadow-2xl border border-stone-100
        transition-all duration-200 origin-top z-50
        ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
      `}
      >
        <div className="py-2">
          <div className="max-h-[210px] overflow-y-auto scrollbar-thin">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  onClose();
                }}
                className="flex items-center gap-3 px-4 py-2.5 text-stone-600 hover:text-[#1B2B3A] hover:bg-stone-50 transition-colors text-sm"
              >
                {item.emoji && (
                  <span className="text-base w-5 text-center">
                    {item.emoji}
                  </span>
                )}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="border-t border-stone-100 mt-1 pt-1">
            <Link
              href={items[0]?.href.split("/").slice(0, -1).join("/") || "/"}
              onClick={() => {
                setOpen(false);
                onClose();
              }}
              className="flex items-center justify-between px-4 py-2.5 text-[#C9A96E] hover:text-[#1B2B3A] hover:bg-stone-50 transition-colors text-xs font-medium uppercase tracking-widest"
            >
              View all
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mobile Accordion ──────────────────────────────────────────────────────────

function MobileAccordion({
  label,
  items,
  onClose,
}: {
  label: string;
  items: { href: string; label: string; emoji?: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-white/70 text-sm font-medium tracking-widest uppercase py-4 border-b border-white/5 transition-colors hover:text-white"
      >
        {label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Sub items */}
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="py-2 pl-4 space-y-0.5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 py-2.5 text-white/50 hover:text-white text-sm transition-colors"
            >
              {item.emoji && <span className="text-base">{item.emoji}</span>}
              {item.label}
            </Link>
          ))}
          <Link
            href={items[0]?.href.split("/").slice(0, -1).join("/") || "/"}
            onClick={onClose}
            className="flex items-center gap-2 py-2.5 text-[#C9A96E] text-xs font-bold uppercase tracking-widest hover:text-[#E8C98A] transition-colors"
          >
            View all
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const destinationItems = (siteConfig.destinations as any[]).map((d) => ({
    href: `/destinations/${d.slug}`,
    label: d.label,
    emoji: d.emoji,
  }));

  const projectItems = (siteConfig.projects as any[]).map((p) => ({
    href: `/projects/${p.slug}`,
    label: p.label,
  }));

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          {/* ── LOGO ─────────────────────────────────────────── */}
          <Link href="/">
            <div className="text-center">
              <div className="font-display text-[#C9A96E] text-xl font-medium tracking-[0.2em]">
                {siteConfig.logo.textFallback}
              </div>
              <div className="text-white/40 text-[8px] tracking-[0.3em] uppercase">
                Real Estate
              </div>
            </div>
          </Link>

          {/* ── DESKTOP NAV ──────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-white/70 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors"
            >
              About
            </Link>

            <NavDropdown
              label="Destinations"
              items={destinationItems}
              onClose={() => {}}
            />

            <NavDropdown
              label="Projects"
              items={projectItems}
              onClose={() => {}}
            />

            <Link
              href="/properties"
              className="text-white/70 text-xs font-medium tracking-widests uppercase hover:text-white transition-colors"
            >
              Properties
            </Link>

            <Link
              href="/contact"
              className="text-white/70 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* ── RIGHT SIDE ───────────────────────────────────── */}
          <div className="flex items-center gap-5">
            {/* Admin icon */}
            <Link
              href="/dashboard"
              target="_blank"
              className="text-white/50 hover:text-white transition-colors"
              title="Admin"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>

            {/* WhatsApp desktop */}
            <a
              href={`https://wa.me/+${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              className="hidden md:flex items-center gap-2 text-white/70 text-xs font-medium hover:text-white transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.535 5.832L.057 23.527a.75.75 0 00.916.916l5.695-1.478A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-5.01-1.392l-.36-.213-3.723.967.984-3.622-.234-.373A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              {siteConfig.contact.phone}
            </a>

            {/* Burger mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-white/70 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SIDEBAR ───────────────────────────────────────── */}

      {/* Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/60 z-50 md:hidden transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`
        fixed top-0 right-0 h-full w-72 bg-[#111] z-50
        transform transition-transform duration-300 ease-in-out
        md:hidden flex flex-col
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            <div className="font-display text-[#C9A96E] text-lg font-medium tracking-[0.2em]">
              {siteConfig.logo.textFallback}
            </div>
            <div className="text-white/40 text-[8px] tracking-[0.3em] uppercase">
              Real Estate
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-0">
          <Link
            href="/about"
            onClick={() => setSidebarOpen(false)}
            className="block text-white/70 hover:text-white text-sm font-medium tracking-widest uppercase py-4 border-b border-white/5 transition-colors"
          >
            About
          </Link>

          <MobileAccordion
            label="Destinations"
            items={destinationItems}
            onClose={() => setSidebarOpen(false)}
          />

          <MobileAccordion
            label="Projects"
            items={projectItems}
            onClose={() => setSidebarOpen(false)}
          />

          <Link
            href="/properties"
            onClick={() => setSidebarOpen(false)}
            className="block text-white/70 hover:text-white text-sm font-medium tracking-widest uppercase py-4 border-b border-white/5 transition-colors"
          >
            Properties
          </Link>

          <Link
            href="/contact"
            onClick={() => setSidebarOpen(false)}
            className="block text-white/70 hover:text-white text-sm font-medium tracking-widests uppercase py-4 border-b border-white/5 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Bottom */}
        <div className="px-6 py-8 border-t border-white/10 space-y-4">
          <a
            href={`https://wa.me/+${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.535 5.832L.057 23.527a.75.75 0 00.916.916l5.695-1.478A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-5.01-1.392l-.36-.213-3.723.967.984-3.622-.234-.373A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            {siteConfig.contact.phone}
          </a>

          <Link
            href="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Admin Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
