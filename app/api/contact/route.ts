import { NextRequest, NextResponse } from "next/server";
import siteConfig from "@/siteConfig";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, interest, message } = await req.json();

    // ── Initialize Resend inside the function ─────────────
    // This prevents build errors when env var is missing
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `${siteConfig.brokerName} <onboarding@resend.dev>`,
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: email,
      subject: `New Enquiry — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">

          <div style="background: #1B2B3A; padding: 32px; text-align: center;">
            <h1 style="color: #C9A96E; margin: 0; font-size: 24px; letter-spacing: 4px;">
              ${siteConfig.brokerName}
            </h1>
            <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">
              New Contact Enquiry
            </p>
          </div>

          <div style="background: #f9f9f7; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e0d8; color: #a8a29e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">
                  Full Name
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e0d8; color: #1c1917; font-size: 14px; font-weight: 500;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e0d8; color: #a8a29e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
                  Phone
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e0d8; color: #1c1917; font-size: 14px; font-weight: 500;">
                  <a href="tel:${phone}" style="color: #1B2B3A;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e0d8; color: #a8a29e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
                  Email
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e0d8; color: #1c1917; font-size: 14px; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #1B2B3A;">${email || "—"}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e0d8; color: #a8a29e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
                  Message
                </td>
                <td style="padding: 12px 0; color: #1c1917; font-size: 14px; line-height: 1.6;">
                  ${message || "—"}
                </td>
              </tr>
            </table>
          </div>

          <div style="background: #1B2B3A; padding: 20px 32px; text-align: center;">
            <a href="mailto:${email}"
              style="display: inline-block; background: #C9A96E; color: white; text-decoration: none; padding: 10px 24px; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">
              Reply to ${name}
            </a>
          </div>

          <p style="text-align: center; color: #a8a29e; font-size: 11px; padding: 16px;">
            Sent from ${siteConfig.seo.siteUrl}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
