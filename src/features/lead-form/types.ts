import type { LeadFormSettingsModel } from '@/types/domain';

export interface LeadFormData {
  productType: string;
  developmentStage: string;
  needs: string[];
  timeline: string;
  budget: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  description: string;
  files: File[];
}

export interface LeadFormStep {
  id: string;
  title: string;
  description?: string;
}

export const LEAD_FORM_STEPS: LeadFormStep[] = [
  {
    id: 'product-type',
    title: 'What are you building?',
    description: 'Select the type of product or service you need help with.',
  },
  {
    id: 'development-stage',
    title: 'What stage are you at?',
    description: 'Tell us where you are in your project journey.',
  },
  {
    id: 'needs',
    title: 'What do you need help with?',
    description: 'Select all that apply.',
  },
  {
    id: 'timeline',
    title: 'When do you need to start?',
    description: 'Help us understand your timeline.',
  },
  {
    id: 'budget',
    title: 'What\'s your budget range?',
    description: 'This helps us tailor our approach to your needs.',
  },
  {
    id: 'contact',
    title: 'How can we reach you?',
    description: 'We\'ll use this to schedule your discovery call.',
  },
  {
    id: 'project-details',
    title: 'Tell us about your project',
    description: 'Share as much detail as you\'d like.',
  },
  {
    id: 'review',
    title: 'Review and submit',
    description: 'Make sure everything looks good before we get started.',
  },
];

export function getInitialFormData(): LeadFormData {
  return {
    productType: '',
    developmentStage: '',
    needs: [],
    timeline: '',
    budget: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    description: '',
    files: [],
  };
}

export function getStepValidation(stepId: string, settings: LeadFormSettingsModel) {
  switch (stepId) {
    case 'product-type':
      return (value: string) => {
        if (!value) return 'Please select a product type';
        return null;
      };
    case 'development-stage':
      return (value: string) => {
        if (!value) return 'Please select your development stage';
        return null;
      };
    case 'needs':
      return (value: string[]) => {
        if (!value || value.length === 0) return 'Please select at least one option';
        return null;
      };
    case 'timeline':
      return (value: string) => {
        if (!value) return 'Please select your timeline';
        return null;
      };
    case 'budget':
      if (!settings.budgetEnabled) return () => null;
      return (value: string) => {
        if (!value) return 'Please select your budget range';
        return null;
      };
    case 'contact':
      return (data: Pick<LeadFormData, 'name' | 'email'>) => {
        const errors: Record<string, string> = {};
        if (!data.name.trim()) errors.name = 'Name is required';
        if (!data.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          errors.email = 'Please enter a valid email';
        }
        return Object.keys(errors).length > 0 ? errors : null;
      };
    case 'project-details':
      return () => null;
    case 'review':
      return () => null;
    default:
      return () => null;
  }
}
