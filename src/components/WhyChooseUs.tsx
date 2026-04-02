import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-96 md:h-full">
              <img
                src="https://via.placeholder.com/400x500?text=Premium+Tailoring"
                alt="Premium Tailoring Process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-[#E60023] text-white p-6 rounded-lg shadow-xl max-w-xs"
            >
              <p className="font-bold text-lg">
                10,000+ Happy Customers
              </p>
              <p className="text-sm mt-2 opacity-90">
                Trusted by retailers and bulk buyers across India
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="geo-heading text-4xl md:text-5xl mb-4">
                Why <span className="text-[#E60023]">Trust</span> Us
              </h2>
              <p className="text-gray-600 text-lg">
                We're not just another clothing brand. We are a factory-direct manufacturer committed to transparency, quality, and fair pricing.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Direct from Factory',
                  desc: 'Cut out the middlemen and get better prices without compromising on quality.',
                },
                {
                  title: 'Master Craftsmanship',
                  desc: 'Every piece is hand-stitched by skilled tailors who take pride in their work.',
                },
                {
                  title: 'Quality Guaranteed',
                  desc: 'Strict quality control at every stage ensures you get premium clothing.',
                },
                {
                  title: 'Custom Bulk Orders',
                  desc: 'Flexible bulk orders with customization options for your brand or institution.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(230,0,35,0.1)' }}
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 * index + 0.2 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-[#E60023] text-white flex items-center justify-center font-bold"
                  >
                    ✓
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-black">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="geo-btn-primary mt-4"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
