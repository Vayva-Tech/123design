import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaqHero } from '@/features/faq/components/FaqHero';
import { FaqList } from '@/features/faq/components/FaqList';
import { FaqEmpty } from '@/features/faq/components/FaqEmpty';
import { FaqCta } from '@/features/faq/components/FaqCta';
import { FAQ_EYEBROW, FAQ_HEADING, FAQ_EMPTY_STATE } from '@/features/faq/content';
import type { FaqItemModel } from '@/types/domain';

const sampleItems: FaqItemModel[] = [
  { question: 'What is your process?', answer: 'We follow a structured approach.' },
  { question: 'How long does a project take?', answer: 'Typically 8-16 weeks.' },
  { question: 'Do you work with startups?', answer: 'Yes, we work with companies at all stages.' },
];

describe('Content strings', () => {
  it('has expected FAQ constants', () => {
    expect(FAQ_EYEBROW).toBe('FAQ');
    expect(FAQ_HEADING).toBeTruthy();
    expect(FAQ_EMPTY_STATE).toBeTruthy();
  });
});

describe('FaqHero', () => {
  it('renders with eyebrow and heading', () => {
    const html = renderToStaticMarkup(<FaqHero />);
    expect(html).toContain('faq-hero');
    expect(html).toContain('FAQ');
  });
});

describe('FaqList', () => {
  it('renders all FAQ items', () => {
    const html = renderToStaticMarkup(<FaqList items={sampleItems} />);
    expect(html).toContain('faq-list');
    expect(html).toContain('What is your process?');
    expect(html).toContain('How long does a project take?');
    expect(html).toContain('Do you work with startups?');
  });

  it('uses native details/summary elements', () => {
    const html = renderToStaticMarkup(<FaqList items={sampleItems} />);
    expect(html).toContain('<details');
    expect(html).toContain('<summary');
  });

  it('renders answers inside details', () => {
    const html = renderToStaticMarkup(<FaqList items={sampleItems} />);
    expect(html).toContain('We follow a structured approach.');
    expect(html).toContain('Typically 8-16 weeks.');
  });

  it('has faq-item class on each details element', () => {
    const html = renderToStaticMarkup(<FaqList items={sampleItems} />);
    const count = (html.match(/faq-item__question/g) || []).length;
    expect(count).toBe(3);
  });

  it('renders empty list without errors', () => {
    const html = renderToStaticMarkup(<FaqList items={[]} />);
    expect(html).toContain('faq-list');
  });
});

describe('FaqEmpty', () => {
  it('renders empty state message', () => {
    const html = renderToStaticMarkup(<FaqEmpty />);
    expect(html).toContain('faq-empty');
    expect(html).toContain(FAQ_EMPTY_STATE);
  });
});

describe('FaqCta', () => {
  it('renders CTA section', () => {
    const html = renderToStaticMarkup(<FaqCta />);
    expect(html).toContain('faq-cta');
  });

  it('includes a link to start a conversation', () => {
    const html = renderToStaticMarkup(<FaqCta />);
    expect(html).toContain('href=');
  });
});
