'use client';

import { FormField } from '@/components/ui/FormField';
import { Input } from '@/components/ui/Input';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { LeadFormData } from '../types';

interface StepContactProps {
  data: Pick<LeadFormData, 'name' | 'email' | 'company' | 'phone'>;
  errors: Record<string, string>;
  onChange: <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => void;
}

export function StepContact({ data, errors, onChange }: StepContactProps) {
  return (
    <div className="step-contact">
      <div className="step-contact__header">
        <Heading variant="h2">How can we reach you?</Heading>
        <Text variant="bodyLarge">
          We'll use this to schedule your discovery call.
        </Text>
      </div>
      <div className="step-contact__fields">
        <FormField label="Name" id="name" error={errors.name} required>
          <Input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="Your full name"
            autoComplete="name"
          />
        </FormField>
        <FormField label="Email" id="email" error={errors.email} required>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </FormField>
        <FormField label="Company" id="company">
          <Input
            id="company"
            type="text"
            value={data.company}
            onChange={(e) => onChange('company', e.target.value)}
            placeholder="Your company name"
            autoComplete="organization"
          />
        </FormField>
        <FormField label="Phone" id="phone">
          <Input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="(555) 123-4567"
            autoComplete="tel"
          />
        </FormField>
      </div>
    </div>
  );
}
