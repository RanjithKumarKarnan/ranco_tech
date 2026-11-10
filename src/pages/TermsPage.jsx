import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';

const sections = [
  {
    heading: 'Using this website',
    body: 'By using rancotechnology.com you agree to these terms. If you do not agree, please do not use the site.',
  },
  {
    heading: 'Information on this site',
    body: 'Service descriptions, delivery times and other details on this website are general information, not a binding offer. Scope, price and timelines for any project are confirmed in a written quote or agreement before work begins.',
  },
  {
    heading: 'Project work',
    body: 'Work we carry out for you is governed by the quote, proposal or contract we agree with you (including orders placed through platforms such as Fiverr, which are also subject to that platform\'s terms). Where those documents conflict with these terms, they take precedence.',
  },
  {
    heading: 'Intellectual property',
    body: 'The RanCoTech name, logo, text, graphics and design of this website belong to RanCoTech unless stated otherwise. Client logos and project screenshots are shown with reference to work we delivered and remain the property of their respective owners.',
  },
  {
    heading: 'Third-party links',
    body: 'This site links to external websites, including client projects and third-party platforms. We are not responsible for their content or privacy practices.',
  },
  {
    heading: 'No warranty',
    body: 'We try to keep this website accurate and available, but it is provided "as is" without warranties of any kind, and we may change or remove content at any time.',
  },
  {
    heading: 'Limitation of liability',
    body: 'To the extent permitted by law, RanCoTech is not liable for any indirect or consequential loss arising from your use of this website.',
  },
  {
    heading: 'Privacy',
    body: <>How we handle personal information is described in our <Link to="/privacy-policy" className="text-[#0D5F53] font-semibold underline">Privacy Policy</Link>.</>,
  },
  {
    heading: 'Governing law',
    body: 'These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts in Tiruchirappalli, Tamil Nadu.',
  },
  {
    heading: 'Contact',
    body: <>Questions about these terms? Email <a href="mailto:info@rancotechnology.com" className="text-[#0D5F53] font-semibold underline">info@rancotechnology.com</a>.</>,
  },
];

const TermsPage = () => (
  <LegalPage
    title="Terms of Service"
    updated="November 10, 2026"
    intro="These terms cover your use of the RanCoTech website."
    sections={sections}
  />
);

export default TermsPage;
