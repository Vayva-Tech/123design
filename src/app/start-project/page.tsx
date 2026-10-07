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
  title: 'Start a Project — Product Development, Engineering & Manufacturing',
  description:
    'From concept to production. Industrial design, mechanical engineering, electrical engineering, prototyping, manufacturing, AI solutions and software development. Tell us about your project.',
  alternates: { canonical: '/start-project' },
  openGraph: {
    title: 'Start a Project with 123.design',
    description:
      'Full-service product development. Hardware, software, AI, manufacturing. One team from napkin sketch to mass production.',
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
      'Physical Product (Consumer, Medical, Industrial)',
      'Electronic Device / IoT',
      'Software / Mobile Application',
      'AI / Machine Learning Solution',
      'Prototyping & Rapid Iteration',
      'Manufacturing & Sourcing',
      'Other',
    ],
    developmentStages: [
      'Just an idea / Napkin sketch',
      'Concept exploration needed',
      'Have a prototype / proof of concept',
      'Engineering validation in progress',
      'Existing product needs improvement',
      'Ready for manufacturing',
    ],
    needs: [
      'Product Strategy & Research',
      'Industrial Design',
      'Mechanical Engineering',
      'Electrical Engineering',
      'Embedded Firmware',
      'Prototyping & Testing',
      'Software / App Development',
      'AI / Machine Learning',
      'Design for Manufacturing (DFM)',
      'Tooling & Injection Molding',
      'Supply Chain & Sourcing',
      'Quality & Certification',
    ],
    timingOptions: [
      'ASAP',
      'Within 1 month',
      '1-3 months',
      '3-6 months',
      'Just exploring options',
    ],
    budgetOptions: [
      'Under $25k',
      '$25k - $50k',
      '$50k - $100k',
      '$100k - $250k',
      '$250k+',
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
          <Eyebrow marker>PRODUCT DEVELOPMENT &bull; ENGINEERING &bull; MANUFACTURING</Eyebrow>
          <Heading variant="displayXL" className="start-project-hero__heading">
            Start a Project
          </Heading>
          <Text variant="lead" className="start-project-hero__supporting">
            From napkin sketch to mass production. We handle the full stack: industrial design,
            mechanical and electrical engineering, prototyping, software and AI development,
            manufacturing oversight and supply chain management. One integrated team, zero gaps
            between stages.
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
