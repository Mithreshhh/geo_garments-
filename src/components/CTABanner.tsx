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
    <section className="py-24 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#C8102E] rounded-full blur-[200px] opacity-[0.08]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C8102E] rounded-full blur-[200px] opacity-[0.08]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E] mb-6"
          >
            Elevate Your Wardrobe
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Premium Clothing,
            <br />
            Priced with Integrity
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Every thread is chosen with care. Every stitch is placed with precision.
            Experience clothing that respects both your style and your budget.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-14 text-sm font-medium text-gray-300"
          >
            {['Factory-Direct Pricing', 'Hand-Stitched Quality', 'Reliable Delivery'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C8102E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/products')}
              className="px-10 py-4 bg-[#C8102E] text-white font-semibold text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-red-800 active:scale-95"
            >
              Explore Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/bulk-orders')}
              className="px-10 py-4 border border-gray-600 text-white font-semibold text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white hover:text-[#0A0A0A] active:scale-95"
            >
              Request Bulk Quote
            </motion.button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-10 text-gray-500 text-xs tracking-wide"
          >
            Trusted by 10,000+ customers and retailers across India
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
