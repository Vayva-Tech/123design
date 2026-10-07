import type { ContentSection } from '../components';

export const PRIVACY_EYEBROW = 'Legal';
export const PRIVACY_HEADING = 'Privacy Policy';

export const PRIVACY_SECTIONS: ContentSection[] = [
  {
    heading: 'Overview',
    paragraphs: [
      'This privacy policy describes how 123.design ("we", "us", "our") collects, uses, and protects information when you use our website and services. We are committed to handling your data with care and transparency.',
    ],
  },
  {
    heading: 'Information we collect',
    paragraphs: [
      'We collect information you provide directly, such as your name, email address, and project details when you contact us or engage our services.',
    ],
  },
  {
    heading: 'How we use information',
    paragraphs: [
      'We use the information we collect to respond to your inquiries, provide our services, and communicate with you about projects.',
    ],
  },
  {
    heading: 'Data retention',
    paragraphs: [
      'We retain personal information only for as long as necessary to fulfil the purposes for which it was collected.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing activities. To exercise these rights, use the contact options published on this site.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      'If you have questions about this privacy notice, you can contact 123.design through the contact options published on this site.',
    ],
  },
];
