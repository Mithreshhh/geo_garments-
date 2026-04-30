import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0A08] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-2xl font-black text-[#B8935B] tracking-tight font-display">GEO</span>
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.25em] uppercase">Garments</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Premium factory-direct clothing. Expertly tailored garments at honest prices,
              trusted by thousands across India.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.1em] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/products', label: 'Products' },
                { to: '/bulk-orders', label: 'Bulk Orders' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-[#D4B88A] transition-colors duration-300 font-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.1em] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B8935B] mt-0.5 shrink-0" />
                <span className="font-light">Western Plaza, beside Bata,<br />Ruby Block, Satyam Enclave,<br />Kompally, Hyderabad,<br />Telangana 500014</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B8935B] shrink-0" />
                <span className="font-light">+91 63003 02421</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B8935B] shrink-0" />
                <span className="font-light">hello@geogarments.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.1em] mb-6">Connect</h4>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://www.instagram.com/geo.garments_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 text-gray-400 flex items-center justify-center hover:border-[#B8935B] hover:text-[#B8935B] transition-all duration-300 rounded-sm text-sm"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://wa.me/916300302421"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 text-gray-400 flex items-center justify-center hover:border-[#B8935B] hover:text-[#B8935B] transition-all duration-300 rounded-sm text-sm"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
            <a
              href="https://wa.me/916300302421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-[#B8935B] text-[#0B0A08] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#D4B88A] transition-colors duration-300 active:scale-[0.97]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wide font-light">
            &copy; {currentYear} Geo Garments. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs tracking-wide font-light">
            Crafted with care in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
