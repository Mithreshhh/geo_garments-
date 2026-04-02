import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function WhyChooseUs() {
  const navigate = useNavigate();

  const reasons = [
    {
      title: 'Factory-Direct Supply',
      desc: 'We manufacture and sell directly — eliminating every unnecessary cost between our factory floor and your wardrobe.',
    },
    {
      title: 'Artisan Craftsmanship',
      desc: 'Skilled tailors with decades of experience hand-stitch every garment for a precise, lasting fit.',
    },
    {
      title: 'Uncompromising Quality',
      desc: 'Multi-point quality inspections at every stage ensure that only flawless pieces leave our facility.',
    },
    {
      title: 'Custom Bulk Solutions',
      desc: 'From 50 to 50,000 pieces — we offer flexible bulk orders with full branding and customization.',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Premium Tailoring Process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 lg:-right-8 bg-[#C8102E] text-white p-6 rounded-sm shadow-xl max-w-[220px]"
            >
              <p className="font-display text-3xl font-bold leading-none">10,000+</p>
              <p className="text-sm mt-2 text-white/80 font-light">
                Satisfied customers across India
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="geo-label mb-3">Built on Trust</p>
              <h2 className="geo-heading text-4xl md:text-5xl mb-5">
                Why Customers
                <br />
                <span className="text-[#C8102E]">Stay with Us</span>
              </h2>
              <p className="text-gray-500 text-base font-light leading-relaxed">
                We are not just another clothing label. We are a committed manufacturer
                who believes in transparent pricing, verified quality, and long-term partnerships.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 p-5 bg-white rounded-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#C8102E] text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0A0A] mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/about')}
              className="geo-btn-primary text-sm uppercase tracking-[0.1em] mt-2"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
