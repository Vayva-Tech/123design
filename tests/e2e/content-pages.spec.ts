import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1024, height: 800 },
  { name: 'desktop-large', width: 1280, height: 800 },
  { name: 'wide', width: 1536, height: 900 },
];

const legalPages = [
  { path: '/privacy', heading: 'Privacy Policy' },
  { path: '/terms', heading: 'Terms of Use' },
  { path: '/accessibility', heading: 'Accessibility Statement' },
];

for (const { path, heading } of legalPages) {
  test.describe(`${path} Page — Structure`, () => {
    test('page loads with correct main content area', async ({ page }) => {
      await page.goto(path);
      const main = page.locator('#main-content');
      await expect(main).toBeVisible();
    });

    test('hero section shows correct heading', async ({ page }) => {
      await page.goto(path);
      const hero = page.locator('.content-page-hero');
      await expect(hero).toBeVisible();
      await expect(hero).toContainText(heading);
    });

    test('shows last updated date', async ({ page }) => {
      await page.goto(path);
      const date = page.locator('.content-page-hero__date');
      await expect(date).toBeVisible();
      await expect(date).toContainText('Last updated');
    });

    test('renders content sections', async ({ page }) => {
      await page.goto(path);
      const sections = page.locator('.content-page-section');
      const count = await sections.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });

    test('content sections have headings', async ({ page }) => {
      await page.goto(path);
      const headings = page.locator('.content-page-section h2');
      const count = await headings.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });
  });

  test.describe(`${path} Page — Responsive (no horizontal overflow)`, () => {
    for (const vp of viewports) {
      test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(path);
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
        expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
      });
    }
  });

  test.describe(`${path} Page — Accessibility`, () => {
    test('has main content landmark with tabindex', async ({ page }) => {
      await page.goto(path);
      const main = page.locator('#main-content');
      await expect(main).toBeVisible();
      await expect(main).toHaveAttribute('tabindex', '-1');
    });

    test('has correct eyebrow', async ({ page }) => {
      await page.goto(path);
      const hero = page.locator('.content-page-hero');
      const expectedEyebrow = path === '/accessibility' ? 'Commitment' : 'Legal';
      await expect(hero).toContainText(expectedEyebrow, { useInnerText: false });
    });
  });
}
