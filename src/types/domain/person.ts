import type { MediaModel } from './media';

export interface PersonModel {
  name: string;
  role?: string;
  avatar?: MediaModel;
}
