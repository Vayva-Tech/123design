import type { Metadata } from 'next';
import { ContentPage } from '@/features/content-pages/components';
import {
  TERMS_EYEBROW,
  TERMS_HEADING,
  TERMS_SECTIONS,
} from '@/features/content-pages/content/terms';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the 123.design website.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Use — 123.design',
    description: 'Terms and conditions for using the 123.design website and services.',
  },
};

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow={TERMS_EYEBROW}
      heading={TERMS_HEADING}
      lastUpdated="September 2026"
      sections={TERMS_SECTIONS}
    />
  );
}
