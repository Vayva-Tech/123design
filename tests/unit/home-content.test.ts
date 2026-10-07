import { describe, it, expect } from 'vitest';
import {
  HERO_EYEBROW,
  HERO_HEADING_LINES,
  HERO_SUBTITLE,
  HERO_PRIMARY_CTA,
  HERO_SECONDARY_CTA,
  HERO_STATS,
  CLIENT_LOGOS,
  LIFECYCLE_EYEBROW,
  LIFECYCLE_HEADING_LINES,
  LIFECYCLE_DESCRIPTION,
  LIFECYCLE_STAGES,
  WORKFLOW_EYEBROW,
  WORKFLOW_HEADING_LINES,
  WORKFLOW_STEPS,
  WORKFLOW_SUPPORTING,
  CAPABILITIES_EYEBROW,
  CAPABILITIES_HEADING_LINES,
  CAPABILITIES_DESCRIPTION,
  CAPABILITY_GROUPS,
  INDUSTRIES_HEADING_LINES,
  CANONICAL_INDUSTRIES,
  HOW_WE_WORK_HEADING,
  HOW_WE_WORK_PRINCIPLES,
  MANUFACTURING_EYEBROW,
  MANUFACTURING_HEADING_LINES,
  MANUFACTURING_BODY,
  MANUFACTURING_BULLETS,
  FINAL_CTA_EYEBROW,
  FINAL_CTA_HEADING_LINES,
  FINAL_CTA_BODY,
  FINAL_CTA_BUTTON,
  SCHEDULE_CTA_LABEL,
} from '@/features/home/content';
import { homepageHeroReel } from '@/features/home/launch-media';

describe('Hero content', () => {
  it('has eyebrow text', () => {
    expect(HERO_EYEBROW).toBeTruthy();
    expect(typeof HERO_EYEBROW).toBe('string');
  });

  it('has exactly two heading lines', () => {
    expect(HERO_HEADING_LINES).toHaveLength(2);
    expect(HERO_HEADING_LINES[0]).toBe('FROM IDEA');
    expect(HERO_HEADING_LINES[1]).toBe('TO PRODUCTION.');
  });

  it('has subtitle text', () => {
    expect(HERO_SUBTITLE).toBeTruthy();
    expect(typeof HERO_SUBTITLE).toBe('string');
  });

  it('has primary CTA with label and href', () => {
    expect(HERO_PRIMARY_CTA.label).toBe('Start Your Project →');
    expect(HERO_PRIMARY_CTA.href).toBe('/start-project');
  });

  it('has secondary CTA with label and href', () => {
    expect(HERO_SECONDARY_CTA.label).toBe('Explore Our Work ▷');
    expect(HERO_SECONDARY_CTA.href).toBe('/work');
  });

  it('has exactly 3 stats', () => {
    expect(HERO_STATS).toHaveLength(3);
    for (const stat of HERO_STATS) {
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    }
  });

  it('has exactly 8 client logos', () => {
    expect(CLIENT_LOGOS).toHaveLength(8);
    for (const name of CLIENT_LOGOS) {
      expect(name).toBeTruthy();
    }
  });
});

describe('Lifecycle content', () => {
  it('has eyebrow text', () => {
    expect(LIFECYCLE_EYEBROW).toBe('OUR PROCESS');
  });

  it('has two heading lines', () => {
    expect(LIFECYCLE_HEADING_LINES).toHaveLength(2);
    expect(LIFECYCLE_HEADING_LINES[0]).toBe('CONCEPT TO PRODUCTION.');
    expect(LIFECYCLE_HEADING_LINES[1]).toBe('EVERY STAGE.');
  });

  it('has description text', () => {
    expect(LIFECYCLE_DESCRIPTION).toBeTruthy();
    expect(LIFECYCLE_DESCRIPTION.length).toBeGreaterThan(50);
  });

  it('has exactly 5 stages in order: CON, EVT, DVT, PVT, PRODUCTION', () => {
    expect(LIFECYCLE_STAGES).toHaveLength(5);
    expect(LIFECYCLE_STAGES[0]!.code).toBe('CON');
    expect(LIFECYCLE_STAGES[1]!.code).toBe('EVT');
    expect(LIFECYCLE_STAGES[2]!.code).toBe('DVT');
    expect(LIFECYCLE_STAGES[3]!.code).toBe('PVT');
    expect(LIFECYCLE_STAGES[4]!.code).toBe('PRODUCTION');
  });

  it('each stage has label and description', () => {
    for (const stage of LIFECYCLE_STAGES) {
      expect(stage.label).toBeTruthy();
      expect(stage.description).toBeTruthy();
    }
  });
});

describe('Workflow content', () => {
  it('has eyebrow text', () => {
    expect(WORKFLOW_EYEBROW).toBe('INTEGRATED WORKFLOW');
  });

  it('has two heading lines', () => {
    expect(WORKFLOW_HEADING_LINES).toHaveLength(2);
    expect(WORKFLOW_HEADING_LINES[0]).toBe('YOUR TOOLS,');
    expect(WORKFLOW_HEADING_LINES[1]).toBe('CONNECTED.');
  });

  it('has exactly 7 steps', () => {
    expect(WORKFLOW_STEPS).toHaveLength(7);
  });

  it('each step has id and label', () => {
    for (const step of WORKFLOW_STEPS) {
      expect(step.id).toBeTruthy();
      expect(step.label).toBeTruthy();
    }
  });

  it('steps are in canonical order', () => {
    expect(WORKFLOW_STEPS[0]!.id).toBe('requirements');
    expect(WORKFLOW_STEPS[6]!.id).toBe('launch');
  });

  it('has supporting text', () => {
    expect(WORKFLOW_SUPPORTING).toBeTruthy();
    expect(WORKFLOW_SUPPORTING.length).toBeGreaterThan(50);
  });
});

describe('Capabilities content', () => {
  it('has eyebrow text', () => {
    expect(CAPABILITIES_EYEBROW).toBe('OUR CAPABILITIES');
  });

  it('has two heading lines', () => {
    expect(CAPABILITIES_HEADING_LINES).toHaveLength(2);
    expect(CAPABILITIES_HEADING_LINES[0]).toBe('A FULL-SERVICE');
    expect(CAPABILITIES_HEADING_LINES[1]).toBe('DEVELOPMENT PARTNER.');
  });

  it('has description text', () => {
    expect(CAPABILITIES_DESCRIPTION).toBeTruthy();
    expect(CAPABILITIES_DESCRIPTION.length).toBeGreaterThan(50);
  });

  it('has exactly 6 capability groups', () => {
    expect(CAPABILITY_GROUPS).toHaveLength(6);
  });

  it('each group has slug and label', () => {
    for (const group of CAPABILITY_GROUPS) {
      expect(group.slug).toBeTruthy();
      expect(group.label).toBeTruthy();
    }
  });

  it('group slugs are unique', () => {
    const slugs = CAPABILITY_GROUPS.map((g) => g.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe('Industries content', () => {
  it('has two heading lines', () => {
    expect(INDUSTRIES_HEADING_LINES).toHaveLength(2);
  });

  it('has exactly 6 canonical industries', () => {
    expect(CANONICAL_INDUSTRIES).toHaveLength(6);
  });

  it('each industry has slug, label, href, and description', () => {
    for (const industry of CANONICAL_INDUSTRIES) {
      expect(industry.slug).toBeTruthy();
      expect(industry.label).toBeTruthy();
      expect(industry.description).toBeTruthy();
      expect(industry.href).toMatch(/^\/industries\/[a-z-]+$/);
    }
  });

  it('industry slugs are unique', () => {
    const slugs = CANONICAL_INDUSTRIES.map((i) => i.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe('How We Work content', () => {
  it('has heading text', () => {
    expect(HOW_WE_WORK_HEADING).toBe('HOW WE WORK');
  });

  it('has exactly 4 principles', () => {
    expect(HOW_WE_WORK_PRINCIPLES).toHaveLength(4);
  });

  it('each principle has label and description', () => {
    for (const principle of HOW_WE_WORK_PRINCIPLES) {
      expect(principle.label).toBeTruthy();
      expect(principle.description).toBeTruthy();
    }
  });
});

describe('Manufacturing content', () => {
  it('has eyebrow text', () => {
    expect(MANUFACTURING_EYEBROW).toBe('MANUFACTURING');
  });

  it('has two heading lines', () => {
    expect(MANUFACTURING_HEADING_LINES).toHaveLength(2);
    expect(MANUFACTURING_HEADING_LINES[0]).toBe('REAL MANUFACTURING');
    expect(MANUFACTURING_HEADING_LINES[1]).toBe('CAPABILITIES.');
  });

  it('has body text', () => {
    expect(MANUFACTURING_BODY).toBeTruthy();
    expect(MANUFACTURING_BODY.length).toBeGreaterThan(50);
  });

  it('has exactly 5 manufacturing bullets', () => {
    expect(MANUFACTURING_BULLETS).toHaveLength(5);
    expect(MANUFACTURING_BULLETS[0]).toBe('Design for Manufacture (DFM)');
    expect(MANUFACTURING_BULLETS[4]).toBe('Quality Systems & Inspection');
  });
});

describe('Final CTA content', () => {
  it('has eyebrow text', () => {
    expect(FINAL_CTA_EYEBROW).toBe("LET'S BUILD SOMETHING GREAT");
  });

  it('has two heading lines', () => {
    expect(FINAL_CTA_HEADING_LINES).toHaveLength(2);
    expect(FINAL_CTA_HEADING_LINES[0]).toBe('START YOUR');
    expect(FINAL_CTA_HEADING_LINES[1]).toBe('PROJECT.');
  });

  it('has body text', () => {
    expect(FINAL_CTA_BODY).toBeTruthy();
  });

  it('has button with label and href', () => {
    expect(FINAL_CTA_BUTTON.label).toBe('Get Started →');
    expect(FINAL_CTA_BUTTON.href).toBe('/start-project');
  });

  it('has schedule CTA label', () => {
    expect(SCHEDULE_CTA_LABEL).toBe('SCHEDULE A CONVERSATION');
  });
});

describe('Hero reel manifest', () => {
  it('contains Phase 0B-approved hero reel entries', () => {
    expect(homepageHeroReel).toHaveLength(14);
    for (const entry of homepageHeroReel) {
      expect(entry.id).toBeTruthy();
      expect(entry.videoUrl).toMatch(/^\/media\/launch\/hero\//);
      expect(entry.decorative).toBe(true);
    }
  });
});
