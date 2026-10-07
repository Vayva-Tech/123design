import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { HomeHero } from '@/features/home/components/HomeHero';
import { HomeCredibility } from '@/features/home/components/HomeCredibility';
import { HomeFeaturedWork } from '@/features/home/components/HomeFeaturedWork';
import { HomeLifecycle } from '@/features/home/components/HomeLifecycle';
import { HomeWorkflow } from '@/features/home/components/HomeWorkflow';
import { HomeCapabilities } from '@/features/home/components/HomeCapabilities';
import { HomeTestimonial } from '@/features/home/components/HomeTestimonial';
import { HomeManufacturing } from '@/features/home/components/HomeManufacturing';
import { HomeFinalCta } from '@/features/home/components/HomeFinalCta';
import { ProjectCard } from '@/features/home/components/ProjectCard';
import type { ProjectCardModel, TestimonialModel } from '@/types/domain';

const mockProject: ProjectCardModel = {
  id: 'proj-1',
  slug: 'test-device',
  title: 'Test Device',
  industries: [{ slug: 'medical', title: 'Medical Devices' }],
  capabilities: [
    { slug: 'industrial-design', title: 'Industrial Design' },
    { slug: 'firmware', title: 'Firmware' },
  ],
  lifecycleStages: ['CON', 'EVT'],
  heroMedia: {
    kind: 'IMAGE',
    url: 'https://example.com/image.jpg',
    alt: 'Test device photo',
    decorative: false,
    width: 800,
    height: 600,
  },
  publicationState: 'PUBLISHED',
};

const mockTestimonial: TestimonialModel = {
  quote: 'They delivered an excellent product.',
  name: 'Jane Smith',
  role: 'CTO',
  company: 'Acme Corp',
};

describe('HomeHero', () => {
  it('renders a section with home-hero class', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('class="home-hero"');
  });

  it('sets data-page-overlay="dark" for header activation', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('data-page-overlay="dark"');
  });

  it('renders the hero eyebrow', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('PRODUCT DEVELOPMENT');
    expect(html).toContain('eyebrow-text');
  });

  it('renders both heading lines', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('FROM IDEA');
    expect(html).toContain('TO PRODUCTION.');
    expect(html).toContain('heading-lines');
  });

  it('renders supporting text', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('Industrial design, engineering and manufacturing');
  });

  it('renders primary CTA linking to /start-project', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('href="/start-project"');
    expect(html).toContain('Start Your Project');
  });

  it('renders secondary CTA linking to /work', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('href="/work"');
    expect(html).toContain('Explore Our Work');
  });

  it('renders stats bar with key metrics', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('home-hero__stats');
    expect(html).toContain('200+');
    expect(html).toContain('Products Developed');
    expect(html).toContain('1,000,000+');
    expect(html).toContain('Units in Market');
    expect(html).toContain('25+');
    expect(html).toContain('Industries Served');
  });

  it('renders client logos row', () => {
    const html = renderToStaticMarkup(<HomeHero />);
    expect(html).toContain('home-hero__clients');
    expect(html).toContain('BOSE');
    expect(html).toContain('Honeywell');
    expect(html).toContain('Medtronic');
  });
});

describe('HomeCredibility', () => {
  it('renders text-based credibility strip with phases and capabilities', () => {
    const html = renderToStaticMarkup(<HomeCredibility />);
    expect(html).toContain('home-credibility');
    expect(html).toContain('FROM IDEA TO PRODUCTION');
    expect(html).toContain('CON');
    expect(html).toContain('EVT');
    expect(html).toContain('DVT');
    expect(html).toContain('PVT');
    expect(html).toContain('PRODUCTION');
    expect(html).toContain('INDUSTRIAL DESIGN');
    expect(html).toContain('ENGINEERING');
    expect(html).toContain('PROTOTYPING');
    expect(html).toContain('MANUFACTURING');
  });
});

describe('HomeFeaturedWork', () => {
  it('renders fallback gallery when projects array is empty', () => {
    const html = renderToStaticMarkup(<HomeFeaturedWork projects={[]} />);
    expect(html).toContain('home-featured');
    expect(html).toContain('FEATURED WORK');
    expect(html).toContain('REAL PRODUCTS.');
    expect(html).toContain('REAL RESULTS.');
    expect(html).toContain('data-nimg');
  });

  it('renders filter tabs', () => {
    const html = renderToStaticMarkup(<HomeFeaturedWork projects={[]} />);
    expect(html).toContain('home-featured__filters');
    expect(html).toContain('All');
    expect(html).toContain('Consumer');
    expect(html).toContain('Medical');
    expect(html).toContain('Defense');
  });

  it('renders view-all link', () => {
    const html = renderToStaticMarkup(<HomeFeaturedWork projects={[]} />);
    expect(html).toContain('View All Projects');
    expect(html).toContain('href="/work"');
  });

  it('renders project cards when projects provided', () => {
    const html = renderToStaticMarkup(<HomeFeaturedWork projects={[mockProject]} />);
    expect(html).toContain('home-featured');
    expect(html).toContain('Test Device');
  });
});

describe('HomeLifecycle', () => {
  it('renders a section with home-lifecycle class', () => {
    const html = renderToStaticMarkup(<HomeLifecycle />);
    expect(html).toContain('class="home-lifecycle"');
  });

  it('renders all 5 lifecycle stages', () => {
    const html = renderToStaticMarkup(<HomeLifecycle />);
    expect(html).toContain('CON');
    expect(html).toContain('EVT');
    expect(html).toContain('DVT');
    expect(html).toContain('PVT');
    expect(html).toContain('PRODUCTION');
  });

  it('renders heading lines', () => {
    const html = renderToStaticMarkup(<HomeLifecycle />);
    expect(html).toContain('CONCEPT TO PRODUCTION.');
    expect(html).toContain('EVERY STAGE.');
  });

  it('renders eyebrow text', () => {
    const html = renderToStaticMarkup(<HomeLifecycle />);
    expect(html).toContain('OUR PROCESS');
  });

  it('renders description text', () => {
    const html = renderToStaticMarkup(<HomeLifecycle />);
    expect(html).toContain('every phase of development');
  });
});

describe('HomeWorkflow', () => {
  it('renders a section with home-workflow class and light modifier', () => {
    const html = renderToStaticMarkup(<HomeWorkflow />);
    expect(html).toContain('home-workflow');
    expect(html).toContain('home-workflow--light');
  });

  it('renders all 7 workflow step labels', () => {
    const html = renderToStaticMarkup(<HomeWorkflow />);
    expect(html).toContain('Requirements Tracking');
    expect(html).toContain('CAD Design Control');
    expect(html).toContain('BOM Management');
    expect(html).toContain('Design Reviews');
    expect(html).toContain('Testing &amp; Validation');
    expect(html).toContain('Manufacturing');
    expect(html).toContain('Launch &amp; Support');
  });

  it('renders workflow items with correct class', () => {
    const html = renderToStaticMarkup(<HomeWorkflow />);
    expect(html).toContain('home-workflow__item');
    expect(html).toContain('home-workflow__icon');
    expect(html).toContain('home-workflow__label');
  });

  it('renders heading lines', () => {
    const html = renderToStaticMarkup(<HomeWorkflow />);
    expect(html).toContain('YOUR TOOLS,');
    expect(html).toContain('CONNECTED.');
  });

  it('renders eyebrow text', () => {
    const html = renderToStaticMarkup(<HomeWorkflow />);
    expect(html).toContain('INTEGRATED WORKFLOW');
  });
});

describe('HomeCapabilities', () => {
  it('renders a section with home-capabilities class and dark overlay', () => {
    const html = renderToStaticMarkup(<HomeCapabilities />);
    expect(html).toContain('class="home-capabilities"');
    expect(html).toContain('data-page-overlay="dark"');
  });

  it('renders all 6 capability tile labels', () => {
    const html = renderToStaticMarkup(<HomeCapabilities />);
    expect(html).toContain('Industrial Design');
    expect(html).toContain('Mechanical Engineering');
    expect(html).toContain('Electrical Engineering');
    expect(html).toContain('Prototyping');
    expect(html).toContain('Tooling &amp; Manufacturing');
    expect(html).toContain('Testing &amp; Certification');
  });

  it('renders capability tiles with images', () => {
    const html = renderToStaticMarkup(<HomeCapabilities />);
    expect(html).toContain('home-capabilities__tile');
    expect(html).toContain('home-capabilities__media');
    expect(html).toContain('home-capabilities__overlay');
    expect(html).toContain('data-nimg');
  });

  it('renders heading lines', () => {
    const html = renderToStaticMarkup(<HomeCapabilities />);
    expect(html).toContain('A FULL-SERVICE');
    expect(html).toContain('DEVELOPMENT PARTNER.');
  });

  it('renders eyebrow and description', () => {
    const html = renderToStaticMarkup(<HomeCapabilities />);
    expect(html).toContain('OUR CAPABILITIES');
    expect(html).toContain('every discipline needed');
  });
});

describe('HomeTestimonial', () => {
  it('returns null when testimonials array is empty', () => {
    const html = renderToStaticMarkup(<HomeTestimonial testimonials={[]} />);
    expect(html).toBe('');
  });

  it('renders the first testimonial as a blockquote', () => {
    const html = renderToStaticMarkup(<HomeTestimonial testimonials={[mockTestimonial]} />);
    expect(html).toContain('class="home-testimonial"');
    expect(html).toContain('<blockquote>');
    expect(html).toContain('They delivered an excellent product.');
    expect(html).toContain('Jane Smith');
    expect(html).toContain('CTO');
    expect(html).toContain('Acme Corp');
  });

  it('renders stats alongside the quote', () => {
    const html = renderToStaticMarkup(<HomeTestimonial testimonials={[mockTestimonial]} />);
    expect(html).toContain('home-testimonial__stats');
    expect(html).toContain('200+');
    expect(html).toContain('1,000,000+');
    expect(html).toContain('25+');
  });

  it('sets data-page-overlay="dark"', () => {
    const html = renderToStaticMarkup(<HomeTestimonial testimonials={[mockTestimonial]} />);
    expect(html).toContain('data-page-overlay="dark"');
  });

  it('omits role/company when not provided', () => {
    const minimal: TestimonialModel = { quote: 'Great work.', name: 'Bob' };
    const html = renderToStaticMarkup(<HomeTestimonial testimonials={[minimal]} />);
    expect(html).toContain('Bob');
    expect(html).not.toContain('home-testimonial__role');
  });
});

describe('HomeManufacturing', () => {
  it('renders a section with home-manufacturing class and light modifier', () => {
    const html = renderToStaticMarkup(<HomeManufacturing />);
    expect(html).toContain('home-manufacturing');
    expect(html).toContain('home-manufacturing--light');
  });

  it('renders heading lines', () => {
    const html = renderToStaticMarkup(<HomeManufacturing />);
    expect(html).toContain('REAL MANUFACTURING');
    expect(html).toContain('CAPABILITIES.');
  });

  it('renders eyebrow text', () => {
    const html = renderToStaticMarkup(<HomeManufacturing />);
    expect(html).toContain('MANUFACTURING');
  });

  it('renders body text', () => {
    const html = renderToStaticMarkup(<HomeManufacturing />);
    expect(html).toContain('factory partners');
    expect(html).toContain('supply chain');
  });

  it('renders manufacturing bullet list', () => {
    const html = renderToStaticMarkup(<HomeManufacturing />);
    expect(html).toContain('home-manufacturing__bullets');
    expect(html).toContain('Design for Manufacture (DFM)');
    expect(html).toContain('Quality Systems &amp; Inspection');
  });

  it('renders manufacturing image via next/image', () => {
    const html = renderToStaticMarkup(<HomeManufacturing />);
    expect(html).toContain('data-nimg');
    expect(html).toContain('Manufacturing process');
  });
});

describe('HomeFinalCta', () => {
  it('renders a section with home-final-cta class and dark overlay', () => {
    const html = renderToStaticMarkup(<HomeFinalCta />);
    expect(html).toContain('class="home-final-cta"');
    expect(html).toContain('data-page-overlay="dark"');
  });

  it('renders heading lines', () => {
    const html = renderToStaticMarkup(<HomeFinalCta />);
    expect(html).toContain('START YOUR');
    expect(html).toContain('PROJECT.');
  });

  it('renders eyebrow text', () => {
    const html = renderToStaticMarkup(<HomeFinalCta />);
    expect(html).toContain("LET&#x27;S BUILD SOMETHING GREAT");
  });

  it('renders primary CTA to /start-project', () => {
    const html = renderToStaticMarkup(<HomeFinalCta />);
    expect(html).toContain('href="/start-project"');
    expect(html).toContain('Get Started');
  });

  it('does not render schedule CTA when no URL provided', () => {
    const html = renderToStaticMarkup(<HomeFinalCta />);
    expect(html).not.toContain('SCHEDULE A CONVERSATION');
  });

  it('renders schedule CTA when URL provided', () => {
    const html = renderToStaticMarkup(<HomeFinalCta scheduleCallUrl="https://cal.example/demo" />);
    expect(html).toContain('SCHEDULE A CONVERSATION');
    expect(html).toContain('href="https://cal.example/demo"');
  });

  it('renders split layout with visual image', () => {
    const html = renderToStaticMarkup(<HomeFinalCta />);
    expect(html).toContain('home-final-cta__split');
    expect(html).toContain('home-final-cta__visual');
    expect(html).toContain('data-nimg');
  });
});

describe('ProjectCard', () => {
  it('renders a link to /work/{slug}', () => {
    const html = renderToStaticMarkup(<ProjectCard project={mockProject} />);
    expect(html).toContain('href="/work/test-device"');
    expect(html).toContain('class="project-card"');
  });

  it('renders project title', () => {
    const html = renderToStaticMarkup(<ProjectCard project={mockProject} />);
    expect(html).toContain('Test Device');
  });

  it('renders industry when present', () => {
    const html = renderToStaticMarkup(<ProjectCard project={mockProject} />);
    expect(html).toContain('Medical Devices');
    expect(html).toContain('project-card__industry');
  });

  it('renders capabilities when present', () => {
    const html = renderToStaticMarkup(<ProjectCard project={mockProject} />);
    expect(html).toContain('Industrial Design, Firmware');
    expect(html).toContain('project-card__capability');
  });

  it('renders hero image with correct src and alt', () => {
    const html = renderToStaticMarkup(<ProjectCard project={mockProject} />);
    expect(html).toContain('src="https://example.com/image.jpg"');
    expect(html).toContain('alt="Test device photo"');
  });

  it('renders empty alt for decorative images', () => {
    const decorativeProject: ProjectCardModel = {
      ...mockProject,
      heroMedia: {
        kind: 'IMAGE',
        url: 'https://example.com/decorative.jpg',
        alt: 'Decorative',
        decorative: true,
        width: 800,
        height: 600,
      },
    };
    const html = renderToStaticMarkup(<ProjectCard project={decorativeProject} />);
    expect(html).toContain('alt=""');
  });
});
