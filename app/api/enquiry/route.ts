import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const data = await res.json();
    return data.success && data.score >= 0.5;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { recaptchaToken, ...formData } = body;

    // ── Skip reCAPTCHA in development ────────────────────────
    const isDev = process.env.NODE_ENV === "development";

    if (!isDev) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: "Missing reCAPTCHA token" },
          { status: 400 },
        );
      }

      const isHuman = await verifyRecaptcha(recaptchaToken);
      if (!isHuman) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 403 },
        );
      }
    }

    // ── Save to Supabase ──────────────────────────────────────
    const { error } = await supabaseAdmin.from("unit_form_requests").insert({
      id: `req-${Date.now()}`,
      name: formData.name,
      phone: formData.phone,
      email: formData.email || null,
      message: formData.message || null,
      unit: formData.unit || null,
      read: false,
      submitted_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Enquiry route error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
