import Link from "next/link";
import { readFileSync } from "fs";
import { join } from "path";
import { supabaseAdmin } from "@/lib/supabase-admin";
import siteConfig from "@/siteConfig";

export const dynamic = "force-dynamic";

function readJSON(file: string) {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), "data", file), "utf-8"));
  } catch {
    return [];
  }
}

export default async function DashboardPage() {
  // ── Fetch real data ───────────────────────────────────────
  const [{ data: units }, { data: requests }] = await Promise.all([
    supabaseAdmin.from("units").select("*"),
    supabaseAdmin
      .from("unit_form_requests")
      .select("*")
      .order("submitted_at", { ascending: false }),
  ]);

  const allUnits = units || [];
  const allRequests = requests || [];

  const available = allUnits.filter((u) => u.status === "available").length;
  const sold = allUnits.filter(
    (u) => u.status === "sold" || u.status === "reserved",
  ).length;
  const newReqs = allRequests.filter((r) => !r.read).length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl text-stone-800 mb-1">Overview</h1>
        <p className="text-stone-400 text-sm">
          Welcome back. Here's what's happening.
        </p>
      </div>

      {/* ── STAT CARDS ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Units", value: allUnits.length },
          { label: "Available", value: available },
          { label: "Sold / Reserved", value: sold },
          { label: "New Requests", value: newReqs },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-3xl font-medium text-slate-800 mb-1">
              {stat.value}
            </p>
            <p className="text-[10px] font-medium text-slate-500 tracking-wider uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── DESTINATIONS & PROJECTS ────────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Destinations */}
        <div className="bg-white rounded-xl border border-stone-200 p-6">
          <h2 className="font-medium text-stone-800 mb-4 text-sm tracking-wide uppercase">
            {siteConfig.destinations.length} Destinations
          </h2>
          <div className="max-h-[336px] overflow-y-auto space-y-2">
            {(siteConfig.destinations as any[]).map((d) => {
              const count = allUnits.filter(
                (u) => u.destination === d.slug,
              ).length;
              const avail = allUnits.filter(
                (u) => u.destination === d.slug && u.status === "available",
              ).length;
              return (
                <div
                  key={d.slug}
                  className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0"
                >
                  <span className="text-sm text-stone-700">{d.label}</span>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-emerald-600 font-medium">
                      {avail} available
                    </span>
                    <span className="text-xs font-medium text-stone-400">
                      {count} units
                    </span>
                    <Link
                      href={`/destinations/${d.slug}`}
                      target="_blank"
                      className="text-[10px] text-[#C9A96E] font-medium uppercase tracking-wide hover:underline"
                    >
                      View
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white rounded-xl border border-stone-200 p-6">
          <h2 className="font-medium text-stone-800 mb-4 text-sm tracking-wide uppercase">
            {siteConfig.projects.length} Projects
          </h2>
          <div className="max-h-[336px] overflow-y-auto space-y-2">
            {(siteConfig.projects as any[]).map((p) => {
              const count = allUnits.filter((u) => u.project === p.slug).length;
              const avail = allUnits.filter(
                (u) => u.project === p.slug && u.status === "available",
              ).length;
              return (
                <div
                  key={p.slug}
                  className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0"
                >
                  <span className="text-sm text-stone-700">{p.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-emerald-600 font-medium">
                      {avail} available
                    </span>
                    <span className="text-xs font-medium text-stone-400">
                      {count} units
                    </span>
                    <Link
                      href={`/projects/${p.slug}`}
                      target="_blank"
                      className="text-[10px] text-[#C9A96E] font-medium uppercase tracking-wide hover:underline"
                    >
                      View
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── LATEST REQUESTS ────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-stone-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-stone-800 text-sm tracking-wide uppercase">
            Latest Requests
          </h2>
          <Link
            href="/dashboard/requests"
            className="text-[#C9A96E] text-xs font-medium hover:underline"
          >
            View all
          </Link>
        </div>
        {allRequests.length === 0 ? (
          <p className="text-stone-400 text-sm text-center py-8">
            No requests yet.
          </p>
        ) : (
          <div className="space-y-3">
            {allRequests.slice(0, 6).map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between py-3 border-b border-stone-100 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-stone-800">{r.name}</p>
                  <p className="text-xs text-stone-400">
                    {r.unit === "contact-page"
                      ? "Contact Page"
                      : r.unit || "General enquiry"}
                    · {r.phone}
                  </p>
                </div>
                <span className="text-[10px] text-stone-400">
                  {new Date(r.submitted_at).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
