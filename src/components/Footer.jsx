import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { services } from '../data/services';
import { SITE } from '../data/site';
import { submitLead } from '../lib/submitLead';
import { Container } from './ui';
import { Logo } from './Header';

const companyLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Client reviews', to: '/testimonials' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
];

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitLead({ email, source: 'newsletter' }, 'New Newsletter Subscriber — RanCoTech Website');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="text-sm text-brand-200">Thanks for subscribing — we’ll be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="min-w-0 flex-1 rounded-full border-0 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-brand-200/60 ring-1 ring-inset ring-white/15 focus:ring-2 focus:ring-accent-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-xs text-accent-100">Something went wrong. Please try again or email {SITE.email}.</p>
      )}
    </form>
  );
};

const FooterHeading = ({ children }) => (
  <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">{children}</h2>
);

const Footer = () => (
  <footer className="bg-brand-950 text-brand-100/80">
    <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
      <div className="lg:col-span-4">
        <Logo light />
        <p className="mt-4 max-w-sm text-sm leading-relaxed">
          Web, mobile app and software development company in {SITE.city}, India — building fast, search-friendly digital
          products for businesses worldwide since {SITE.foundingYear}.
        </p>
        <ul className="mt-6 space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <Mail size={16} className="text-brand-300" aria-hidden="true" />
            <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={16} className="text-brand-300" aria-hidden="true" />
            <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={16} className="text-brand-300" aria-hidden="true" />
            {SITE.city}, {SITE.region}, {SITE.country}
          </li>
          <li className="flex items-center gap-3">
            <Clock size={16} className="text-brand-300" aria-hidden="true" />
            {SITE.hours}
          </li>
        </ul>
      </div>

      <nav aria-label="Services" className="lg:col-span-3">
        <FooterHeading>Services</FooterHeading>
        <ul className="space-y-2.5 text-sm">
          {services.map((service) => (
            <li key={service.slug}>
              <Link to={`/services/${service.slug}`} className="hover:text-white">{service.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Company" className="lg:col-span-2">
        <FooterHeading>Company</FooterHeading>
        <ul className="space-y-2.5 text-sm">
          {companyLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-white">{link.label}</Link>
            </li>
          ))}
          <li>
            <a href={SITE.socials.fiverr} target="_blank" rel="noopener noreferrer" className="hover:text-white">Hire us on Fiverr</a>
          </li>
        </ul>
      </nav>

      <div className="lg:col-span-3">
        <FooterHeading>Stay updated</FooterHeading>
        <p className="text-sm leading-relaxed">Occasional tips on websites, apps and growing your business online. No spam.</p>
        <NewsletterForm />
      </div>
    </Container>

    <div className="border-t border-white/10">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 pb-24 text-sm sm:flex-row sm:pb-6 sm:pr-24 lg:pr-24">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {legalLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-white">{link.label}</Link>
          ))}
          <div className="flex gap-2">
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="RanCoTech on LinkedIn" className="rounded-full p-2 hover:bg-white/10 hover:text-white">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="RanCoTech on Instagram" className="rounded-full p-2 hover:bg-white/10 hover:text-white">
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
