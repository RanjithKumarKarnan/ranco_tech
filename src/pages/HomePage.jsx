import { ArrowRight, Star, MessagesSquare, CalendarCheck, Gauge, LifeBuoy } from 'lucide-react';
import { Button, Container, IconTile, Section, SectionHeader } from '../components/ui';
import {
  CtaBand,
  FaqList,
  LogoStrip,
  ProcessSteps,
  ProjectCard,
  ServiceCard,
  StatsRow,
  TestimonialCard,
} from '../components/sections';
import { services } from '../data/services';
import { faqs, getProjects, testimonials } from '../data/content';

const reasons = [
  { icon: MessagesSquare, title: 'Talk to the people building it', text: 'No account-manager relay. You speak directly with the designers and developers on your project, by WhatsApp, email or video call.' },
  { icon: CalendarCheck, title: 'Clear scope, on-time delivery', text: 'A written scope and timeline before we start, progress updates throughout, and launches that land when promised.' },
  { icon: Gauge, title: 'Built for speed and search', text: 'Every site ships with fast load times, mobile-first layouts and the technical SEO foundations Google rewards.' },
  { icon: LifeBuoy, title: 'Support after launch', text: 'Maintenance, updates and new features when you need them — we stay with you as your business grows.' },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
    <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" aria-hidden="true" />
    <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
    <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-800 ring-1 ring-inset ring-brand-100">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Available for new projects
        </p>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
          Websites, apps and software that <span className="text-brand-700">grow your business</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
          RanCoTech is a web and mobile app development company in Trichy, India. We design and build fast,
          search-friendly digital products for startups and growing businesses in 11+ countries.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" variant="accent">
            Get a free quote <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button to="/projects" variant="secondary">See our work</Button>
        </div>
        <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Client rating</dt>
            <dd className="flex items-center gap-1.5 font-semibold text-ink-900">
              <Star size={16} className="fill-accent-500 text-accent-500" aria-hidden="true" /> 5.0 client rating
            </dd>
          </div>
          <div>
            <dt className="sr-only">Projects</dt>
            <dd><span className="font-semibold text-ink-900">50+</span> projects delivered</dd>
          </div>
          <div>
            <dt className="sr-only">Reach</dt>
            <dd><span className="font-semibold text-ink-900">11+</span> countries served</dd>
          </div>
        </dl>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_40px_80px_-32px_rgb(13_95_83/0.35)]">
          <div className="flex items-center gap-1.5 border-b border-ink-100 bg-ink-50 px-4 py-3" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-ink-500 ring-1 ring-ink-100">schoolofhepatology.com</span>
          </div>
          <img
            src="/projects/school-of-hepatology.webp"
            alt="School of Hepatology website built by RanCoTech"
            width="1280"
            height="800"
            fetchPriority="high"
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </div>
        <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-xl sm:block lg:-left-8">
          <p className="text-2xl font-bold text-brand-700">50+</p>
          <p className="text-sm text-ink-500">websites & apps launched</p>
        </div>
      </div>
    </Container>
  </section>
);

const HomePage = () => (
  <>
    <Hero />

    <section className="border-y border-ink-100 bg-white py-10" aria-label="Clients">
      <Container>
        <p className="mb-8 text-center text-sm font-medium text-ink-500">Trusted by schools, healthcare institutions, startups and growing businesses</p>
        <LogoStrip />
      </Container>
    </section>

    <Section tone="muted">
      <SectionHeader
        eyebrow="What we do"
        title="Everything you need to grow online"
        lead="From your first website to custom software, one experienced team handles design, development, launch and growth."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
        <div className="reveal flex flex-col justify-between rounded-2xl bg-brand-800 p-7 text-brand-100">
          <div>
            <h3 className="text-lg font-semibold text-white">Not sure what you need?</h3>
            <p className="mt-2 text-[15px] leading-relaxed">Book a free 30-minute call and we’ll recommend the right solution for your goals and budget.</p>
          </div>
          <Button to="/contact" variant="light" size="md" className="mt-6 self-start">Book a free call</Button>
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          align="left"
          className="!mb-0"
          eyebrow="Why RanCoTech"
          title="A development partner that treats your project like its own"
          lead="Clients across the US, Europe and Asia choose us for the same reasons: honest communication, dependable delivery and work that performs long after launch."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="reveal rounded-2xl border border-ink-100 p-6">
              <IconTile icon={reason.icon} />
              <h3 className="mt-5 text-base font-semibold">{reason.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section tone="muted">
      <SectionHeader
        eyebrow="How we work"
        title="A simple, transparent process"
        lead="You always know what’s happening, what’s next and when it will be ready."
      />
      <ProcessSteps />
    </Section>

    <Section>
      <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
        <SectionHeader
          align="left"
          className="!mb-0"
          eyebrow="Selected work"
          title="Projects we’re proud of"
          lead="Websites for healthcare institutions, schools, local businesses and startups."
        />
        <Button to="/projects" variant="secondary" className="self-start lg:self-auto">
          View all projects <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {getProjects(['school-of-hepatology', 'bharath-first-school', 'pech-weg']).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>

    <Section tone="muted">
      <SectionHeader
        eyebrow="Client reviews"
        title="Rated 5.0 by clients around the world"
        lead="Here’s what people say after working with us."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/testimonials" variant="secondary">
          Read more reviews <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </div>
      <StatsRow className="mt-16" />
    </Section>

    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          align="left"
          className="!mb-0"
          eyebrow="FAQ"
          title="Questions, answered"
          lead="Everything you need to know before starting a project. Can’t find your answer? Just ask."
        />
        <div>
          <FaqList items={faqs.slice(1, 6)} />
          <Button to="/faq" variant="secondary" className="mt-8">
            See all questions <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </Section>

    <CtaBand />
  </>
);

export default HomePage;
