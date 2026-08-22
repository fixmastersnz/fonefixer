import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Server email configuration is missing.' },
        { status: 500 }
      );
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Fone Fixer <onboarding@resend.dev>',
        to: ['fonefixernz@gmail.com'],
        reply_to: body.email,
        subject: `New Booking - ${body.firstName} ${body.lastName}`,
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

    const resendData = await resendResponse.json();

    console.log('RESEND STATUS:', resendResponse.status);
    console.log('RESEND RESPONSE:', resendData);

    if (!resendResponse.ok) {
      return NextResponse.json(
        {
          error: 'Resend email failed',
          details: resendData,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Booking request sent successfully!',
        id: resendData.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('SEND EMAIL ERROR:', error);

    return NextResponse.json(
      {
        error: 'Server error',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
