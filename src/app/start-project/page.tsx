import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { LeadFormWizard } from '@/features/lead-form';
import { fetchLeadFormSettings } from '@/lib/sanity/fetch';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Start a Project',
  description:
    'Ready to bring your product idea to life? Tell us about your project and our team will respond within one business day.',
  alternates: { canonical: '/start-project' },
  openGraph: {
    title: 'Start a Project with 123.design',
    description:
      'From concept to production. Tell us about your product idea and get a detailed proposal within one week.',
  },
};

export default async function StartProjectPage() {
  let settings;
  try {
    settings = await fetchLeadFormSettings();
  } catch (error) {
    console.error('Failed to fetch lead form settings:', error);
    settings = null;
  }

  const defaultSettings = {
    productTypes: [
      'Web Application',
      'Mobile App',
      'E-commerce Platform',
      'SaaS Product',
      'API / Backend',
      'Other',
    ],
    developmentStages: [
      'Just an idea',
      'Have a prototype',
      'MVP in development',
      'Existing product needs improvement',
    ],
    needs: [
      'Product Strategy',
      'UX/UI Design',
      'Frontend Development',
      'Backend Development',
      'Mobile Development',
      'Full-Stack Development',
      'Technical Architecture',
      'Performance Optimization',
    ],
    timingOptions: [
      'ASAP',
      'Within 1 month',
      '1-3 months',
      '3-6 months',
      'Just exploring',
    ],
    budgetOptions: [
      'Under $10k',
      '$10k - $25k',
      '$25k - $50k',
      '$50k - $100k',
      '$100k+',
    ],
    budgetEnabled: true,
    confirmationHeading: 'Thank you!',
    confirmationBody:
      "We've received your project details. Our team will review your submission and reach out within 24 hours to schedule your discovery call.",
    uploadEnabled: false,
    scheduleCallUrl: undefined,
  };

  const formSettings = settings || defaultSettings;

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Start a Project', url: '/start-project' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Start a Project', href: '/start-project' },
        ]}
      />

      <section className="start-project-hero" aria-label="Start your project">
        <Container variant="content" className="start-project-hero__content">
          <Eyebrow marker>LET&apos;S BUILD TOGETHER</Eyebrow>
          <Heading variant="displayXL" className="start-project-hero__heading">
            Start a Project
          </Heading>
          <Text variant="lead" className="start-project-hero__supporting">
            From concept to production, we guide products through every phase of development.
            Tell us about your vision and our team will reach out within one business day.
          </Text>
        </Container>
      </section>

      <section className="start-project-body" aria-label="Project details form">
        <Container variant="reading">
          <div className="start-project-body__inner">
            <LeadFormWizard settings={formSettings} sourceRoute="/start-project" />
          </div>
        </Container>
      </section>
    </main>
  );
}
