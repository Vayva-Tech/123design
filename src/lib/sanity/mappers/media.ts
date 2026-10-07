import type { ImageMediaModel, VideoMediaModel, MediaModel } from '@/types/domain';
import type { MediaRecord, ImageMediaRecord } from '../validation';

export function mapMedia(record: MediaRecord): MediaModel {
  if (record.kind === 'IMAGE') {
    return mapImage(record);
  }
  return mapVideo(record);
}

export function mapImage(record: ImageMediaRecord): ImageMediaModel {
  return {
    kind: 'IMAGE',
    url: record.url,
    alt: record.decorative ? '' : record.alt,
    decorative: record.decorative,
    width: record.width,
    height: record.height,
    aspectRatio: record.aspectRatio,
    caption: record.caption,
    hotspot: record.hotspot,
    crop: record.crop,
  };
}

export function mapVideo(record: VideoMediaModel): VideoMediaModel {
  return {
    kind: 'VIDEO',
    url: record.url,
    poster: record.poster ? mapImage(record.poster) : undefined,
    width: record.width,
    height: record.height,
    duration: record.duration,
    purpose: record.purpose,
    caption: record.caption,
    transcript: record.transcript,
  };
}

export function mapOptionalMedia(record: MediaRecord | null | undefined): MediaModel | undefined {
  if (!record) return undefined;
  return mapMedia(record);
}
