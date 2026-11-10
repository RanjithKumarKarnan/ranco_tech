import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import { submitLead } from '../lib/submitLead';
import { services } from '../data/services';
import { SITE } from '../data/site';

const budgets = ['Under $500', '$500 – $1,000', '$1,000 – $5,000', '$5,000 – $10,000', '$10,000+'];

const emptyForm = { name: '', email: '', mobile: '', service: '', budget: '', message: '' };

const inputClass =
  'block w-full rounded-xl border-0 bg-white px-4 py-3 text-[15px] text-ink-900 ring-1 ring-inset ring-ink-200 placeholder:text-ink-300 focus:ring-2 focus:ring-inset focus:ring-brand-600 focus:outline-none transition';

const Field = ({ id, label, required, children }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-900">
      {label} {required && <span className="text-accent-600" aria-hidden="true">*</span>}
    </label>
    {children}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitLead(formData, `New Lead from RanCoTech Website — ${formData.service}`);
      setSubmittedEmail(formData.email);
      setStatus('success');
      setFormData(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-ink-100 bg-white p-10 text-center shadow-[0_24px_48px_-24px_rgb(13_95_83/0.25)] sm:p-14" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 size={28} aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-2xl font-bold">Thanks — we’ve got your message</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-500">
          We’ll reply to <strong className="text-ink-900">{submittedEmail || 'your email'}</strong>, usually within 2 hours on business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-100 bg-white p-7 shadow-[0_24px_48px_-24px_rgb(13_95_83/0.25)] sm:p-10"
    >
      <h2 className="text-2xl font-bold">Tell us about your project</h2>
      <p className="mt-2 text-sm text-ink-500">Fields marked <span className="text-accent-600">*</span> are required.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" className={inputClass} value={formData.name} onChange={handleChange} required />
        </Field>
        <Field id="email" label="Email" required>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={inputClass} value={formData.email} onChange={handleChange} required />
        </Field>
        <Field id="mobile" label="Phone / WhatsApp" required>
          <input id="mobile" name="mobile" type="tel" autoComplete="tel" placeholder="+1 234 567 8900" className={inputClass} value={formData.mobile} onChange={handleChange} required />
        </Field>
        <Field id="service" label="Service needed" required>
          <select id="service" name="service" className={inputClass} value={formData.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
            <option value="Other">Other / not sure</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="budget" label="Estimated budget">
            <select id="budget" name="budget" className={inputClass} value={formData.budget} onChange={handleChange}>
              <option value="">Select a budget range</option>
              {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="message" label="Project details">
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your goals, key features, timeline, examples you like…"
              className={`${inputClass} resize-y`}
              value={formData.message}
              onChange={handleChange}
            />
          </Field>
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-6 rounded-xl bg-accent-50 px-4 py-3 text-sm text-accent-700" role="alert">
          Something went wrong sending your message. Please email us at{' '}
          <a href={`mailto:${SITE.email}`} className="font-semibold underline">{SITE.email}</a> or WhatsApp {SITE.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : <>Send my request <Send size={17} aria-hidden="true" /></>}
      </button>
      <p className="mt-4 text-center text-xs text-ink-500">
        By submitting, you agree to our{' '}
        <Link to="/privacy-policy" className="underline hover:text-brand-700">privacy policy</Link>. We never sell your data.
      </p>
    </form>
  );
};

export default ContactForm;
