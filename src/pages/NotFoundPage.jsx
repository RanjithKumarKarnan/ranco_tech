import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NotFoundPage = () => (
  <section
    className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-5 font-['Montserrat'] text-center"
    style={{ background: 'linear-gradient(135deg, #EAF4F1 0%, #FBFBFD 50%, #FFF5EE 100%)' }}
  >
    <title>Page Not Found | RanCoTech</title>
    <meta name="robots" content="noindex" />
    <div>
      <p className="text-7xl font-extrabold text-[#FF6F00] mb-4">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0D5F53] mb-4">Page not found</h1>
      <p className="text-[#425E57] max-w-md mx-auto mb-8">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-[#0D5F53] hover:bg-[#0a4c42] text-white py-3.5 px-8 rounded-full text-sm font-semibold transition"
        >
          Back to Home
        </Link>
        <Link
          to="/contact"
          className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0D5F53] text-[#0D5F53] hover:bg-[#0D5F53] hover:text-white py-3.5 px-8 rounded-full text-sm font-semibold transition"
        >
          Contact Us
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
