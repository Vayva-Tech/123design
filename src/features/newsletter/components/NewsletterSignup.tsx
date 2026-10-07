'use client';

import { useState } from 'react';
import { FormField } from '@/components/ui/FormField';
import { Input } from '@/components/ui/Input';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError('Failed to subscribe. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="newsletter-signup newsletter-signup--success">
        <p className="newsletter-signup__message">
          Thanks for subscribing! Check your inbox for confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="newsletter-signup">
      <h3 className="newsletter-signup__heading">Stay Updated</h3>
      <p className="newsletter-signup__description">
        Get product insights and studio updates delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-signup__form">
        <div className="newsletter-signup__field">
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="you@company.com"
            disabled={status === 'loading'}
            aria-label="Email address"
          />
          {error && (
            <p className="newsletter-signup__error" role="alert">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="btn"
          data-variant="primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}
