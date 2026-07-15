import { MetadataRoute } from "next";
import siteConfig from "@/siteConfig";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.seo.siteUrl;

  // ── Fetch property slugs safely ───────────────────────────
  let propertyPages: MetadataRoute.Sitemap = [];

  try {
    // Only import if env vars exist
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      const { supabaseAdmin } = await import("@/lib/supabase-admin");
      const { data: units } = await supabaseAdmin
        .from("units")
        .select("slug, created_at");

      propertyPages = (units || []).map((u) => ({
        url: `${base}/properties/${u.slug}`,
        lastModified: new Date(u.created_at || new Date()),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.warn("[Sitemap] Could not fetch units from Supabase:", error);
  }

  // ── Static pages ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/destinations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/properties`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // ── Destination pages ─────────────────────────────────────
  const destinationPages: MetadataRoute.Sitemap = (
    siteConfig.destinations as any[]
  ).map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ── Project pages ─────────────────────────────────────────
  const projectPages: MetadataRoute.Sitemap = (
    siteConfig.projects as any[]
  ).map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...destinationPages,
    ...projectPages,
    ...propertyPages,
  ];
}
