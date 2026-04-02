import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  initials: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Retail Store Owner',
      company: 'Premium Wear Store',
      rating: 5,
      quote:
        'The quality is genuinely outstanding — my customers notice the difference immediately. And the factory-direct pricing means better margins for my business. A partnership I truly value.',
      initials: 'RK',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Procurement Head',
      company: 'Corporate Uniforms Ltd',
      rating: 5,
      quote:
        'We ordered 2,000 uniforms with custom branding. Every single piece was delivered on time, perfectly finished. Their professionalism and reliability are second to none.',
      initials: 'PS',
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Repeat Customer',
      company: 'Individual Buyer',
      rating: 5,
      quote:
        'I have tried dozens of brands, and nothing comes close to this quality-to-price ratio. The fit is impeccable, the fabrics feel luxurious, and the service is always personal.',
      initials: 'AP',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="geo-label mb-4">Testimonials</p>
          <h2 className="geo-heading text-4xl md:text-5xl mb-5">
            Trusted by Thousands
            <br />
            <span className="text-[#C8102E]">Across India</span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">
            Hear from retailers, institutions, and individual customers who have made Geo Garments their preferred choice.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 bg-[#FAF8F5] border border-gray-100 rounded-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-400"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8102E] text-[#C8102E]" />
                ))}
              </div>

              <p className="text-gray-700 text-[15px] leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-11 h-11 rounded-full bg-[#C8102E] text-white flex items-center justify-center text-sm font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A0A0A] text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
        >
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '99%', label: 'Would Recommend' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-[#C8102E] mb-1">
                {stat.number}
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-[0.1em]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
