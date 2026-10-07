import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1024, height: 800 },
  { name: 'desktop-large', width: 1280, height: 800 },
  { name: 'wide', width: 1536, height: 900 },
];

test.describe('FAQ Page — Structure', () => {
  test('page loads with correct main content area', async ({ page }) => {
    await page.goto('/faq');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('hero section is visible with FAQ eyebrow', async ({ page }) => {
    await page.goto('/faq');
    const hero = page.locator('.faq-hero');
    await expect(hero).toBeVisible();
    await expect(hero.locator('.eyebrow-marker')).toBeAttached();
    await expect(hero.locator('.eyebrow')).toContainText('FAQ');
  });

  test('shows empty state or FAQ list', async ({ page }) => {
    await page.goto('/faq');
    const empty = page.locator('.faq-empty');
    const list = page.locator('.faq-list');
    const emptyCount = await empty.count();
    const listCount = await list.count();
    expect(emptyCount + listCount).toBeGreaterThanOrEqual(1);
  });

  test('CTA section is visible', async ({ page }) => {
    await page.goto('/faq');
    const cta = page.locator('.faq-cta');
    await expect(cta).toBeVisible();
  });
});

test.describe('FAQ Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/faq');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});

test.describe('FAQ Page — Accessibility', () => {
  test('has main content landmark with tabindex', async ({ page }) => {
    await page.goto('/faq');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
    await expect(main).toHaveAttribute('tabindex', '-1');
  });

  test('FAQ items use native details elements when present', async ({ page }) => {
    await page.goto('/faq');
    const details = page.locator('.faq-list details');
    const count = await details.count();
    if (count > 0) {
      const firstSummary = details.first().locator('summary');
      await expect(firstSummary).toBeVisible();
    }
  });
});
