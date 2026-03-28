import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, service, urgency, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Log the submission (in production, send to CRM / email service / database)
    console.log("📧 New contact form submission:", {
      name,
      email,
      phone: phone || "Not provided",
      service: service || "Not specified",
      urgency,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
