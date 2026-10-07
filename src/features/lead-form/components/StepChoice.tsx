'use client';

import { ChoiceCard } from '@/components/ui/ChoiceCard';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

interface StepChoiceProps {
  title: string;
  description?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  error?: string;
}

export function StepChoice({
  title,
  description,
  options,
  value,
  onChange,
  name,
  error,
}: StepChoiceProps) {
  return (
    <div className="step-choice">
      <div className="step-choice__header">
        <Heading variant="h2">{title}</Heading>
        {description && <Text variant="bodyLarge">{description}</Text>}
      </div>
      <div className="step-choice__options">
        {options.map((option) => (
          <ChoiceCard
            key={option}
            name={name}
            value={option}
            label={option}
            selected={value === option}
            onChange={onChange}
          />
        ))}
      </div>
      {error && (
        <p className="step-choice__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
