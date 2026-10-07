import type { Metadata } from 'next';
import { ContentPage } from '@/features/content-pages/components';
import {
  PRIVACY_EYEBROW,
  PRIVACY_HEADING,
  PRIVACY_SECTIONS,
} from '@/features/content-pages/content/privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for 123.design. How we collect, use, and protect your information.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — 123.design',
    description: 'How we collect, use, and protect your information.',
  },
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow={PRIVACY_EYEBROW}
      heading={PRIVACY_HEADING}
      lastUpdated="September 2026"
      sections={PRIVACY_SECTIONS}
    />
  );
}
