import { motion } from 'framer-motion';

export default function About() {
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
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            About <span className="text-[#E60023]">Geo Garments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
          >
            Premium clothing, factory-direct pricing, hand-stitched with care
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Brand Story */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://via.placeholder.com/400x500?text=Our+Factory"
                alt="Geo Garments Factory"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="geo-heading text-4xl md:text-5xl">
                Our <span className="text-[#E60023]">Story</span>
              </h2>
              <p className="text-gray-700 font-medium text-lg leading-relaxed">
                Founded in Kompally, Hyderabad, Geo Garments started with a simple mission: to make premium clothing accessible to everyone by eliminating middlemen and selling directly from our factory.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that quality clothing shouldn't come with a premium price tag. Our team of skilled tailors brings decades of combined experience in traditional textile craftsmanship, ensuring every piece meets our exacting standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as a small operation has grown into a trusted name for retailers, institutions, and individual customers who value quality and fair pricing. Today, we serve over 10,000 happy customers across India.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="geo-heading text-4xl md:text-5xl mb-12 text-center">
            Our <span className="text-[#E60023]">Purpose</span>
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="geo-card p-8 border-l-4 border-[#E60023]"
            >
              <h3 className="text-2xl font-bold text-black mb-4">🎯 Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver premium, hand-stitched clothing at factory-direct prices, making authentic quality accessible to everyone while supporting our skilled artisans and fostering local manufacturing.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="geo-card p-8 border-l-4 border-[#E60023]"
            >
              <h3 className="text-2xl font-bold text-black mb-4">✨ Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become India's most trusted factory-direct clothing brand, known for uncompromising quality, transparent pricing, and exceptional customer experience that sets new industry standards.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 bg-gray-50 p-12 rounded-lg"
        >
          <h2 className="geo-heading text-4xl md:text-5xl mb-12 text-center">
            Our <span className="text-[#E60023]">Values</span>
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: '👑', title: 'Quality First', desc: 'Every piece reflects our commitment to excellence' },
              { icon: '💰', title: 'Fair Pricing', desc: 'No hidden costs, just honest factory-direct value' },
              { icon: '🤝', title: 'Transparency', desc: 'Open communication with every customer' },
              { icon: '🌍', title: 'Sustainability', desc: 'Responsible manufacturing for a better future' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-black text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* The Process */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="geo-heading text-4xl md:text-5xl mb-12 text-center">
            How We <span className="text-[#E60023]">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Selection', desc: 'Carefully curate premium fabrics from trusted suppliers' },
              { step: 2, title: 'Cutting', desc: 'Precise cutting using advanced techniques' },
              { step: 3, title: 'Stitching', desc: 'Hand-stitched by our skilled artisan tailors' },
              { step: 4, title: 'Quality Check', desc: 'Rigorous inspection before delivery' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#E60023] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black text-white py-16 px-8 rounded-lg text-center"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '2000+', label: 'Orders Fulfilled' },
              { number: '10K+', label: 'Happy Customers' },
              { number: '50+', label: 'Expert Tailors' },
              { number: '4.9★', label: 'Average Rating' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
              >
                <p className="text-3xl md:text-4xl font-black text-[#E60023] mb-2">
                  {stat.number}
                </p>
                <p className="text-white text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="geo-heading text-3xl md:text-4xl mb-6">
            Join Our <span className="text-[#E60023]">Community</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Experience the Geo Garments difference. Premium quality, fair pricing, direct from factory.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="geo-btn-primary text-lg"
          >
            Shop Now
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
}
