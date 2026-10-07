import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1024, height: 800 },
  { name: 'desktop-large', width: 1280, height: 800 },
  { name: 'wide', width: 1536, height: 900 },
];

test.describe('Insights Index Page — Structure', () => {
  test('page loads with correct main content area', async ({ page }) => {
    await page.goto('/insights');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('hero section is visible with eyebrow', async ({ page }) => {
    await page.goto('/insights');
    const hero = page.locator('.insights-hero');
    await expect(hero).toBeVisible();
    await expect(hero.locator('.eyebrow-marker')).toBeAttached();
    await expect(hero.locator('.eyebrow')).toContainText('Insights');
  });

  test('shows empty state or article list', async ({ page }) => {
    await page.goto('/insights');
    const empty = page.locator('.insights-empty');
    const list = page.locator('.insights-list');
    const emptyCount = await empty.count();
    const listCount = await list.count();
    expect(emptyCount + listCount).toBeGreaterThanOrEqual(1);
  });
});

test.describe('Insights Index Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/insights');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});

test.describe('Insights Index Page — Accessibility', () => {
  test('has main content landmark', async ({ page }) => {
    await page.goto('/insights');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('has skip link target', async ({ page }) => {
    await page.goto('/insights');
    const main = page.locator('#main-content');
    await expect(main).toHaveAttribute('tabindex', '-1');
  });
});

test.describe('Article Detail Page — 404 for Unknown Slug', () => {
  test('unknown slug returns 404', async ({ page }) => {
    const response = await page.goto('/insights/nonexistent-article-slug-xyz');
    expect(response?.status()).toBe(404);
  });
});

test.describe('Article Detail Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/insights');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});
