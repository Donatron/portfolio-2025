import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #007BFF;">New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
            ${userMessage}
          </blockquote>
          <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
        </div>
      </div>
    `;

    // 🚀 Fire-and-forget send
    resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.EMAIL_ADDRESS,
      subject: `New Message From ${name}`,
      reply_to: email,
      html,
    }).catch(err => console.error('Resend error:', err));

    // Respond immediately
    return NextResponse.json({
      success: true,
      message: 'Your message has been received. Thanks!',
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
}
