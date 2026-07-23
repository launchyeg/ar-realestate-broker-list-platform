import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Destination {
  slug: string;
  label: string;
  image: string;
  tagline: string;
  destinationLabel?: string;
}

const DestinationCard = ({ destinations }: { destinations: Destination }) => {
  return (
    <Link href={`/destinations/${destinations.slug}`}>
      <div className="relative h-80 md:h-[500px] overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${destinations.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-6 right-6 md:top-8 md:right-8 w-fit p-3 bg-white rounded-full">
          <ArrowUpRight />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
            {destinations.label}
          </h3>
          <p className="max-w-lg text-white/60 text-base font-medium">
            {destinations.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
