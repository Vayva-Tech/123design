import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { WORKFLOW_HEADING_LINES, WORKFLOW_INTRO, WORKFLOW_STEPS } from '../content';

export function ProcessWorkflow() {
  return (
    <section className="process-workflow" aria-label="Workflow approach">
      <Container variant="reading">
        <Heading variant="h2" className="process-workflow__heading">
          {WORKFLOW_HEADING_LINES.map((line) => (
            <span key={line} className="process-workflow__heading-line">
              {line}
            </span>
          ))}
        </Heading>
        <Text variant="lead" className="process-workflow__intro">
          {WORKFLOW_INTRO}
        </Text>
        <ol className="process-workflow__steps">
          {WORKFLOW_STEPS.map((step) => (
            <li key={step.step} className="process-workflow__step">
              <div className="process-workflow__step-header">
                <span className="process-workflow__step-number">{step.step}</span>
                <Heading variant="h4" className="process-workflow__step-title">
                  {step.label}
                </Heading>
              </div>
              <Text variant="body" className="process-workflow__step-description">
                {step.description}
              </Text>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
