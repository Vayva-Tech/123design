import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const leadFormSchema = z.object({
  productType: z.string().min(1, 'Product type is required'),
  developmentStage: z.string().min(1, 'Development stage is required'),
  needs: z.array(z.string()).min(1, 'At least one need is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  budget: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  description: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = leadFormSchema.parse(body);

    const honeypot = request.headers.get('x-honeypot');
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const lead = {
      _type: 'lead',
      _id: `lead-${Date.now()}`,
      ...validated,
      submittedAt: new Date().toISOString(),
      status: 'new',
    };

    console.log('Lead submitted:', lead);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error('Lead submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit lead',
      },
      { status: 500 }
    );
  }
}
