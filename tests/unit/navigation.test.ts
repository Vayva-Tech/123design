import { describe, it, expect } from 'vitest';
import {
  primaryNavigation,
  startProjectLink,
  capabilityGroups,
  viewAllCapabilities,
  industries,
  viewAllIndustries,
  mobileUtilityLinks,
  footerGroups,
} from '@/lib/navigation';
import { isInternalLink } from '@/lib/navigation';

describe('isInternalLink', () => {
  it('returns true for root path', () => {
    expect(isInternalLink('/')).toBe(true);
  });

  it('returns true for internal paths', () => {
    expect(isInternalLink('/work')).toBe(true);
    expect(isInternalLink('/capabilities/product-development')).toBe(true);
  });

  it('returns false for external URLs', () => {
    expect(isInternalLink('https://example.com')).toBe(false);
    expect(isInternalLink('http://example.com')).toBe(false);
  });

  it('returns false for protocol-relative URLs', () => {
    expect(isInternalLink('//example.com')).toBe(false);
  });
});

describe('primaryNavigation — exact canonical values', () => {
  it('has exactly 6 items', () => {
    expect(primaryNavigation).toHaveLength(6);
  });

  it('labels are exactly Work, Capabilities, Process, Industries, About, Insights', () => {
    const labels = primaryNavigation.map((item) => item.label);
    expect(labels).toEqual(['Work', 'Capabilities', 'Process', 'Industries', 'About', 'Insights']);
  });

  it('routes are exactly /work, /capabilities, /process, /industries, /about, /insights', () => {
    const hrefs = primaryNavigation.map((item) => item.href);
    expect(hrefs).toEqual([
      '/work',
      '/capabilities',
      '/process',
      '/industries',
      '/about',
      '/insights',
    ]);
  });

  it('all items have internal hrefs', () => {
    for (const item of primaryNavigation) {
      expect(isInternalLink(item.href)).toBe(true);
    }
  });

  it('does NOT contain Blog', () => {
    const labels = primaryNavigation.map((item) => item.label);
    expect(labels).not.toContain('Blog');
  });
});

describe('startProjectLink — exact canonical values', () => {
  it('label is exactly "Start a Project"', () => {
    expect(startProjectLink.label).toBe('Start a Project');
  });

  it('href is exactly /start-project', () => {
    expect(startProjectLink.href).toBe('/start-project');
  });

  it('href is NOT /contact', () => {
    expect(startProjectLink.href).not.toBe('/contact');
  });
});

describe('capabilityGroups — exact canonical values', () => {
  it('has exactly 4 groups', () => {
    expect(capabilityGroups).toHaveLength(4);
  });

  it('group headings are exactly Design, Engineering, Build, Manage', () => {
    const headings = capabilityGroups.map((g) => g.heading);
    expect(headings).toEqual(['Design', 'Engineering', 'Build', 'Manage']);
  });

  it('Design group has exact items: Product Development, Industrial Design, Product Animation / Visualization', () => {
    const items = capabilityGroups[0]!.items;
    expect(items).toHaveLength(3);
    expect(items[0]!.label).toBe('Product Development');
    expect(items[0]!.href).toBe('/capabilities/product-development');
    expect(items[1]!.label).toBe('Industrial Design');
    expect(items[1]!.href).toBe('/capabilities/industrial-design');
    expect(items[2]!.label).toBe('Product Animation / Visualization');
    expect(items[2]!.href).toBe('/capabilities/product-animation');
  });

  it('Engineering group has exact items: Mechanical, Electrical, Testing & Validation', () => {
    const items = capabilityGroups[1]!.items;
    expect(items).toHaveLength(3);
    expect(items[0]!.label).toBe('Mechanical Engineering');
    expect(items[0]!.href).toBe('/capabilities/mechanical-engineering');
    expect(items[1]!.label).toBe('Electrical Engineering');
    expect(items[1]!.href).toBe('/capabilities/electrical-engineering');
    expect(items[2]!.label).toBe('Testing & Validation');
    expect(items[2]!.href).toBe('/capabilities/testing-validation');
  });

  it('Build group has exact items: Prototyping, Tooling, Manufacturing', () => {
    const items = capabilityGroups[2]!.items;
    expect(items).toHaveLength(3);
    expect(items[0]!.label).toBe('Prototyping');
    expect(items[0]!.href).toBe('/capabilities/prototyping');
    expect(items[1]!.label).toBe('Tooling');
    expect(items[1]!.href).toBe('/capabilities/tooling');
    expect(items[2]!.label).toBe('Manufacturing');
    expect(items[2]!.href).toBe('/capabilities/manufacturing');
  });

  it('Manage group has exact item: Program Management', () => {
    const items = capabilityGroups[3]!.items;
    expect(items).toHaveLength(1);
    expect(items[0]!.label).toBe('Program Management');
    expect(items[0]!.href).toBe('/capabilities/program-management');
  });

  it('total capability links = 10', () => {
    const total = capabilityGroups.reduce((sum, g) => sum + g.items.length, 0);
    expect(total).toBe(10);
  });

  it('all capability hrefs start with /capabilities/', () => {
    for (const group of capabilityGroups) {
      for (const item of group.items) {
        expect(item.href).toMatch(/^\/capabilities\//);
      }
    }
  });
});

describe('viewAllCapabilities — exact canonical values', () => {
  it('label is exactly "View All Capabilities"', () => {
    expect(viewAllCapabilities.label).toBe('View All Capabilities');
  });

  it('href is exactly /capabilities', () => {
    expect(viewAllCapabilities.href).toBe('/capabilities');
  });
});

describe('industries — exact canonical values', () => {
  it('has exactly 6 items', () => {
    expect(industries).toHaveLength(6);
  });

  it('labels and routes are exactly canonical', () => {
    expect(industries[0]!.label).toBe('Consumer Products');
    expect(industries[0]!.href).toBe('/industries/consumer-products');
    expect(industries[1]!.label).toBe('Medical');
    expect(industries[1]!.href).toBe('/industries/medical');
    expect(industries[2]!.label).toBe('Defense & Security');
    expect(industries[2]!.href).toBe('/industries/defense-security');
    expect(industries[3]!.label).toBe('Electronics');
    expect(industries[3]!.href).toBe('/industries/electronics');
    expect(industries[4]!.label).toBe('Industrial');
    expect(industries[4]!.href).toBe('/industries/industrial');
    expect(industries[5]!.label).toBe('Emerging Technology');
    expect(industries[5]!.href).toBe('/industries/emerging-technology');
  });

  it('does NOT contain unauthorized industries', () => {
    const labels = industries.map((i) => i.label);
    expect(labels).not.toContain('E-commerce');
    expect(labels).not.toContain('Health');
    expect(labels).not.toContain('Education');
    expect(labels).not.toContain('Fintech');
    expect(labels).not.toContain('Logistics');
    expect(labels).not.toContain('SaaS');
  });

  it('all hrefs start with /industries/', () => {
    for (const item of industries) {
      expect(item.href).toMatch(/^\/industries\//);
    }
  });
});

describe('viewAllIndustries — exact canonical values', () => {
  it('label is exactly "View All Industries"', () => {
    expect(viewAllIndustries.label).toBe('View All Industries');
  });

  it('href is exactly /industries', () => {
    expect(viewAllIndustries.href).toBe('/industries');
  });
});

describe('mobileUtilityLinks — exact canonical values', () => {
  it('has exactly 5 items', () => {
    expect(mobileUtilityLinks).toHaveLength(5);
  });

  it('labels and routes are exactly canonical', () => {
    expect(mobileUtilityLinks[0]!.label).toBe('Contact');
    expect(mobileUtilityLinks[0]!.href).toBe('/contact');
    expect(mobileUtilityLinks[1]!.label).toBe('FAQ');
    expect(mobileUtilityLinks[1]!.href).toBe('/faq');
    expect(mobileUtilityLinks[2]!.label).toBe('Privacy');
    expect(mobileUtilityLinks[2]!.href).toBe('/privacy');
    expect(mobileUtilityLinks[3]!.label).toBe('Terms');
    expect(mobileUtilityLinks[3]!.href).toBe('/terms');
    expect(mobileUtilityLinks[4]!.label).toBe('Accessibility');
    expect(mobileUtilityLinks[4]!.href).toBe('/accessibility');
  });
});

describe('footerGroups — exact canonical values', () => {
  it('has exactly 5 groups', () => {
    expect(footerGroups).toHaveLength(5);
  });

  it('group headings are exactly Work, Capabilities, Company, Contact, Legal', () => {
    const headings = footerGroups.map((g) => g.heading);
    expect(headings).toEqual(['Work', 'Capabilities', 'Company', 'Contact', 'Legal']);
  });

  it('Work group has exact items', () => {
    const items = footerGroups[0]!.items;
    expect(items).toHaveLength(1);
    expect(items[0]!.label).toBe('Work');
    expect(items[0]!.href).toBe('/work');
  });

  it('Capabilities group has exact 7 items', () => {
    const items = footerGroups[1]!.items;
    expect(items).toHaveLength(7);
    expect(items[0]!.label).toBe('Capabilities');
    expect(items[0]!.href).toBe('/capabilities');
    expect(items[1]!.label).toBe('Product Development');
    expect(items[1]!.href).toBe('/capabilities/product-development');
    expect(items[2]!.label).toBe('Industrial Design');
    expect(items[2]!.href).toBe('/capabilities/industrial-design');
    expect(items[3]!.label).toBe('Mechanical Engineering');
    expect(items[3]!.href).toBe('/capabilities/mechanical-engineering');
    expect(items[4]!.label).toBe('Electrical Engineering');
    expect(items[4]!.href).toBe('/capabilities/electrical-engineering');
    expect(items[5]!.label).toBe('Prototyping');
    expect(items[5]!.href).toBe('/capabilities/prototyping');
    expect(items[6]!.label).toBe('Manufacturing');
    expect(items[6]!.href).toBe('/capabilities/manufacturing');
  });

  it('Company group has exact items: About, Process, Industries, Insights', () => {
    const items = footerGroups[2]!.items;
    expect(items).toHaveLength(4);
    expect(items[0]!.label).toBe('About');
    expect(items[0]!.href).toBe('/about');
    expect(items[1]!.label).toBe('Process');
    expect(items[1]!.href).toBe('/process');
    expect(items[2]!.label).toBe('Industries');
    expect(items[2]!.href).toBe('/industries');
    expect(items[3]!.label).toBe('Insights');
    expect(items[3]!.href).toBe('/insights');
  });

  it('Company group does NOT contain Blog', () => {
    const labels = footerGroups[2]!.items.map((i) => i.label);
    expect(labels).not.toContain('Blog');
  });

  it('Contact group has exact items: Start a Project, Contact', () => {
    const items = footerGroups[3]!.items;
    expect(items).toHaveLength(2);
    expect(items[0]!.label).toBe('Start a Project');
    expect(items[0]!.href).toBe('/start-project');
    expect(items[1]!.label).toBe('Contact');
    expect(items[1]!.href).toBe('/contact');
  });

  it('Legal group has exact items: Privacy, Terms, Accessibility', () => {
    const items = footerGroups[4]!.items;
    expect(items).toHaveLength(3);
    expect(items[0]!.label).toBe('Privacy');
    expect(items[0]!.href).toBe('/privacy');
    expect(items[1]!.label).toBe('Terms');
    expect(items[1]!.href).toBe('/terms');
    expect(items[2]!.label).toBe('Accessibility');
    expect(items[2]!.href).toBe('/accessibility');
  });
});
