import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

// Check desktop header height
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto('http://localhost:3002/');
const desktopHeader = page.locator('.site-header');
const desktopHeight = await desktopHeader.evaluate((el) => el.getBoundingClientRect().height);
console.log('Desktop header height:', desktopHeight);

// Check mobile header height
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3002/');
await page.locator('.mobile-menu-trigger').click();
const mobileHeader = page.locator('.mobile-nav-header');
const mobileHeight = await mobileHeader.evaluate((el) => el.getBoundingClientRect().height);
console.log('Mobile header height:', mobileHeight);

// Check desktop nav visibility at mobile
const desktopNav = page.locator('.desktop-nav');
const isDesktopNavVisible = await desktopNav.isVisible();
console.log('Desktop nav visible at mobile:', isDesktopNavVisible);

await browser.close();
