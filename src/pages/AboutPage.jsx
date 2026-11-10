import { Target, Eye } from 'lucide-react';
import { IconTile, PageHero, Section, SectionHeader } from '../components/ui';
import { CtaBand, ProcessSteps, StatsRow } from '../components/sections';
import { SITE } from '../data/site';

const values = [
  { title: 'Honest communication', text: 'Clear scopes, realistic timelines and straight answers — including when something isn’t a good fit.' },
  { title: 'Craft and quality', text: 'Clean code, thoughtful design and testing on real devices before anything goes live.' },
  { title: 'Speed without shortcuts', text: 'Fast turnaround and quick replies, without cutting corners on the details that matter.' },
  { title: 'Long-term partnership', text: 'Many clients come back for their second and third project. We’re here after launch, too.' },
];

const stack = [
  { group: 'Web', items: ['React', 'Next.js', 'Node.js', 'Laravel', 'Django', 'WordPress', 'Tailwind CSS'] },
  { group: 'Mobile', items: ['Flutter', 'Dart', 'React Native'] },
  { group: 'Data', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Docker', 'Nginx'] },
];

const AboutPage = () => (
  <>
    <PageHero
      breadcrumbs={[{ label: 'About' }]}
      eyebrow="About RanCoTech"
      title="A software company from Trichy, building for the world"
      lead={`Since ${SITE.foundingYear}, we’ve helped startups, schools, healthcare institutions and growing businesses in 11+ countries launch websites, apps and software that work.`}
    />

    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Our story</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-500">
            <p>
              RanCoTech — short for Ranco Technology — started in {SITE.foundingYear} in {SITE.city}, Tamil Nadu, with a
              simple idea: businesses everywhere deserve world-class digital products, built by people who genuinely care
              about the result.
            </p>
            <p>
              We began by building websites for international clients on Fiverr, where a 5.0 rating and a long list of repeat
              customers proved what we believed: clear communication and dependable delivery matter as much as good code.
            </p>
            <p>
              Today our team of developers and designers delivers websites, e-commerce stores, mobile apps and custom software
              for clients across India, Europe, North America and Asia — with the same personal attention on every project.
            </p>
          </div>
        </div>
        <div className="grid gap-5 self-start sm:grid-cols-2 lg:grid-cols-1">
          <div className="reveal rounded-2xl border border-ink-100 p-7">
            <IconTile icon={Target} className="!bg-accent-50 !text-accent-600 !ring-accent-100" />
            <h3 className="mt-5 text-lg font-semibold">Our mission</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
              To empower businesses worldwide by bridging the gap between bold ideas and powerful technology — delivering
              solutions that create real, measurable impact.
            </p>
          </div>
          <div className="reveal rounded-2xl border border-ink-100 p-7">
            <IconTile icon={Eye} />
            <h3 className="mt-5 text-lg font-semibold">Our vision</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
              To become the most trusted global technology partner for growing businesses — known for quality, speed, and the
              ability to turn ambitious ideas into reality.
            </p>
          </div>
        </div>
      </div>
      <StatsRow className="mt-20" />
    </Section>

    <Section tone="muted">
      <SectionHeader eyebrow="What we value" title="How we work with every client" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div key={value.title} className="reveal rounded-2xl border border-ink-100 bg-white p-7">
            <h3 className="text-lg font-semibold">{value.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{value.text}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <SectionHeader eyebrow="Technology" title="Modern, proven technology" lead="We pick the right tools for each project — never the other way round." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map(({ group, items }) => (
          <div key={group} className="reveal rounded-2xl border border-ink-100 p-7">
            <h3 className="text-base font-semibold">{group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="rounded-full bg-ink-50 px-3 py-1 text-sm text-ink-700 ring-1 ring-inset ring-ink-100">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section tone="muted">
      <SectionHeader eyebrow="Our process" title="How a project comes together" />
      <ProcessSteps />
    </Section>

    <CtaBand title="Let’s build something great together" />
  </>
);

export default AboutPage;
