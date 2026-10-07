import type { Metadata } from 'next';
import { ProcessHero } from '@/features/process/components/ProcessHero';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Process — Concept to Production',
  description:
    'Structured product development process from concept through engineering validation, design validation, production validation and full-rate manufacturing. Stage-gate methodology with validation at each gate.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'Process — Five-Stage Product Development',
    description:
      'Concept, EVT, DVT, PVT, Production. Stage-gate methodology with clear deliverables and go/no-go decisions at every phase.',
  },
};
import { ProcessMosaic } from '@/features/process/components/ProcessMosaic';
import { ProcessStageSection } from '@/features/process/components/ProcessStageSection';
import { ProcessWorkflow } from '@/features/process/components/ProcessWorkflow';
import { ProcessPrinciples } from '@/features/process/components/ProcessPrinciples';
import { ProcessCta } from '@/features/process/components/ProcessCta';
import { PROCESS_STAGE_DETAILS } from '@/features/process/content';

export default function ProcessPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Process', url: '/process' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Process', href: '/process' },
        ]}
      />

      <ProcessHero />
      <ProcessMosaic />
      {PROCESS_STAGE_DETAILS.map((stage) => (
        <ProcessStageSection key={stage.code} stage={stage} />
      ))}
      <ProcessWorkflow />
      <ProcessPrinciples />
      <ProcessCta />
    </main>
  );
}
