import { Container } from '@/components/layout/Container';

export default function WorkLoading() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="loading-skeleton">
        <Container>
          <div className="loading-skeleton__line loading-skeleton__line--title" />
          <div className="loading-skeleton__line loading-skeleton__line--text" />
          <div className="loading-skeleton__grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="loading-skeleton__card" />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
