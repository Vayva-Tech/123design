import { Container } from '@/components/layout/Container';

export default function InsightsLoading() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="loading-skeleton">
        <Container>
          <div className="loading-skeleton__line loading-skeleton__line--title" />
          <div className="loading-skeleton__line loading-skeleton__line--text" />
          <div className="loading-skeleton__grid loading-skeleton__grid--articles">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="loading-skeleton__card loading-skeleton__card--article" />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
