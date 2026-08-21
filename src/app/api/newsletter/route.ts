import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
      dateStyle: "full",
      timeStyle: "short",
    });

    const leadData = {
      timestamp,
      fullName: "Newsletter Subscriber",
      phone: "N/A",
      email,
      preferredContactTime: "N/A",
      message: "Subscribed via " + (source || "Website"),
      source: source || "SheOwns Newsletter / Circle",
    };

    console.log("📥 [SheOwns API] New subscriber:", leadData);

    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@sheowns.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "SheOwns <onboarding@resend.dev>";
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.WEBHOOK_URL;

    let emailResult = null;
    let sheetsResult = null;

    // 1. Send Email Notification via Resend (if API key configured)
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const emailRes = await resend.emails.send({
          from: fromEmail,
          to: notificationEmail,
          replyTo: email,
          subject: `✨ New ${source || "Circle Subscriber"}: ${email}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; background-color: #F8F5EF; color: #21102F;">
              <div style="max-width: 500px; margin: auto; background: white; border-radius: 12px; padding: 24px; border: 1px solid #D6BB88;">
                <h2 style="color: #3B235A; margin-top: 0;">New SheOwns Subscriber</h2>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Source:</strong> ${source || "General Subscription"}</p>
                <p><strong>Timestamp:</strong> ${timestamp}</p>
              </div>
            </div>
          `,
        });

        if (emailRes.error) {
          console.error("❌ [Resend Error]:", emailRes.error);
          emailResult = { success: false, error: emailRes.error };
        } else {
          console.log("✅ [Resend Success]: Email sent with ID:", emailRes.data?.id);
          emailResult = { success: true, id: emailRes.data?.id };
        }
      } catch (err: any) {
        console.error("❌ [Resend Exception]:", err);
        emailResult = { success: false, error: err.message };
      }
    }

    // 2. Forward to Google Sheets Webhook
    if (sheetsWebhookUrl) {
      try {
        console.log("📤 [Sheets] Sending subscriber to webhook:", sheetsWebhookUrl);
        const sheetsRes = await fetch(sheetsWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(leadData),
          redirect: "follow",
        });

        const resText = await sheetsRes.text();
        console.log("📥 [Sheets Response]: Status:", sheetsRes.status, "Body:", resText);
        sheetsResult = { status: sheetsRes.status, response: resText };
      } catch (err: any) {
        console.error("❌ [Sheets Error]: Failed to post subscriber to webhook:", err);
        sheetsResult = { success: false, error: err.message };
      }
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully!",
      debug: {
        email: emailResult,
        sheets: sheetsResult,
      },
    });
  } catch (error: any) {
    console.error("❌ [Newsletter API Fatal Error]:", error);
    return NextResponse.json(
      { error: "Failed to process subscription." },
      { status: 500 }
    );
  }
}
