import type { Metadata } from 'next';
import { getHomepageData } from '@/features/home/data';

export const metadata: Metadata = {
  title: '123.design — Product Development, Engineering & Manufacturing',
  description:
    'Industrial design, mechanical engineering, electrical engineering, prototyping and manufacturing. From concept to production, 123.design turns ideas into real products.',
  alternates: { canonical: '/' },
  openGraph: {
    title: '123.design — Product Development, Engineering & Manufacturing',
    description:
      'From concept to production. Industrial design, engineering, prototyping and manufacturing — one integrated team.',
  },
};
import { HomeHero } from '@/features/home/components/HomeHero';
import { HomeCredibility } from '@/features/home/components/HomeCredibility';
import { HomeFeaturedWork } from '@/features/home/components/HomeFeaturedWork';
import { HomeShowreel } from '@/features/home/components/HomeShowreel';
import { HomeLifecycle } from '@/features/home/components/HomeLifecycle';
import { HomeWorkflow } from '@/features/home/components/HomeWorkflow';
import { HomeCapabilities } from '@/features/home/components/HomeCapabilities';
import { HomeTestimonial } from '@/features/home/components/HomeTestimonial';
import { HomeManufacturing } from '@/features/home/components/HomeManufacturing';
import { HomeFinalCta } from '@/features/home/components/HomeFinalCta';

export default async function Home() {
  const data = await getHomepageData();

  return (
    <main id="main-content" tabIndex={-1}>
      <HomeHero />
      <HomeCredibility />
      <HomeFeaturedWork projects={data.featuredProjects} />
      <HomeShowreel />
      <HomeLifecycle />
      <HomeWorkflow />
      <HomeCapabilities />
      <HomeTestimonial testimonials={data.testimonials} />
      <HomeManufacturing />
      <HomeFinalCta scheduleCallUrl={data.scheduleCallUrl} />
    </main>
  );
}
