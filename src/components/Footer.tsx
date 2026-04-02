import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-[#E60023] mb-2">GEO</h3>
            <p className="text-xs font-bold text-gray-300 tracking-widest mb-4">
              GARMENTS
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium factory-direct clothing. Hand-stitched quality at affordable prices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#E60023] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#E60023] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#E60023] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/bulk-orders" className="text-gray-400 hover:text-[#E60023] transition-colors">
                  Bulk Orders
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="text-[#E60023]">📍</span>
                <span>Kompally, Hyderabad</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#E60023]">📞</span>
                <span>+91 XXXX XXXX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#E60023]">✉️</span>
                <span>hello@geogarments.in</span>
              </li>
            </ul>
          </motion.div>

          {/* Social & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#E60023] text-white flex items-center justify-center hover:bg-red-700 transition-colors rounded-full"
              >
                📷
              </a>
              <a
                href="https://wa.me/917XXXXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#E60023] text-white flex items-center justify-center hover:bg-red-700 transition-colors rounded-full"
              >
                💬
              </a>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917XXXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block geo-btn-primary text-sm"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Geo Garments. All rights reserved. | Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
