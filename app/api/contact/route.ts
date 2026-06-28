import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("API ROUTE HIT");
    console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

    const { name, email, role, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "carpilone.contact@gmail.com",
      subject: `New Contact Form (${role})`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("RESEND RESULT:", result);

    return NextResponse.json({
      success: true,
      data: result.data,
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);

    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}