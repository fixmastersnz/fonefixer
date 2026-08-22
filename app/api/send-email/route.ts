import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Fone Fixer" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: body.email,
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
    });

    return NextResponse.json(
      { message: 'Booking request sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again.' },
      { status: 500 }
    );
  }
}
