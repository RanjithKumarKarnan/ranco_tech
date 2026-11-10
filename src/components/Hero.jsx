import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Star, ArrowRight, CheckCircle2, Globe, Users, Award } from "lucide-react";

const trustBadges = [
  { icon: <Star size={14} className="fill-amber-400 text-amber-400" />, text: "5.0 Rated on Fiverr" },
  { icon: <Globe size={14} className="text-[#0D5F53]" />, text: "11+ Countries Served" },
  { icon: <Award size={14} className="text-[#FF6F00]" />, text: "50+ Projects Delivered" },
];

const highlights = [
  "Custom Websites & Web Apps",
  "Mobile App Development",
  "UI/UX Design & Branding",
  "SEO & Digital Marketing",
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 pt-20 pb-10 font-[Montserrat] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EAF4F1 0%, #FBFBFD 50%, #FFF5EE 100%)" }}
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#0D5F53]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#FF6F00]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D5F53]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Left: Text */}
        <div className="w-full lg:w-[55%] text-center lg:text-left">

          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-[#D1EAE5] text-[#0D5F53] text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-6 uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for New Projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D5F53] leading-[1.15] mb-6"
          >
            We Build Digital
            <br />
            <span className="text-[#FF6F00]">Products</span> That
            <br />
            Drive{" "}
            <span className="relative inline-block">
              Growth
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 6 Q100 0 200 6" stroke="#FF6F00" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[#425E57] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            RanCoTech is a global web & software development agency based in India. We craft high-performance digital solutions — websites, apps, and IT systems — that help businesses scale and win worldwide.
          </motion.p>

          {/* Highlights list */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="grid grid-cols-2 gap-2 mb-8 max-w-md mx-auto lg:mx-0"
          >
            {highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#425E57]">
                <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10"
          >
            <RouterLink
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#0D5F53] hover:bg-[#0a4c42] text-white py-3.5 px-8 rounded-full text-sm font-semibold shadow-lg shadow-[#0D5F53]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </RouterLink>

            <RouterLink
              to="/servicespage"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0D5F53] text-[#0D5F53] hover:bg-[#0D5F53] hover:text-white py-3.5 px-8 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Services
            </RouterLink>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm text-xs font-medium text-[#4A6D6F]">
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-[45%] max-w-[480px] flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full"
          >
            {/* Floating card: clients */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100"
            >
              <div className="flex -space-x-2">
                {["C","J","A","W"].map((l, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white ${["bg-emerald-500","bg-blue-500","bg-purple-500","bg-orange-500"][i]}`}>{l}</div>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">50+ Happy Clients</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_,i) => <Star key={i} size={9} className="fill-amber-400 text-amber-400" />)}
                </div>
              </div>
            </motion.div>

            {/* Floating card: project delivered */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 z-10 bg-[#0D5F53] text-white rounded-2xl shadow-xl px-4 py-3"
            >
              <p className="text-2xl font-bold leading-none">50+</p>
              <p className="text-xs text-emerald-200 mt-0.5">Projects Delivered</p>
            </motion.div>

            <img
              src="/website.gif"
              alt="RanCoTech - Web Development Agency"
              className="w-full h-auto object-contain drop-shadow-2xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
