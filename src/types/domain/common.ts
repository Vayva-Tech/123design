import type { ImageMediaModel } from './media';

export type PublicationState =
  'DRAFT' | 'CONTENT_REVIEW' | 'CLIENT_REVIEW' | 'READY' | 'PUBLISHED' | 'ARCHIVED';

export interface SeoFields {
  title?: string;
  description?: string;
  shareImage?: ImageMediaModel;
  noIndex?: boolean;
}

export interface LinkModel {
  type: 'INTERNAL' | 'EXTERNAL';
  label: string;
  href: string;
}

export interface CtaModel {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'text' | 'dark';
}
