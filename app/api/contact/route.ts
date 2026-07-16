import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message } = await req.json();

    const { error } = await supabaseAdmin.from("unit_form_requests").insert({
      id: `req-${Date.now()}`,
      name: name || null,
      phone: phone || null,
      email: email || null,
      message: message || null,
      unit: "contact-page",
      read: false,
      submitted_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
