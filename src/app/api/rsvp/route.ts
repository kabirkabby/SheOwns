import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, guests = 1, investmentInterest = "", notes = "" } = body;

    // Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Full Name, Email, and WhatsApp phone number are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
      dateStyle: "full",
      timeStyle: "short",
    });

    const eventName = "SheOwns — Emirati Women's Day Open House";
    const eventDate = "Friday, 28 August 2026";
    const eventTime = "4:00 PM – 8:00 PM GST";
    const venueName = "Danube Properties";
    const venueAddress = "Sheikh Zayed Road, Dubai, United Arab Emirates";
    const googleMapsUrl = "https://maps.app.goo.gl/PViaFH2Kgag4ud3Y7";

    // Google Calendar URL Generator
    // Start: 2026-08-28 16:00 GST (12:00 UTC) -> End: 2026-08-28 20:00 GST (16:00 UTC)
    const gCalStart = "20260828T120000Z";
    const gCalEnd = "20260828T160000Z";
    const gCalTitle = encodeURIComponent(eventName);
    const gCalDetails = encodeURIComponent(
      `Private Open House & Masterclass by SheOwns (Aurex Privy × Being She).\n\n• VIP Guest: ${fullName}\n• Reserved Seats: ${guests}\n• Venue: ${venueName}, ${venueAddress}\n• Inquiries / Concierge: +971 50 181 5561\n\nHigh tea reception will be served.`
    );
    const gCalLocation = encodeURIComponent(`${venueName}, ${venueAddress}`);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gCalTitle}&dates=${gCalStart}/${gCalEnd}&details=${gCalDetails}&location=${gCalLocation}`;

    // Payload for Google Sheets
    const attendeeData = {
      timestamp,
      fullName,
      email,
      phone,
      guests: Number(guests) || 1,
      investmentInterest: investmentInterest || notes || "General Interest / Networking",
      source: "Event RSVP: Open House",
      status: "Confirmed",
    };

    console.log("📥 [SheOwns Event API] New RSVP received:", attendeeData);

    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@sheowns.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "SheOwns VIP Invitations <leads@leads.sheownsdubai.com>";
    const eventWebhookUrl = process.env.EVENT_SHEETS_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    const tasks: Promise<any>[] = [];

    // 1. Send VIP Confirmation Email to the Attendee
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      // Email to Guest
      const guestEmailPromise = resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: "info@sheowns.com",
        subject: `✨ VIP Invitation Confirmed: SheOwns Emirati Women's Day Open House (${fullName})`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #15091F; margin: 0; padding: 20px; color: #F8F5EF; }
              .container { max-width: 600px; margin: 0 auto; background-color: #21102F; border-radius: 20px; overflow: hidden; border: 1px solid #D6BB88; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4); }
              .header { background: linear-gradient(135deg, #15091F 0%, #3B235A 100%); color: #F8F5EF; padding: 36px 30px; text-align: center; border-bottom: 1px solid rgba(214, 187, 136, 0.25); }
              .header h1 { margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px; color: #D6BB88; }
              .header p { margin: 8px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2.5px; color: #F8F5EF; opacity: 0.85; }
              .body { padding: 36px 30px; }
              .vip-badge { display: inline-block; background: linear-gradient(90deg, #D6BB88, #B89B62); color: #21102F; padding: 6px 18px; border-radius: 50px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 24px; }
              .greeting { font-size: 20px; font-weight: 300; color: #F8F5EF; margin-bottom: 16px; line-height: 1.4; }
              .intro-text { font-size: 14px; color: rgba(248, 245, 239, 0.8); line-height: 1.6; margin-bottom: 28px; font-weight: 300; }
              .card { background-color: rgba(59, 35, 90, 0.4); border: 1px solid rgba(214, 187, 136, 0.3); border-radius: 14px; padding: 24px; margin-bottom: 28px; }
              .row { margin-bottom: 14px; }
              .row:last-child { margin-bottom: 0; }
              .label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #D6BB88; font-weight: 600; margin-bottom: 4px; }
              .val { font-size: 15px; color: #F8F5EF; font-weight: 400; }
              .btn-primary { display: block; background: linear-gradient(90deg, #D6BB88, #B89B62); color: #21102F !important; text-decoration: none; text-align: center; padding: 14px 28px; border-radius: 50px; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 10px 0; }
              .btn-secondary { display: block; background-color: rgba(214, 187, 136, 0.15); color: #D6BB88 !important; text-decoration: none; text-align: center; padding: 12px 24px; border-radius: 50px; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(214, 187, 136, 0.4); margin-bottom: 12px; }
              .btn-whatsapp { display: block; background-color: #25D366; color: #ffffff !important; text-decoration: none; text-align: center; padding: 12px 24px; border-radius: 50px; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
              .footer { background-color: #15091F; padding: 24px; text-align: center; font-size: 11px; color: rgba(248, 245, 239, 0.5); border-top: 1px solid rgba(214, 187, 136, 0.15); }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>SHEOWNS</h1>
                <p>Emirati Women's Day Open House · VIP Pass</p>
              </div>
              <div class="body">
                <div style="text-align: center;">
                  <div class="vip-badge">✨ VIP Reservation Confirmed</div>
                </div>
                
                <div class="greeting">Dear ${fullName},</div>
                <div class="intro-text">
                  We are delighted to confirm your guest reservation for the exclusive <strong>SheOwns Emirati Women's Day Open House</strong> in Dubai. High Tea, private market intelligence, and curated developer allocations await you.
                </div>

                <div class="card">
                  <div class="row">
                    <div class="label">Guest Name</div>
                    <div class="val"><strong>${fullName}</strong> (${guests} ${Number(guests) === 1 ? "Seat Reserved" : "Seats Reserved"})</div>
                  </div>
                  <div class="row">
                    <div class="label">Date</div>
                    <div class="val">📅 ${eventDate}</div>
                  </div>
                  <div class="row">
                    <div class="label">Time</div>
                    <div class="val">⏰ ${eventTime}</div>
                  </div>
                  <div class="row">
                    <div class="label">Venue</div>
                    <div class="val">📍 ${venueName}<br /><span style="font-size: 12px; color: rgba(248,245,239,0.7);">${venueAddress}</span></div>
                  </div>
                  <div class="row">
                    <div class="label">Attire</div>
                    <div class="val">👗 Elegant / Business Chic</div>
                  </div>
                </div>

                <div>
                  <a href="${googleCalendarUrl}" target="_blank" class="btn-primary">
                    📅 Add to Google Calendar
                  </a>
                  <a href="${googleMapsUrl}" target="_blank" class="btn-secondary">
                    📍 Get Venue Directions (Google Maps)
                  </a>
                  <a href="https://wa.me/971501815561?text=Hello%20SheOwns%20Concierge,%20my%20name%20is%20${encodeURIComponent(fullName)}.%20I%20have%20confirmed%20my%20RSVP%20for%20the%20Open%20House." target="_blank" class="btn-whatsapp">
                    💬 WhatsApp Event Concierge
                  </a>
                </div>
              </div>
              <div class="footer">
                © 2026 SheOwns · Aurex Privy Real Estate × Being She Initiative<br />
                Suite no. 1509, The Exchange Tower, Business Bay, Dubai, UAE
              </div>
            </div>
          </body>
          </html>
        `,
      }).catch((err) => console.error("Error sending guest RSVP confirmation:", err));

      tasks.push(guestEmailPromise);

      // Email Notification to SheOwns Team
      const toTeamRecipients = notificationEmail.includes(",")
        ? notificationEmail.split(",").map((e) => e.trim())
        : notificationEmail;

      const teamEmailPromise = resend.emails.send({
        from: fromEmail,
        to: toTeamRecipients,
        replyTo: email,
        subject: `🎟️ New Event RSVP: ${fullName} (${guests} Seat${Number(guests) > 1 ? "s" : ""})`,
        html: `
          <div style="font-family: sans-serif; padding: 24px; background-color: #F8F5EF; color: #21102F;">
            <div style="max-width: 550px; margin: auto; background: white; border-radius: 16px; padding: 28px; border: 1px solid #D6BB88;">
              <h2 style="color: #3B235A; margin-top: 0;">New Open House RSVP</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>WhatsApp:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Guests:</strong> ${guests}</p>
              <p><strong>Interest / Notes:</strong> ${investmentInterest || notes || "None"}</p>
              <p><strong>Timestamp:</strong> ${timestamp}</p>
              <div style="margin-top: 20px;">
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(fullName)},%20we%20have%20received%20your%20RSVP%20for%20the%20SheOwns%20Open%20House!" style="background-color: #25D366; color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 13px;">
                  💬 Contact Attendee on WhatsApp
                </a>
              </div>
            </div>
          </div>
        `,
      }).catch((err) => console.error("Error sending team notification:", err));

      tasks.push(teamEmailPromise);
    }

    // 2. Forward to Dedicated Event Google Sheet Webhook
    if (eventWebhookUrl) {
      const sheetsPromise = fetch(eventWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(attendeeData),
        redirect: "follow",
      }).catch((err) => {
        console.error("Failed to forward RSVP to Google Sheets webhook:", err);
      });

      tasks.push(sheetsPromise);
    }

    if (tasks.length > 0) {
      await Promise.allSettled(tasks);
    }

    return NextResponse.json({
      success: true,
      message: "RSVP confirmed successfully!",
      calendarUrl: googleCalendarUrl,
      eventDetails: {
        eventName,
        eventDate,
        eventTime,
        venueName,
        venueAddress,
        googleMapsUrl,
      },
    });
  } catch (error: any) {
    console.error("RSVP submission error:", error);
    return NextResponse.json(
      { error: "Failed to process RSVP. Please try again or reach out directly on WhatsApp." },
      { status: 500 }
    );
  }
}
