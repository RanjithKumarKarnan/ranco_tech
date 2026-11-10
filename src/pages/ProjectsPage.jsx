import { PageHero, Section } from '../components/ui';
import { CtaBand, LogoStrip, ProjectCard, StatsRow } from '../components/sections';
import { projects } from '../data/content';

const ProjectsPage = () => (
  <>
    <PageHero
      breadcrumbs={[{ label: 'Projects' }]}
      eyebrow="Our work"
      title="Websites and platforms we’ve built"
      lead="A selection of recent projects for healthcare institutions, schools, research organisations, local businesses and startups. Every one is live — click through and see for yourself."
    />

    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} headingLevel="h2" />
        ))}
      </div>
    </Section>

    <section className="border-y border-ink-100 bg-ink-50 py-16" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 id="clients-heading" className="mb-10 text-center text-2xl font-bold">More businesses we’ve worked with</h2>
        <LogoStrip />
        <StatsRow className="mt-14" />
      </div>
    </section>

    <CtaBand title="Want results like these?" />
  </>
);

export default ProjectsPage;
