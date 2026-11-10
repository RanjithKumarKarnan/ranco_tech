import { PageHero, Section } from '../components/ui';
import { CtaBand, StatsRow, TestimonialCard } from '../components/sections';
import { testimonials } from '../data/content';
import { SITE } from '../data/site';

const TestimonialsPage = () => (
  <>
    <PageHero
      breadcrumbs={[{ label: 'Reviews' }]}
      eyebrow="Client reviews"
      title="What our clients say"
      lead="Feedback from clients in the United States, United Kingdom, Germany, the Netherlands, Singapore and beyond."
    />

    <Section>
      <StatsRow className="mb-16" />
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-ink-500">
        See more reviews on our{' '}
        <a href={SITE.socials.fiverr} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline">
          Fiverr profile
        </a>
        .
      </p>
    </Section>

    <CtaBand title="Become our next success story" />
  </>
);

export default TestimonialsPage;
