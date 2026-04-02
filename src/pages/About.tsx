import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 md:py-36 bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C8102E] rounded-full blur-[200px] opacity-[0.06]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E] mb-6"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            About <span className="text-[#C8102E]">Geo Garments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Where master craftsmanship meets factory-direct integrity — delivering clothing
            that earns trust, one stitch at a time.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Geo Garments — our manufacturing facility"
                className="w-full rounded-sm shadow-2xl aspect-[4/5] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="geo-label">Our Beginning</p>
              <h2 className="geo-heading text-4xl md:text-5xl">
                The Geo <span className="text-[#C8102E]">Story</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Founded in Kompally, Hyderabad, Geo Garments was born from a clear conviction: 
                premium clothing should not carry a premium price. By manufacturing in-house and 
                selling directly, we remove every unnecessary cost between our factory floor and 
                your wardrobe.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Our team of master tailors combines decades of traditional textile expertise 
                with modern quality discipline, ensuring every garment meets exacting standards 
                before it reaches you.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                What began as a small workshop has grown into a brand trusted by retailers, 
                institutions, and discerning individuals across India — all built on the foundation 
                of quality, transparency, and honest pricing.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <p className="geo-label mb-4">Our Purpose</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              Mission <span className="text-[#C8102E]">&</span> Vision
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="p-10 bg-[#FAF8F5] border-l-2 border-[#C8102E] rounded-sm"
            >
              <p className="geo-label mb-4">Mission</p>
              <p className="text-gray-600 leading-relaxed">
                To deliver expertly tailored clothing at factory-direct prices, making 
                authentic quality accessible to every customer while supporting our skilled 
                artisans and strengthening local manufacturing.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="p-10 bg-[#FAF8F5] border-l-2 border-[#C8102E] rounded-sm"
            >
              <p className="geo-label mb-4">Vision</p>
              <p className="text-gray-600 leading-relaxed">
                To become India&apos;s most trusted factory-direct clothing brand — recognised for 
                uncompromising quality, transparent pricing, and a customer experience that sets 
                new industry standards.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <p className="geo-label mb-4">What We Stand For</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              Our <span className="text-[#C8102E]">Values</span>
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: 'Quality First', desc: 'Every piece reflects our commitment to excellence and precision craftsmanship.' },
              { title: 'Honest Pricing', desc: 'No inflated margins, no hidden costs — just the true cost of quality.' },
              { title: 'Full Transparency', desc: 'We maintain open and clear communication with every customer at every stage.' },
              { title: 'Sustainable Practice', desc: 'Responsible manufacturing processes that respect both people and the planet.' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 bg-[#FAF8F5] rounded-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-[#C8102E] text-white rounded-full flex items-center justify-center font-display font-bold text-lg mx-auto mb-5">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-[#0A0A0A] text-lg mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <p className="geo-label mb-4">Our Process</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              How We <span className="text-[#C8102E]">Work</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Fabric Selection', desc: 'Premium fabrics sourced from trusted mills for durability and comfort.' },
              { step: 2, title: 'Precision Cutting', desc: 'Advanced pattern cutting for consistent sizing and minimal waste.' },
              { step: 3, title: 'Expert Stitching', desc: 'Hand-stitched by master tailors with meticulous attention to detail.' },
              { step: 4, title: 'Quality Assurance', desc: 'Multi-point inspection ensures only perfect garments leave our facility.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-[#C8102E] text-white rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#0A0A0A] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] text-white py-20 px-8 rounded-sm mb-28"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '2,000+', label: 'Orders Fulfilled' },
              { number: '10,000+', label: 'Happy Customers' },
              { number: '50+', label: 'Expert Tailors' },
              { number: '4.9/5', label: 'Average Rating' },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <p className="text-3xl md:text-4xl font-display font-bold text-[#C8102E] mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm font-light">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="geo-label mb-4">Get Started</p>
          <h2 className="geo-heading text-3xl md:text-4xl mb-5">
            Experience the Geo <span className="text-[#C8102E]">Difference</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto font-light">
            Premium quality, honest pricing, and a commitment to craftsmanship that speaks for itself.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/products')}
            className="geo-btn-primary text-sm uppercase tracking-[0.1em]"
          >
            Explore Our Collection
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
}
