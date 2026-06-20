'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Instagram, Send, CheckCircle, Clock, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Web3Forms access key — sign up at https://web3forms.com with info@rancotechnology.com to get your key
// Then replace the value below. Emails will arrive at info@rancotechnology.com instantly.
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz0_QnjRGpJm3PtmZ2-nbp75H_Xqy_U-rss_7okFFiCmGEjLhAJpnu_c8-E-bTD49a2NQ/exec";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "E-commerce Website",
  "SEO & Digital Marketing",
  "IT Consulting",
  "Other",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

const inputCls =
  "w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D5F53]/40 focus:border-[#0D5F53] transition duration-200";

const whyUs = [
  { icon: <Clock size={18} className="text-[#FF6F00]" />, title: "Fast Response", desc: "Reply within 2 hours on business days" },
  { icon: <Globe size={18} className="text-[#FF6F00]" />, title: "Global Reach", desc: "Serving clients in 11+ countries" },
  { icon: <CheckCircle size={18} className="text-[#FF6F00]" />, title: "Free Consultation", desc: "No-obligation quote & strategy call" },
  { icon: <MessageSquare size={18} className="text-[#FF6F00]" />, title: "24/7 Support", desc: "WhatsApp & email support always available" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', service: '', budget: '', message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // 1. Send email via Web3Forms to info@rancotechnology.com
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead from RanCoTech Website — ${formData.service}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          service: formData.service,
          budget: formData.budget,
          message: formData.message || "No additional message.",
        }),
      });

      // 2. Also save to Google Sheet (background, don't block UX)
      const gfData = new FormData();
      Object.entries(formData).forEach(([k, v]) => gfData.append(k, v));
      fetch(GOOGLE_SHEET_URL, { method: "POST", body: gfData }).catch(() => {});

      setStatus('success');
      setFormData({ name: '', email: '', mobile: '', service: '', budget: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 font-['Montserrat'] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EAF4F1 0%, #FBFBFD 60%, #FFF5EE 100%)" }}
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-[#0D5F53]/8 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-[#FF6F00]/6 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white border border-[#D1EAE5] text-[#0D5F53] text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-5 uppercase tracking-widest"
          >
            <Send size={11} />
            Let's Work Together
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#0D5F53] mb-4"
          >
            Get a Free Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6B7280] text-base md:text-lg max-w-xl mx-auto"
          >
            Tell us about your project — we'll get back to you within 2 hours with a tailored proposal.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact info */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(13,95,83,0.08)] border border-[#E8F4F1]">
              <h3 className="text-lg font-bold text-[#0D5F53] mb-5">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: <MapPin size={16} />, label: "Location", val: "Trichy, Tamil Nadu, India" },
                  { icon: <Phone size={16} />, label: "Phone", val: "+91 93616 60714", href: "tel:+919361660714" },
                  { icon: <Mail size={16} />, label: "Email", val: "info@rancotechnology.com", href: "mailto:info@rancotechnology.com" },
                ].map(({ icon, label, val, href }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#F0F9F7] rounded-lg flex items-center justify-center text-[#0D5F53] flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-[#0D5F53] hover:text-[#FF6F00] transition-colors">{val}</a>
                      ) : (
                        <p className="text-sm font-semibold text-[#0D5F53]">{val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Social */}
              <div className="flex gap-3 mt-6 pt-5 border-t border-[#F0F7F5]">
                <a href="https://www.linkedin.com/company/rancotechnology" target="_blank" rel="noreferrer"
                  className="w-9 h-9 bg-[#F0F9F7] hover:bg-[#0077B5] hover:text-white text-[#0D5F53] rounded-lg flex items-center justify-center transition-all">
                  <Linkedin size={16} />
                </a>
                <a href="https://www.instagram.com/ranco.tech" target="_blank" rel="noreferrer"
                  className="w-9 h-9 bg-[#F0F9F7] hover:bg-pink-500 hover:text-white text-[#0D5F53] rounded-lg flex items-center justify-center transition-all">
                  <Instagram size={16} />
                </a>
                <a href="https://wa.me/918778597451" target="_blank" rel="noreferrer"
                  className="w-9 h-9 bg-[#F0F9F7] hover:bg-green-500 hover:text-white text-[#0D5F53] rounded-lg flex items-center justify-center transition-all">
                  <MessageSquare size={16} />
                </a>
              </div>
            </div>

            {/* Why us */}
            <div className="grid grid-cols-2 gap-3">
              {whyUs.map(({ icon, title, desc }, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_rgba(13,95,83,0.06)] border border-[#E8F4F1]">
                  <div className="mb-2">{icon}</div>
                  <p className="text-xs font-bold text-[#0D5F53] mb-0.5">{title}</p>
                  <p className="text-[11px] text-gray-500 leading-tight">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(13,95,83,0.12)] border border-[#E8F4F1] p-12 text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D5F53] mb-3">Message Sent!</h3>
                <p className="text-gray-500 mb-6">Thank you for reaching out. We'll get back to you at <strong>{formData.email || "your email"}</strong> within 2 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-[#0D5F53] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a4c42] transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(13,95,83,0.12)] border border-[#E8F4F1] p-8 space-y-5"
              >
                <h3 className="text-lg font-bold text-[#0D5F53] mb-1">Tell Us About Your Project</h3>
                <p className="text-sm text-gray-400 mb-4">All fields marked * are required.</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Full Name *</label>
                    <input name="name" type="text" placeholder="John Smith" className={inputCls} value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email Address *</label>
                    <input name="email" type="email" placeholder="john@company.com" className={inputCls} value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Phone / WhatsApp *</label>
                    <input name="mobile" type="tel" placeholder="+1 234 567 8900" className={inputCls} value={formData.mobile} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Service Needed *</label>
                    <select name="service" className={inputCls} value={formData.service} onChange={handleChange} required>
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Estimated Budget</label>
                  <select name="budget" className={inputCls} value={formData.budget} onChange={handleChange}>
                    <option value="">Select budget range</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Project Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your project — goals, features, timeline, or anything else that helps us understand your vision..."
                    className={`${inputCls} resize-none`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">
                    Something went wrong. Please email us directly at <a href="mailto:info@rancotechnology.com" className="underline">info@rancotechnology.com</a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#0D5F53] hover:bg-[#0a4c42] disabled:opacity-60 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#0D5F53]/20 hover:-translate-y-0.5"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send My Request — It's Free
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400">
                  By submitting you agree to our privacy policy. We never share your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-3xl shadow-xl border border-[#E8F4F1]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125327.07199798088!2d78.61800!3d10.79000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff752d797%3A0xaa7a8194e84a4cef!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="360"
            loading="lazy"
            title="RanCoTech Location - Trichy, Tamil Nadu"
            className="w-full border-none"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
