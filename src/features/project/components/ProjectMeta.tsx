import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Tag } from '@/components/ui/Tag';
import { CANONICAL_CAPABILITIES } from '@/features/capabilities/registry';
import { CANONICAL_INDUSTRIES } from '@/features/industries/registry';
import type { ProjectPageModel } from '@/types/domain';

interface ProjectMetaProps {
  project: ProjectPageModel;
}

const STAGE_LABELS: Record<string, string> = {
  CON: 'Concept',
  EVT: 'Engineering Validation',
  DVT: 'Design Validation',
  PVT: 'Production Validation',
  PRODUCTION: 'Production',
};

function formatStage(stage: string): string {
  return STAGE_LABELS[stage] ?? stage;
}

function resolveCapabilitySlug(value: string): string | null {
  const direct = CANONICAL_CAPABILITIES.find((c) => c.slug === value);
  if (direct) return direct.slug;
  const byTitle = CANONICAL_CAPABILITIES.find(
    (c) => c.title.toLowerCase() === value.toLowerCase(),
  );
  if (byTitle) return byTitle.slug;
  return null;
}

function resolveIndustrySlug(value: string): string | null {
  const direct = CANONICAL_INDUSTRIES.find((i) => i.slug === value);
  if (direct) return direct.slug;
  const byTitle = CANONICAL_INDUSTRIES.find(
    (i) => i.title.toLowerCase() === value.toLowerCase(),
  );
  if (byTitle) return byTitle.slug;
  return null;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  const hasIndustries = project.industries.length > 0;
  const hasCapabilities = project.capabilities.length > 0;
  const hasStages = project.lifecycleStages.length > 0;
  const hasYear = Boolean(project.year);
  const hasClient = Boolean(project.clientDisplayName);
  const hasMetrics = Boolean(project.metrics);
  const metrics = project.metrics;

  return (
    <section className="project-meta" aria-label="Project details">
      <Container variant="reading">
        <dl className="project-meta__list">
          {hasClient && project.clientDisplayName && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Client</dt>
              <dd className="project-meta__value">{project.clientDisplayName}</dd>
            </div>
          )}

          {hasYear && project.year && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Year</dt>
              <dd className="project-meta__value">{project.year}</dd>
            </div>
          )}

          {hasStages && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Stage</dt>
              <dd className="project-meta__value project-meta__tags">
                {project.lifecycleStages.map((stage) => (
                  <Tag key={stage}>{formatStage(stage)}</Tag>
                ))}
              </dd>
            </div>
          )}

          {hasMetrics && metrics?.timeline && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Timeline</dt>
              <dd className="project-meta__value">{metrics.timeline}</dd>
            </div>
          )}

          {hasMetrics && metrics?.budgetRange && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Budget</dt>
              <dd className="project-meta__value">{metrics.budgetRange}</dd>
            </div>
          )}

          {hasMetrics && metrics?.unitsProduced && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Units Produced</dt>
              <dd className="project-meta__value">{metrics.unitsProduced}</dd>
            </div>
          )}

          {hasMetrics && metrics?.weightReduction && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Weight Reduction</dt>
              <dd className="project-meta__value">{metrics.weightReduction}</dd>
            </div>
          )}

          {hasMetrics && metrics?.cycleTime && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Cycle Time</dt>
              <dd className="project-meta__value">{metrics.cycleTime}</dd>
            </div>
          )}

          {hasMetrics &&
            metrics?.performanceSpecs &&
            metrics.performanceSpecs.length > 0 && (
              <div className="project-meta__item">
                <dt className="project-meta__label">Performance</dt>
                <dd className="project-meta__value project-meta__tags">
                  {metrics.performanceSpecs.map((spec) => (
                    <Tag key={spec}>{spec}</Tag>
                  ))}
                </dd>
              </div>
            )}

          {hasMetrics &&
            metrics?.customMetrics &&
            metrics.customMetrics.length > 0 &&
            metrics.customMetrics.map((m) => (
              <div key={m.label} className="project-meta__item">
                <dt className="project-meta__label">{m.label}</dt>
                <dd className="project-meta__value">{m.value}</dd>
              </div>
            ))}

          {hasIndustries && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Industry</dt>
              <dd className="project-meta__value project-meta__tags">
                {project.industries.map((industry) => {
                  const slug = resolveIndustrySlug(industry);
                  if (slug) {
                    return (
                      <Link key={industry} href={`/industries/${slug}`} className="tag tag--link">
                        {industry}
                      </Link>
                    );
                  }
                  return <Tag key={industry}>{industry}</Tag>;
                })}
              </dd>
            </div>
          )}

          {hasCapabilities && (
            <div className="project-meta__item">
              <dt className="project-meta__label">Capabilities</dt>
              <dd className="project-meta__value project-meta__tags">
                {project.capabilities.map((capability) => {
                  const slug = resolveCapabilitySlug(capability);
                  if (slug) {
                    return (
                      <Link
                        key={capability}
                        href={`/capabilities/${slug}`}
                        className="tag tag--link"
                      >
                        {capability}
                      </Link>
                    );
                  }
                  return <Tag key={capability}>{capability}</Tag>;
                })}
              </dd>
            </div>
          )}
        </dl>
      </Container>
    </section>
  );
}
