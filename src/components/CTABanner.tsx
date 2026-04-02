import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CTABanner() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="py-20 md:py-32 bg-[#E60023] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-black rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Upgrade Your Wardrobe Today
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-2xl mx-auto"
          >
            Premium quality clothing at factory-direct prices. Hand-stitched with precision. No compromises.
          </motion.p>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12 text-white font-semibold text-sm md:text-base"
          >
            <div className="flex items-center space-x-2">
              <span className="text-3xl">✓</span>
              <span>Factory Direct Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl">✓</span>
              <span>Hand-Stitched Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl">✓</span>
              <span>Fast Delivery</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/products')}
              className="px-8 py-4 bg-white text-[#E60023] font-bold rounded-none transition-all duration-300 hover:bg-gray-100 active:scale-95 text-lg"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/bulk-orders')}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-none transition-all duration-300 hover:bg-white hover:text-[#E60023] active:scale-95 text-lg"
            >
              Bulk Orders
            </motion.button>
          </motion.div>

          {/* Bottom Text */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-white opacity-80 text-sm"
          >
            Join 10,000+ happy customers across India
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
