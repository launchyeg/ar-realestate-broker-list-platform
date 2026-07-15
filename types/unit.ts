export interface Unit {
  id: string;
  name: string;
  slug: string;
  destination: string;
  destinationLabel: string;
  project: string;
  projectLabel: string;
  price: number;
  currency: string;
  beds: number;
  baths: number;
  size: number;
  type: string;
  status: string;
  listingType: string;
  featured: boolean;
  coverImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  deliveryYear: number | null;
}
