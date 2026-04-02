import { motion } from 'framer-motion';
import { Scissors, Factory, BadgeCheck, Shirt } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Scissors,
      title: 'Master Tailors',
      description: 'Every garment is crafted by artisans with 15+ years of expertise in precision tailoring.',
    },
    {
      icon: Factory,
      title: 'In-House Production',
      description: 'End-to-end quality control — from fabric selection to final stitch, nothing is outsourced.',
    },
    {
      icon: BadgeCheck,
      title: 'Honest Pricing',
      description: 'No showroom markups, no distributor margins. You pay the true cost of quality.',
    },
    {
      icon: Shirt,
      title: 'Premium Fabrics',
      description: 'Carefully sourced cotton, linen, and blended fabrics chosen for comfort and longevity.',
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
      transition: { duration: 0.6, ease: 'easeOut' },
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
          <p className="geo-label mb-4">The Geo Difference</p>
          <h2 className="geo-heading text-4xl md:text-5xl mb-5">
            Why Discerning Buyers
            <br />
            <span className="text-[#C8102E]">Choose Geo Garments</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            We pair time-honoured craftsmanship with modern production discipline
            to deliver clothing that stands apart.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-8 bg-[#FAF8F5] border border-gray-100 rounded-sm hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-400 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#C8102E] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#C8102E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="w-8 h-[2px] bg-[#C8102E] mt-6 group-hover:w-12 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
