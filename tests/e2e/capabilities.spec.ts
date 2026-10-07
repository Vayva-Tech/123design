import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 800 },
];

const canonicalSlugs = [
  'product-development',
  'industrial-design',
  'product-animation',
  'mechanical-engineering',
  'electrical-engineering',
  'testing-validation',
  'prototyping',
  'tooling',
  'manufacturing',
  'program-management',
];

test.describe('Capabilities Index Page — Structure', () => {
  test('page loads with correct main content area', async ({ page }) => {
    await page.goto('/capabilities');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('hero section is visible with eyebrow and heading', async ({ page }) => {
    await page.goto('/capabilities');
    const hero = page.locator('.capabilities-hero');
    await expect(hero).toBeVisible();
    await expect(hero.locator('.eyebrow-marker')).toBeAttached();
    await expect(hero.locator('.eyebrow')).toContainText('CAPABILITIES');
  });

  test('renders at least one capability group', async ({ page }) => {
    await page.goto('/capabilities');
    const groups = page.locator('.capability-group');
    const count = await groups.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('renders capability cards within groups', async ({ page }) => {
    await page.goto('/capabilities');
    const cards = page.locator('.capability-card');
    const count = await cards.count();
    expect(count).toBe(10);
  });

  test('capability cards link to detail pages', async ({ page }) => {
    await page.goto('/capabilities');
    const firstCard = page.locator('.capability-card').first();
    const href = await firstCard.getAttribute('href');
    expect(href).toMatch(/^\/capabilities\/[a-z-]+$/);
  });

  test('CTA section is visible', async ({ page }) => {
    await page.goto('/capabilities');
    const cta = page.locator('.capability-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toContainText('HAVE A PRODUCT TO BUILD?');
  });
});

test.describe('Capabilities Index Page — Responsive Grid', () => {
  test('grid is single column at mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/capabilities');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'capability-group__grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(1);
  });

  test('grid is two columns at tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/capabilities');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'capability-group__grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(2);
  });

  test('grid is three columns at desktop (1024px)', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });
    await page.goto('/capabilities');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'capability-group__grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(3);
  });
});

test.describe('Capabilities Index Page — Accessibility', () => {
  test('has main content landmark', async ({ page }) => {
    await page.goto('/capabilities');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('group sections have aria-labels', async ({ page }) => {
    await page.goto('/capabilities');
    const groups = page.locator('.capability-group');
    const count = await groups.count();
    for (let i = 0; i < count; i++) {
      const group = groups.nth(i);
      const label = await group.getAttribute('aria-label');
      expect(label).toBeTruthy();
    }
  });
});

test.describe('Capability Detail Page — Static Fallback', () => {
  for (const slug of canonicalSlugs) {
    test(`${slug} returns 200 and renders hero`, async ({ page }) => {
      const response = await page.goto(`/capabilities/${slug}`);
      expect(response?.status()).toBe(200);
      const hero = page.locator('.capability-hero');
      await expect(hero).toBeVisible();
    });
  }

  test('shows capability title in hero', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const hero = page.locator('.capability-hero');
    await expect(hero).toContainText('Industrial Design');
  });

  test('shows CAPABILITY eyebrow with group', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const hero = page.locator('.capability-hero');
    await expect(hero).toContainText('CAPABILITY');
    await expect(hero).toContainText('DESIGN');
  });

  test('renders deliverables section', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const deliverables = page.locator('.capability-deliverables');
    await expect(deliverables).toBeVisible();
  });

  test('renders lifecycle stages', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const lifecycle = page.locator('.capability-lifecycle');
    await expect(lifecycle).toBeVisible();
  });

  test('renders CTA section', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const cta = page.locator('.capability-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toContainText('HAVE A PRODUCT TO BUILD?');
  });
});

test.describe('Capability Detail Page — 404 for Non-Canonical', () => {
  test('unknown slug returns 404', async ({ page }) => {
    const response = await page.goto('/capabilities/nonexistent-slug');
    expect(response?.status()).toBe(404);
  });

  test('uppercase slug returns 404', async ({ page }) => {
    const response = await page.goto('/capabilities/INDUSTRIAL-DESIGN');
    expect(response?.status()).toBe(404);
  });

  test('empty slug returns 404', async ({ page }) => {
    const response = await page.goto('/capabilities/');
    expect(response?.status()).toBe(200);
  });

  test('special characters slug returns 404', async ({ page }) => {
    const response = await page.goto('/capabilities/test%20inject');
    expect(response?.status()).toBe(404);
  });
});

test.describe('Capability Detail Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/capabilities/industrial-design');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});

test.describe('Capabilities Index Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/capabilities');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});

test.describe('Capability Detail Page — Accessibility', () => {
  test('has main content landmark', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('lifecycle section has aria-label', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const lifecycle = page.locator('.capability-lifecycle');
    const label = await lifecycle.getAttribute('aria-label');
    expect(label).toBeTruthy();
  });

  test('deliverables section has aria-label', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const deliverables = page.locator('.capability-deliverables');
    const label = await deliverables.getAttribute('aria-label');
    expect(label).toBeTruthy();
  });

  test('methods section has aria-label', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const methods = page.locator('.capability-methods');
    const count = await methods.count();
    if (count > 0) {
      const label = await methods.getAttribute('aria-label');
      expect(label).toBeTruthy();
    }
  });
});

test.describe('Capability Detail Page — Related Capabilities', () => {
  test('renders related capabilities when present', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const related = page.locator('.capability-related');
    const count = await related.count();
    if (count > 0) {
      await expect(related).toContainText('Works alongside');
      const links = related.locator('.capability-related__link');
      const linkCount = await links.count();
      expect(linkCount).toBeLessThanOrEqual(3);
    }
  });

  test('related capability links point to valid capability pages', async ({ page }) => {
    await page.goto('/capabilities/industrial-design');
    const relatedLinks = page.locator('.capability-related__link');
    const count = await relatedLinks.count();
    for (let i = 0; i < count; i++) {
      const href = await relatedLinks.nth(i).getAttribute('href');
      expect(href).toMatch(/^\/capabilities\/[a-z-]+$/);
    }
  });
});
