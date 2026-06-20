import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ArrowRight, Target, Eye, CheckCircle2 } from "lucide-react";

const strengths = [
  "5★ rated on Fiverr with 50+ completed projects",
  "Serving clients in 11+ countries worldwide",
  "On-time delivery, every single project",
  "Transparent communication from day one",
];

const About = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, scale: 1 });
  }, [isInView, controls]);

  return (
    <section id="about" className="py-24 bg-gradient-to-r from-[#F3F9F4] to-[#EAF4F1] text-[#0D5F53] font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <div className="flex justify-center items-center">
          <motion.img
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ duration: 0.9 }}
            src="/about.gif"
            alt="About RanCoTech - Web Development Agency India"
            className="w-full max-w-[500px] md:max-w-[560px] h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-[#D1EAE5] text-[#0D5F53] text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-5 uppercase tracking-widest"
          >
            Who We Are
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-5 text-[#0D5F53] leading-tight"
          >
            Your Global Tech Partner,
            <span className="text-[#FF6F00]"> Based in India</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[#425E57] mb-4 text-base leading-relaxed"
          >
            RanCoTech is a leading software development agency in India, delivering enterprise-grade web applications, mobile apps, and IT solutions to businesses across the globe. We blend technical excellence with a deep understanding of business goals to build products that actually perform.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[#425E57] mb-6 text-base leading-relaxed"
          >
            Every project we take on is built with craftsmanship, shipped on schedule, and backed by ongoing support. Whether you're a startup finding your footing or an established business scaling up, we have the team and tools to make it happen.
          </motion.p>

          {/* Strengths checklist */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2.5 mb-8"
          >
            {strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#425E57]">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                {s}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <RouterLink
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[#0D5F53] hover:bg-[#0a4c42] text-white py-3.5 px-8 rounded-full text-sm font-semibold shadow-lg shadow-[#0D5F53]/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </RouterLink>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="mt-20 max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0D5F53]/10 p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <Target size={20} className="text-[#FF6F00]" />
              </div>
              <h3 className="text-lg font-bold text-[#138074]">Our Mission</h3>
            </div>
            <p className="text-[#425E57] text-sm leading-relaxed">
              To empower businesses worldwide by bridging the gap between bold ideas and powerful technology — delivering solutions that create real, measurable impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0D5F53]/10 p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <Eye size={20} className="text-[#0D5F53]" />
              </div>
              <h3 className="text-lg font-bold text-[#138074]">Our Vision</h3>
            </div>
            <p className="text-[#425E57] text-sm leading-relaxed">
              To become the most trusted global technology partner for growing businesses — known for quality, speed, and the ability to transform ambitious visions into reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
