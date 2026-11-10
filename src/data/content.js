export const projects = [
  {
    id: 'pech-weg',
    title: 'Pech Weg',
    category: 'Local service business',
    description: 'A website for a scooter and e-bike repair service in the Netherlands, with WhatsApp contact and online booking front and centre.',
    image: '/projects/pech-weg.webp',
    url: 'https://pech-weg.nl/',
    services: ['Web Development'],
  },
  {
    id: 'sol-sprint',
    title: 'Sol Sprint',
    category: 'Web3 game website',
    description: 'A playful, fully illustrated landing site for a Solana-based racing game, where players race in real time and climb the leaderboards.',
    image: '/projects/sol-sprint.webp',
    url: 'https://solsprint.xyz/',
    services: ['UI/UX Design', 'Web Development'],
  },
  {
    id: 'school-of-hepatology',
    title: 'School of Hepatology',
    category: 'Medical education',
    description: 'The website of the Department of Hepatology at SGPGIMS, Lucknow, covering academics, events, collaborations and patient OPD information.',
    image: '/projects/school-of-hepatology.webp',
    url: 'https://schoolofhepatology.com/',
    services: ['Web Development'],
  },
  {
    id: 'bharath-first-school',
    title: 'Bharath First School',
    category: 'School website',
    description: 'A website for a school in Perambalur, Tamil Nadu, with admissions, facilities, student information and a photo gallery.',
    image: '/projects/bharath-first-school.webp',
    url: 'https://bharathfirstschool.com/',
    services: ['Web Development'],
  },
  {
    id: '18-siddhars-research',
    title: '18 Siddhars Research',
    category: 'Research institution',
    description: 'A bilingual research website exploring the medicinal knowledge of the 18 Siddhars for modern health applications.',
    image: '/projects/18-siddhars-research.webp',
    url: 'https://18siddharsresearch.com/',
    services: ['Web Development'],
  },
];

export const getProjects = (ids) => projects.filter((p) => ids.includes(p.id));

export const clientLogos = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `/clients/client${i}.webp`);

export const testimonials = [
  { name: 'Robert Nicholl', country: 'United States', text: 'Excellent collaborative style and easy communication. Very amenable and willing to drive the solution. Initiated design improvements and insisted on quality. Got it done extremely fast.' },
  { name: 'oscarhiemcke2', country: 'Netherlands', text: 'Very skilled and even exceeded my expectations with the quality of the work. Communication was also great, always responds fast. The work was often done in just a day.' },
  { name: 'WF Media', country: 'Germany', text: 'Absolutely thrilled with the website redesign! The attention to detail and professionalism displayed throughout the project was top-notch.' },
  { name: 'willamkelbert', country: 'Singapore', text: 'I had a fantastic experience — a top-notch e-commerce solution. Communication was seamless, with prompt responses and crystal-clear explanations.' },
  { name: 'adam_dreja', country: 'Libya', text: 'Third project with Ranjith — all 3 ended satisfactorily. Instant replies, unlimited editing, well-behaved and skilled. 100% would ask again.' },
  { name: 'Jachin Rupe', country: 'United States', text: 'Ranjith communicated a lot about the progress of the project. He also responded to my feedback when I needed things changed.' },
  { name: 'talenbekova07', country: 'Kyrgyzstan', text: 'Our project was a resounding success! Completed on time, with impressive creativity and new ideas. Highly recommend for fast, quality, and innovative solutions.' },
  { name: 'Cyranodd', country: 'Netherlands', text: 'Lovely working with Ranjith. I sure do recommend! Very fast reply as well. Could wish for a better experience to be honest.' },
  { name: 'jacobluke0', country: 'Ireland', text: 'Utmost satisfaction! Profound expertise in design, coding, UX. Translated complex ideas smoothly.' },
  { name: 'Anjalee Anuththa', country: 'Sri Lanka', text: 'Glad to work with him. Submitted the Project according to my expectations with required time. Recommend for others. You will never disappoint with his work.' },
  { name: 'jillenrique', country: 'United Kingdom', text: 'Delivery was done well with no issues whatsoever! 100% highly recommended.' },
];

export const processSteps = [
  { title: 'Discover', text: 'A free call to understand your goals, audience and requirements. You get a clear scope, timeline and quote.' },
  { title: 'Design', text: 'Wireframes and polished designs you review and approve before development starts.' },
  { title: 'Build & test', text: 'Clean, fast code with regular progress updates and testing across devices and browsers.' },
  { title: 'Launch & support', text: 'We deploy, set up analytics and stay on hand for updates, fixes and growth.' },
];

export const faqs = [
  {
    q: 'What services does RanCoTech offer?',
    a: 'We build websites, e-commerce stores, mobile apps and custom web software, and we provide UI/UX design, SEO, hosting and ongoing maintenance — everything a business needs to grow online.',
  },
  {
    q: 'How much does a website or app cost?',
    a: 'Every project is quoted individually based on scope, number of pages or screens, and integrations. Share your requirements through our contact form and we’ll send a clear, itemised quote — the consultation is free.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A basic website takes around 5 days, standard websites about 7 days, e-commerce stores 10–14 days, mobile apps 2–4 weeks and custom web applications 4–6 weeks. We confirm timelines in writing before we start.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. We have delivered projects for clients in more than 11 countries, including the United States, the United Kingdom, Germany, the Netherlands and Singapore. We communicate by email, WhatsApp and video calls and work around your time zone.',
  },
  {
    q: 'What is your development process?',
    a: 'Discovery and planning, UI/UX design, development, testing and quality assurance, deployment, and ongoing support. You review progress at each stage, so there are no surprises at launch.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'React and Next.js, Node.js, Django and Laravel for the web; Flutter and React Native for mobile; MySQL, PostgreSQL, MongoDB and Firebase for data; and AWS, Google Cloud and Docker for infrastructure. We choose the stack that best fits your project.',
  },
  {
    q: 'Will my website be optimised for Google?',
    a: 'Yes. Every website we build includes on-page SEO foundations: fast load times, mobile-friendly design, clean page titles and meta descriptions, structured data and a sitemap. Ongoing SEO campaigns are available separately.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We offer monthly maintenance covering updates, backups, monitoring, fixes and small changes, and we’re reachable by WhatsApp and email.',
  },
  {
    q: 'What industries do you work with?',
    a: 'Healthcare, education, e-commerce, retail, logistics, finance, events and professional services, among others.',
  },
  {
    q: 'How do I get started?',
    a: 'Fill in the contact form or message us on WhatsApp with a short description of your project. We typically reply within 2 hours on business days with next steps.',
  },
];
