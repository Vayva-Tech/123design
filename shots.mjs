import { chromium } from '@playwright/test';
const BASE = process.env.BASE_URL || 'http://localhost:3003';

const browser = await chromium.launch();

for (const [path, label] of [['/', 'home'], ['/insights', 'insights']]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `/tmp/audit-${label}.png`, fullPage: false });
  await page.close();
}

for (const [path, label] of [['/', 'home-m'], ['/insights', 'insights-m']]) {
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `/tmp/audit-${label}.png`, fullPage: false });
  await page.close();
}

await browser.close();
console.log('Screenshots saved');
