import { Link } from 'react-router-dom';
import { PageHero, Section } from '../components/ui';
import { CtaBand, FaqList } from '../components/sections';
import { faqs } from '../data/content';
import { services } from '../data/services';

const FaqPage = () => (
  <>
    <PageHero
      breadcrumbs={[{ label: 'FAQ' }]}
      eyebrow="FAQ"
      title="Frequently asked questions"
      lead="Costs, timelines, technology, SEO and support — answers to the questions clients ask us most."
    />

    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
        <FaqList items={faqs} />
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-ink-100 bg-ink-50 p-7">
            <h2 className="text-lg font-bold">Questions about a specific service?</h2>
            <p className="mt-2 text-[15px] text-ink-500">Each service page answers the questions specific to it.</p>
            <ul className="mt-5 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-[15px] font-medium text-brand-700 hover:text-brand-900">
                    {s.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>

    <CtaBand title="Still have questions?" text="Message us on WhatsApp or send the contact form — we usually reply within 2 hours on business days." />
  </>
);

export default FaqPage;
