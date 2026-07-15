import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  try {
    await supabaseAdmin
      .from("units")
      .select("id", { count: "exact", head: true });

    return NextResponse.json({
      success: true,
      pingedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
