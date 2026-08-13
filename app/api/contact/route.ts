import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER || 'farhanrjcw389@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'oymt efaz haej zhtu',
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Fone Fixer Contact Form" <${process.env.GMAIL_USER || 'farhanrjcw389@gmail.com'}>`,
      to: 'farhanrjcw389@gmail.com',
      subject: `New Contact Form Submission: ${body.subject}`,
      text: `
        You have received a new message from the Fone Fixer contact form.

        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone || 'Not provided'}
        Urgency: ${body.urgency || 'Not specified'}
        
        Message:
        ${body.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
          <p><strong>Urgency:</strong> ${body.urgency || 'Not specified'}</p>
          <h3>Message:</h3>
          <p>${body.message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    });

    console.log('Message sent: %s', info.messageId);
    
    return NextResponse.json(
      { message: 'Your message has been sent successfully! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
