import type { Metadata } from 'next';
import { ContentPage } from '@/features/content-pages/components';
import {
  ACCESSIBILITY_EYEBROW,
  ACCESSIBILITY_HEADING,
  ACCESSIBILITY_SECTIONS,
} from '@/features/content-pages/content/accessibility';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Accessibility statement and commitment for 123.design.',
  alternates: { canonical: '/accessibility' },
  openGraph: {
    title: 'Accessibility Statement — 123.design',
    description: 'Our commitment to making 123.design accessible to all users.',
  },
};

export default function AccessibilityPage() {
  return (
    <ContentPage
      eyebrow={ACCESSIBILITY_EYEBROW}
      heading={ACCESSIBILITY_HEADING}
      lastUpdated="September 2026"
      sections={ACCESSIBILITY_SECTIONS}
    />
  );
}
