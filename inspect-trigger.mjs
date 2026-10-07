import { chromium } from '@playwright/test';

const BASE = process.env.BASE_URL || 'http://localhost:3001';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 900 } });
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });

const info = await page.evaluate(() => {
  const t = document.querySelector('.mobile-menu-trigger');
  if (!t) return { found: false };
  const s = getComputedStyle(t);
  return {
    found: true,
    innerText: JSON.stringify(t.innerText),
    childNodes: [...t.childNodes].map((n) => `${n.nodeType}:${JSON.stringify(n.textContent)}`),
    rect: t.getBoundingClientRect().toJSON(),
    styles: {
      color: s.color,
      fontSize: s.fontSize,
      fontSmooth: s.fontSmoothing,
      visibility: s.visibility,
      opacity: s.opacity,
      textIndent: s.textIndent,
      overflow: s.overflow,
      border: s.border,
      outline: s.outline,
      boxShadow: s.boxShadow,
      appearance: s.appearance,
    },
  };
});
console.log(JSON.stringify(info, null, 2));

const el = await page.$('.mobile-menu-trigger');
if (el) {
  await el.screenshot({ path: '/tmp/trigger-zoom.png' });
}
await browser.close();
