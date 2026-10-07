import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:3002/work');
const marker = page.locator('.eyebrow-marker').first();
const box = await marker.boundingBox();
const isVisible = await marker.isVisible();
const styles = await marker.evaluate((el) => {
  const computed = window.getComputedStyle(el);
  return {
    display: computed.display,
    width: computed.width,
    height: computed.height,
    backgroundColor: computed.backgroundColor,
    visibility: computed.visibility,
    opacity: computed.opacity,
    offsetWidth: el.offsetWidth,
    offsetHeight: el.offsetHeight,
  };
});
console.log('Is visible:', isVisible);
console.log('Bounding box:', JSON.stringify(box));
console.log('Computed styles:', JSON.stringify(styles));
await browser.close();
