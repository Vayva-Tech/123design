import { Container } from '@/components/layout';
import { Eyebrow, Heading, Text } from '@/components/ui';
import {
  WORKFLOW_EYEBROW,
  WORKFLOW_HEADING_LINES,
  WORKFLOW_STEPS,
  WORKFLOW_SUPPORTING,
} from '../content';

function WorkflowIcon({ id }: { id: string }) {
  const icons: Record<string, React.ReactNode> = {
    requirements: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h6" />
      </svg>
    ),
    'cad-design': (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M7 7h3v3H7zM14 7h3v3h-3zM7 14h3v3H7zM14 14h3v3h-3z" />
        <path d="M10 8.5h4M10 15.5h4M8.5 10v4M15.5 10v4" />
      </svg>
    ),
    bom: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    'design-reviews': (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    testing: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    manufacturing: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
    launch: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  };

  return <div className="home-workflow__icon" aria-hidden="true">{icons[id]}</div>;
}

export function HomeWorkflow() {
  return (
    <section className="home-workflow home-workflow--light" aria-label="Integrated workflow">
      <Container variant="content">
        <div className="home-workflow__split">
          <div className="home-workflow__copy">
            <Eyebrow>{WORKFLOW_EYEBROW}</Eyebrow>
            <Heading variant="h2" className="heading-lines">
              {WORKFLOW_HEADING_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Heading>
            <Text variant="body" className="home-workflow__supporting">
              {WORKFLOW_SUPPORTING}
            </Text>
          </div>
          <div className="home-workflow__grid">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.id} className="home-workflow__item">
                <WorkflowIcon id={step.id} />
                <span className="home-workflow__label type-small">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
