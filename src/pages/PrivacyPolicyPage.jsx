import LegalPage from '../components/LegalPage';

const email = <a href="mailto:info@rancotechnology.com" className="text-[#0D5F53] font-semibold underline">info@rancotechnology.com</a>;

const sections = [
  {
    heading: 'Information we collect',
    body: [
      'Contact form: your name, email address, phone / WhatsApp number, the service you are interested in, your estimated budget and any project details you write.',
      'Newsletter: your email address, if you choose to subscribe.',
      'Usage data: pages visited, approximate location, device and browser information, collected through Google Analytics cookies.',
      'Messages you send us directly by email, phone or WhatsApp.',
    ],
  },
  {
    heading: 'How we use it',
    body: [
      'To reply to your enquiry and prepare a quote or proposal.',
      'To deliver and support projects you engage us for.',
      'To send newsletter updates, only if you subscribed. Every email lets you unsubscribe.',
      'To understand how visitors use this website so we can improve it.',
    ],
  },
  {
    heading: 'Services that process your data',
    body: [
      'Web3Forms — delivers contact form submissions to our inbox.',
      'Google Sheets (Google LLC) — stores enquiries so our team can follow up.',
      'Google Analytics (Google LLC) — measures website traffic using cookies.',
      'Google Maps (Google LLC) — the embedded map on our contact section is served by Google.',
      'WhatsApp (Meta Platforms) — only if you choose to message us there.',
    ],
  },
  {
    heading: 'What we don\'t do',
    body: 'We do not sell, rent or trade your personal information, and we do not use it for anything other than the purposes described above.',
  },
  {
    heading: 'Cookies',
    body: 'This website uses Google Analytics cookies to measure traffic. You can block or delete cookies in your browser settings, or install the Google Analytics opt-out browser add-on, without affecting your ability to use the site.',
  },
  {
    heading: 'How long we keep it',
    body: 'We keep enquiry details for as long as needed to respond to you and, if we work together, for the duration of the project and our legal record-keeping obligations. You can ask us to delete your data at any time.',
  },
  {
    heading: 'Your rights',
    body: <>You can ask to see, correct or delete the personal information we hold about you, or withdraw consent to marketing emails, by writing to {email}. We will respond within 30 days.</>,
  },
  {
    heading: 'Contact',
    body: <>RanCoTech, Trichy, Tamil Nadu, India · {email} · <a href="tel:+919361660714" className="text-[#0D5F53] font-semibold underline">+91 93616 60714</a></>,
  },
];

const PrivacyPolicyPage = () => (
  <LegalPage
    title="Privacy Policy"
    updated="November 10, 2026"
    intro="This policy explains what information RanCoTech collects through rancotechnology.com, how we use it, and the choices you have."
    sections={sections}
  />
);

export default PrivacyPolicyPage;
