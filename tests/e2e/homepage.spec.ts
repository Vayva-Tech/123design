import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 360, height: 800 },
  { name: 'mobile-large', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 800 },
];

test.describe('Global Shell', () => {
  test('skip link is present in the DOM', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('skip link becomes visible on focus', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeVisible();
  });

  test('main content has id for skip link target', async ({ page }) => {
    await page.goto('/');
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('site header is present and 80px tall at desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const header = page.locator('.site-header');
    await expect(header).toBeVisible();
    const height = await header.evaluate((el) => el.getBoundingClientRect().height);
    expect(height).toBe(80);
  });

  test('site header is 64px tall at mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const mobileHeader = page.locator('.mobile-nav-header');
    await expect(mobileHeader).toBeVisible();
    const height = await mobileHeader.evaluate((el) => el.getBoundingClientRect().height);
    expect(height).toBe(64);
  });

  test('brand mark links to home', async ({ page }) => {
    await page.goto('/');
    const brandMark = page.locator('a.brand-mark');
    await expect(brandMark).toHaveAttribute('href', '/');
    await expect(brandMark).toHaveText('123.design');
  });

  test('site footer is present with dark surface', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('.site-footer');
    await expect(footer).toBeVisible();
  });
});

test.describe('Desktop Navigation', () => {
  test('visible at desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const nav = page.locator('.desktop-nav');
    await expect(nav).toBeVisible();
  });

  test('hidden at mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const nav = page.locator('.desktop-nav');
    await expect(nav).not.toBeVisible();
  });

  test('shows all 6 primary navigation items', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const navLinks = page.locator('.desktop-nav .nav-link, .desktop-nav .disclosure-trigger');
    await expect(navLinks).toHaveCount(6);
  });

  test('Start a Project CTA is visible', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const cta = page.locator('.header-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveText('Start a Project');
  });

  test('capabilities mega menu opens on hover', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const trigger = page.locator('.disclosure-trigger', { hasText: 'Capabilities' });
    await trigger.hover();
    const megaMenu = page.locator('#mega-menu-capabilities');
    await expect(megaMenu).toBeVisible({ timeout: 2000 });
  });

  test('industries dropdown opens on hover', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const trigger = page.locator('.disclosure-trigger', { hasText: 'Industries' });
    await trigger.hover();
    const dropdown = page.locator('#dropdown-industries');
    await expect(dropdown).toBeVisible({ timeout: 2000 });
  });

  test('capabilities mega menu opens on keyboard Enter', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    const trigger = page.locator('.disclosure-trigger', { hasText: 'Capabilities' });
    await trigger.focus();
    await page.keyboard.press('Enter');
    const megaMenu = page.locator('#mega-menu-capabilities');
    await expect(megaMenu).toBeVisible({ timeout: 2000 });
  });

  test('Escape closes open mega menu', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const trigger = page.locator('.disclosure-trigger', { hasText: 'Capabilities' });
    await trigger.hover();
    const megaMenu = page.locator('#mega-menu-capabilities');
    await expect(megaMenu).toBeVisible({ timeout: 2000 });
    await trigger.focus();
    await page.keyboard.press('Escape');
    await expect(megaMenu).not.toBeVisible();
  });
});

test.describe('Mobile Navigation', () => {
  test('mobile menu trigger visible at mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const trigger = page.locator('.mobile-menu-trigger');
    await expect(trigger).toBeVisible();
  });

  test('mobile menu trigger hidden at desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const trigger = page.locator('.mobile-menu-trigger');
    await expect(trigger).not.toBeVisible();
  });

  test('mobile dialog opens on trigger click', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const trigger = page.locator('.mobile-menu-trigger');
    await trigger.click();
    const dialog = page.locator('.mobile-nav');
    await expect(dialog).toBeVisible();
  });

  test('mobile dialog has all primary navigation links', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const links = page.locator('.mobile-nav-link');
    await expect(links).toHaveCount(6);
  });

  test('mobile dialog has Start a Project CTA', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const cta = page.locator('.mobile-nav-cta .btn');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveText('Start a Project');
  });

  test('close button closes the dialog', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const dialog = page.locator('.mobile-nav');
    await expect(dialog).toBeVisible();
    await page.locator('.mobile-nav-close').click();
    await expect(dialog).not.toBeVisible();
  });

  test('Escape key closes the dialog', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const dialog = page.locator('.mobile-nav');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });
});

test.describe('Homepage Sections', () => {
  test('has correct page structure', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/123\.design/);
    const main = page.locator('#main-content');
    await expect(main).toBeVisible();
  });

  test('hero section is visible with heading and CTAs', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('.home-hero');
    await expect(hero).toBeVisible();
    await expect(hero).toHaveAttribute('data-page-overlay', 'dark');
    await expect(hero.locator('h1')).toContainText('FROM IDEA');
    await expect(hero.locator('h1')).toContainText('TO PRODUCTION.');
    await expect(page.locator('.home-hero a[href="/start-project"]')).toBeVisible();
    await expect(page.locator('.home-hero a[href="/work"]')).toBeVisible();
  });

  test('credibility strip shows phases and capabilities', async ({ page }) => {
    await page.goto('/');
    const strip = page.locator('.home-credibility');
    await expect(strip).toBeVisible();
    await expect(strip).toContainText('FROM IDEA TO PRODUCTION');
    await expect(strip).toContainText('INDUSTRIAL DESIGN');
    await expect(strip).toContainText('MANUFACTURING');
  });

  test('lifecycle section renders all 5 stages', async ({ page }) => {
    await page.goto('/');
    const lifecycle = page.locator('.home-lifecycle');
    await expect(lifecycle).toBeVisible();
    await expect(lifecycle).toContainText('CON');
    await expect(lifecycle).toContainText('EVT');
    await expect(lifecycle).toContainText('DVT');
    await expect(lifecycle).toContainText('PVT');
    await expect(lifecycle).toContainText('PRODUCTION');
  });

  test('workflow section renders 7 steps', async ({ page }) => {
    await page.goto('/');
    const workflow = page.locator('.home-workflow');
    await expect(workflow).toBeVisible();
    await expect(workflow).toContainText('Requirements');
    await expect(workflow).toContainText('Launch');
    const steps = page.locator('.home-workflow__item');
    await expect(steps).toHaveCount(7);
  });

  test('capabilities section renders 6 tiles', async ({ page }) => {
    await page.goto('/');
    const capabilities = page.locator('.home-capabilities');
    await expect(capabilities).toBeVisible();
    await expect(capabilities).toContainText('Industrial Design');
    await expect(capabilities).toContainText('Mechanical Engineering');
    await expect(capabilities).toContainText('Testing & Certification');
    const tiles = page.locator('.home-capabilities__tile');
    await expect(tiles).toHaveCount(6);
  });

  test('manufacturing section is visible', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('.home-manufacturing');
    await expect(section).toBeVisible();
    await expect(section).toContainText('MANUFACTURING');
    await expect(section).toContainText('CAPABILITIES');
    await expect(section).toContainText('Design for Manufacture (DFM)');
  });

  test('final CTA section with primary button', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('.home-final-cta');
    await expect(section).toBeVisible();
    await expect(section).toHaveAttribute('data-page-overlay', 'dark');
    await expect(section).toContainText('START YOUR');
    await expect(section).toContainText('PROJECT.');
    await expect(page.locator('.home-final-cta a[href="/start-project"]')).toBeVisible();
    await expect(page.locator('.home-final-cta__visual')).toBeVisible();
  });

  test('conditional sections hidden without CMS data', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.home-featured')).toHaveCount(1);
    await expect(page.locator('.home-testimonial')).toHaveCount(0);
  });

  for (const vp of viewports) {
    test(`no horizontal overflow at ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }

  for (const vp of viewports) {
    test(`hero visible at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      const hero = page.locator('.home-hero');
      await expect(hero).toBeVisible();
    });
  }
});

test.describe('Desktop 1280x800 — exact navigation content', () => {
  test('6 primary nav items in exact order: Work, Capabilities, Process, Industries, About, Insights', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const navItems = page.locator('.desktop-nav .nav-link, .desktop-nav .disclosure-trigger');
    await expect(navItems).toHaveCount(6);
    await expect(navItems.nth(0)).toHaveText('Work');
    await expect(navItems.nth(1)).toHaveText('Capabilities');
    await expect(navItems.nth(2)).toHaveText('Process');
    await expect(navItems.nth(3)).toHaveText('Industries');
    await expect(navItems.nth(4)).toHaveText('About');
    await expect(navItems.nth(5)).toHaveText('Insights');
  });

  test('Blog is NOT present in navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const blogLink = page.locator('.desktop-nav', { hasText: 'Blog' });
    await expect(blogLink).toHaveCount(0);
  });

  test('Start a Project CTA links to /start-project', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const cta = page.locator('.header-cta');
    await expect(cta).toHaveAttribute('href', '/start-project');
  });

  test('no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

test.describe('1024x768 — desktop navigation boundary', () => {
  test('desktop nav is visible', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    const nav = page.locator('.desktop-nav');
    await expect(nav).toBeVisible();
  });

  test('mobile trigger is hidden', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    const trigger = page.locator('.mobile-menu-trigger');
    await expect(trigger).not.toBeVisible();
  });

  test('no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test('capabilities mega menu opens', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    const trigger = page.locator('.disclosure-trigger', { hasText: 'Capabilities' });
    await trigger.hover();
    const megaMenu = page.locator('#mega-menu-capabilities');
    await expect(megaMenu).toBeVisible({ timeout: 2000 });
  });

  test('industries dropdown opens', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    const trigger = page.locator('.disclosure-trigger', { hasText: 'Industries' });
    await trigger.hover();
    const dropdown = page.locator('#dropdown-industries');
    await expect(dropdown).toBeVisible({ timeout: 2000 });
  });
});

test.describe('768x1024 — tablet uses mobile navigation', () => {
  test('desktop nav is hidden', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    const nav = page.locator('.desktop-nav');
    await expect(nav).not.toBeVisible();
  });

  test('mobile trigger is visible', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    const trigger = page.locator('.mobile-menu-trigger');
    await expect(trigger).toBeVisible();
  });

  test('mobile dialog opens and shows Insights', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const insightsLink = page.locator('.mobile-nav-link', { hasText: 'Insights' });
    await expect(insightsLink).toBeVisible();
  });

  test('mobile dialog shows Start a Project', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const cta = page.locator('.mobile-nav-cta .btn');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveText('Start a Project');
  });

  test('mobile dialog shows utility links', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const utilityLinks = page.locator('.mobile-nav-utility-link');
    await expect(utilityLinks).toHaveCount(5);
  });
});

test.describe('Mobile 390x844 — exact navigation content', () => {
  test('mobile nav links in exact canonical order', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const links = page.locator('.mobile-nav-link');
    await expect(links).toHaveCount(6);
    await expect(links.nth(0)).toHaveText('Work');
    await expect(links.nth(1)).toHaveText('Capabilities');
    await expect(links.nth(2)).toHaveText('Process');
    await expect(links.nth(3)).toHaveText('Industries');
    await expect(links.nth(4)).toHaveText('About');
    await expect(links.nth(5)).toHaveText('Insights');
  });

  test('no unauthorized IA terms in mobile navigation', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const dialog = page.locator('.mobile-nav');
    const text = await dialog.textContent();
    expect(text).not.toContain('Blog');
    expect(text).not.toContain('E-commerce');
    expect(text).not.toContain('Fintech');
    expect(text).not.toContain('SaaS');
  });

  test('no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

test.describe('Mobile 360x800 — exact navigation content', () => {
  test('mobile nav links in exact canonical order', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const links = page.locator('.mobile-nav-link');
    await expect(links).toHaveCount(6);
    await expect(links.nth(0)).toHaveText('Work');
    await expect(links.nth(1)).toHaveText('Capabilities');
    await expect(links.nth(2)).toHaveText('Process');
    await expect(links.nth(3)).toHaveText('Industries');
    await expect(links.nth(4)).toHaveText('About');
    await expect(links.nth(5)).toHaveText('Insights');
  });

  test('no unauthorized IA terms in mobile navigation', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto('/');
    await page.locator('.mobile-menu-trigger').click();
    const dialog = page.locator('.mobile-nav');
    const text = await dialog.textContent();
    expect(text).not.toContain('Blog');
    expect(text).not.toContain('E-commerce');
    expect(text).not.toContain('Fintech');
    expect(text).not.toContain('SaaS');
  });

  test('no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
