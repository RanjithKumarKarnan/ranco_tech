import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Every path here (except redirects and *) must also be listed in prerenderRoutes in src/seo/meta.js
const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="services/:slug" element={<ServiceDetailPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="testimonials" element={<TestimonialsPage />} />
      <Route path="faq" element={<FaqPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="terms" element={<TermsPage />} />

      {/* Old URLs (also 301-redirected in public/.htaccess) */}
      <Route path="servicespage" element={<Navigate to="/services" replace />} />
      <Route path="testimonial" element={<Navigate to="/testimonials" replace />} />
      <Route path="team" element={<Navigate to="/about" replace />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
