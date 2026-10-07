'use client';

import { useState, useCallback } from 'react';
import type { LeadFormData } from '../types';
import { getInitialFormData, LEAD_FORM_STEPS } from '../types';
import type { LeadFormSettingsModel } from '@/types/domain';
import { trackEvent } from '@/lib/analytics';

export function useLeadForm(settings: LeadFormSettingsModel) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<LeadFormData>(getInitialFormData());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = LEAD_FORM_STEPS.length;
  const step = LEAD_FORM_STEPS[currentStep];

  const updateField = useCallback(<K extends keyof LeadFormData>(
    field: K,
    value: LeadFormData[K]
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      const next = { ...prev };
      delete next[field as string];
      return next;
    });
  }, []);

  const validateStep = useCallback(() => {
    if (!step) return false;

    const newErrors: Record<string, string> = {};

    switch (step.id) {
      case 'product-type':
        if (!formData.productType) {
          newErrors.productType = 'Please select a product type';
        }
        break;
      case 'development-stage':
        if (!formData.developmentStage) {
          newErrors.developmentStage = 'Please select your development stage';
        }
        break;
      case 'needs':
        if (!formData.needs || formData.needs.length === 0) {
          newErrors.needs = 'Please select at least one option';
        }
        break;
      case 'timeline':
        if (!formData.timeline) {
          newErrors.timeline = 'Please select your timeline';
        }
        break;
      case 'budget':
        if (settings.budgetEnabled && !formData.budget) {
          newErrors.budget = 'Please select your budget range';
        }
        break;
      case 'contact':
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        break;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    return true;
  }, [step, formData, settings]);

  const nextStep = useCallback(() => {
    if (!validateStep()) {
      trackEvent('lead_form_error', {
        step: currentStep + 1,
        field: Object.keys(errors)[0] || 'unknown',
        error_type: 'validation',
      });
      return;
    }

    trackEvent('lead_form_step', {
      step: currentStep + 1,
      step_name: step?.id || 'unknown',
    });

    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, totalSteps, step, errors, validateStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setErrors({});
    }
  }, [currentStep]);

  const submit = useCallback(async () => {
    if (!validateStep()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        productType: formData.productType,
        developmentStage: formData.developmentStage,
        needs: formData.needs,
        timeline: formData.timeline,
        budget: settings.budgetEnabled ? formData.budget : undefined,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        description: formData.description,
      };

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      trackEvent('lead_form_submit', {
        product_type: formData.productType,
        has_attachments: formData.files.length > 0,
      });

      setIsSubmitted(true);
    } catch (error) {
      trackEvent('lead_form_error', {
        step: currentStep + 1,
        field: 'submission',
        error_type: 'network',
      });
      setErrors({ submit: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, settings, currentStep, validateStep]);

  return {
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
  };
}
