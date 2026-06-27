import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, role, message } = await req.json();

    console.log("API Key exists:", !!process.env.RESEND_API_KEY);

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

    console.log("Resend response:", result);

    if (result.error) {
      console.error("RESEND ERROR:", result.error);

      return NextResponse.json(
        {
          error: result.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);

    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : JSON.stringify(err, null, 2),
      },
      { status: 500 }
    );
  }
}