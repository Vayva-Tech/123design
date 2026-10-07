import { chromium } from '@playwright/test';

const BASE = process.env.BASE_URL || 'http://localhost:3001';

const results = [];

for (const width of [1440, 1024, 375]) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });

  const data = await page.evaluate(() => {
    const header = document.querySelector('.site-header');
    const brand = document.querySelector('.site-header-inner > .brand-mark');
    const nav = document.querySelector('.desktop-nav');
    const list = document.querySelector('.desktop-nav-list');
    const cta = document.querySelector('.desktop-nav > .header-cta');
    const trigger = document.querySelector('.mobile-menu-trigger');
    const rect = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return { left: Math.round(r.left), right: Math.round(r.right), display: s.display };
    };
    return {
      viewport: window.innerWidth,
      header: rect(header),
      brand: rect(brand),
      nav: rect(nav),
      list: rect(list),
      cta: rect(cta),
      trigger: rect(trigger),
      overflowX: document.documentElement.scrollWidth > window.innerWidth,
    };
  });
  results.push(data);

  const clip = { x: 0, y: 0, width, height: 90 };
  await page.screenshot({ path: `/tmp/hdr-${width}.png`, clip });

  await browser.close();
}

console.log(JSON.stringify(results, null, 2));
