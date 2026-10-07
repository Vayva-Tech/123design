import { Container } from '@/components/layout/Container';

export default function CapabilityLoading() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="loading-skeleton">
        <Container>
          <div className="loading-skeleton__line loading-skeleton__line--title" />
          <div className="loading-skeleton__line loading-skeleton__line--text" />
          <div className="loading-skeleton__hero" />
          <div className="loading-skeleton__content">
            <div className="loading-skeleton__line loading-skeleton__line--text" />
            <div className="loading-skeleton__line loading-skeleton__line--text" />
            <div className="loading-skeleton__line loading-skeleton__line--text loading-skeleton__line--short" />
          </div>
        </Container>
      </section>
    </main>
  );
}
