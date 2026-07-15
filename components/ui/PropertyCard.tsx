import Link from "next/link";
import type { Unit } from "@/types/unit";

const PropertyCard = ({ unit }: { unit: Unit }) => {
  const badgeMap: Record<string, { label: string; className: string }> = {
    primary: { label: "Primary", className: "bg-[#1B2B3A]" },
    resale: { label: "Resale", className: "bg-red-500" },
    rent: { label: "Rent", className: "bg-emerald-600" },
  };

  const badge = badgeMap[unit.listingType] ?? badgeMap["primary"];

  return (
    <Link href={`/properties/${unit.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-sm mb-4">
        {/* Image */}
        <div
          className="h-56 bg-stone-200 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${unit.coverImage})` }}
        />
        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 ${badge.className}`}
        >
          {badge.label}
        </span>
        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white flex items-center gap-4 px-3 py-2 text-xs font-medium">
          <span className="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 20v-8a2 2 0 012-2h16a2 2 0 012 2v8M2 14V6a2 2 0 012-2h4l2 3h8a2 2 0 012 2v3" />
            </svg>
            {unit.beds}
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4zM4 12V6a2 2 0 014 0v1" />
            </svg>
            {unit.baths}
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="1" />
            </svg>
            {unit.size} m²
          </span>
        </div>
      </div>
      <h3 className="font-display text-xl text-stone-900 mb-1 group-hover:text-[#C9A96E] transition-colors">
        {unit.name}
      </h3>
      <p className="text-sm text-stone-500 mb-2 line-clamp-2">
        {unit.description}
      </p>
      <p className="font-medium text-stone-900">
        {unit.currency} {unit.price.toLocaleString("en-US")}
      </p>
    </Link>
  );
};

export default PropertyCard;
