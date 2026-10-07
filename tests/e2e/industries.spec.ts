import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'desktop-wide', width: 1536, height: 900 },
];

const canonicalSlugs = [
  'consumer-products',
  'medical',
  'defense-security',
  'electronics',
  'industrial',
  'emerging-technology',
];

test.describe('Industries Index Page — Structure', () => {
  test('page loads with correct main content area', async ({ page }) => {
    await page.goto('/industries');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('hero section is visible with eyebrow and heading', async ({ page }) => {
    await page.goto('/industries');
    const hero = page.locator('.industries-hero');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('INDUSTRIES');
  });

  test('renders all 6 industry cards', async ({ page }) => {
    await page.goto('/industries');
    const cards = page.locator('.industry-card');
    await expect(cards).toHaveCount(6);
  });

  test('industry cards link to detail pages', async ({ page }) => {
    await page.goto('/industries');
    const firstCard = page.locator('.industry-card').first();
    const href = await firstCard.getAttribute('href');
    expect(href).toMatch(/^\/industries\/[a-z-]+$/);
  });

  test('CTA section is visible', async ({ page }) => {
    await page.goto('/industries');
    const cta = page.locator('.industry-cta');
    await expect(cta).toBeVisible();
  });
});

test.describe('Industries Index Page — Responsive Grid', () => {
  test('grid is single column at mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/industries');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'industries-grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(1);
  });

  test('grid is two columns at tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/industries');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'industries-grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(2);
  });

  test('grid is three columns at desktop (1024px)', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });
    await page.goto('/industries');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'industries-grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(3);
  });
});

test.describe('Industries Index Page — Accessibility', () => {
  test('has main content landmark', async ({ page }) => {
    await page.goto('/industries');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });
});

test.describe('Industry Detail Page — Static Fallback', () => {
  for (const slug of canonicalSlugs) {
    test(`${slug} returns 200 and renders hero`, async ({ page }) => {
      const response = await page.goto(`/industries/${slug}`);
      expect(response?.status()).toBe(200);
      const hero = page.locator('.industry-hero');
      await expect(hero).toBeVisible();
    });
  }

  test('shows industry title in hero', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const hero = page.locator('.industry-hero');
    await expect(hero).toContainText('Consumer Products');
  });

  test('shows INDUSTRY eyebrow', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const hero = page.locator('.industry-hero');
    await expect(hero).toContainText('INDUSTRY');
  });

  test('renders related capabilities section', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const related = page.locator('.industry-related-caps');
    await expect(related).toBeVisible();
  });

  test('renders CTA section', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const cta = page.locator('.industry-cta');
    await expect(cta).toBeVisible();
  });

  test('CTA shows HAVE A PRODUCT TO BUILD? for all industries', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const cta = page.locator('.industry-cta');
    await expect(cta).toContainText('HAVE A PRODUCT TO BUILD?');
  });

  test('CTA shows START YOUR PROJECT for all industries', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const cta = page.locator('.industry-cta');
    await expect(cta).toContainText('START YOUR PROJECT');
  });

  test('medical CTA also shows uniform START YOUR PROJECT', async ({ page }) => {
    await page.goto('/industries/medical');
    const cta = page.locator('.industry-cta');
    await expect(cta).toContainText('HAVE A PRODUCT TO BUILD?');
    await expect(cta).toContainText('START YOUR PROJECT');
  });

  test('defense-security CTA also shows uniform START YOUR PROJECT', async ({ page }) => {
    await page.goto('/industries/defense-security');
    const cta = page.locator('.industry-cta');
    await expect(cta).toContainText('HAVE A PRODUCT TO BUILD?');
    await expect(cta).toContainText('START YOUR PROJECT');
  });
});

test.describe('Industry Detail Page — 404 for Non-Canonical', () => {
  test('unknown slug returns 404', async ({ page }) => {
    const response = await page.goto('/industries/nonexistent-slug');
    expect(response?.status()).toBe(404);
  });

  test('uppercase slug returns 404', async ({ page }) => {
    const response = await page.goto('/industries/CONSUMER-PRODUCTS');
    expect(response?.status()).toBe(404);
  });

  test('empty slug returns 200 (index page)', async ({ page }) => {
    const response = await page.goto('/industries/');
    expect(response?.status()).toBe(200);
  });

  test('special characters slug returns 404', async ({ page }) => {
    const response = await page.goto('/industries/test%20inject');
    expect(response?.status()).toBe(404);
  });
});

test.describe('Industry Detail Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/industries/consumer-products');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});

test.describe('Industries Index Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/industries');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});

test.describe('Industry Detail Page — Accessibility', () => {
  test('has main content landmark', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('related capabilities section has aria-label', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const related = page.locator('.industry-related-caps');
    const label = await related.getAttribute('aria-label');
    expect(label).toBeTruthy();
  });

  test('related capabilities links point to valid capability pages', async ({ page }) => {
    await page.goto('/industries/consumer-products');
    const links = page.locator('.industry-related-caps__link');
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).toMatch(/^\/capabilities\/[a-z-]+$/);
    }
  });
});

test.describe('Industries Index — 1536x900 content verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1536, height: 900 });
    await page.goto('/industries');
  });

  test('page loads with main content area', async ({ page }) => {
    await expect(page.locator('#main-content')).toBeVisible();
  });

  test('hero section is visible with INDUSTRIES eyebrow', async ({ page }) => {
    const hero = page.locator('.industries-hero');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('INDUSTRIES');
  });

  test('industry grid is visible with 6 cards', async ({ page }) => {
    await expect(page.locator('.industry-card')).toHaveCount(6);
  });

  test('no horizontal overflow', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

test.describe('Industry Detail — 1536x900 content verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1536, height: 900 });
    await page.goto('/industries/consumer-products');
  });

  test('page loads with main content area', async ({ page }) => {
    await expect(page.locator('#main-content')).toBeVisible();
  });

  test('H1 with industry title is visible', async ({ page }) => {
    const hero = page.locator('.industry-hero');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('Consumer Products');
  });

  test('CTA section is reachable in document', async ({ page }) => {
    const cta = page.locator('.industry-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toContainText('START YOUR PROJECT');
  });

  test('no horizontal overflow', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
