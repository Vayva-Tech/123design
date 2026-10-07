import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  PAGE_EYEBROW,
  PAGE_HEADING,
  PAGE_SUPPORTING,
  LIFECYCLE_HEADING_LINES,
  PROCESS_STAGE_DETAILS,
  WORKFLOW_HEADING_LINES,
  WORKFLOW_INTRO,
  WORKFLOW_STEPS,
  PROCESS_PRINCIPLES,
  FINAL_CTA_HEADING,
  FINAL_CTA_BODY,
  FINAL_CTA_BUTTON,
} from '@/features/process/content';
import { ProcessHero } from '@/features/process/components/ProcessHero';
import { ProcessMosaic } from '@/features/process/components/ProcessMosaic';
import { ProcessStageSection } from '@/features/process/components/ProcessStageSection';
import { ProcessWorkflow } from '@/features/process/components/ProcessWorkflow';
import { ProcessPrinciples } from '@/features/process/components/ProcessPrinciples';
import { ProcessCta } from '@/features/process/components/ProcessCta';

describe('Process content', () => {
  it('has eyebrow text', () => {
    expect(PAGE_EYEBROW).toBe('PROCESS');
  });

  it('has heading text', () => {
    expect(PAGE_HEADING).toBe('FROM IDEA TO PRODUCTION.');
  });

  it('has supporting text', () => {
    expect(PAGE_SUPPORTING).toBeTruthy();
    expect(PAGE_SUPPORTING.length).toBeGreaterThan(50);
  });

  it('has two lifecycle heading lines', () => {
    expect(LIFECYCLE_HEADING_LINES).toHaveLength(2);
    expect(LIFECYCLE_HEADING_LINES[0]).toBe('ONE TEAM.');
    expect(LIFECYCLE_HEADING_LINES[1]).toBe('EVERY DEVELOPMENT STAGE.');
  });

  it('has exactly 5 process stage details', () => {
    expect(PROCESS_STAGE_DETAILS).toHaveLength(5);
  });

  it('stages are in order: CON, EVT, DVT, PVT, PRODUCTION', () => {
    expect(PROCESS_STAGE_DETAILS[0]!.code).toBe('CON');
    expect(PROCESS_STAGE_DETAILS[1]!.code).toBe('EVT');
    expect(PROCESS_STAGE_DETAILS[2]!.code).toBe('DVT');
    expect(PROCESS_STAGE_DETAILS[3]!.code).toBe('PVT');
    expect(PROCESS_STAGE_DETAILS[4]!.code).toBe('PRODUCTION');
  });

  it('each stage has code, label, and activities', () => {
    for (const stage of PROCESS_STAGE_DETAILS) {
      expect(stage.code).toBeTruthy();
      expect(stage.label).toBeTruthy();
      expect(stage.activities.length).toBeGreaterThan(0);
    }
  });

  it('CON stage has expected activities', () => {
    const con = PROCESS_STAGE_DETAILS[0]!;
    expect(con.label).toBe('Concept');
    expect(con.activities).toContain('Product strategy');
    expect(con.activities).toContain('User research');
    expect(con.activities).toContain('Industrial design');
  });

  it('has two workflow heading lines', () => {
    expect(WORKFLOW_HEADING_LINES).toHaveLength(2);
    expect(WORKFLOW_HEADING_LINES[0]).toBe('YOUR PROCESS');
    expect(WORKFLOW_HEADING_LINES[1]).toBe('OR OURS.');
  });

  it('has workflow intro', () => {
    expect(WORKFLOW_INTRO).toBeTruthy();
    expect(WORKFLOW_INTRO).toContain('structured workflow');
  });

  it('has exactly 8 workflow steps', () => {
    expect(WORKFLOW_STEPS).toHaveLength(8);
  });

  it('workflow steps are numbered 1-8', () => {
    for (let i = 0; i < 8; i++) {
      expect(WORKFLOW_STEPS[i]!.step).toBe(i + 1);
    }
  });

  it('workflow steps have expected labels in order', () => {
    expect(WORKFLOW_STEPS[0]!.label).toBe('Requirements');
    expect(WORKFLOW_STEPS[1]!.label).toBe('Jira');
    expect(WORKFLOW_STEPS[2]!.label).toBe('Design Reviews');
    expect(WORKFLOW_STEPS[3]!.label).toBe('CAD / EE');
    expect(WORKFLOW_STEPS[4]!.label).toBe('BOM');
    expect(WORKFLOW_STEPS[5]!.label).toBe('Prototype');
    expect(WORKFLOW_STEPS[6]!.label).toBe('Validation');
    expect(WORKFLOW_STEPS[7]!.label).toBe('Release');
  });

  it('each workflow step has step, label, and description', () => {
    for (const step of WORKFLOW_STEPS) {
      expect(step.step).toBeGreaterThan(0);
      expect(step.label).toBeTruthy();
      expect(step.description).toBeTruthy();
    }
  });

  it('has exactly 4 principles', () => {
    expect(PROCESS_PRINCIPLES).toHaveLength(4);
  });

  it('principles have expected titles', () => {
    expect(PROCESS_PRINCIPLES[0]!.title).toBe('TRANSPARENT');
    expect(PROCESS_PRINCIPLES[1]!.title).toBe('INTEGRATED');
    expect(PROCESS_PRINCIPLES[2]!.title).toBe('ITERATIVE');
    expect(PROCESS_PRINCIPLES[3]!.title).toBe('PRODUCTION-MINDED');
  });

  it('each principle has code, title, and description', () => {
    for (const principle of PROCESS_PRINCIPLES) {
      expect(principle.code).toBeTruthy();
      expect(principle.title).toBeTruthy();
      expect(principle.description).toBeTruthy();
    }
  });

  it('has final CTA content', () => {
    expect(FINAL_CTA_HEADING).toBe('HAVE A PRODUCT TO BUILD?');
    expect(FINAL_CTA_BODY).toBeTruthy();
    expect(FINAL_CTA_BUTTON.label).toBe('START YOUR PROJECT');
    expect(FINAL_CTA_BUTTON.href).toBe('/start-project');
  });
});

describe('ProcessHero', () => {
  it('renders section with process-hero class', () => {
    const html = renderToStaticMarkup(<ProcessHero />);
    expect(html).toContain('class="process-hero"');
  });

  it('renders PROCESS eyebrow', () => {
    const html = renderToStaticMarkup(<ProcessHero />);
    expect(html).toContain('PROCESS');
  });

  it('renders heading', () => {
    const html = renderToStaticMarkup(<ProcessHero />);
    expect(html).toContain('FROM IDEA TO PRODUCTION.');
  });

  it('renders supporting text', () => {
    const html = renderToStaticMarkup(<ProcessHero />);
    expect(html).toContain('structured development framework');
  });

  it('uses shell container', () => {
    const html = renderToStaticMarkup(<ProcessHero />);
    expect(html).toContain('data-variant="shell"');
  });
});

describe('ProcessMosaic', () => {
  it('renders section with process-mosaic class', () => {
    const html = renderToStaticMarkup(<ProcessMosaic />);
    expect(html).toContain('class="process-mosaic"');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<ProcessMosaic />);
    expect(html).toContain('aria-label="Development lifecycle stages"');
  });

  it('renders LIFECYCLE eyebrow', () => {
    const html = renderToStaticMarkup(<ProcessMosaic />);
    expect(html).toContain('LIFECYCLE');
  });

  it('renders lifecycle heading lines', () => {
    const html = renderToStaticMarkup(<ProcessMosaic />);
    expect(html).toContain('ONE TEAM.');
    expect(html).toContain('EVERY DEVELOPMENT STAGE.');
  });

  it('renders 5 stage cards', () => {
    const html = renderToStaticMarkup(<ProcessMosaic />);
    const cardMatches = html.match(/class="process-mosaic__card"/g);
    expect(cardMatches).toHaveLength(5);
  });

  it('renders all stage codes', () => {
    const html = renderToStaticMarkup(<ProcessMosaic />);
    expect(html).toContain('CON');
    expect(html).toContain('EVT');
    expect(html).toContain('DVT');
    expect(html).toContain('PVT');
    expect(html).toContain('PRODUCTION');
  });

  it('renders stage labels', () => {
    const html = renderToStaticMarkup(<ProcessMosaic />);
    expect(html).toContain('Concept');
    expect(html).toContain('Engineering Validation');
    expect(html).toContain('Design Validation');
    expect(html).toContain('Production Validation');
    expect(html).toContain('Production');
  });

  it('renders grid container', () => {
    const html = renderToStaticMarkup(<ProcessMosaic />);
    expect(html).toContain('process-mosaic__grid');
  });
});

describe('ProcessStageSection', () => {
  const conStage = PROCESS_STAGE_DETAILS[0]!;

  it('renders section with process-stage class', () => {
    const html = renderToStaticMarkup(<ProcessStageSection stage={conStage} />);
    expect(html).toContain('class="process-stage"');
  });

  it('has aria-label with code and label', () => {
    const html = renderToStaticMarkup(<ProcessStageSection stage={conStage} />);
    expect(html).toContain('aria-label="CON — Concept"');
  });

  it('has data-stage attribute', () => {
    const html = renderToStaticMarkup(<ProcessStageSection stage={conStage} />);
    expect(html).toContain('data-stage="CON"');
  });

  it('renders stage code badge', () => {
    const html = renderToStaticMarkup(<ProcessStageSection stage={conStage} />);
    expect(html).toContain('process-stage__code');
    expect(html).toContain('CON');
  });

  it('renders stage label', () => {
    const html = renderToStaticMarkup(<ProcessStageSection stage={conStage} />);
    expect(html).toContain('Concept');
  });

  it('renders activities list', () => {
    const html = renderToStaticMarkup(<ProcessStageSection stage={conStage} />);
    expect(html).toContain('process-stage__activities');
    expect(html).toContain('Product strategy');
    expect(html).toContain('User research');
    expect(html).toContain('Industrial design');
  });

  it('renders all activities for the stage', () => {
    const html = renderToStaticMarkup(<ProcessStageSection stage={conStage} />);
    for (const activity of conStage.activities) {
      expect(html).toContain(activity);
    }
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<ProcessStageSection stage={conStage} />);
    expect(html).toContain('data-variant="reading"');
  });
});

describe('ProcessWorkflow', () => {
  it('renders section with process-workflow class', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    expect(html).toContain('class="process-workflow"');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    expect(html).toContain('aria-label="Workflow approach"');
  });

  it('renders heading lines', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    expect(html).toContain('YOUR PROCESS');
    expect(html).toContain('OR OURS.');
  });

  it('renders intro text', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    expect(html).toContain('structured workflow');
  });

  it('renders ordered steps list', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    expect(html).toContain('process-workflow__steps');
  });

  it('renders 8 workflow steps', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    const stepMatches = html.match(/class="process-workflow__step"/g);
    expect(stepMatches).toHaveLength(8);
  });

  it('renders all step labels', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    expect(html).toContain('Requirements');
    expect(html).toContain('Jira');
    expect(html).toContain('Design Reviews');
    expect(html).toContain('CAD / EE');
    expect(html).toContain('BOM');
    expect(html).toContain('Prototype');
    expect(html).toContain('Validation');
    expect(html).toContain('Release');
  });

  it('renders step numbers', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    expect(html).toContain('process-workflow__step-number');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<ProcessWorkflow />);
    expect(html).toContain('data-variant="reading"');
  });
});

describe('ProcessPrinciples', () => {
  it('renders section with process-principles class', () => {
    const html = renderToStaticMarkup(<ProcessPrinciples />);
    expect(html).toContain('class="process-principles"');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<ProcessPrinciples />);
    expect(html).toContain('aria-label="Process principles"');
  });

  it('renders HOW WE WORK heading', () => {
    const html = renderToStaticMarkup(<ProcessPrinciples />);
    expect(html).toContain('HOW WE WORK');
  });

  it('renders 4 principle items', () => {
    const html = renderToStaticMarkup(<ProcessPrinciples />);
    const itemMatches = html.match(/class="process-principles__item"/g);
    expect(itemMatches).toHaveLength(4);
  });

  it('renders all principle titles', () => {
    const html = renderToStaticMarkup(<ProcessPrinciples />);
    expect(html).toContain('TRANSPARENT');
    expect(html).toContain('INTEGRATED');
    expect(html).toContain('ITERATIVE');
    expect(html).toContain('PRODUCTION-MINDED');
  });

  it('renders principle descriptions', () => {
    const html = renderToStaticMarkup(<ProcessPrinciples />);
    expect(html).toContain('Clear requirements, visible decisions');
    expect(html).toContain('remain connected');
    expect(html).toContain('repeated cycles');
    expect(html).toContain('manufacturability');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<ProcessPrinciples />);
    expect(html).toContain('data-variant="reading"');
  });
});

describe('ProcessCta', () => {
  it('renders section with process-cta class', () => {
    const html = renderToStaticMarkup(<ProcessCta />);
    expect(html).toContain('class="process-cta"');
  });

  it('renders CTA heading', () => {
    const html = renderToStaticMarkup(<ProcessCta />);
    expect(html).toContain('HAVE A PRODUCT TO BUILD?');
  });

  it('renders CTA body text', () => {
    const html = renderToStaticMarkup(<ProcessCta />);
    expect(html).toContain('Let');
  });

  it('renders primary button', () => {
    const html = renderToStaticMarkup(<ProcessCta />);
    expect(html).toContain('START YOUR PROJECT');
  });

  it('links to /start-project', () => {
    const html = renderToStaticMarkup(<ProcessCta />);
    expect(html).toContain('href="/start-project"');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<ProcessCta />);
    expect(html).toContain('data-variant="reading"');
  });
});
