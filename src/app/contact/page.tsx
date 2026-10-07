import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { StructuredData } from '@/components/seo/StructuredData';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the 123.design team. Reach us by email, phone, or visit one of our offices.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact 123.design',
    description: 'Email, phone, or visit us. New project discussions welcome.',
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={getLocalBusinessSchema()} />
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <section className="contact-hero" aria-label="Contact information">
        <Container variant="content" className="contact-hero__content">
          <Eyebrow marker>CONTACT</Eyebrow>
          <Heading variant="displayXL" className="contact-hero__heading">
            Get in Touch
          </Heading>
          <Text variant="lead" className="contact-hero__supporting">
            Have a question about our capabilities, process, or a potential project?
            We&apos;d love to hear from you.
          </Text>
        </Container>
      </section>

      <section className="contact-body" aria-label="Contact channels">
        <Container variant="reading">
          <div className="contact-body__inner">
            <div className="contact-channels">
              <div className="contact-channel">
                <Heading as="h3" variant="h4">
                  Email
                </Heading>
                <Text variant="body">
                  <a href="mailto:hello@123.design" className="contact-link">
                    hello@123.design
                  </a>
                </Text>
                <Text variant="small">
                  For general inquiries and new project discussions.
                </Text>
              </div>
              <div className="contact-channel">
                <Heading as="h3" variant="h4">
                  Phone
                </Heading>
                <Text variant="body">
                  <a href="tel:+18005900395" className="contact-link">
                    (800) 590-0395
                  </a>
                </Text>
                <Text variant="small">
                  Monday through Friday, 9 AM to 6 PM ET.
                </Text>
              </div>
              <div className="contact-channel">
                <Heading as="h3" variant="h4">
                  New Projects
                </Heading>
                <Text variant="body">
                  <a href="/start-project" className="contact-link">
                    Start a Project &rarr;
                  </a>
                </Text>
                <Text variant="small">
                  Tell us about your product idea and get a proposal within one week.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
