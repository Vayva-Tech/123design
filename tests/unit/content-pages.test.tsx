import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { ContentPage } from '@/features/content-pages/components';
import {
  PRIVACY_EYEBROW,
  PRIVACY_HEADING,
  PRIVACY_SECTIONS,
} from '@/features/content-pages/content/privacy';
import {
  TERMS_EYEBROW,
  TERMS_HEADING,
  TERMS_SECTIONS,
} from '@/features/content-pages/content/terms';
import {
  ACCESSIBILITY_EYEBROW,
  ACCESSIBILITY_HEADING,
  ACCESSIBILITY_SECTIONS,
} from '@/features/content-pages/content/accessibility';

describe('ContentPage', () => {
  const sections = [
    { heading: 'First Section', paragraphs: ['Paragraph one.', 'Paragraph two.'] },
    { heading: 'Second Section', paragraphs: ['Paragraph three.'] },
  ];

  it('renders eyebrow and heading', () => {
    const html = renderToStaticMarkup(
      <ContentPage eyebrow="Legal" heading="Privacy Policy" sections={sections} />,
    );
    expect(html).toContain('Legal');
    expect(html).toContain('Privacy Policy');
  });

  it('renders all sections with headings and paragraphs', () => {
    const html = renderToStaticMarkup(
      <ContentPage eyebrow="Legal" heading="Test" sections={sections} />,
    );
    expect(html).toContain('First Section');
    expect(html).toContain('Paragraph one.');
    expect(html).toContain('Paragraph two.');
    expect(html).toContain('Second Section');
    expect(html).toContain('Paragraph three.');
  });

  it('shows last updated date when provided', () => {
    const html = renderToStaticMarkup(
      <ContentPage eyebrow="Legal" heading="Test" lastUpdated="January 2025" sections={sections} />,
    );
    expect(html).toContain('Last updated: January 2025');
  });

  it('omits last updated when not provided', () => {
    const html = renderToStaticMarkup(
      <ContentPage eyebrow="Legal" heading="Test" sections={sections} />,
    );
    expect(html).not.toContain('Last updated');
  });

  it('renders main content landmark', () => {
    const html = renderToStaticMarkup(
      <ContentPage eyebrow="Legal" heading="Test" sections={sections} />,
    );
    expect(html).toContain('id="main-content"');
  });

  it('renders section headings as h2', () => {
    const html = renderToStaticMarkup(
      <ContentPage eyebrow="Legal" heading="Test" sections={sections} />,
    );
    expect(html).toContain('<h2');
  });

  it('handles sections without headings', () => {
    const noHeading = [{ paragraphs: ['Just a paragraph.'] }];
    const html = renderToStaticMarkup(
      <ContentPage eyebrow="Legal" heading="Test" sections={noHeading} />,
    );
    expect(html).toContain('Just a paragraph.');
  });
});

describe('Privacy content', () => {
  it('has required metadata', () => {
    expect(PRIVACY_EYEBROW).toBe('Legal');
    expect(PRIVACY_HEADING).toBe('Privacy Policy');
  });

  it('has multiple sections', () => {
    expect(PRIVACY_SECTIONS.length).toBeGreaterThanOrEqual(3);
  });

  it('every section has at least one paragraph', () => {
    for (const section of PRIVACY_SECTIONS) {
      expect(section.paragraphs.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders without errors', () => {
    const html = renderToStaticMarkup(
      <ContentPage
        eyebrow={PRIVACY_EYEBROW}
        heading={PRIVACY_HEADING}
        sections={PRIVACY_SECTIONS}
      />,
    );
    expect(html).toContain('Privacy Policy');
  });
});

describe('Terms content', () => {
  it('has required metadata', () => {
    expect(TERMS_EYEBROW).toBe('Legal');
    expect(TERMS_HEADING).toBe('Terms of Use');
  });

  it('has multiple sections', () => {
    expect(TERMS_SECTIONS.length).toBeGreaterThanOrEqual(3);
  });

  it('every section has at least one paragraph', () => {
    for (const section of TERMS_SECTIONS) {
      expect(section.paragraphs.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders without errors', () => {
    const html = renderToStaticMarkup(
      <ContentPage eyebrow={TERMS_EYEBROW} heading={TERMS_HEADING} sections={TERMS_SECTIONS} />,
    );
    expect(html).toContain('Terms of Use');
  });
});

describe('Accessibility content', () => {
  it('has required metadata', () => {
    expect(ACCESSIBILITY_EYEBROW).toBeTruthy();
    expect(ACCESSIBILITY_HEADING).toBeTruthy();
  });

  it('has multiple sections', () => {
    expect(ACCESSIBILITY_SECTIONS.length).toBeGreaterThanOrEqual(3);
  });

  it('every section has at least one paragraph', () => {
    for (const section of ACCESSIBILITY_SECTIONS) {
      expect(section.paragraphs.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders without errors', () => {
    const html = renderToStaticMarkup(
      <ContentPage
        eyebrow={ACCESSIBILITY_EYEBROW}
        heading={ACCESSIBILITY_HEADING}
        sections={ACCESSIBILITY_SECTIONS}
      />,
    );
    expect(html).toContain(ACCESSIBILITY_HEADING);
  });
});
