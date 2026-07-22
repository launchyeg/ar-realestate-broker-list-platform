import Link from "next/link";
import { Bath, BedDouble, Scaling } from "lucide-react";
import type { Unit } from "@/types/unit";

const PropertyCard = ({ unit }: { unit: Unit }) => {
  const badgeMap: Record<string, { label: string; className: string }> = {
    primary: { label: "Primary", className: "bg-white text-brand-text" },
    resale: { label: "Sale", className: "bg-white text-brand-text" },
    rent: { label: "Rent", className: "bg-white text-brand-text" },
  };

  const badge = badgeMap[unit.listingType] ?? badgeMap["primary"];

  return (
    <Link href={`/properties/${unit.slug}`}>
      <div className="relative overflow-hidden h-[315px] md:h-[337px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 rounded-2xl"
          style={{ backgroundImage: `url(${unit.coverImage})` }}
        />

        <span
          className={`absolute top-3 left-3 text-base leading-7 px-3 py-1 rounded-[10px] shadow-sm ${badge.className}`}
        >
          For {badge.label}
        </span>
      </div>

      <p className="text-brand-muted text-base font-medium leading-7 mt-6 mb-2">
        {unit.currency} {unit.price.toLocaleString("en-US")}
      </p>

      <h3 className="font-display text-2xl md:text-3xl font-medium text-brand-text leading-9">
        {unit.name}
      </h3>

      <div className="flex items-center gap-4 text-brand-muted text-base font-medium mt-4">
        <span className="flex items-center gap-1.5">
          <Scaling size={18} className="text-brand-icon" />
          {unit.size} m²
        </span>

        <span className="flex items-center gap-1.5">
          <BedDouble size={18} className="text-brand-icon" />
          {unit.beds} Bed
        </span>

        <span className="flex items-center gap-1.5">
          <Bath size={18} className="text-brand-icon" />
          {unit.baths} Bath
        </span>
      </div>
    </Link>
  );
};

export default PropertyCard;
