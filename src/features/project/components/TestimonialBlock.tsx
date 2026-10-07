import { Container } from '@/components/layout/Container';
import { Text } from '@/components/ui/Text';
import type { TestimonialModuleModel } from '@/types/domain';

interface TestimonialBlockProps {
  module: TestimonialModuleModel;
}

export function TestimonialBlock({ module }: TestimonialBlockProps) {
  return (
    <section className="project-testimonial">
      <Container variant="reading">
        <blockquote className="project-testimonial__inner">
          <Text variant="lead" as="p" className="project-testimonial__quote">
            &ldquo;{module.quote}&rdquo;
          </Text>
          <footer className="project-testimonial__attribution">
            <cite className="project-testimonial__name">{module.name}</cite>
            {(module.role || module.company) && (
              <span className="project-testimonial__role">
                {[module.role, module.company].filter(Boolean).join(', ')}
              </span>
            )}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
