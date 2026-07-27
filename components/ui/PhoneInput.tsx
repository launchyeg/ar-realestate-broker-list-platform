"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const COUNTRIES = [
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+86", flag: "🇨🇳", name: "China" },
];

interface Props {
  value: string;
  onChange: (fullNumber: string) => void;
  placeholder?: string;
  required?: boolean;
  variant?: "default" | "dark";
  inputClassName?: string;
  triggerClassName?: string;
}

export default function PhoneInput({
  value,
  onChange,
  placeholder = "000 000 0000",
  required = false,
  variant = "default",
  inputClassName = "",
  triggerClassName = "",
}: Props) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  // ── Close on outside click ────────────────────────────────
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // ── Update full number when country or number changes ─────
  useEffect(() => {
    onChange(number ? `${selectedCountry.code} ${number}` : "");
  }, [selectedCountry, number]);

  const filtered = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search),
  );

  return (
    <div ref={ref} className="relative flex items-end gap-0">
      {/* ── COUNTRY CODE SELECTOR ────────────────────────── */}
      <div
        className={`flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${triggerClassName}`}
        onClick={() => setOpen(!open)}
      >
        <span className="text-xl mb-1">{selectedCountry.flag}</span>
        <span className="text-base">{selectedCountry.code}</span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* ── NUMBER INPUT ─────────────────────────────────── */}
      <input
        required={required}
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder={placeholder}
        className={`flex-1 bg-transparent focus:outline-none ${inputClassName}`}
      />

      {/* ── DROPDOWN ─────────────────────────────────────── */}
      {open && (
        <div className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-xl shadow-2xl border border-[#52525a1a] overflow-hidden z-50">
          {/* Search */}
          <div className="p-2 border-b border-[#52525a1a]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full px-3 py-1.5 text-sm bg-brand-surface rounded-lg focus:outline-none text-brand-text placeholder-brand-muted"
              autoFocus
            />
          </div>

          {/* List */}
          <div className="max-h-48 overflow-y-auto">
            {filtered.map((country) => (
              <button
                key={country.code + country.name}
                type="button"
                onClick={() => {
                  setSelectedCountry(country);
                  setOpen(false);
                  setSearch("");
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                  selectedCountry.code === country.code &&
                  selectedCountry.name === country.name
                    ? "text-brand-accent font-medium"
                    : "text-brand-muted hover:text-brand-text"
                }`}
              >
                <span className="text-lg">{country.flag}</span>
                <span className="flex-1">{country.name}</span>
                <span className="text-xs text-brand-muted">{country.code}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-brand-muted text-sm py-4">
                No country found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
