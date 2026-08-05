import { supabaseAdmin } from "@/lib/supabase-admin";
import RequestsTable from "./RequestsTable";

export const dynamic = "force-dynamic";

export default async function RequestsPage() {
  const { data: requests } = await supabaseAdmin
    .from("unit_form_requests")
    .select("*")
    .order("submitted_at", { ascending: false });

  return (
    <main>
      <RequestsTable requests={requests || []} />
    </main>
  );
}
