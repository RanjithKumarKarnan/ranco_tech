'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  Phone, CreditCard, Globe, LayoutDashboard, ShoppingCart,
  Smartphone, Brush, Code2, Network, Gauge, Building2,
  SearchCheck, GlobeLock, BadgeDollarSign, Lock, BarChart,
  MessageCircleMore, PenTool, LifeBuoy
} from 'lucide-react'

const allServices = [
  {
    name: 'Basic Website',
    icon: Globe,
    features: [
      'Up to 4 Static Pages',
      'Mobile Responsive',
      'SEO-Friendly Setup',
      'Contact Form Integration',
      'Social Media Links',
      'Delivery: 5 Days',
    ],
    id: 'basic-website',
  },
  {
    name: 'Standard Website',
    icon: LayoutDashboard,
    features: [
      'Up to 8 Pages (Static + Dynamic)',
      'Blog or News Section',
      'Admin Panel (Basic CMS)',
      'Contact Form + Google Maps',
      'SEO Optimization',
      'Delivery: 7 Days',
    ],
    id: 'standard-website',
  },
  {
    name: 'Premium Website',
    icon: ShoppingCart,
    features: [
      'Unlimited Pages',
      'Fully Dynamic CMS',
      'Advanced Animations / Sliders',
      'Payment Gateway Integration',
      'Admin Panel + SEO + Chat Support',
      'Delivery: 10–12 Days',
    ],
    id: 'premium-website',
  },
  {
    name: 'E-commerce Website',
    icon: ShoppingCart,
    features: [
      'Unlimited Product Listings',
      'Categories & Filters',
      'Secure Checkout (COD, UPI, Cards, etc.)',
      'Inventory & Order Management',
      'Invoice Generation',
      'Admin Dashboard + SEO',
      'Delivery: 10–14 Days',
    ],
    id: 'ecommerce',
  },
  {
    name: 'Mobile App Development',
    icon: Smartphone,
    features: [
      'Cross-Platform (Flutter - Android & iOS)',
      'API Integration',
      'Clean UI/UX',
      'Admin Panel + Database',
      'Delivery: 2–4 Weeks',
    ],
    id: 'mobile-apps',
  },
  {
    name: 'UI/UX Design',
    icon: Brush,
    features: [
      'Custom Website & App UI Design',
      'Wireframing & Prototyping',
      'Figma / Adobe XD Designs',
      'User Flow & Experience Mapping',
      'Delivery: 7–10 Days',
    ],
    id: 'ui-ux',
  },
  {
    name: 'Custom Web Application',
    icon: Code2,
    features: [
      'Fully Custom Web App Development',
      'Advanced Functionality & API Integrations',
      'Admin Panel & User Management',
      'Scalable & Secure Architecture',
      'Delivery: 4–6 Weeks',
    ],
    id: 'custom-web-app',
  },
  {
    name: 'API Development & Integration',
    icon: Network,
    features: [
      'REST & GraphQL API Development',
      'Third-Party API Integrations',
      'Secure Authentication & Data Handling',
      'Custom API Solutions for Apps & Web',
      'Delivery: 5–7 Days',
    ],
    id: 'api',
  },
  {
    name: 'Performance Optimization',
    icon: Gauge,
    features: [
      'Speed & Loading Time Optimization',
      'Database Query Optimization',
      'Image & Code Minification',
      'Security Enhancements',
      'Delivery: 5–7 Days',
    ],
    id: 'performance',
  },
  {
    name: 'Enterprise Software Solutions',
    icon: Building2,
    features: [
      'Custom ERP & CRM Solutions',
      'Business Automation Tools',
      'Large-Scale Application Development',
      'Ongoing Maintenance & Support',
      'Delivery: 8–12 Weeks',
    ],
    id: 'enterprise',
  },
  {
    name: 'SEO Optimization',
    icon: SearchCheck,
    features: [
      'On-page & Off-page SEO',
      'Keyword Research & Competitor Analysis',
      'Technical SEO (Speed & Mobile Optimization)',
      'Backlink Strategy & Content Optimization',
      'Monthly Performance Report',
      'Delivery: Ongoing / Monthly Plans Available',
    ],
    id: 'seo',
  },
  {
    name: 'Domain & Hosting Setup',
    icon: GlobeLock,
    features: [],
    id: 'domain-hosting',
  },
  {
    name: 'Logo Design',
    icon: PenTool,
    features: [],
    id: 'logo',
  },
  {
    name: 'SSL Setup',
    icon: Lock,
    features: [],
    id: 'ssl',
  },
  {
    name: 'Monthly Website Maintenance',
    icon: BadgeDollarSign,
    features: [],
    id: 'maintenance',
  },
  {
    name: 'Google Analytics & Tag Manager Integration',
    icon: BarChart,
    features: [],
    id: 'analytics',
  },
  {
    name: 'WhatsApp Chat Integration',
    icon: MessageCircleMore,
    features: [],
    id: 'whatsapp',
  },
  {
    name: 'IT Consulting & Troubleshooting',
    icon: LifeBuoy,
    features: [],
    id: 'consulting',
  },
]

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#f4f9f9] to-[#e8f0f2] py-20 px-5 font-['Montserrat']" id="services-page">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-[#0D5F53] mb-4"
        >
          All Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#4A6D6F] text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          Browse our complete range of services to meet your business needs.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {allServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full"
                id={service.id}
              >
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <Icon size={36} className="text-[#FF6F00]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0D5F53] mb-2">{service.name}</h4>

                  {service.features.length > 0 ? (
                    <ul className="space-y-3 mb-4 text-left">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#FF6F00] mt-1">•</span>
                          <p className="text-sm text-[#425E57]">{feat}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-[#425E57] mb-4">Contact for more details.</p>
                  )}
                </div>

                <div className="mt-auto pt-4 flex justify-center">
                  <a
                    href="tel:+919361660714"
                    className="inline-flex items-center justify-center bg-[#FF6F00] text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-[#e55f00] transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone size={16} className="mr-2" />
                    Contact Us
                  </a>
                </div>
              </motion.div>

            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
