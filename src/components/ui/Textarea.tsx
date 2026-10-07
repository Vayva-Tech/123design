import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, id, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        id={id}
        className="form-textarea"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
