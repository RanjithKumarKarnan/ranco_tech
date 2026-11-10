import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Plus, Star, MessageCircle } from 'lucide-react';
import { Button, IconTile } from './ui';
import { SITE, STATS } from '../data/site';
import { clientLogos, processSteps } from '../data/content';

export const ServiceCard = ({ service }) => (
  <Link
    to={`/services/${service.slug}`}
    className="reveal group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_40px_-20px_rgb(13_95_83/0.25)]"
  >
    <IconTile icon={service.icon} />
    <h3 className="mt-6 text-lg font-semibold">{service.name}</h3>
    <p className="mt-2 flex-grow text-[15px] leading-relaxed text-ink-500">{service.summary}</p>
    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
      Learn more
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </span>
  </Link>
);

export const ProjectCard = ({ project, headingLevel: Heading = 'h3' }) => (
  <article className="reveal group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white">
    <div className="border-b border-ink-100 bg-ink-50 px-4 pt-3">
      <div className="mb-3 flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
      </div>
      <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={`${project.title} website designed and built by RanCoTech`}
          width="1280"
          height="800"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>
    <div className="flex flex-grow flex-col p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{project.category}</p>
      <Heading className="mt-2 text-xl font-semibold">{project.title}</Heading>
      <p className="mt-2 flex-grow text-[15px] leading-relaxed text-ink-500">{project.description}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-2">
          {project.services.map((s) => (
            <li key={s} className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700 ring-1 ring-inset ring-ink-100">{s}</li>
          ))}
        </ul>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
        >
          Visit site <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">{project.title} (opens in a new tab)</span>
        </a>
      </div>
    </div>
  </article>
);

const Stars = () => (
  <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className="fill-accent-500 text-accent-500" aria-hidden="true" />
    ))}
  </div>
);

export const TestimonialCard = ({ testimonial }) => (
  <figure className="reveal flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7">
    <Stars />
    <blockquote className="mt-5 flex-grow text-[15px] leading-relaxed text-ink-700">
      <p>“{testimonial.text}”</p>
    </blockquote>
    <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold uppercase text-brand-700" aria-hidden="true">
        {testimonial.name.charAt(0)}
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink-900">{testimonial.name}</span>
        <span className="block text-sm text-ink-500">{testimonial.country}</span>
      </span>
    </figcaption>
  </figure>
);

export const ProcessSteps = () => (
  <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {processSteps.map((step, i) => (
      <li key={step.title} className="reveal relative rounded-2xl border border-ink-100 bg-white p-7">
        <span className="text-sm font-semibold text-accent-600">0{i + 1}</span>
        <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{step.text}</p>
      </li>
    ))}
  </ol>
);

// Native <details> keeps answers in the HTML for search engines and works without JavaScript
export const FaqList = ({ items }) => (
  <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
    {items.map(({ q, a }) => (
      <details key={q} className="group px-6 py-5 sm:px-8">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
          <h3 className="text-base font-semibold sm:text-lg">{q}</h3>
          <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300 group-open:rotate-45">
            <Plus size={14} strokeWidth={2.5} aria-hidden="true" />
          </span>
        </summary>
        <p className="mt-3 max-w-3xl pr-10 text-[15px] leading-relaxed text-ink-500">{a}</p>
      </details>
    ))}
  </div>
);

export const StatsRow = ({ className = '' }) => (
  <dl className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 lg:grid-cols-4 ${className}`}>
    {STATS.map((stat) => (
      <div key={stat.label} className="bg-white px-6 py-8 text-center">
        <dt className="text-sm text-ink-500">{stat.label}</dt>
        <dd className="mt-1 text-3xl font-bold tracking-tight text-brand-700">{stat.value}</dd>
      </div>
    ))}
  </dl>
);

export const LogoStrip = () => {
  const logos = [...clientLogos, ...clientLogos];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <ul className="animate-logo-scroll flex w-max items-center gap-14 motion-reduce:animate-none">
        {logos.map((logo, i) => (
          <li key={i} aria-hidden={i >= clientLogos.length}>
            <img
              src={logo}
              alt={i < clientLogos.length ? `RanCoTech client logo ${i + 1}` : ''}
              height="56"
              loading="lazy"
              decoding="async"
              className="h-12 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CtaBand = ({
  title = 'Have a project in mind?',
  text = 'Tell us what you’re building. You’ll get a clear plan, timeline and free quote — usually within 2 hours on business days.',
}) => (
  <section className="bg-white py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      <div className="reveal relative overflow-hidden rounded-3xl bg-brand-900 px-8 py-14 text-center sm:px-14 lg:py-16">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-100">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/contact" variant="accent">
              Get a free quote <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href={SITE.whatsappHref} variant="ghostLight">
              <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
