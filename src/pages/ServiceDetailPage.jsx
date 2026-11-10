import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Clock } from 'lucide-react';
import { Button, CheckList, PageHero, Section, SectionHeader } from '../components/ui';
import { CtaBand, FaqList, ProcessSteps, ProjectCard } from '../components/sections';
import { getService, services } from '../data/services';
import { getProjects } from '../data/content';
import { SITE } from '../data/site';
import NotFoundPage from './NotFoundPage';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFoundPage />;

  const projects = getProjects(service.projects);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: service.name }]}
        eyebrow={service.name}
        title={service.h1}
        lead={service.intro}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" variant="accent">
            Get a free quote <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href={SITE.whatsappHref} variant="secondary">
            <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="What we offer"
          title={`Our ${service.name.toLowerCase()} services`}
          lead={service.summary}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((item) => (
            <div key={item.title} className="reveal rounded-2xl border border-ink-100 p-7">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-ink-100 bg-white p-8 sm:p-10">
            <h2 className="text-2xl font-bold">What’s included</h2>
            <p className="mt-2 text-ink-500">Every {service.name.toLowerCase()} project comes with:</p>
            <CheckList items={service.includes} className="mt-6" />
          </div>
          <div className="reveal flex flex-col gap-6">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 sm:p-10">
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <Clock size={22} className="text-brand-700" aria-hidden="true" /> Typical timelines
              </h2>
              <dl className="mt-6 divide-y divide-ink-100">
                {service.timeline.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-6 py-3">
                    <dt className="text-[15px] text-ink-700">{row.label}</dt>
                    <dd className="text-right font-semibold whitespace-nowrap text-brand-700">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-8 sm:p-10">
              <h2 className="text-2xl font-bold">Tools & technologies</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <li key={t} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-800 ring-1 ring-inset ring-brand-100">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our process" title="From first call to launch" lead="A clear, collaborative process with no surprises." />
        <ProcessSteps />
      </Section>

      {projects.length > 0 && (
        <Section tone="muted">
          <SectionHeader eyebrow="Related work" title="Recent projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      )}

      <Section tone={projects.length > 0 ? 'white' : 'muted'}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            align="left"
            className="!mb-0"
            eyebrow="FAQ"
            title={`${service.name} questions`}
            lead="Have a question we haven’t answered? Message us — we usually reply within 2 hours on business days."
          />
          <FaqList items={service.faqs} />
        </div>
      </Section>

      <section className="border-t border-ink-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold">Explore other services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-ink-100 px-5 py-4 font-medium text-ink-900 transition-colors hover:border-brand-200 hover:bg-brand-50"
                >
                  <span className="flex items-center gap-3">
                    <s.icon size={18} className="text-brand-700" aria-hidden="true" /> {s.name}
                  </span>
                  <ArrowRight size={16} className="text-ink-300 transition group-hover:translate-x-1 group-hover:text-brand-700" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Let’s talk about your ${service.name.toLowerCase()} project`} />
    </>
  );
};

export default ServiceDetailPage;
