import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import type { ProjectCardModel } from '@/types/domain';

interface NextProjectProps {
  project: ProjectCardModel;
}

export function NextProject({ project }: NextProjectProps) {
  return (
    <section className="next-project" aria-label="Next project">
      <Container variant="shell">
        <Link href={`/work/${project.slug}`} className="next-project__link">
          <Eyebrow marker>Next Project</Eyebrow>
          <Heading variant="displayL" className="next-project__title">
            {project.title}
          </Heading>
        </Link>
      </Container>
    </section>
  );
}
