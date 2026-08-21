import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, preferredDate, preferredTimeSlot, timeline, message } = body;

    // Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Full Name, Email, and Phone number are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
      dateStyle: "full",
      timeStyle: "short",
    });

    const contactTiming = preferredDate && preferredTimeSlot
      ? `${preferredDate} (${preferredTimeSlot})`
      : timeline || "Immediate / Flexible";

    const leadData = {
      timestamp,
      fullName,
      email,
      phone,
      preferredDate: preferredDate || "Not Specified",
      preferredTimeSlot: preferredTimeSlot || "Not Specified",
      preferredContactTime: contactTiming,
      message: message || "No additional notes provided.",
      source: "Website Consultation Booking",
    };

    console.log("📥 [SheOwns API] Processing consultation lead:", leadData);

    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@sheowns.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "SheOwns Leads <leads@leads.sheownsdubai.com>";
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.WEBHOOK_URL;

    console.log("⚙️ [SheOwns API] Environment check:", {
      hasResendKey: Boolean(resendApiKey),
      notificationEmail,
      fromEmail,
      hasSheetsWebhook: Boolean(sheetsWebhookUrl),
    });

    let emailResult = null;
    let sheetsResult = null;

    // 1. Send Email via Resend
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const toRecipients = notificationEmail.includes(",")
          ? notificationEmail.split(",").map((e) => e.trim())
          : notificationEmail;

        const emailRes = await resend.emails.send({
          from: fromEmail,
          to: toRecipients,
          replyTo: email,
          subject: `🌟 New Consultation Request: ${fullName} (${contactTiming})`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F8F5EF; margin: 0; padding: 20px; color: #21102F; }
                .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #D6BB88; box-shadow: 0 10px 30px rgba(33, 16, 47, 0.08); }
                .header { background: linear-gradient(135deg, #21102F 0%, #3B235A 100%); color: #F8F5EF; padding: 32px; text-align: center; }
                .header h1 { margin: 0; font-size: 26px; font-weight: 300; letter-spacing: 1px; color: #D6BB88; }
                .header p { margin: 6px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #F8F5EF; opacity: 0.8; }
                .body { padding: 32px; }
                .badge { display: inline-block; background-color: #EFE9DF; color: #3B235A; padding: 6px 14px; border-radius: 50px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 24px; }
                .field { margin-bottom: 20px; border-bottom: 1px solid #F0ECE1; padding-bottom: 12px; }
                .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #8A7A99; font-weight: 600; margin-bottom: 4px; }
                .value { font-size: 16px; color: #21102F; font-weight: 400; line-height: 1.5; }
                .value-highlight { color: #3B235A; font-weight: 600; }
                .actions { margin-top: 32px; text-align: center; }
                .btn-whatsapp { display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-weight: bold; font-size: 13px; margin-right: 10px; }
                .btn-email { display: inline-block; background-color: #3B235A; color: #F8F5EF; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-weight: bold; font-size: 13px; }
                .footer { background-color: #F8F5EF; padding: 20px; text-align: center; font-size: 11px; color: #8A7A99; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>SHEOWNS</h1>
                  <p>Private Advisory Consultation Lead</p>
                </div>
                <div class="body">
                  <div class="badge">📅 Submitted on ${timestamp} (Dubai Time)</div>
                  
                  <div class="field">
                    <div class="label">Client Name</div>
                    <div class="value value-highlight">${fullName}</div>
                  </div>

                  <div class="field">
                    <div class="label">Phone / WhatsApp</div>
                    <div class="value">
                      <a href="tel:${phone}" style="color: #3B235A; text-decoration: none; font-weight: 600;">${phone}</a>
                    </div>
                  </div>

                  <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value">
                      <a href="mailto:${email}" style="color: #3B235A; text-decoration: none;">${email}</a>
                    </div>
                  </div>

                  <div class="field">
                    <div class="label">Preferred Contact Time</div>
                    <div class="value" style="color: #B89B62; font-weight: 600;">🗓️ ${contactTiming}</div>
                  </div>

                  <div class="field" style="border-bottom: none;">
                    <div class="label">Client Investment Goals / Notes</div>
                    <div class="value" style="background-color: #FAF7F2; padding: 14px; border-radius: 8px; border-left: 3px solid #D6BB88; font-style: italic;">
                      "${message || "No specific notes provided."}"
                    </div>
                  </div>

                  <div class="actions">
                    <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(fullName)},%20thank%20you%20for%20reaching%20out%20to%20SheOwns.%20I%20am%20your%20dedicated%20senior%20advisor." target="_blank" class="btn-whatsapp">
                      💬 Contact on WhatsApp
                    </a>
                    <a href="mailto:${email}?subject=Your%20SheOwns%20Strategy%20Session" class="btn-email">
                      ✉️ Reply via Email
                    </a>
                  </div>
                </div>
                <div class="footer">
                  © ${new Date().getFullYear()} SheOwns · Aurex Privy Real Estate × Being She Initiative
                </div>
              </div>
            </body>
            </html>
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
    } else {
      console.warn("⚠️ [Resend Skipped]: RESEND_API_KEY environment variable is not defined.");
    }

    // 2. Forward to Google Sheets Webhook
    if (sheetsWebhookUrl) {
      try {
        console.log("📤 [Sheets] Sending POST to webhook:", sheetsWebhookUrl);
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
        console.error("❌ [Sheets Error]: Failed to post to webhook:", err);
        sheetsResult = { success: false, error: err.message };
      }
    } else {
      console.warn("⚠️ [Sheets Skipped]: GOOGLE_SHEETS_WEBHOOK_URL environment variable is not defined.");
    }

    return NextResponse.json({
      success: true,
      message: "Your consultation request has been received. Our advisory team will reach out within your preferred time slot.",
      debug: {
        email: emailResult,
        sheets: sheetsResult,
      },
    });
  } catch (error: any) {
    console.error("❌ [Consultation API Fatal Error]:", error);
    return NextResponse.json(
      { error: "Failed to process consultation request: " + (error.message || "Unknown error") },
      { status: 500 }
    );
  }
}
