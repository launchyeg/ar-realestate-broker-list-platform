import { supabaseAdmin } from "@/lib/supabase-admin";
import { mapUnit } from "@/lib/mapUnit";
import UnitsTable from "./UnitsTable";

export const dynamic = "force-dynamic";

export default async function UnitsPage() {
  const { data: rawUnits } = await supabaseAdmin
    .from("units")
    .select("*")
    .order("created_at", { ascending: false });

  const units = (rawUnits || []).map(mapUnit);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl text-stone-800 mb-1">Units</h1>
          <p className="text-stone-400 text-sm">
            {units.length} total properties
          </p>
        </div>
        <a
          href="/dashboard/add-unit"
          className="bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase px-5 py-3 hover:bg-[#2D4258] transition-colors rounded-lg"
        >
          + Add Unit
        </a>
      </div>
      <UnitsTable units={units} />
    </div>
  );
}
