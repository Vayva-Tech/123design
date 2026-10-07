import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type {
  ProjectPageModel,
  ProjectCardModel,
  NarrativeModuleModel,
  DisciplineModuleModel,
  GalleryModuleModel,
  VideoModuleModel,
  TechnicalModuleModel,
  TestimonialModuleModel,
} from '@/types/domain';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

import { ProjectHero } from '@/features/project/components/ProjectHero';
import { ProjectMeta } from '@/features/project/components/ProjectMeta';
import { NarrativeSection } from '@/features/project/components/NarrativeSection';
import { DisciplineSection } from '@/features/project/components/DisciplineSection';
import { ProjectGallery } from '@/features/project/components/ProjectGallery';
import { ProjectVideoBlock } from '@/features/project/components/ProjectVideoBlock';
import { ProjectTechnicalDetails } from '@/features/project/components/ProjectTechnicalDetails';
import { TestimonialBlock } from '@/features/project/components/TestimonialBlock';
import { ProjectCaseStudyBody } from '@/features/project/components/ProjectCaseStudyBody';
import { RelatedWork } from '@/features/project/components/RelatedWork';
import { NextProject } from '@/features/project/components/NextProject';
import { PreviewIndicator } from '@/features/project/components/PreviewIndicator';
import { ProjectFinalCta } from '@/features/project/components/ProjectFinalCta';

const imageMedia = {
  kind: 'IMAGE' as const,
  url: 'https://cdn.sanity.io/images/test.png',
  alt: 'Test image',
  decorative: false,
  width: 800,
  height: 600,
};

const videoMedia = {
  kind: 'VIDEO' as const,
  url: 'https://cdn.sanity.io/videos/test.mp4',
  purpose: 'projectVideo' as const,
};

const baseProject: ProjectPageModel = {
  id: 'proj-1',
  slug: 'test-device',
  title: 'Test Device',
  summary: 'A test medical device from concept to production',
  heroMedia: imageMedia,
  industries: ['Medical Devices'],
  capabilities: ['Industrial Design', 'Prototyping'],
  lifecycleStages: ['CON', 'EVT'],
  year: 2025,
  clientDisplayName: 'Acme Corp',
  modules: [],
  relatedProjects: [],
};

const cardProject: ProjectCardModel = {
  id: 'proj-2',
  slug: 'other-device',
  title: 'Other Device',
  industries: [{ slug: 'electronics', title: 'Electronics' }],
  capabilities: [{ slug: 'electrical-engineering', title: 'Electrical Engineering' }],
  lifecycleStages: ['DVT'],
  heroMedia: imageMedia,
  publicationState: 'PUBLISHED',
};

describe('ProjectHero', () => {
  it('renders section with project-hero class', () => {
    const html = renderToStaticMarkup(<ProjectHero project={baseProject} />);
    expect(html).toContain('class="project-hero"');
  });

  it('renders the project title', () => {
    const html = renderToStaticMarkup(<ProjectHero project={baseProject} />);
    expect(html).toContain('Test Device');
  });

  it('renders the project summary', () => {
    const html = renderToStaticMarkup(<ProjectHero project={baseProject} />);
    expect(html).toContain('concept to production');
  });

  it('renders Case Study eyebrow', () => {
    const html = renderToStaticMarkup(<ProjectHero project={baseProject} />);
    expect(html).toContain('Case Study');
  });

  it('uses shell container', () => {
    const html = renderToStaticMarkup(<ProjectHero project={baseProject} />);
    expect(html).toContain('data-variant="shell"');
  });
});

describe('ProjectMeta', () => {
  it('renders section with project-meta class', () => {
    const html = renderToStaticMarkup(<ProjectMeta project={baseProject} />);
    expect(html).toContain('class="project-meta"');
  });

  it('has aria-label for accessibility', () => {
    const html = renderToStaticMarkup(<ProjectMeta project={baseProject} />);
    expect(html).toContain('aria-label="Project details"');
  });

  it('renders client name when present', () => {
    const html = renderToStaticMarkup(<ProjectMeta project={baseProject} />);
    expect(html).toContain('Acme Corp');
    expect(html).toContain('Client');
  });

  it('renders year when present', () => {
    const html = renderToStaticMarkup(<ProjectMeta project={baseProject} />);
    expect(html).toContain('2025');
    expect(html).toContain('Year');
  });

  it('renders lifecycle stages with labels', () => {
    const html = renderToStaticMarkup(<ProjectMeta project={baseProject} />);
    expect(html).toContain('Concept');
    expect(html).toContain('Engineering Validation');
  });

  it('renders industries', () => {
    const html = renderToStaticMarkup(<ProjectMeta project={baseProject} />);
    expect(html).toContain('Medical Devices');
    expect(html).toContain('Industry');
  });

  it('renders capabilities', () => {
    const html = renderToStaticMarkup(<ProjectMeta project={baseProject} />);
    expect(html).toContain('Industrial Design');
    expect(html).toContain('Capabilities');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<ProjectMeta project={baseProject} />);
    expect(html).toContain('data-variant="reading"');
  });

  it('omits client when not present', () => {
    const project = { ...baseProject, clientDisplayName: undefined };
    const html = renderToStaticMarkup(<ProjectMeta project={project} />);
    expect(html).not.toContain('Client');
  });
});

describe('NarrativeSection', () => {
  const mod: NarrativeModuleModel = {
    kind: 'narrative',
    sectionType: 'challenge',
    body: 'The challenge was significant.',
  };

  it('renders section with project-narrative class', () => {
    const html = renderToStaticMarkup(<NarrativeSection module={mod} />);
    expect(html).toContain('class="project-narrative"');
  });

  it('uses default heading for section type', () => {
    const html = renderToStaticMarkup(<NarrativeSection module={mod} />);
    expect(html).toContain('The Challenge');
  });

  it('uses custom heading when provided', () => {
    const html = renderToStaticMarkup(
      <NarrativeSection module={{ ...mod, heading: 'Our Hurdle' }} />,
    );
    expect(html).toContain('Our Hurdle');
  });

  it('renders body text', () => {
    const html = renderToStaticMarkup(<NarrativeSection module={mod} />);
    expect(html).toContain('The challenge was significant.');
  });

  it('sets data-section attribute', () => {
    const html = renderToStaticMarkup(<NarrativeSection module={mod} />);
    expect(html).toContain('data-section="challenge"');
  });
});

describe('DisciplineSection', () => {
  const mod: DisciplineModuleModel = {
    kind: 'discipline',
    sectionType: 'industrialDesign',
    body: 'Design language defined.',
  };

  it('renders section with project-discipline class', () => {
    const html = renderToStaticMarkup(<DisciplineSection module={mod} />);
    expect(html).toContain('class="project-discipline"');
  });

  it('uses default heading for section type', () => {
    const html = renderToStaticMarkup(<DisciplineSection module={mod} />);
    expect(html).toContain('Industrial Design');
  });

  it('uses custom heading when provided', () => {
    const html = renderToStaticMarkup(
      <DisciplineSection module={{ ...mod, heading: 'Form Factor' }} />,
    );
    expect(html).toContain('Form Factor');
  });

  it('sets data-section attribute', () => {
    const html = renderToStaticMarkup(<DisciplineSection module={mod} />);
    expect(html).toContain('data-section="industrialDesign"');
  });
});

describe('ProjectGallery', () => {
  const mod: GalleryModuleModel = {
    kind: 'gallery',
    items: [
      { media: imageMedia, caption: 'View 1' },
      {
        media: { ...imageMedia, url: 'https://cdn.sanity.io/images/test2.png' },
        caption: 'View 2',
      },
    ],
  };

  it('renders section with project-gallery class', () => {
    const html = renderToStaticMarkup(<ProjectGallery module={mod} />);
    expect(html).toContain('class="project-gallery"');
  });

  it('renders gallery items', () => {
    const html = renderToStaticMarkup(<ProjectGallery module={mod} />);
    expect(html).toContain('project-gallery__item');
  });

  it('uses wideMedia container', () => {
    const html = renderToStaticMarkup(<ProjectGallery module={mod} />);
    expect(html).toContain('data-variant="wide-media"');
  });

  it('renders caption when present', () => {
    const html = renderToStaticMarkup(
      <ProjectGallery module={{ ...mod, caption: 'Gallery caption' }} />,
    );
    expect(html).toContain('Gallery caption');
  });
});

describe('ProjectVideoBlock', () => {
  const mod: VideoModuleModel = {
    kind: 'video',
    media: videoMedia,
    caption: 'Process video',
  };

  it('renders section with project-video-block class', () => {
    const html = renderToStaticMarkup(<ProjectVideoBlock module={mod} />);
    expect(html).toContain('class="project-video-block"');
  });

  it('uses wideMedia container', () => {
    const html = renderToStaticMarkup(<ProjectVideoBlock module={mod} />);
    expect(html).toContain('data-variant="wide-media"');
  });

  it('returns null for non-video media', () => {
    const badModule = { ...mod, media: imageMedia } as unknown as VideoModuleModel;
    const html = renderToStaticMarkup(<ProjectVideoBlock module={badModule} />);
    expect(html).toBe('');
  });
});

describe('ProjectTechnicalDetails', () => {
  const mod: TechnicalModuleModel = {
    kind: 'technical',
    heading: 'Specifications',
    details: 'Weight: 200g, Dimensions: 10x5x2cm',
  };

  it('renders section with project-technical class', () => {
    const html = renderToStaticMarkup(<ProjectTechnicalDetails module={mod} />);
    expect(html).toContain('class="project-technical"');
  });

  it('renders heading when present', () => {
    const html = renderToStaticMarkup(<ProjectTechnicalDetails module={mod} />);
    expect(html).toContain('Specifications');
  });

  it('renders details text', () => {
    const html = renderToStaticMarkup(<ProjectTechnicalDetails module={mod} />);
    expect(html).toContain('Weight: 200g');
  });

  it('omits heading when not provided', () => {
    const html = renderToStaticMarkup(
      <ProjectTechnicalDetails module={{ kind: 'technical', details: 'Specs' }} />,
    );
    expect(html).not.toContain('project-technical__heading');
  });
});

describe('TestimonialBlock', () => {
  const mod: TestimonialModuleModel = {
    kind: 'testimonial',
    quote: 'Exceptional results.',
    name: 'Jane Doe',
    role: 'CTO',
    company: 'MedTech Inc',
  };

  it('renders section with project-testimonial class', () => {
    const html = renderToStaticMarkup(<TestimonialBlock module={mod} />);
    expect(html).toContain('class="project-testimonial"');
  });

  it('renders quote text', () => {
    const html = renderToStaticMarkup(<TestimonialBlock module={mod} />);
    expect(html).toContain('Exceptional results.');
  });

  it('renders name in cite element', () => {
    const html = renderToStaticMarkup(<TestimonialBlock module={mod} />);
    expect(html).toContain('<cite');
    expect(html).toContain('Jane Doe');
  });

  it('renders role and company', () => {
    const html = renderToStaticMarkup(<TestimonialBlock module={mod} />);
    expect(html).toContain('CTO');
    expect(html).toContain('MedTech Inc');
  });

  it('uses blockquote element', () => {
    const html = renderToStaticMarkup(<TestimonialBlock module={mod} />);
    expect(html).toContain('<blockquote');
  });
});

describe('ProjectCaseStudyBody', () => {
  it('renders wrapper with project-case-study class', () => {
    const html = renderToStaticMarkup(<ProjectCaseStudyBody modules={[]} />);
    expect(html).toContain('class="project-case-study"');
  });

  it('filters out non-renderable modules', () => {
    const modules: NarrativeModuleModel[] = [{ kind: 'narrative', sectionType: 'overview' }];
    const html = renderToStaticMarkup(<ProjectCaseStudyBody modules={modules} />);
    expect(html).not.toContain('project-narrative');
  });

  it('renders renderable narrative modules', () => {
    const modules: NarrativeModuleModel[] = [
      { kind: 'narrative', sectionType: 'overview', body: 'Content here' },
    ];
    const html = renderToStaticMarkup(<ProjectCaseStudyBody modules={modules} />);
    expect(html).toContain('project-narrative');
    expect(html).toContain('Content here');
  });

  it('renders mixed module types', () => {
    const modules = [
      { kind: 'narrative' as const, sectionType: 'overview' as const, body: 'Overview text' },
      { kind: 'testimonial' as const, quote: 'Great work', name: 'John' },
    ];
    const html = renderToStaticMarkup(<ProjectCaseStudyBody modules={modules} />);
    expect(html).toContain('project-narrative');
    expect(html).toContain('project-testimonial');
  });
});

describe('RelatedWork', () => {
  it('returns null when no projects', () => {
    const html = renderToStaticMarkup(<RelatedWork projects={[]} />);
    expect(html).toBe('');
  });

  it('renders section when projects exist', () => {
    const html = renderToStaticMarkup(<RelatedWork projects={[cardProject]} />);
    expect(html).toContain('class="related-work"');
  });

  it('renders Related Work eyebrow', () => {
    const html = renderToStaticMarkup(<RelatedWork projects={[cardProject]} />);
    expect(html).toContain('Related Work');
  });

  it('renders project cards', () => {
    const html = renderToStaticMarkup(<RelatedWork projects={[cardProject]} />);
    expect(html).toContain('Other Device');
  });
});

describe('NextProject', () => {
  it('renders section with next-project class', () => {
    const html = renderToStaticMarkup(<NextProject project={cardProject} />);
    expect(html).toContain('class="next-project"');
  });

  it('renders Next Project eyebrow', () => {
    const html = renderToStaticMarkup(<NextProject project={cardProject} />);
    expect(html).toContain('Next Project');
  });

  it('renders project title', () => {
    const html = renderToStaticMarkup(<NextProject project={cardProject} />);
    expect(html).toContain('Other Device');
  });

  it('links to the project page', () => {
    const html = renderToStaticMarkup(<NextProject project={cardProject} />);
    expect(html).toContain('href="/work/other-device"');
  });
});

describe('PreviewIndicator', () => {
  it('renders with preview-indicator class', () => {
    const html = renderToStaticMarkup(<PreviewIndicator />);
    expect(html).toContain('class="preview-indicator"');
  });

  it('has role status', () => {
    const html = renderToStaticMarkup(<PreviewIndicator />);
    expect(html).toContain('role="status"');
  });

  it('has aria-live polite', () => {
    const html = renderToStaticMarkup(<PreviewIndicator />);
    expect(html).toContain('aria-live="polite"');
  });

  it('renders Preview Mode text', () => {
    const html = renderToStaticMarkup(<PreviewIndicator />);
    expect(html).toContain('Preview Mode');
  });
});

describe('ProjectFinalCta', () => {
  it('renders section with project-cta class', () => {
    const html = renderToStaticMarkup(<ProjectFinalCta />);
    expect(html).toContain('class="project-cta"');
  });

  it('renders heading text', () => {
    const html = renderToStaticMarkup(<ProjectFinalCta />);
    expect(html).toContain('Have a project in mind?');
  });

  it('renders body text', () => {
    const html = renderToStaticMarkup(<ProjectFinalCta />);
    expect(html).toContain('concept through production');
  });

  it('renders primary button', () => {
    const html = renderToStaticMarkup(<ProjectFinalCta />);
    expect(html).toContain('Start a conversation');
  });

  it('defaults to /contact href', () => {
    const html = renderToStaticMarkup(<ProjectFinalCta />);
    expect(html).toContain('href="/contact"');
  });

  it('uses custom schedule call URL when provided', () => {
    const html = renderToStaticMarkup(<ProjectFinalCta scheduleCallUrl="/book" />);
    expect(html).toContain('href="/book"');
  });
});
