import React from 'react';

interface ChoiceCardProps {
  value: string;
  label: string;
  selected: boolean;
  onChange: (value: string) => void;
  name: string;
  description?: string;
}

export function ChoiceCard({ value, label, selected, onChange, name, description }: ChoiceCardProps) {
  const id = `${name}-${value}`;

  return (
    <label
      htmlFor={id}
      className="choice-card"
      data-selected={selected ? '' : undefined}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="choice-card__input"
      />
      <span className="choice-card__content">
        <span className="choice-card__label">{label}</span>
        {description && (
          <span className="choice-card__description">{description}</span>
        )}
      </span>
      <span className="choice-card__indicator" aria-hidden="true" />
    </label>
  );
}
