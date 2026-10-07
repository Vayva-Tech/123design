import type { MediaModel } from './media';
import type { SeoFields } from './common';
import type { CapabilityCardModel } from './capability';
import type { ProjectCardModel } from './project';
import type { PortableTextBlockModel } from './portable-text';

export interface ArticleAuthorModel {
  name: string;
  title?: string;
  credentials?: string;
  bio?: string;
  avatar?: MediaModel;
}

export interface ArticleCardModel {
  slug: string;
  title: string;
  excerpt: string;
  publicationDate: string;
  updatedDate?: string;
  category?: string;
  author?: ArticleAuthorModel;
  heroMedia?: MediaModel;
}

export interface ArticlePageModel {
  slug: string;
  title: string;
  excerpt: string;
  publicationDate: string;
  updatedDate?: string;
  category?: string;
  author: ArticleAuthorModel;
  heroMedia?: MediaModel;
  body: PortableTextBlockModel[];
  relatedCapabilities: CapabilityCardModel[];
  relatedProjects: ProjectCardModel[];
  seo?: SeoFields;
}
