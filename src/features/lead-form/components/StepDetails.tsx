'use client';

import { FormField } from '@/components/ui/FormField';
import { Textarea } from '@/components/ui/Textarea';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { LeadFormData } from '../types';

interface StepDetailsProps {
  data: Pick<LeadFormData, 'description'>;
  onChange: <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => void;
}

export function StepDetails({ data, onChange }: StepDetailsProps) {
  return (
    <div className="step-details">
      <div className="step-details__header">
        <Heading variant="h2">Tell us about your project</Heading>
        <Text variant="bodyLarge">
          Share as much detail as you'd like. The more we know, the better we can help.
        </Text>
      </div>
      <div className="step-details__fields">
        <FormField
          label="Project description"
          id="description"
          hint="What are you building? What problem are you solving? Any specific requirements or constraints?"
        >
          <Textarea
            id="description"
            value={data.description}
            onChange={(e) => onChange('description', e.target.value)}
            placeholder="Tell us about your project..."
            rows={8}
          />
        </FormField>
      </div>
    </div>
  );
}
