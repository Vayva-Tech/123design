import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { Eyebrow, Heading, Text } from '@/components/ui';
import type { ProjectCardModel } from '@/types/domain';
import {
  FEATURED_EYEBROW,
  FEATURED_HEADING_LINES,
  FEATURED_DESCRIPTION,
  FEATURED_FILTERS,
  FEATURED_VIEW_ALL,
} from '../content';
import { featuredGallery } from '../launch-media';
import { ProjectCard } from './ProjectCard';

interface HomeFeaturedWorkProps {
  projects: ProjectCardModel[];
}

export function HomeFeaturedWork({ projects }: HomeFeaturedWorkProps) {
  const hasProjects = projects.length > 0;

  return (
    <section className="home-featured home-featured--light" aria-label="Featured work">
      <Container variant="content">
        <div className="home-featured__header">
          <div className="home-featured__header-text">
            <Eyebrow marker>{FEATURED_EYEBROW}</Eyebrow>
            <Heading as="h2" variant="displayL" className="heading-lines">
              {FEATURED_HEADING_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Heading>
          </div>
          <div className="home-featured__header-meta">
            <Text variant="body">{FEATURED_DESCRIPTION}</Text>
          </div>
        </div>
        <div className="home-featured__filters" role="tablist" aria-label="Filter projects">
          {FEATURED_FILTERS.map((filter, i) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={i === 0}
              className={`home-featured__filter type-small${i === 0 ? ' home-featured__filter--active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="home-featured__grid">
          {hasProjects
            ? projects.map((project) => <ProjectCard key={project.id} project={project} />)
            : featuredGallery.map((item) => (
                <div key={item.id} className="home-featured__fallback-card">
                  <Image
                    src={item.publicUrl}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    className="home-featured__fallback-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
        </div>
        <div className="home-featured__view-all">
          <Link href={FEATURED_VIEW_ALL.href} className="home-featured__view-all-link type-small">
            {FEATURED_VIEW_ALL.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
