'use client';

import { ChoiceCard } from '@/components/ui/ChoiceCard';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

interface StepMultiSelectProps {
  title: string;
  description?: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
  name: string;
  error?: string;
}

export function StepMultiSelect({
  title,
  description,
  options,
  values,
  onChange,
  name,
  error,
}: StepMultiSelectProps) {
  const toggleOption = (option: string) => {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option));
    } else {
      onChange([...values, option]);
    }
  };

  return (
    <div className="step-multi-select">
      <div className="step-multi-select__header">
        <Heading variant="h2">{title}</Heading>
        {description && <Text variant="bodyLarge">{description}</Text>}
      </div>
      <div className="step-multi-select__options">
        {options.map((option) => (
          <ChoiceCard
            key={option}
            name={`${name}-${option}`}
            value={option}
            label={option}
            selected={values.includes(option)}
            onChange={() => toggleOption(option)}
          />
        ))}
      </div>
      {error && (
        <p className="step-multi-select__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
