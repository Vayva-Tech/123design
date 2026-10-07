import { chromium } from '@playwright/test';
const BASE = process.env.BASE_URL || 'http://localhost:3003';
const pages = ['/', '/insights', '/work', '/faq', '/about', '/process', '/capabilities', '/industries'];
const widths = [375, 768, 1440];

const browser = await chromium.launch();
const results = [];

for (const pagePath of pages) {
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto(`${BASE}${pagePath}`, { waitUntil: 'networkidle' });
    const data = await page.evaluate(({ p, vw }) => {
      const html = document.documentElement;
      const header = document.querySelector('.site-header');
      const hero = document.querySelector('[class*="hero"]') || document.querySelector('section');
      const scrollW = html.scrollWidth;
      const viewportW = window.innerWidth;
      const overflow = scrollW > viewportW;
      const headerRect = header ? header.getBoundingClientRect() : null;
      const heroRect = hero ? hero.getBoundingClientRect() : null;
      const gap = headerRect && heroRect ? Math.round(heroRect.top - headerRect.bottom) : null;
      return {
        path: p,
        viewport: vw,
        scrollWidth: scrollW,
        viewportWidth: viewportW,
        overflowX: overflow,
        headerHeight: headerRect ? Math.round(headerRect.height) : null,
        heroTop: heroRect ? Math.round(heroRect.top) : null,
        gap: gap,
      };
    }, { p: pagePath, vw: w });
    results.push(data);
    await page.close();
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
