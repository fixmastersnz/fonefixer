
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Soro sends article metadata and content
    const { title, slug, content, featuredImage } = body;

    // TODO: Save to your database (e.g. Supabase, Prisma, or CMS)
    console.log('Received Soro article:', title);

    return NextResponse.json({ success: true, message: 'Article received' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Webhook failed' }, { status: 500 });
  }
}
