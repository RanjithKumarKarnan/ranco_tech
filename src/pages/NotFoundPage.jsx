import { ArrowRight } from 'lucide-react';
import { Button, Container } from '../components/ui';

const NotFoundPage = () => (
  <section className="relative overflow-hidden bg-white pt-40 pb-28 text-center">
    <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" aria-hidden="true" />
    <Container className="relative">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-600">Error 404</p>
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">This page doesn’t exist</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-ink-500">The page may have moved or the link may be incorrect. Let’s get you back on track.</p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <Button to="/">Back to home</Button>
        <Button to="/services" variant="secondary">
          Browse services <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </div>
    </Container>
  </section>
);

export default NotFoundPage;
