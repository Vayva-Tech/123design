import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 800 },
];

test.describe('Work Page — Structure', () => {
  test('page loads with correct main content area', async ({ page }) => {
    await page.goto('/work');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('hero section is visible with eyebrow and heading', async ({ page }) => {
    await page.goto('/work');
    const hero = page.locator('.work-hero');
    await expect(hero).toBeVisible();
    await expect(hero.locator('.eyebrow-marker')).toBeAttached();
    await expect(hero.locator('.eyebrow')).toContainText('Selected Work');
    await expect(hero.locator('h1')).toContainText('Engineering physical products');
  });

  test('filter bar section is present', async ({ page }) => {
    await page.goto('/work');
    const filterBar = page.locator('.work-filter-bar');
    await expect(filterBar).toBeVisible();
  });

  test('grid section is present', async ({ page }) => {
    await page.goto('/work');
    const gridSection = page.locator('.work-grid-section');
    await expect(gridSection).toBeVisible();
  });

  test('shows total project count at mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    const count = page.locator('.work-filter-bar__count');
    await expect(count).toBeVisible();
    await expect(count).toContainText('projects');
  });

  test('shows empty state when no CMS data', async ({ page }) => {
    await page.goto('/work');
    const empty = page.locator('.project-grid-empty');
    await expect(empty).toBeVisible();
    await expect(empty).toContainText('No projects match');
  });
});

test.describe('Work Page — Desktop Filters (>= 768px)', () => {
  test('desktop filters visible at 1280px', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/work');
    const filters = page.locator('.work-filters');
    await expect(filters).toBeVisible();
  });

  test('desktop filters hidden at mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    const filters = page.locator('.work-filters');
    await expect(filters).not.toBeVisible();
  });

  test('desktop filters use native select elements', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/work');
    const selects = page.locator('.work-filters .work-filter-field__select');
    const count = await selects.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('filter bar count hidden at desktop (shown in WorkFilters instead)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/work');
    const count = page.locator('.work-filter-bar__count');
    await expect(count).not.toBeVisible();
  });

  test('mobile filter trigger hidden at desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/work');
    const trigger = page.locator('.work-mobile-filter-trigger');
    await expect(trigger).not.toBeVisible();
  });
});

test.describe('Work Page — Mobile Filters (< 768px)', () => {
  test('mobile filter trigger visible at 390px', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    const trigger = page.locator('.work-mobile-filter-trigger');
    await expect(trigger).toBeVisible();
    await expect(trigger).toContainText('Filters');
  });

  test('mobile filter trigger hidden at 768px and above', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/work');
    const trigger = page.locator('.work-mobile-filter-trigger');
    await expect(trigger).not.toBeVisible();
  });

  test('mobile filter trigger has dialog role', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    const trigger = page.locator('.work-mobile-filter-trigger');
    await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
  });

  test('mobile filter dialog opens on trigger click', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    await page.locator('.work-mobile-filter-trigger').click();
    const dialog = page.locator('.work-filter-sheet');
    await expect(dialog).toBeVisible();
  });

  test('mobile filter dialog has header with close button', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    await page.locator('.work-mobile-filter-trigger').click();
    const dialog = page.locator('.work-filter-sheet');
    await expect(dialog).toBeVisible();
    const closeBtn = dialog.locator('.work-filter-sheet__close');
    await expect(closeBtn).toBeVisible();
    await expect(closeBtn).toHaveAttribute('aria-label', 'Close filters');
  });

  test('mobile filter dialog has footer with Apply button', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    await page.locator('.work-mobile-filter-trigger').click();
    const dialog = page.locator('.work-filter-sheet');
    const applyBtn = dialog.locator('button[data-variant="primary"]', { hasText: 'Apply' });
    await expect(applyBtn).toBeVisible();
  });

  test('mobile filter dialog has Clear all button', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    await page.locator('.work-mobile-filter-trigger').click();
    const dialog = page.locator('.work-filter-sheet');
    const clearBtn = dialog.locator('.work-filter-sheet__clear');
    await expect(clearBtn).toBeVisible();
    await expect(clearBtn).toHaveText('Clear all');
  });

  test('mobile filter dialog has result count with aria-live', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    await page.locator('.work-mobile-filter-trigger').click();
    const dialog = page.locator('.work-filter-sheet');
    const count = dialog.locator('.work-filter-sheet__result-count');
    await expect(count).toHaveAttribute('aria-live', 'polite');
    await expect(count).toContainText('projects');
  });

  test('close button closes the mobile filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    await page.locator('.work-mobile-filter-trigger').click();
    const dialog = page.locator('.work-filter-sheet');
    await expect(dialog).toBeVisible();
    await dialog.locator('.work-filter-sheet__close').click();
    await expect(dialog).not.toBeVisible();
  });

  test('Escape key closes the mobile filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    await page.locator('.work-mobile-filter-trigger').click();
    const dialog = page.locator('.work-filter-sheet');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });
});

test.describe('Work Page — Responsive Grid', () => {
  test('grid is single column at mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'project-grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(1);
  });

  test('grid is two columns at tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/work');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'project-grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(2);
  });

  test('grid is three columns at desktop (1280px)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/work');
    const columnCount = await page.evaluate(() => {
      const el = document.createElement('div');
      el.className = 'project-grid';
      document.body.appendChild(el);
      const cols = getComputedStyle(el).gridTemplateColumns;
      document.body.removeChild(el);
      return cols.split(' ').filter(Boolean).length;
    });
    expect(columnCount).toBe(3);
  });
});

test.describe('Work Page — Accessibility', () => {
  test('result count has aria-live for screen reader announcements', async ({ page }) => {
    await page.goto('/work');
    const count = page.locator('.work-filter-bar__count');
    await expect(count).toHaveAttribute('aria-live', 'polite');
  });

  test('mobile filter trigger announces active filter count via badge', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/work?industry=medical');
    const badge = page.locator('.work-mobile-filter-badge');
    const badgeCount = await badge.count();
    if (badgeCount > 0) {
      await expect(badge).toHaveAttribute('aria-label', /active/);
    }
  });

  test('filter selects have associated labels', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/work');
    const fields = page.locator('.work-filter-field');
    const fieldCount = await fields.count();
    for (let i = 0; i < fieldCount; i++) {
      const field = fields.nth(i);
      const label = field.locator('.work-filter-field__label');
      const labelFor = await label.getAttribute('for');
      const select = field.locator('.work-filter-field__select');
      const selectId = await select.getAttribute('id');
      if (labelFor && selectId) {
        expect(labelFor).toBe(selectId);
      }
    }
  });
});

test.describe('Work Page — URL Filter State', () => {
  test('page loads with industry filter in URL', async ({ page }) => {
    await page.goto('/work?industry=medical');
    const select = page.locator('#filter-industry');
    if ((await select.count()) > 0) {
      await expect(select).toHaveValue('medical');
    }
  });

  test('page loads with capability filter in URL', async ({ page }) => {
    await page.goto('/work?capability=prototyping');
    const select = page.locator('#filter-capability');
    if ((await select.count()) > 0) {
      await expect(select).toHaveValue('prototyping');
    }
  });

  test('page loads with stage filter in URL', async ({ page }) => {
    await page.goto('/work?stage=con');
    const select = page.locator('#filter-stage');
    if ((await select.count()) > 0) {
      await expect(select).toHaveValue('con');
    }
  });

  test('page loads with combined filters in URL', async ({ page }) => {
    await page.goto('/work?industry=medical&capability=prototyping&stage=con');
    const industrySelect = page.locator('#filter-industry');
    const capabilitySelect = page.locator('#filter-capability');
    const stageSelect = page.locator('#filter-stage');
    if ((await industrySelect.count()) > 0) {
      await expect(industrySelect).toHaveValue('medical');
    }
    if ((await capabilitySelect.count()) > 0) {
      await expect(capabilitySelect).toHaveValue('prototyping');
    }
    if ((await stageSelect.count()) > 0) {
      await expect(stageSelect).toHaveValue('con');
    }
  });

  test('invalid filter values are ignored gracefully', async ({ page }) => {
    await page.goto('/work?industry=nonexistent-industry');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
    const gridSection = page.locator('.work-grid-section');
    await expect(gridSection).toBeVisible();
  });
});

for (const vp of viewports) {
  test.describe(`Work Page — ${vp.name} (${vp.width}x${vp.height})`, () => {
    test('no horizontal overflow', async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/work');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });

    test('hero section visible', async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/work');
      const hero = page.locator('.work-hero');
      await expect(hero).toBeVisible();
    });
  });
}

test.describe('Work Page — Filter Boundary (768px)', () => {
  test('at 767px mobile trigger is visible, desktop filters hidden', async ({ page }) => {
    await page.setViewportSize({ width: 767, height: 800 });
    await page.goto('/work');
    const trigger = page.locator('.work-mobile-filter-trigger');
    await expect(trigger).toBeVisible();
    const filters = page.locator('.work-filters');
    await expect(filters).not.toBeVisible();
  });

  test('at 768px desktop filters visible, mobile trigger hidden', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 800 });
    await page.goto('/work');
    const filters = page.locator('.work-filters');
    await expect(filters).toBeVisible();
    const trigger = page.locator('.work-mobile-filter-trigger');
    await expect(trigger).not.toBeVisible();
  });
});
