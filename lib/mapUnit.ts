import type { Unit } from "@/types/unit";

export function mapUnit(u: any): Unit {
  return {
    id: u.id,
    name: u.name,
    slug: u.slug,
    destination: u.destination,
    destinationLabel: u.destination_label,
    project: u.project,
    projectLabel: u.project_label,
    price: u.price,
    currency: u.currency,
    beds: u.beds,
    baths: u.baths,
    size: u.size,
    type: u.type,
    status: u.status,
    listingType: u.listing_type,
    featured: u.featured,
    coverImage: u.cover_image,
    gallery: u.gallery || [],
    description: u.description,
    highlights: u.highlights || [],
    deliveryYear: u.delivery_year || null,
  };
}
