import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'desktop-wide', width: 1536, height: 900 },
];

test.describe('Process Page — Structure', () => {
  test('page loads with correct main content area', async ({ page }) => {
    await page.goto('/process');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('hero section is visible with eyebrow and heading', async ({ page }) => {
    await page.goto('/process');
    const hero = page.locator('.process-hero');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('PROCESS');
    await expect(hero).toContainText('FROM IDEA TO PRODUCTION.');
  });

  test('mosaic section renders with 5 stage cards', async ({ page }) => {
    await page.goto('/process');
    const mosaic = page.locator('.process-mosaic');
    await expect(mosaic).toBeVisible();
    const cards = page.locator('.process-mosaic__card');
    await expect(cards).toHaveCount(5);
  });

  test('mosaic renders all lifecycle codes', async ({ page }) => {
    await page.goto('/process');
    const codes = page.locator('.process-mosaic__code');
    await expect(codes.nth(0)).toContainText('CON');
    await expect(codes.nth(1)).toContainText('EVT');
    await expect(codes.nth(2)).toContainText('DVT');
    await expect(codes.nth(3)).toContainText('PVT');
    await expect(codes.nth(4)).toContainText('PRODUCTION');
  });

  test('mosaic renders lifecycle heading', async ({ page }) => {
    await page.goto('/process');
    const mosaic = page.locator('.process-mosaic');
    await expect(mosaic).toContainText('ONE TEAM.');
    await expect(mosaic).toContainText('EVERY DEVELOPMENT STAGE.');
  });

  test('renders 5 stage detail sections', async ({ page }) => {
    await page.goto('/process');
    const stages = page.locator('.process-stage');
    await expect(stages).toHaveCount(5);
  });

  test('stage sections have correct data-stage attributes', async ({ page }) => {
    await page.goto('/process');
    await expect(page.locator('[data-stage="CON"]')).toBeVisible();
    await expect(page.locator('[data-stage="EVT"]')).toBeVisible();
    await expect(page.locator('[data-stage="DVT"]')).toBeVisible();
    await expect(page.locator('[data-stage="PVT"]')).toBeVisible();
    await expect(page.locator('[data-stage="PRODUCTION"]')).toBeVisible();
  });

  test('CON stage section shows activities', async ({ page }) => {
    await page.goto('/process');
    const conStage = page.locator('[data-stage="CON"]');
    await expect(conStage).toContainText('Concept');
    await expect(conStage).toContainText('Product strategy');
    await expect(conStage).toContainText('User research');
  });

  test('workflow section is visible with heading', async ({ page }) => {
    await page.goto('/process');
    const workflow = page.locator('.process-workflow');
    await expect(workflow).toBeVisible();
    await expect(workflow).toContainText('YOUR PROCESS');
    await expect(workflow).toContainText('OR OURS.');
  });

  test('workflow renders 8 steps', async ({ page }) => {
    await page.goto('/process');
    const steps = page.locator('.process-workflow__step');
    await expect(steps).toHaveCount(8);
  });

  test('workflow renders all step labels', async ({ page }) => {
    await page.goto('/process');
    const workflow = page.locator('.process-workflow');
    await expect(workflow).toContainText('Requirements');
    await expect(workflow).toContainText('Jira');
    await expect(workflow).toContainText('Design Reviews');
    await expect(workflow).toContainText('CAD / EE');
    await expect(workflow).toContainText('BOM');
    await expect(workflow).toContainText('Prototype');
    await expect(workflow).toContainText('Validation');
    await expect(workflow).toContainText('Release');
  });

  test('principles section is visible', async ({ page }) => {
    await page.goto('/process');
    const principles = page.locator('.process-principles');
    await expect(principles).toBeVisible();
    await expect(principles).toContainText('HOW WE WORK');
  });

  test('principles renders 4 items', async ({ page }) => {
    await page.goto('/process');
    const items = page.locator('.process-principles__item');
    await expect(items).toHaveCount(4);
  });

  test('principles renders all titles', async ({ page }) => {
    await page.goto('/process');
    const principles = page.locator('.process-principles');
    await expect(principles).toContainText('TRANSPARENT');
    await expect(principles).toContainText('INTEGRATED');
    await expect(principles).toContainText('ITERATIVE');
    await expect(principles).toContainText('PRODUCTION-MINDED');
  });

  test('CTA section is visible', async ({ page }) => {
    await page.goto('/process');
    const cta = page.locator('.process-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toContainText('HAVE A PRODUCT TO BUILD?');
    await expect(cta).toContainText('START YOUR PROJECT');
  });
});

test.describe('Process Page — Responsive (no horizontal overflow)', () => {
  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}): no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/process');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});

test.describe('Process Page — Accessibility', () => {
  test('has main content landmark', async ({ page }) => {
    await page.goto('/process');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('mosaic section has aria-label', async ({ page }) => {
    await page.goto('/process');
    const mosaic = page.locator('.process-mosaic');
    const label = await mosaic.getAttribute('aria-label');
    expect(label).toBe('Development lifecycle stages');
  });

  test('workflow section has aria-label', async ({ page }) => {
    await page.goto('/process');
    const workflow = page.locator('.process-workflow');
    const label = await workflow.getAttribute('aria-label');
    expect(label).toBe('Workflow approach');
  });

  test('principles section has aria-label', async ({ page }) => {
    await page.goto('/process');
    const principles = page.locator('.process-principles');
    const label = await principles.getAttribute('aria-label');
    expect(label).toBe('Process principles');
  });

  test('each stage section has aria-label', async ({ page }) => {
    await page.goto('/process');
    const conStage = page.locator('[data-stage="CON"]');
    const label = await conStage.getAttribute('aria-label');
    expect(label).toBe('CON — Concept');
  });
});

test.describe('Process Page — 1536x900 content verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1536, height: 900 });
    await page.goto('/process');
  });

  test('page loads with main content area', async ({ page }) => {
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('hero section is visible', async ({ page }) => {
    await expect(page.locator('.process-hero')).toBeVisible();
  });

  test('lifecycle mosaic is visible with 5 cards', async ({ page }) => {
    const mosaic = page.locator('.process-mosaic');
    await expect(mosaic).toBeVisible();
    await expect(page.locator('.process-mosaic__card')).toHaveCount(5);
  });

  test('8-step workflow is visible', async ({ page }) => {
    const workflow = page.locator('.process-workflow');
    await expect(workflow).toBeVisible();
    await expect(page.locator('.process-workflow__step')).toHaveCount(8);
  });

  test('4 principles are visible', async ({ page }) => {
    const principles = page.locator('.process-principles');
    await expect(principles).toBeVisible();
    await expect(page.locator('.process-principles__item')).toHaveCount(4);
  });

  test('no horizontal overflow', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
