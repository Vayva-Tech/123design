'use client';

import Link from 'next/link';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { LeadFormSettingsModel } from '@/types/domain';

interface FormConfirmationProps {
  settings: LeadFormSettingsModel;
}

export function FormConfirmation({ settings }: FormConfirmationProps) {
  return (
    <div className="form-confirmation">
      <svg
        className="form-confirmation__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <Heading variant="h1">
        {settings.confirmationHeading || 'Thank you!'}
      </Heading>
      <Text variant="lead">
        {settings.confirmationBody ||
          "We've received your project details. Our team will review your submission and reach out within 24 hours to schedule your discovery call."}
      </Text>
      <div className="form-confirmation__actions">
        {settings.scheduleCallUrl && (
          <a
            href={settings.scheduleCallUrl}
            className="btn"
            data-variant="primary"
            data-size="large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Call Now
          </a>
        )}
        <Link href="/" className="btn" data-variant="secondary" data-size="large">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
