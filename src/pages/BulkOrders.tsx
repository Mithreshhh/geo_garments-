import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BulkOrders() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    quantity: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', businessName: '', quantity: '', phone: '', message: '' });
  };

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
            Bulk Orders <span className="text-[#E60023]">Made Easy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
          >
            Get the best prices on bulk clothing orders with customization options
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Who It's For */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="geo-heading text-4xl md:text-5xl mb-12 text-center">
            Who We <span className="text-[#E60023]">Serve</span>
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: '🏪', title: 'Retailers & Shops', desc: 'Get wholesale pricing for your retail store' },
              { icon: '🏫', title: 'Institutions', desc: 'Uniforms for schools, colleges, and organizations' },
              { icon: '🏢', title: 'Corporate Buyers', desc: 'Bulk corporate uniforms and employee wear' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="geo-card p-8 text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 bg-gray-50 p-12 rounded-lg"
        >
          <h2 className="geo-heading text-4xl md:text-5xl mb-12 text-center">
            Benefits of <span className="text-[#E60023]">Bulk Orders</span>
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: 'Better Pricing', desc: 'Volume discounts that increase with order size' },
              { title: 'Customization', desc: 'Custom designs, logos, and branding options' },
              { title: 'Quality Control', desc: 'Dedicated quality checks for large batches' },
              { title: 'Reliable Supply', desc: 'Guaranteed delivery timelines for bulk orders' },
              { title: 'Flexible Payment', desc: 'Installment options for large orders' },
              { title: 'Direct Support', desc: 'Dedicated account manager for your business' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-4 p-6 bg-white rounded-lg border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#E60023] text-white flex items-center justify-center shrink-0 font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Process Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="geo-heading text-4xl md:text-5xl mb-12 text-center">
            Our <span className="text-[#E60023]">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
            {['Inquiry', 'Discussion', 'Production', 'Delivery'].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-16 h-16 bg-[#E60023] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-black text-lg mt-4 md:mt-0">{step}</h3>
                  <p className="text-sm text-gray-600 mt-2 text-center md:text-left">
                    {idx === 0 && 'Submit your bulk order requirements'}
                    {idx === 1 && 'Discuss pricing and customization'}
                    {idx === 2 && 'We manufacture your order'}
                    {idx === 3 && 'Fast and safe delivery'}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-[#E60023] -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bulk Order Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-12 rounded-lg max-w-2xl mx-auto"
        >
          <h2 className="geo-heading text-3xl md:text-4xl mb-8 text-center">
            Get Started with <span className="text-[#E60023]">Your Order</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors"
              />
              <input
                type="text"
                name="businessName"
                placeholder="Business Name *"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity Required *"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors"
              />
            </div>
            <textarea
              name="message"
              placeholder="Additional Details (customization, delivery location, etc.)"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full geo-btn-primary text-lg"
            >
              Submit Inquiry
            </motion.button>
            <p className="text-xs text-gray-500 text-center">
              We'll get back to you within 24 hours with a custom quote
            </p>
          </form>
        </motion.section>

        {/* Direct Contact CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-6">Prefer to talk directly?</h3>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/917XXXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block geo-btn-primary text-lg"
          >
            💬 WhatsApp Us Now
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
