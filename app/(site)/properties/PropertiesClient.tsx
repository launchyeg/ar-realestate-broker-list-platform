"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type { Unit } from "@/types/unit";
import PropertyCard from "@/components/ui/PropertyCard";
import CustomSelect from "@/components/dashboard/CustomSelect";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface Props {
  units: Unit[];
  destinations: { slug: string; label: string; emoji?: string }[];
  projects: { slug: string; label: string }[];
}

const PRICE_RANGES = [
  { value: "0-2000000", label: "Under EGP 2M" },
  { value: "2000000-5000000", label: "EGP 2M – 5M" },
  { value: "5000000-10000000", label: "EGP 5M – 10M" },
  { value: "10000000-9999999999999", label: "Above EGP 10M" },
];

const TYPES = [
  { value: "Villa", label: "Villa" },
  { value: "Penthouse", label: "Penthouse" },
  { value: "Apartment", label: "Apartment" },
  { value: "Studio", label: "Studio" },
];

const LISTING_TYPES = [
  { value: "primary", label: "Primary" },
  { value: "resale", label: "Resale" },
  { value: "rent", label: "Rent" },
];

export default function PropertiesClient({
  units,
  destinations,
  projects,
}: Props) {
  const searchParams = useSearchParams();

  const [destination, setDestination] = useState(
    searchParams.get("destination") || "",
  );
  const [project, setProject] = useState(searchParams.get("project") || "");
  const [priceRange, setPriceRange] = useState(searchParams.get("price") || "");
  const [type, setType] = useState("");
  const [listingType, setListingType] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return units.filter((u) => {
      // Search
      if (
        search &&
        !u.name.toLowerCase().includes(search.toLowerCase()) &&
        !u.destinationLabel.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      // Destination
      if (destination && u.destination !== destination) return false;
      // Project
      if (project && u.project !== project) return false;
      // Type
      if (type && u.type !== type) return false;
      // Listing type
      if (listingType && u.listingType !== listingType) return false;
      // Price range
      if (priceRange) {
        const [min, max] = priceRange.split("-").map(Number);
        if (u.price < min || u.price > max) return false;
      }
      return true;
    });
  }, [units, destination, project, priceRange, type, listingType, search]);

  const hasFilters =
    destination || project || priceRange || type || listingType || search;

  function clearFilters() {
    setDestination("");
    setProject("");
    setPriceRange("");
    setType("");
    setListingType("");
    setSearch("");
  }

  return (
    <>
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/Screenshot-2026-03-10-131215.png)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-[80px] md:pt-[150px] md:pb-[100px] lg:pt-[205px] lg:pb-[155px]">
          <AnimateOnScroll type="fade-up">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-display text-4xl md:text-7xl lg:text-[80px] leading-11 md:leading-[92px] text-white">
                Find Your Dream Property <br /> in the Red Sea
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={100}>
            <div className="bg-white p-5 md:px-10 md:py-12 rounded-2xl shadow-2xl">
              <div className="mb-5">
                <div className="relative">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35"
                    />
                  </svg>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or destination..."
                    className="w-full pl-10 pr-5 py-3.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#C9A96E] transition bg-stone-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <CustomSelect
                  value={destination}
                  placeholder="All Destinations"
                  onChange={setDestination}
                  options={[
                    ...destinations.map((d) => ({
                      value: d.slug,
                      label: d.label,
                    })),
                  ]}
                />
                <CustomSelect
                  value={project}
                  placeholder="All Projects"
                  onChange={setProject}
                  options={[
                    ...projects.map((p) => ({ value: p.slug, label: p.label })),
                  ]}
                />
                <CustomSelect
                  value={priceRange}
                  placeholder="Price"
                  onChange={setPriceRange}
                  options={PRICE_RANGES}
                />
                <CustomSelect
                  value={type}
                  placeholder="All Types"
                  onChange={setType}
                  options={TYPES}
                />
                <CustomSelect
                  value={listingType}
                  placeholder="All Listing"
                  onChange={setListingType}
                  options={LISTING_TYPES}
                />
              </div>

              {hasFilters && (
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#52525a1a]">
                  <p className="text-sm font-medium text-brand-text/60">
                    <span className="text-brand-text">{filtered.length}</span>{" "}
                    {filtered.length === 1 ? "property" : "properties"} found
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors flex gap-2"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative z-10 -mt-6 rounded-t-3xl bg-white">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px]">
          <p className="font-display text-brand-text text-[28px] md:text-4xl mb-10 md:mb-16">
            Search your dream property
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((unit, i) => (
                <AnimateOnScroll key={unit.id} type="fade-up" delay={i * 100}>
                  <PropertyCard key={unit.id} unit={unit} />
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <h3 className="font-display text-2xl text-stone-800 mb-2">
                No properties found
              </h3>
              <p className="text-stone-400 text-sm mb-6">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={clearFilters}
                className="inline-block bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-[#2D4258] transition-colors rounded-lg"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
