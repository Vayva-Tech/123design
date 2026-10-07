export interface ImageMediaModel {
  kind: 'IMAGE';
  url: string;
  alt: string;
  decorative: boolean;
  width?: number;
  height?: number;
  aspectRatio?: number;
  caption?: string;
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface VideoMediaModel {
  kind: 'VIDEO';
  url: string;
  poster?: ImageMediaModel;
  width?: number;
  height?: number;
  duration?: number;
  purpose: 'heroReel' | 'hoverPreview' | 'projectVideo' | 'processVideo' | 'testimonialVideo';
  caption?: string;
  transcript?: string;
}

export type MediaModel = ImageMediaModel | VideoMediaModel;
