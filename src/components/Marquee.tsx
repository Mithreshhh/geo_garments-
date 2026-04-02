import { motion } from 'framer-motion';

export default function Marquee() {
  const items = [
    'Factory-Direct Pricing',
    'Hand-Stitched Precision',
    'Zero Middlemen',
    'Premium at Honest Prices',
    'Bulk Orders Welcome',
    'In-House Manufacturing',
    'Quality Guaranteed',
    'Trusted by 10,000+',
  ];

  return (
    <div className="relative w-full bg-[#0A0A0A] text-white py-5 overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center mx-8 text-sm md:text-base font-medium tracking-[0.1em] uppercase text-gray-300 shrink-0"
          >
            <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full mr-4" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
