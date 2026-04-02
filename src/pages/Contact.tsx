import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
            Get in <span className="text-[#E60023]">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Reach out anytime.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="geo-heading text-4xl md:text-5xl mb-4">
                Contact <span className="text-[#E60023]">Info</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Reach out to us via phone, email, or WhatsApp. We're here to help!
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  value: 'Kompally, Hyderabad',
                  desc: 'Telangana, India',
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  value: '+91 XXXX XXXX XX',
                  desc: 'Monday - Friday, 9AM - 6PM',
                  href: 'tel:+91XXXXXXXXXX',
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  value: 'hello@geogarments.in',
                  desc: 'We reply within 24 hours',
                  href: 'mailto:hello@geogarments.in',
                },
                {
                  icon: '💬',
                  title: 'WhatsApp',
                  value: 'Chat with us',
                  desc: 'Instant replies during business hours',
                  href: 'https://wa.me/917XXXXXXXXXXXX',
                },
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={contact.href}
                  target={contact.href?.includes('http') ? '_blank' : undefined}
                  rel={contact.href?.includes('http') ? 'noopener noreferrer' : undefined}
                  className="geo-card p-6 hover:border-[#E60023] cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{contact.icon}</div>
                    <div>
                      <h3 className="font-bold text-black mb-1">
                        {contact.title}
                      </h3>
                      <p className="font-semibold text-[#E60023] mb-1">
                        {contact.value}
                      </p>
                      <p className="text-sm text-gray-600">{contact.desc}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-black text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: '📷', label: 'Instagram', href: 'https://instagram.com' },
                  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/917XXXXXXXXXXXX' },
                  { icon: '👍', label: 'Facebook', href: 'https://facebook.com' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#E60023] text-white rounded-full flex items-center justify-center text-xl hover:bg-red-700 transition-colors"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 md:p-12 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-black mb-8">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors rounded"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors rounded"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-3 border-2 border-gray-300 focus:border-[#E60023] outline-none transition-colors rounded resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full geo-btn-primary text-lg"
              >
                Send Message
              </motion.button>
              <p className="text-xs text-gray-500 text-center">
                We'll get back to you as soon as possible
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="geo-heading text-3xl md:text-4xl mb-8 text-center">
            Visit Our <span className="text-[#E60023]">Location</span>
          </h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8434265000003!2d78.47454977346088!3d17.360528400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sKompally%2C%20Hyderabad!2s!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Geo Garments Location"
            />
          </div>
        </motion.section>

        {/* Quick Contact Banner */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#E60023] text-white p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need urgent assistance?</h3>
          <p className="text-lg opacity-90 mb-6">
            Connect with us on WhatsApp for instant replies
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/917XXXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-[#E60023] font-bold rounded-none hover:bg-gray-100 transition-colors"
          >
            💬 WhatsApp Us
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
