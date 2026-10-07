import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = newsletterSchema.parse(body);

    console.log('Newsletter signup:', validated.email);

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed',
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email',
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to subscribe',
      },
      { status: 500 }
    );
  }
}
