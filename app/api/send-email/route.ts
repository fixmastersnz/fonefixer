import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await sendEmail(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Failed to send booking request',
          details: result.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Booking request sent successfully!',
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
