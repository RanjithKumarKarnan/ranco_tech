import { PageHero } from './ui';

const LegalPage = ({ title, updated, intro, sections }) => (
  <>
    <PageHero breadcrumbs={[{ label: title }]} title={title} lead={intro}>
      <p className="mt-4 text-sm text-ink-500">Last updated: {updated}</p>
    </PageHero>

    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-6 lg:px-8">
        {sections.map(({ heading, body }) => (
          <div key={heading}>
            <h2 className="mb-3 text-xl font-bold">{heading}</h2>
            {Array.isArray(body) ? (
              <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed marker:text-brand-400">
                {body.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            ) : (
              <p className="text-[15px] leading-relaxed">{body}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  </>
);

export default LegalPage;
