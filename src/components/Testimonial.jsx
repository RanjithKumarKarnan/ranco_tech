'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Stats from './Stats';

const testimonials = [
  {
    name: "Cyranodd",
    role: "Netherlands",
    feedback:
      "Lovely working with Ranjith. I sure do recommend! Very fast reply as well. Could wish for a better experience to be honest.",
    rating: 5,
    avatar: "C",
  },
  {
    name: "Jachin Rupe",
    role: "United States",
    feedback:
      "The project was to write some CSS to style a web component. Ranjith communicated a lot about the progress of the project. He also responded to my feedback when I needed things changed.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Anjalee Anuththa",
    role: "Sri Lanka",
    feedback:
      "Glad to work with him. Submitted the Project according to my expectations with required time. Recommend for others. You will never disappoint with his work.",
    rating: 5,
    avatar: "A",
  },
  {
    name: "WF Media",
    role: "Germany",
    feedback:
      "Absolutely thrilled with the website redesign! The attention to detail and professionalism displayed throughout the project was top-notch. Highly recommend his services to anyone looking for a seamless web development experience.",
    rating: 5,
    avatar: "W",
  },
  {
    name: "Robert Nicholl",
    role: "United States",
    feedback:
      "Excellent collaborative style and easy communication. Very amenable and willing to drive the solution. Initiated design improvements and insisted on quality. Got it done extremely fast. I will be using him again. Thank you!",
    rating: 5,
    avatar: "R",
  },
  {
    name: "willamkelbert",
    role: "Singapore",
    feedback:
      "I had a fantastic experience — a top-notch e-commerce solution. Communication was seamless, with prompt responses and crystal-clear explanations. Their expertise truly shone through.",
    rating: 5,
    avatar: "W",
  },
  {
    name: "talenbekova07",
    role: "Kyrgyzstan",
    feedback:
      "Our project was a resounding success! Completed on time, with impressive creativity and new ideas. Highly recommend for fast, quality, and innovative solutions.",
    rating: 5,
    avatar: "T",
  },
  {
    name: "adam_dreja",
    role: "Libya",
    feedback:
      "Third project with Ranjith — all 3 ended satisfactorily. Instant replies, unlimited editing, well-behaved and skilled. 100% would ask again.",
    rating: 5,
    avatar: "A",
  },
  {
    name: "jillenrique",
    role: "United Kingdom",
    feedback:
      "Delivery was done well with no issues whatsoever! 100% Highly recommended.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "jacobluke0",
    role: "Ireland",
    feedback:
      "Utmost satisfaction! Profound expertise in design, coding, UX. Translated complex ideas smoothly.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "oscarhiemcke2",
    role: "Netherlands",
    feedback:
      "This guy is great. Very skilled and even exceeded my expectations with the quality of the work. Communication was also great, always responds fast. The work was often done in just a day. 10/10 would recommend!",
    rating: 5,
    avatar: "O",
  },
];

const avatarColors = [
  'from-emerald-400 to-teal-600',
  'from-blue-400 to-indigo-600',
  'from-purple-400 to-violet-600',
  'from-rose-400 to-pink-600',
  'from-amber-400 to-orange-500',
  'from-cyan-400 to-sky-600',
];

const TestimonialCard = ({ t, index }) => (
  <div className="relative flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl p-6 mx-3 shadow-[0_4px_24px_rgba(13,95,83,0.08)] border border-[#E8F4F1] hover:shadow-[0_8px_40px_rgba(13,95,83,0.15)] hover:-translate-y-1 transition-all duration-300 group">
    {/* Quote icon */}
    <div className="absolute top-4 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
      <Quote size={40} className="text-[#0D5F53] fill-[#0D5F53]" />
    </div>

    {/* Stars */}
    <div className="flex items-center gap-0.5 mb-4">
      {[...Array(5)].map((_, idx) => (
        <Star
          key={idx}
          size={14}
          className={idx < t.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>

    {/* Feedback */}
    <p className="text-sm leading-relaxed text-[#4B5563] mb-5 line-clamp-4">
      "{t.feedback}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-4 border-t border-[#F0F7F5]">
      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm`}>
        {t.avatar}
      </div>
      <div>
        <p className="font-semibold text-sm text-[#0D5F53] leading-tight">{t.name}</p>
        <p className="text-xs text-[#9CA3AF] mt-0.5">{t.role}</p>
      </div>
      {/* Verified badge */}
      <div className="ml-auto">
        <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
          ✓ Verified
        </span>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, reverse = false, speed = 40 }) => {
  const duplicated = [...items, ...items];
  const duration = `${items.length * speed}s`;

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-32 z-10 bg-gradient-to-r from-[#F0F9F7] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-32 z-10 bg-gradient-to-l from-[#F0F9F7] to-transparent" />

      <div
        className="flex will-change-transform"
        style={{
          animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${duration} linear infinite`,
        }}
      >
        {duplicated.map((t, i) => (
          <TestimonialCard key={i} t={t} index={i} />
        ))}
      </div>
    </div>
  );
};

const row1 = testimonials.slice(0, 6);
const row2 = testimonials.slice(5);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-[#F0F9F7] py-20 font-['Montserrat'] overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-white border border-[#D1EAE5] text-[#0D5F53] text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-6 uppercase tracking-widest"
        >
          <Star size={12} className="fill-amber-400 text-amber-400" />
          5.0 Average Rating
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#0D5F53] mb-5 leading-tight"
        >
          Trusted by Clients
          <span className="block text-[#2A9D8F]">Worldwide</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#6B7280] text-base md:text-lg max-w-xl mx-auto"
        >
          Real feedback from real clients across the globe — here's what they say about the experience.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <MarqueeRow items={row1} reverse={false} speed={45} />
        <MarqueeRow items={row2} reverse={true} speed={38} />
      </motion.div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <Stats withBackground={false} />
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
