import { Mail, MapPin, Clock, MessageCircle, Phone } from 'lucide-react';
import { Container, PageHero } from '../components/ui';
import ContactForm from '../components/ContactForm';
import { SITE } from '../data/site';

const methods = [
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: SITE.whatsappHref },
  { icon: Phone, label: 'Call', value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: 'Location', value: `${SITE.city}, ${SITE.region}, ${SITE.country}` },
  { icon: Clock, label: 'Hours', value: SITE.hours },
];

const nextSteps = [
  'We review your request and reply — usually within 2 hours on business days.',
  'A free call to understand your goals, requirements and timeline.',
  'You receive a clear proposal with scope, timeline and quote.',
];

const ContactPage = () => (
  <>
    <PageHero
      breadcrumbs={[{ label: 'Contact' }]}
      eyebrow="Contact"
      title="Let’s talk about your project"
      lead="Tell us what you’re planning and we’ll come back with ideas, a timeline and a free, no-obligation quote."
    />

    <section className="bg-white py-16 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-bold">Reach us directly</h2>
            <ul className="mt-6 space-y-3">
              {methods.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-[0.1em] text-ink-500">{label}</span>
                      <span className="block font-semibold text-ink-900">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-center gap-4 rounded-2xl border border-ink-100 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/50"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-ink-100 p-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl bg-ink-50 p-7">
            <h2 className="text-xl font-bold">What happens next</h2>
            <ol className="mt-5 space-y-4">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-4 text-[15px] leading-relaxed">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ContactForm />
      </Container>

      <Container className="mt-16">
        <div className="overflow-hidden rounded-3xl border border-ink-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125327.07199798088!2d78.61800!3d10.79000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff752d797%3A0xaa7a8194e84a4cef!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing RanCoTech's location in Trichy, Tamil Nadu"
            className="block w-full border-0 grayscale-[30%]"
          />
        </div>
      </Container>
    </section>
  </>
);

export default ContactPage;
