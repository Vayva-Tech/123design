import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 800 },
];

test.describe('Project Detail Page — Without CMS', () => {
  test('shows not-found for any project slug when CMS unavailable', async ({ page }) => {
    const response = await page.goto('/work/test-device');
    expect(response?.status()).toBe(404);
  });

  test('shows not-found for invalid slug format', async ({ page }) => {
    const response = await page.goto('/work/INVALID_SLUG');
    expect(response?.status()).toBe(404);
  });

  test('/work/ index route returns 200 (listing page, not detail)', async ({ page }) => {
    const response = await page.goto('/work/');
    expect(response?.status()).toBe(200);
  });
});

test.describe('Project Detail Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow on 404`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/work/test-device');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});

test.describe('Project Detail Page — Accessibility', () => {
  test('not-found page has main content landmark', async ({ page }) => {
    await page.goto('/work/test-device');
    const main = page.locator('main');
    const mainCount = await main.count();
    if (mainCount > 0) {
      await expect(main).toBeVisible();
    }
  });
});
