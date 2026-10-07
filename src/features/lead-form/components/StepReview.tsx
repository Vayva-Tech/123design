'use client';

import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { LeadFormData } from '../types';
import type { LeadFormSettingsModel } from '@/types/domain';

interface StepReviewProps {
  data: LeadFormData;
  settings: LeadFormSettingsModel;
}

export function StepReview({ data, settings }: StepReviewProps) {
  return (
    <div className="step-review">
      <div className="step-review__header">
        <Heading variant="h2">Review and submit</Heading>
        <Text variant="bodyLarge">
          Make sure everything looks good before we get started.
        </Text>
      </div>
      <div className="step-review__summary">
        <div className="step-review__section">
          <h3 className="step-review__section-title">Project Details</h3>
          <dl className="step-review__list">
            <div className="step-review__item">
              <dt>Product Type</dt>
              <dd>{data.productType}</dd>
            </div>
            <div className="step-review__item">
              <dt>Development Stage</dt>
              <dd>{data.developmentStage}</dd>
            </div>
            <div className="step-review__item">
              <dt>Needs</dt>
              <dd>{data.needs.join(', ')}</dd>
            </div>
            <div className="step-review__item">
              <dt>Timeline</dt>
              <dd>{data.timeline}</dd>
            </div>
            {settings.budgetEnabled && data.budget && (
              <div className="step-review__item">
                <dt>Budget</dt>
                <dd>{data.budget}</dd>
              </div>
            )}
          </dl>
        </div>
        <div className="step-review__section">
          <h3 className="step-review__section-title">Contact Information</h3>
          <dl className="step-review__list">
            <div className="step-review__item">
              <dt>Name</dt>
              <dd>{data.name}</dd>
            </div>
            <div className="step-review__item">
              <dt>Email</dt>
              <dd>{data.email}</dd>
            </div>
            {data.company && (
              <div className="step-review__item">
                <dt>Company</dt>
                <dd>{data.company}</dd>
              </div>
            )}
            {data.phone && (
              <div className="step-review__item">
                <dt>Phone</dt>
                <dd>{data.phone}</dd>
              </div>
            )}
          </dl>
        </div>
        {data.description && (
          <div className="step-review__section">
            <h3 className="step-review__section-title">Project Description</h3>
            <p className="step-review__description">{data.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
