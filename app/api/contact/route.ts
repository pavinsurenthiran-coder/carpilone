import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, role, message } = await req.json();

    const { error } = await resend.emails.send({
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

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: error.message ?? JSON.stringify(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Something went wrong.",
      },
      { status: 500 }
    );
  }
}