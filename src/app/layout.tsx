import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import { SkipLink, SiteHeader, SiteFooter } from '@/components/shell';
import { StructuredData } from '@/components/seo/StructuredData';
import { getOrganizationSchema, getWebSiteSchema } from '@/components/seo/schemas';
import { ConsentProvider, CookieConsentBanner } from '@/components/consent';
import { AnalyticsScript } from '@/components/analytics/AnalyticsScript';
import { ChatWidget } from '@/components/chat/ChatWidget';
import { PwaRegistrar } from '@/components/pwa/PwaRegistrar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://123.design'),
  title: {
    default: '123.design — Product Development, Engineering & Manufacturing',
    template: '%s — 123.design',
  },
  description:
    'Industrial design, mechanical engineering, electrical engineering, prototyping and manufacturing. From concept to production, 123.design turns ideas into real products.',
  keywords: [
    'product development',
    'industrial design',
    'mechanical engineering',
    'electrical engineering',
    'prototyping',
    'manufacturing',
    'concept to production',
    'product design studio',
  ],
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: '123.design',
  },
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
      },
    }),
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '123.design',
  },
};

export const viewport: Viewport = {
  themeColor: '#0070f3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebSiteSchema()} />
        <ConsentProvider>
          <AnalyticsScript />
          <SkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
          <CookieConsentBanner />
          <PwaRegistrar />
          {process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID && (
            <ChatWidget websiteId={process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID} />
          )}
        </ConsentProvider>
      </body>
    </html>
  );
}
