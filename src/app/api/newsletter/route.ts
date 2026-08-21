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
      email,
      source: source || "SheOwns Newsletter / Circle",
    };

    console.log("📥 New SheOwns Email Subscriber / Guide Lead:", leadData);

    const tasks: Promise<any>[] = [];

    // 1. Send Email Notification via Resend (if API key configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@sheowns.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "SheOwns <onboarding@resend.dev>";

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const emailPromise = resend.emails.send({
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
      tasks.push(emailPromise);
    }

    // 2. Forward to Google Sheets Webhook (if configured)
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.WEBHOOK_URL;
    if (sheetsWebhookUrl) {
      const sheetsPromise = fetch(sheetsWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      }).catch((err) => {
        console.error("Failed to forward lead to Google Sheets webhook:", err);
      });
      tasks.push(sheetsPromise);
    }

    if (tasks.length > 0) {
      await Promise.allSettled(tasks);
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch (error: any) {
    console.error("Newsletter submission error:", error);
    return NextResponse.json(
      { error: "Failed to process subscription." },
      { status: 500 }
    );
  }
}
