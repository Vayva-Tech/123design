import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { SkipLink } from '@/components/shell/SkipLink';
import { BrandMark } from '@/components/shell/BrandMark';
import { SiteFooter } from '@/components/shell/SiteFooter';

describe('SkipLink', () => {
  it('renders an anchor with href="#main-content"', () => {
    const html = renderToStaticMarkup(<SkipLink />);
    expect(html).toContain('href="#main-content"');
  });

  it('uses the skip-link CSS class', () => {
    const html = renderToStaticMarkup(<SkipLink />);
    expect(html).toContain('class="skip-link"');
  });

  it('has descriptive text content', () => {
    const html = renderToStaticMarkup(<SkipLink />);
    expect(html).toContain('Skip to main content');
  });

  it('has no inline styles', () => {
    const html = renderToStaticMarkup(<SkipLink />);
    expect(html).not.toContain('style=');
  });
});

describe('BrandMark', () => {
  it('renders a link to home', () => {
    const html = renderToStaticMarkup(<BrandMark />);
    expect(html).toContain('href="/"');
  });

  it('uses the brand-mark CSS class', () => {
    const html = renderToStaticMarkup(<BrandMark />);
    expect(html).toContain('class="brand-mark"');
  });

  it('displays the site name', () => {
    const html = renderToStaticMarkup(<BrandMark />);
    expect(html).toContain('123.design');
  });

  it('has no inline styles', () => {
    const html = renderToStaticMarkup(<BrandMark />);
    expect(html).not.toContain('style=');
  });
});

describe('SiteFooter', () => {
  it('renders a footer element', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    expect(html).toContain('<footer');
  });

  it('uses the site-footer CSS class', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    expect(html).toContain('class="site-footer"');
  });

  it('contains the brand name', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    expect(html).toContain('123.design');
  });

  it('renders all 5 footer groups', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    expect(html).toContain('Work');
    expect(html).toContain('Capabilities');
    expect(html).toContain('Company');
    expect(html).toContain('Contact');
    expect(html).toContain('Legal');
  });

  it('renders copyright with current year', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    const year = new Date().getFullYear();
    expect(html).toContain(String(year));
  });

  it('renders the canonical tagline "From Idea to Production"', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    expect(html).toContain('From Idea to Production');
  });

  it('renders the canonical description', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    expect(html).toContain('Product development, engineering and manufacturing.');
  });

  it('does NOT render the old tagline', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    expect(html).not.toContain('Product &middot; Engineering &middot; Manufacturing');
  });

  it('has no inline styles', () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    expect(html).not.toContain('style=');
  });
});
