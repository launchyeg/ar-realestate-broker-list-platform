"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type { Unit } from "@/types/unit";
import PropertyCard from "@/components/ui/PropertyCard";
import CustomSelect from "@/components/dashboard/CustomSelect";

interface Props {
  units: Unit[];
  destinations: { slug: string; label: string; emoji?: string }[];
  projects: { slug: string; label: string }[];
}

const PRICE_RANGES = [
  { value: "0-2000000", label: "Under EGP 2M" },
  { value: "2000000-5000000", label: "EGP 2M – 5M" },
  { value: "5000000-10000000", label: "EGP 5M – 10M" },
  { value: "10000000-999999999", label: "Above EGP 10M" },
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
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#1B2B3A] pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-3">
            All Properties
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">
            Find your property
          </h1>
          <p className="text-white/50 text-sm mb-10 max-w-lg">
            Browse our full collection of villas, apartments, penthouses and
            studios across Egypt's most sought-after destinations.
          </p>

          {/* ── FILTER CARD ──────────────────────────────────────── */}
          <div className="bg-white rounded-2xl p-5 shadow-2xl">
            {/* Search */}
            <div className="mb-4">
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
                  className="w-full pl-9 pr-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#C9A96E] transition bg-stone-50"
                />
              </div>
            </div>

            {/* Filter row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
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

            {/* Active filters + clear */}
            {hasFilters && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                <p className="text-xs text-stone-500">
                  <span className="font-medium text-stone-800">
                    {filtered.length}
                  </span>{" "}
                  {filtered.length === 1 ? "property" : "properties"} found
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Count */}
        {!hasFilters && (
          <p className="text-stone-400 text-sm mb-8">
            {units.length} properties available
          </p>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((unit) => (
              <PropertyCard key={unit.id} unit={unit} />
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
      </section>
    </>
  );
}
