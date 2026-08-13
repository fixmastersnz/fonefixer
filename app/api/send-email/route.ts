import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, EmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'phone', 'email', 'deviceBrand', 'deviceModel', 'issueDescription', 'serviceDate', 'serviceType', 'address'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const emailData: EmailData = {
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      email: body.email,
      deviceBrand: body.deviceBrand,
      deviceModel: body.deviceModel,
      issueDescription: body.issueDescription,
      serviceDate: body.serviceDate,
      serviceType: body.serviceType,
      address: body.address,
    };

    const result = await sendEmail(emailData);

    if (result.success) {
      return NextResponse.json(
        { message: 'Booking request sent successfully! We will contact you soon.' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send booking request. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 