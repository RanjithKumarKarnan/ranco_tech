import React, { useState } from "react";
import { Link } from "react-router-dom";
import { submitLead } from "../lib/submitLead";
import {
  Globe,
  Smartphone,
  Server,
  Figma,
  ShieldCheck,
  Search,
  LifeBuoy,
  Linkedin,
  Instagram,
} from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitLead({ email, source: "newsletter" }, "New Newsletter Subscriber — RanCoTech Website");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <p className="text-sm text-emerald-200">Thanks for subscribing! We'll be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className="w-full bg-[#1B8579] placeholder-gray-300 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#FF6F00] hover:bg-orange-600 disabled:opacity-60 text-white px-5 py-2 rounded-md font-semibold transition-colors duration-200"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-xs text-orange-200">Something went wrong. Please try again or email info@rancotechnology.com.</p>
      )}
    </form>
  );
};

const Footer = () => {
  const headerLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Our Team', to: '/team' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Testimonial', to: '/testimonial' },
    { label: 'Contact', to: '/contact' },
  ];

  const services = [
    {
      name: "Website Development",
      icon: <Globe size={16} />,
      items: [
        { label: "Custom Business Websites", to: "/servicespage#basic-website" },
        { label: "E-commerce Websites", to: "/servicespage#ecommerce" },
        { label: "Portfolio Websites", to: "/servicespage#basic-website" },
        { label: "Landing Pages", to: "/servicespage#basic-website" },
        { label: "Redesign & UI Upgrades", to: "/servicespage#ui-ux" },
      ],
    },
    {
      name: "Hosting & Domain Services",
      icon: <ShieldCheck size={16} />,
      items: [
        { label: "Domain Management", to: "/servicespage#domain-hosting" },
        { label: "Web Hosting", to: "/servicespage#domain-hosting" },
        { label: "SSL Setup", to: "/servicespage#ssl" },
        { label: "Email Hosting", to: "/servicespage#domain-hosting" },
        { label: "Website Migration", to: "/servicespage#domain-hosting" },
      ],
    },
    {
      name: "Mobile App Development",
      icon: <Smartphone size={16} />,
      items: [
        { label: "Cross-Platform Apps", to: "/servicespage#mobile-apps" },
        { label: "Custom App Solutions", to: "/servicespage#mobile-apps" },
        { label: "UI/UX Design", to: "/servicespage#ui-ux" },
        { label: "Performance Optimization", to: "/servicespage#performance" },
      ],
    },
    {
      name: "Digital Marketing & SEO",
      icon: <Search size={16} />,
      items: [
        { label: "SEO", to: "/servicespage#seo" },
        { label: "Performance Optimization", to: "/servicespage#analytics" },
        { label: "Speed & Core Web Vitals", to: "/servicespage#performance" },
      ],
    },
    {
      name: "IT & Software Solutions",
      icon: <Server size={16} />,
      items: [
        { label: "Enterprise Development", to: "/servicespage#enterprise" },
        { label: "Custom Software", to: "/servicespage#custom-web-app" },
        { label: "Admin Dashboards", to: "/servicespage#custom-web-app" },
        { label: "CRM & ERP Systems", to: "/servicespage#enterprise" },
      ],
    },
    {
      name: "Consulting & IT Support",
      icon: <LifeBuoy size={16} />,
      items: [
        { label: "IT Consulting", to: "/servicespage#consulting" },
        { label: "Maintenance", to: "/servicespage#maintenance" },
        { label: "Troubleshooting", to: "/servicespage#consulting" },
      ],
    },
    {
      name: "UI/UX Design",
      icon: <Figma size={16} />,
      items: [
        { label: "Prototyping", to: "/servicespage#ui-ux" },
        { label: "Web & App UI/UX", to: "/servicespage#ui-ux" },
        { label: "Branding & Logo", to: "/servicespage#logo" },
      ],
    },
  ];

  const companyLinks = [
    { label: 'About', to: '/about' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Fiverr', href: 'https://www.fiverr.com/sellers/ranjithkumar31/' },
  ];

  const serviceBoxes = [[], [], [], []];
  services.forEach((item, index) => {
    serviceBoxes[index % 4].push(item);
  });

  return (
    <footer className="bg-[#0D5F53] text-[#FBFBFD] font-[Montserrat] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        {/* Column 0: Brand Description */}
        <div>
          <div className="flex items-center mb-3 space-x-0 text-white text-lg font-bold tracking-wider">
            <span className="text-[#FF6F00]">RanCo</span>
            <span>Tech</span>
          </div>
          <p className="text-sm text-gray-300">
            Empowering businesses with digital solutions that drive growth, innovation,
            and impact. Your tech partner for the future.
          </p>
        </div>

        {/* Column 1: Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {headerLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-[#FF6F00]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {companyLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6F00]">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.to} className="hover:text-[#FF6F00]">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <h6 className="text-sm mb-3">Stay Ahead of the Curve</h6>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe to the Ranco Tech newsletter for the latest updates in technology,
            innovation, and digital transformation.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Services Section Title */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceBoxes.map((group, idx) => (
          <div key={idx} className="space-y-6">
            {group.map((service, index) => (
              <div key={index}>
                <h4 className="flex items-center text-sm font-semibold mb-2 space-x-2">
                  <span>{service.icon}</span>
                  <span>{service.name}</span>
                </h4>
                <ul className="text-sm text-gray-300 space-y-1 ml-4">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <Link to={item.to} className="hover:text-[#FF6F00]">• {item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-[#1B8579] pt-6 px-6 max-w-7xl mx-auto text-sm text-gray-400">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-3">
          {/* Left Side */}
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-2">
            <div className="flex space-x-0 text-white text-base md:text-lg font-bold tracking-wider">
              <span className="text-[#FF6F00]">RanCo</span>
              <span className="text-white">Tech</span>
            </div>
            <span className="text-sm font-normal text-gray-400 md:inline block">
              All rights reserved. &copy; {new Date().getFullYear()}
            </span>
          </div>

          {/* Right Side*/}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/rancotechnology"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RanCoTech on LinkedIn"
              className="p-2 rounded-full hover:bg-[#1B8579] hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/ranco.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RanCoTech on Instagram"
              className="p-2 rounded-full hover:bg-[#1B8579] hover:text-white transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
