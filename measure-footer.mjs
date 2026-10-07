import { chromium } from '@playwright/test';

const URL = process.argv[2] || 'http://localhost:3001/work/dbll-adjustable-dumbbell';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const report = await page.evaluate(() => {
  const doc = document.documentElement;
  const scrollH = doc.scrollHeight;
  const bodyH = document.body.scrollHeight;
  const footer = document.querySelector('.site-footer');
  const footerBottom = footer ? Math.round(footer.getBoundingClientRect().bottom + window.scrollY) : null;

  const belowFooter = [];
  if (footerBottom !== null) {
    const all = document.querySelectorAll('body *');
    for (const el of all) {
      const r = el.getBoundingClientRect();
      const bottom = Math.round(r.bottom + window.scrollY);
      if (bottom > footerBottom + 2 && r.height > 0) {
        belowFooter.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className && typeof el.className === 'string') ? el.className.slice(0, 120) : '',
          top: Math.round(r.top + window.scrollY),
          bottom,
          height: Math.round(r.height),
        });
      }
    }
  }
  belowFooter.sort((a, b) => b.bottom - a.bottom);

  const bodyChildren = [...document.body.children].map((el) => {
    const r = el.getBoundingClientRect();
    return {
      tag: el.tagName.toLowerCase(),
      cls: (el.className && typeof el.className === 'string') ? el.className.slice(0, 80) : '',
      top: Math.round(r.top + window.scrollY),
      bottom: Math.round(r.bottom + window.scrollY),
      height: Math.round(r.height),
    };
  });

  return { scrollH, bodyH, footerBottom, belowFooterCount: belowFooter.length, belowFooter: belowFooter.slice(0, 12), bodyChildren };
});

console.log(JSON.stringify(report, null, 2));
await browser.close();
