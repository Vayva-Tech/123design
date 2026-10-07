import type { ContentSection } from '../components';

export const ACCESSIBILITY_EYEBROW = 'Commitment';
export const ACCESSIBILITY_HEADING = 'Accessibility Statement';

export const ACCESSIBILITY_SECTIONS: ContentSection[] = [
  {
    heading: 'Our commitment',
    paragraphs: [
      'We are committed to ensuring digital accessibility for people of all abilities. We strive to meet WCAG 2.2 Level AA standards and continuously improve the accessibility of our website.',
    ],
  },
  {
    heading: 'Standards we follow',
    paragraphs: [
      'Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. These guidelines explain how to make web content more accessible to people with disabilities.',
    ],
  },
  {
    heading: 'What we do',
    paragraphs: [
      'We use semantic HTML, provide text alternatives for images, ensure keyboard navigation, maintain sufficient color contrast, and test with assistive technologies. Our design system is built with accessibility as a core requirement.',
    ],
  },
  {
    heading: 'Known limitations',
    paragraphs: [
      'We are continuously working to improve accessibility. Some older content may not yet fully meet our standards. We welcome feedback on any accessibility barriers you encounter.',
    ],
  },
  {
    heading: 'Feedback',
    paragraphs: [
      'If you encounter an accessibility barrier, please use the contact options published on this site to let us know. We will make reasonable efforts to provide the information in an accessible format.',
    ],
  },
];
