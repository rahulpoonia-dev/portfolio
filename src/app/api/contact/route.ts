import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: "Rahul Portfolio",
          email: "rahulatehub@gmail.com", 
        },
        to: [
          {
            email: process.env.CONTACT_EMAIL!,
            name: "Rahul",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `New Portfolio Message from ${name}`,
        htmlContent: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #18181b; margin-bottom: 4px;">New Message from Portfolio</h2>
            <p style="color: #71717a; font-size: 14px; margin-bottom: 24px;">Someone reached out via your portfolio contact form.</p>
            
            <div style="background: #f4f4f5; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
              <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
            </div>

            <div style="background: #f4f4f5; border-radius: 8px; padding: 20px;">
              <p style="margin: 0 0 8px 0;"><strong>Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; color: #3f3f46;">${message}</p>
            </div>

            <p style="color: #a1a1aa; font-size: 12px; margin-top: 24px;">
              You can reply directly to this email to respond to ${name}.
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Brevo error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}