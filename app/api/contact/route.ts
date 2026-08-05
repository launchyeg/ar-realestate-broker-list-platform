import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) return true;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const data = await res.json();
    return data.success && data.score >= 0.3;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { recaptchaToken, ...formData } = body;

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
          { error: "reCAPTCHA failed" },
          { status: 403 },
        );
      }
    }

    const { error } = await supabaseAdmin.from("unit_form_requests").insert({
      id: `req-${Date.now()}`,
      name: formData.name || null,
      phone: formData.phone || null,
      email: formData.email || null,
      message: formData.message || null,
      unit: "contact-page",
      read: false,
      submitted_at: new Date().toISOString(),
    });

    if (error) throw error;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
