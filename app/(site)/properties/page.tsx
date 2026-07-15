import { Suspense } from "react";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import siteConfig from "@/siteConfig";
import PropertiesClient from "./PropertiesClient";

export const revalidate = 60;

export const metadata = {
  title: "All Properties",
  description:
    "Browse all available properties across Egypt's top destinations.",
};

export default async function PropertiesPage() {
  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .order("created_at", { ascending: false });

  const units = (rawUnits || []).map(mapUnit);

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Suspense fallback={<div className="h-screen bg-[#1B2B3A]" />}>
        <PropertiesClient
          units={units}
          destinations={siteConfig.destinations as any[]}
          projects={siteConfig.projects as any[]}
        />
      </Suspense>
    </main>
  );
}
