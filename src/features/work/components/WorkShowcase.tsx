import { Eyebrow, Heading } from '@/components/ui';
import { YouTubeEmbed } from '@/components/system/YouTubeEmbed';

const WORK_SHOWCASE_EYEBROW = 'DESIGN SHOWCASE';
const WORK_SHOWCASE_HEADING_LINES = ['FUTURE-READY', 'PRODUCTS.'];
const WORK_SHOWCASE_VIDEO_ID = 'X2aTz-L1f0o';
const WORK_SHOWCASE_VIDEO_TITLE =
  'Future-Ready Products Designed by 123 Design | Industrial Design Showcase';

export function WorkShowcase() {
  return (
    <section className="work-showcase" aria-label="Design showcase">
      <div className="container" data-variant="content">
        <div className="work-showcase__header">
          <Eyebrow marker>{WORK_SHOWCASE_EYEBROW}</Eyebrow>
          <Heading variant="displayL" className="heading-lines">
            {WORK_SHOWCASE_HEADING_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </Heading>
        </div>
        <div className="work-showcase__video">
          <YouTubeEmbed videoId={WORK_SHOWCASE_VIDEO_ID} title={WORK_SHOWCASE_VIDEO_TITLE} />
        </div>
      </div>
    </section>
  );
}
