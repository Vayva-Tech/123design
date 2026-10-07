'use client';

import { useLeadForm } from '../hooks/use-lead-form';
import { StepChoice } from './StepChoice';
import { StepMultiSelect } from './StepMultiSelect';
import { StepContact } from './StepContact';
import { StepDetails } from './StepDetails';
import { StepReview } from './StepReview';
import { FormConfirmation } from './FormConfirmation';
import type { LeadFormSettingsModel } from '@/types/domain';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

interface LeadFormWizardProps {
  settings: LeadFormSettingsModel;
  sourceRoute: string;
}

export function LeadFormWizard({ settings, sourceRoute }: LeadFormWizardProps) {
  const {
    currentStep,
    totalSteps,
    step,
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    updateField,
    nextStep,
    prevStep,
    submit,
  } = useLeadForm(settings);

  useEffect(() => {
    trackEvent('lead_form_start', { source_route: sourceRoute });
  }, [sourceRoute]);

  if (isSubmitted) {
    return <FormConfirmation settings={settings} />;
  }

  if (!step) {
    return null;
  }

  const progress = ((currentStep + 1) / totalSteps) * 100;
  const isLastStep = currentStep === totalSteps - 1;

  const renderStep = () => {
    switch (step.id) {
      case 'product-type':
        return (
          <StepChoice
            title={step.title}
            description={step.description}
            options={settings.productTypes}
            value={formData.productType}
            onChange={(value) => updateField('productType', value)}
            name="productType"
            error={errors.productType}
          />
        );
      case 'development-stage':
        return (
          <StepChoice
            title={step.title}
            description={step.description}
            options={settings.developmentStages}
            value={formData.developmentStage}
            onChange={(value) => updateField('developmentStage', value)}
            name="developmentStage"
            error={errors.developmentStage}
          />
        );
      case 'needs':
        return (
          <StepMultiSelect
            title={step.title}
            description={step.description}
            options={settings.needs}
            values={formData.needs}
            onChange={(values) => updateField('needs', values)}
            name="needs"
            error={errors.needs}
          />
        );
      case 'timeline':
        return (
          <StepChoice
            title={step.title}
            description={step.description}
            options={settings.timingOptions}
            value={formData.timeline}
            onChange={(value) => updateField('timeline', value)}
            name="timeline"
            error={errors.timeline}
          />
        );
      case 'budget':
        if (!settings.budgetEnabled) {
          nextStep();
          return null;
        }
        return (
          <StepChoice
            title={step.title}
            description={step.description}
            options={settings.budgetOptions}
            value={formData.budget}
            onChange={(value) => updateField('budget', value)}
            name="budget"
            error={errors.budget}
          />
        );
      case 'contact':
        return (
          <StepContact
            data={formData}
            errors={errors as Record<string, string>}
            onChange={updateField}
          />
        );
      case 'project-details':
        return <StepDetails data={formData} onChange={updateField} />;
      case 'review':
        return <StepReview data={formData} settings={settings} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-wizard">
      <div className="form-wizard__progress">
        <span className="form-wizard__step-indicator">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <div className="form-wizard__progress-bar">
          <div
            className="form-wizard__progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="form-wizard__content">{renderStep()}</div>

      <div className="form-wizard__actions">
        {currentStep > 0 ? (
          <button
            type="button"
            className="btn"
            data-variant="secondary"
            data-size="large"
            onClick={prevStep}
            disabled={isSubmitting}
          >
            Back
          </button>
        ) : (
          <div />
        )}
        {isLastStep ? (
          <button
            type="button"
            className="btn"
            data-variant="primary"
            data-size="large"
            onClick={submit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        ) : (
          <button
            type="button"
            className="btn"
            data-variant="primary"
            data-size="large"
            onClick={nextStep}
            disabled={isSubmitting}
          >
            Continue
          </button>
        )}
      </div>

      {errors.submit && (
        <p className="form-wizard__error" role="alert">
          {errors.submit}
        </p>
      )}
    </div>
  );
}
