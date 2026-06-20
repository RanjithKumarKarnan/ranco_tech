'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, SearchCheck, Code2, Palette, Server, ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const services = [
  {
    name: 'Website Development',
    tagline: 'Beautiful, fast, conversion-focused websites',
    features: [
      'Custom Business & Corporate Sites',
      'E-commerce (Shopify, WooCommerce)',
      'Landing Pages & Lead Funnels',
      'Redesign & UI Modernisation',
      'Delivery: 1–3 Weeks',
    ],
    icon: <Globe size={24} />,
    color: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    id: 'website-development',
    popular: false,
  },
  {
    name: 'Mobile App Development',
    tagline: 'Cross-platform apps that users love',
    features: [
      'iOS & Android (Flutter / React Native)',
      'API & Backend Integration',
      'Clean, Intuitive UI/UX',
      'Admin Panel & Database',
      'Delivery: 2–4 Weeks',
    ],
    icon: <Smartphone size={24} />,
    color: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    id: 'mobile-app-development',
    popular: false,
  },
  {
    name: 'Custom Web Application',
    tagline: 'Scalable software for complex business needs',
    features: [
      'Full-Stack Custom Web Apps',
      'Advanced API Integrations',
      'User & Admin Management',
      'CRM, ERP & Dashboard Systems',
      'Delivery: 4–6 Weeks',
    ],
    icon: <Code2 size={24} />,
    color: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    id: 'custom-web-application',
    popular: true,
  },
  {
    name: 'UI/UX Design',
    tagline: 'Designs that convert visitors into customers',
    features: [
      'Figma Prototyping & Wireframes',
      'Web & Mobile Interface Design',
      'Branding & Logo Design',
      'Design System Creation',
      'Delivery: 1–2 Weeks',
    ],
    icon: <Palette size={24} />,
    color: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50',
    id: 'ui-ux-design',
    popular: false,
  },
  {
    name: 'SEO & Digital Marketing',
    tagline: 'Rank higher. Get found. Grow faster.',
    features: [
      'On-Page & Off-Page SEO',
      'Keyword Research & Strategy',
      'Technical SEO & Core Web Vitals',
      'Backlink Building',
      'Monthly Reports',
    ],
    icon: <SearchCheck size={24} />,
    color: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
    id: 'seo-optimization',
    popular: false,
  },
  {
    name: 'Hosting & IT Support',
    tagline: 'Keep your site fast, secure & always online',
    features: [
      'Domain & Hosting Setup',
      'SSL Security & Configuration',
      'Business Email Hosting',
      'Website Maintenance',
      '24/7 Technical Support',
    ],
    icon: <Server size={24} />,
    color: 'from-cyan-500 to-sky-600',
    lightBg: 'bg-cyan-50',
    id: 'hosting-support',
    popular: false,
  },
];

const Services = () => {
  return (
    <section
      id="services-page"
      className="py-24 px-5 font-['Montserrat']"
      style={{ background: 'linear-gradient(180deg, #FBFBFD 0%, #EAF4F1 100%)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white border border-[#D1EAE5] text-[#0D5F53] text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-5 uppercase tracking-widest"
          >
            What We Offer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#0D5F53] mb-4"
          >
            Services Built to
            <span className="text-[#FF6F00]"> Grow Your Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto"
          >
            From concept to launch — we deliver end-to-end digital solutions that attract clients, drive revenue, and scale with your growth.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(13,95,83,0.07)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(13,95,83,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              id={service.id}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-[#FF6F00] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 shadow-md`}>
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-[#0D5F53] mb-1">{service.name}</h3>
              <p className="text-xs text-[#6B7280] mb-5">{service.tagline}</p>

              <ul className="space-y-2.5 flex-grow mb-6">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#425E57]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00] flex-shrink-0 mt-1.5" />
                    {feat}
                  </li>
                ))}
              </ul>

              <RouterLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#0D5F53] hover:bg-[#0a4c42] text-white py-3 rounded-xl text-sm font-semibold transition-all duration-300 group"
              >
                Get a Free Quote
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </RouterLink>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-14 bg-[#0D5F53] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-white"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">Not sure which service you need?</h3>
            <p className="text-emerald-200 text-sm">Book a free 30-min discovery call — we'll figure it out together.</p>
          </div>
          <RouterLink
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF6F00] hover:bg-[#e55f00] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Book Free Call
            <ArrowRight size={16} />
          </RouterLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
