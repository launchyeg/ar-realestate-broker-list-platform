import { supabaseAdmin } from "@/lib/supabase-admin";
import RequestsTable from "./RequestsTable";

export const dynamic = "force-dynamic";

export default async function RequestsPage() {
  const { data: requests } = await supabaseAdmin
    .from("unit_form_requests")
    .select("*")
    .order("submitted_at", { ascending: false });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font/display text-3xl text-stone-800 mb-1">Requests</h1>
        <p className="text-stone-400 text-sm">
          {(requests || []).length} total enquiries
        </p>
      </div>
      <RequestsTable requests={requests || []} />
    </div>
  );
}
