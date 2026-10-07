import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import { VideoPlayer } from '@/components/system/VideoPlayer';
import type { ProjectPageModel } from '@/types/domain';

interface ProjectHeroProps {
  project: ProjectPageModel;
  priority?: boolean;
}

function HeroMedia({ project, priority }: ProjectHeroProps) {
  const { heroMedia } = project;

  if (heroMedia.kind === 'VIDEO') {
    return (
      <div className="project-hero__media">
        <VideoPlayer media={heroMedia} autoPlay muted loop controls={false} />
      </div>
    );
  }

  return (
    <div className="project-hero__media">
      <ResponsiveImage
        media={heroMedia}
        priority={priority}
        sizes="100vw"
        className="project-hero__image"
      />
    </div>
  );
}

export function ProjectHero({ project, priority = false }: ProjectHeroProps) {
  return (
    <section className="project-hero" aria-label="Project hero">
      <HeroMedia project={project} priority={priority} />
      <Container variant="shell" className="project-hero__content">
        <Eyebrow marker>Case Study</Eyebrow>
        <Heading variant="displayXL" className="project-hero__title">
          {project.title}
        </Heading>
        <Text variant="lead" className="project-hero__summary">
          {project.summary}
        </Text>
      </Container>
    </section>
  );
}
