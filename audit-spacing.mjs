import { chromium } from '@playwright/test';

const BASE = 'http://localhost:3001';
const PAGES = ['/', '/work', '/insights', '/faq', '/about', '/process', '/capabilities', '/industries', '/work/dbll-adjustable-dumbbell', '/work/spoony'];
const VIEWPORTS = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'wide-1536', width: 1536, height: 960 },
];

const browser = await chromium.launch();

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  for (const path of PAGES) {
    try {
      await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(600);
      const m = await page.evaluate(() => {
        const doc = document.documentElement;
        const overflowX = doc.scrollWidth - window.innerWidth;
        const header = document.querySelector('.site-header');
        const main = document.querySelector('main');
        const firstSection = main ? main.firstElementChild : null;
        const headerBottom = header ? Math.round(header.getBoundingClientRect().bottom) : null;
        const heroTop = firstSection ? Math.round(firstSection.getBoundingClientRect().top) : null;
        const gap = headerBottom !== null && heroTop !== null ? heroTop - headerBottom : null;

        let widest = null;
        if (overflowX > 1) {
          let maxRight = 0; let culprit = '';
          for (const el of document.querySelectorAll('body *')) {
            const r = el.getBoundingClientRect();
            if (r.right > maxRight) { maxRight = r.right; culprit = `${el.tagName.toLowerCase()}.${(typeof el.className === 'string' ? el.className : '').slice(0, 60)}`; }
          }
          widest = { maxRight: Math.round(maxRight), culprit };
        }

        let containerInfo = null;
        const container = document.querySelector('.container');
        if (container) {
          const r = container.getBoundingClientRect();
          containerInfo = { left: Math.round(r.left), right: Math.round(window.innerWidth - r.right), width: Math.round(r.width) };
        }
        return { overflowX, gap, widest, containerInfo, scrollH: doc.scrollHeight };
      });
      const flags = [];
      if (m.overflowX > 1) flags.push(`OVERFLOW-X ${m.overflowX}px culprit=${m.widest?.culprit} right=${m.widest?.maxRight}`);
      if (m.gap !== null && m.gap < 0) flags.push(`HEADER OVERLAP gap=${m.gap}`);
      console.log(`[${vp.name}] ${path} | gap=${m.gap} | container=${JSON.stringify(m.containerInfo)} | scrollH=${m.scrollH} ${flags.length ? '>>> ' + flags.join(' ; ') : ''}`);
    } catch (e) {
      console.log(`[${vp.name}] ${path} | ERROR ${e.message.slice(0, 100)}`);
    }
  }
  await page.close();
}
await browser.close();
