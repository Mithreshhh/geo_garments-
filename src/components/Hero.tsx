import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FAF8F5] overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#C8102E] rounded-full blur-[160px] opacity-[0.04]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C8102E] rounded-full blur-[160px] opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-200/30 rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-sm"
        >
          <span className="w-2 h-2 bg-[#C8102E] rounded-full animate-pulse" />
          <p className="text-[#C8102E] font-semibold text-xs tracking-[0.15em] uppercase">
            Factory-Direct — No Middlemen, No Markups
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#0A0A0A] mb-6 leading-[1.05]"
        >
          Expertly Crafted
          <br />
          <span className="text-[#C8102E]">Shirts & Trousers</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Precision-tailored by master artisans. Premium fabrics, honest pricing,
          and a fit that speaks for itself.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm font-medium text-gray-700"
        >
          {['Master Tailored', 'Premium Fabrics', 'Honest Pricing'].map((item) => (
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
            className="geo-btn-primary text-sm uppercase tracking-[0.1em]"
          >
            Explore Collection
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/bulk-orders')}
            className="geo-btn-secondary text-sm uppercase tracking-[0.1em]"
          >
            Bulk Enquiry
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-12 text-center"
        >
          {[
            { value: '10,000+', label: 'Customers Served' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '50+', label: 'Expert Tailors' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1 tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
