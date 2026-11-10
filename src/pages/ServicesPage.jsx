import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IconTile, PageHero, Section, SectionHeader } from '../components/ui';
import { CtaBand, ProcessSteps } from '../components/sections';
import { services } from '../data/services';

const ServicesPage = () => (
  <>
    <PageHero
      breadcrumbs={[{ label: 'Services' }]}
      eyebrow="Services"
      title="Web, app and software development services"
      lead="One team for everything your business needs online — strategy, design, development, launch and growth. Pick a service to see what’s included, typical timelines and answers to common questions."
    />

    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="reveal group flex flex-col rounded-2xl border border-ink-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_40px_-20px_rgb(13_95_83/0.25)]"
          >
            <div className="flex items-start justify-between gap-4">
              <IconTile icon={service.icon} />
              <ArrowRight size={20} className="text-ink-300 transition group-hover:translate-x-1 group-hover:text-brand-700" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-xl font-semibold">{service.name}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{service.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.offerings.slice(0, 4).map((o) => (
                <li key={o.title} className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700 ring-1 ring-inset ring-ink-100">{o.title}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </Section>

    <Section tone="muted">
      <SectionHeader eyebrow="How we work" title="The same proven process for every project" />
      <ProcessSteps />
    </Section>

    <CtaBand title="Not sure which service you need?" text="Book a free 30-minute discovery call. We’ll understand your goals and recommend the right approach — no obligation." />
  </>
);

export default ServicesPage;
