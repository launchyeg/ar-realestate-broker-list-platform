import { Suspense } from "react";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import siteConfig from "@/siteConfig";
import PropertiesClient from "./PropertiesClient";

export const revalidate = 60;

export const metadata = {
  title: "All Properties | AR Real Estate Redsea",
  description:
    "Browse all available exclusive properties, beachfront villas, and resort apartments across the Red Sea's top destinations.",
  alternates: { canonical: "/properties" },
  openGraph: {
    title: "All Properties | AR Real Estate Redsea",
    description:
      "Browse all available properties across Egypt's top Red Sea destinations.",
    url: "/properties",
  },
};

export default async function PropertiesPage() {
  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .order("created_at", { ascending: false });

  const units = (rawUnits || []).map(mapUnit);

  return (
    <main>
      <PropertiesClient
        units={units}
        destinations={siteConfig.destinations as any[]}
        projects={siteConfig.projects as any[]}
      />
    </main>
  );
}
