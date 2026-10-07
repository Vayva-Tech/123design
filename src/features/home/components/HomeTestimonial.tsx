'use client';

import { useState, useEffect, useCallback } from 'react';
import { Container } from '@/components/layout';
import { Heading, Text } from '@/components/ui';
import type { TestimonialModel } from '@/types/domain';
import { HERO_STATS } from '../content';

interface HomeTestimonialProps {
  testimonials: TestimonialModel[];
}

const ROTATION_INTERVAL = 8000;

export function HomeTestimonial({ testimonials }: HomeTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonial = testimonials[activeIndex];

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (testimonials.length <= 1 || isPaused) return;
    const interval = setInterval(nextTestimonial, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [testimonials.length, nextTestimonial, isPaused]);

  if (!testimonial) {
    return null;
  }

  return (
    <section className="home-testimonial" data-page-overlay="dark" aria-labelledby="testimonial-heading">
      <Container variant="content">
        <h2 id="testimonial-heading" className="sr-only">Client Testimonials</h2>
        <div className="home-testimonial__split">
          <div className="home-testimonial__quote-wrap">
            <div aria-live="polite" aria-atomic="true">
              <blockquote key={activeIndex}>
                <div className="home-testimonial__quote">
                  <Heading variant="h3">&ldquo;{testimonial.quote}&rdquo;</Heading>
                </div>
                <footer className="home-testimonial__attribution">
                  <Text variant="body" as="span">
                    {testimonial.name}
                  </Text>
                  {(testimonial.role || testimonial.company) && (
                    <Text variant="small" as="span" className="home-testimonial__role">
                      {[testimonial.role, testimonial.company].filter(Boolean).join(', ')}
                    </Text>
                  )}
                </footer>
              </blockquote>
            </div>
            {testimonials.length > 1 && (
              <div className="home-testimonial__controls">
                <button
                  type="button"
                  className="home-testimonial__pause type-small"
                  onClick={() => setIsPaused((p) => !p)}
                  aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                >
                  {isPaused ? '▶' : '⏸'}
                </button>
                <div className="home-testimonial__indicators" role="tablist" aria-label="Testimonial navigation">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={index === activeIndex}
                      aria-label={`Testimonial ${index + 1}`}
                      className={`home-testimonial__indicator ${index === activeIndex ? 'home-testimonial__indicator--active' : ''}`}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsPaused(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="home-testimonial__stats" aria-label="Key metrics">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="home-testimonial__stat">
                <span className="home-testimonial__stat-value">{stat.value}</span>
                <span className="home-testimonial__stat-label type-small">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
