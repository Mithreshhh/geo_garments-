import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Bulk Orders', path: '/bulk-orders' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-white/95'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="shrink-0 group">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-[#C8102E] tracking-tight font-display group-hover:text-red-800 transition-colors duration-300">
                GEO
              </span>
              <span className="text-[10px] font-bold text-gray-900 tracking-[0.25em] uppercase">
                Garments
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-800 font-medium text-[13px] uppercase tracking-[0.08em] hover:text-[#C8102E] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#C8102E] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/bulk-orders')}
              className="geo-btn-primary text-xs px-6 py-2.5 hidden md:inline-block uppercase tracking-[0.1em]"
            >
              Request a Quote
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col space-y-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col space-y-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 font-medium text-sm px-4 py-3 hover:text-[#C8102E] hover:bg-gray-50 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    navigate('/bulk-orders');
                    setIsMenuOpen(false);
                  }}
                  className="geo-btn-primary text-sm w-full"
                >
                  Request a Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
