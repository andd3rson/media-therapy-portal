import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if Resend API key is set
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      return NextResponse.json(
        { 
          error: 'Resend API key missing',
          resendApiKey: resendApiKey ? 'Set' : 'Missing',
          message: 'Please set RESEND_API_KEY in your .env.local file'
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Resend configuration is properly set up',
        resendApiKey: 'Set',
        provider: 'Resend',
        note: 'Make sure to verify your domain in Resend dashboard'
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error checking Resend configuration' },
      { status: 500 }
    );
  }
}
