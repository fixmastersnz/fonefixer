import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Fone Fixer <onboarding@resend.dev>',
        to: ['fonefixernz@gmail.com'],
        reply_to: body.email,
        subject: `New Booking — ${body.firstName} ${body.lastName}`,
        text: `
New Booking Request

Name: ${body.firstName} ${body.lastName}
Phone: ${body.phone}
Email: ${body.email}
Device: ${body.deviceBrand} ${body.deviceModel}
Issue: ${body.issueDescription}
Date: ${body.serviceDate}
Service Type: ${body.serviceType}
Address: ${body.address}
        `,
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        { message: 'Booking request sent successfully!' },
        { status: 200 }
      );
    } else {
      const error = await response.json();
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send booking request. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again.' },
      { status: 500 }
    );
  }
}
