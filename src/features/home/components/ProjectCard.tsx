import Link from 'next/link';
import type { ProjectCardModel } from '@/types/domain';
import { Heading, Text } from '@/components/ui';

interface ProjectCardProps {
  project: ProjectCardModel;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const heroImage = project.heroMedia.kind === 'IMAGE' ? project.heroMedia : null;
  const primaryIndustry = project.industries[0]?.title;
  const capabilityLabels = project.capabilities.slice(0, 3).map((c) => c.title);

  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      <div className="project-card__media">
        {heroImage && (
          <img
            src={heroImage.url}
            alt={heroImage.decorative ? '' : heroImage.alt}
            className="project-card__image"
            loading="lazy"
            width={heroImage.width}
            height={heroImage.height}
          />
        )}
      </div>
      <Heading variant="h4">{project.title}</Heading>
      <div className="project-card__meta">
        {primaryIndustry && (
          <Text variant="small" as="span" className="project-card__industry">
            {primaryIndustry}
          </Text>
        )}
        {capabilityLabels.length > 0 && (
          <Text variant="micro" as="span" className="project-card__capability">
            {capabilityLabels.join(', ')}
          </Text>
        )}
      </div>
    </Link>
  );
}
