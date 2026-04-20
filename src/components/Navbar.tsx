import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Bulk Orders', path: '/bulk-orders' },
    { label: 'Contact', path: '/contact' },
  ];

  const linkColor = isScrolled ? 'text-gray-800' : 'text-white';
  const subLogoColor = isScrolled ? 'text-gray-900' : 'text-white';
  const barColor = isScrolled ? 'bg-gray-900' : 'bg-white';

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F6F1E8]/97 shadow-[0_1px_20px_rgba(11,10,8,0.08)] border-b border-[#B8935B]/10'
          : 'bg-transparent'
      }`}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.6s ease-out, background-color 0.5s, box-shadow 0.5s'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="shrink-0 group">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-[#B8935B] tracking-tight font-display group-hover:text-[#D4B88A] transition-colors duration-300">
                GEO
              </span>
              <span className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-500 ${subLogoColor}`}>
                Garments
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${linkColor} font-medium text-[13px] uppercase tracking-[0.08em] hover:text-[#B8935B] transition-colors duration-300 relative group`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#B8935B] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/bulk-orders')}
              className={`text-xs px-6 py-2.5 hidden md:inline-flex items-center font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#0B0A08] text-white hover:bg-[#B8935B] hover:text-[#0B0A08]'
                  : 'bg-[#B8935B] text-[#0B0A08] hover:bg-[#D4B88A]'
              }`}
            >
              Request a Quote
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col space-y-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 ${barColor} ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 ${barColor} ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 ${barColor} ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="flex flex-col space-y-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 font-medium text-sm px-4 py-3 hover:text-[#B8935B] hover:bg-gray-50 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={() => {
                    navigate('/bulk-orders');
                    setIsMenuOpen(false);
                  }}
                  className="geo-btn-primary text-sm w-full"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
