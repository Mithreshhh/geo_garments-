import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Kompally, Hyderabad',
      desc: 'Telangana, India',
      href: undefined,
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 XXXX XXXX XX',
      desc: 'Monday – Saturday, 9 AM – 7 PM',
      href: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@geogarments.in',
      desc: 'We respond within 24 hours',
      href: 'mailto:hello@geogarments.in',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat with our team',
      desc: 'Instant replies during business hours',
      href: 'https://wa.me/917XXXXXXXXXXXX',
    },
  ];

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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            We Would Love to <span className="text-[#C8102E]">Hear from You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Whether you have a question about our products, need a custom quote, or simply want
            to say hello — our team is ready to assist.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <p className="geo-label mb-3">Reach Out</p>
              <h2 className="geo-heading text-4xl md:text-5xl mb-4">
                Contact <span className="text-[#C8102E]">Information</span>
              </h2>
              <p className="text-gray-500 text-base font-light leading-relaxed">
                We are here to help with orders, enquiries, custom requirements, or any questions
                you may have about our products and services.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map((contact, idx) => {
                const Icon = contact.icon;
                const Tag = contact.href ? 'a' : 'div';
                return (
                  <motion.div key={idx} variants={itemVariants}>
                    <Tag
                      {...(contact.href ? {
                        href: contact.href,
                        target: contact.href.includes('http') ? '_blank' : undefined,
                        rel: contact.href.includes('http') ? 'noopener noreferrer' : undefined,
                      } : {})}
                      className="flex items-start gap-5 p-6 bg-[#FAF8F5] rounded-sm border border-gray-100 hover:border-[#C8102E]/30 hover:shadow-md transition-all duration-300 cursor-pointer block"
                    >
                      <div className="w-10 h-10 bg-[#C8102E]/10 rounded-sm flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#C8102E]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0A0A0A] text-sm mb-1">{contact.title}</h3>
                        <p className="font-medium text-[#C8102E] text-sm mb-0.5">{contact.value}</p>
                        <p className="text-xs text-gray-400 font-light">{contact.desc}</p>
                      </div>
                    </Tag>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-[#0A0A0A] text-sm mb-4 uppercase tracking-[0.1em]">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { label: 'IG', title: 'Instagram', href: 'https://instagram.com' },
                  { label: 'WA', title: 'WhatsApp', href: 'https://wa.me/917XXXXXXXXXXXX' },
                  { label: 'FB', title: 'Facebook', href: 'https://facebook.com' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-gray-200 text-gray-500 rounded-sm flex items-center justify-center text-xs font-semibold hover:border-[#C8102E] hover:text-[#C8102E] transition-all duration-300"
                    title={social.title}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#FAF8F5] border border-gray-100 p-8 md:p-12 rounded-sm"
          >
            <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-400 text-sm mb-8 font-light">
              We typically respond within a few hours during business days.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm rounded-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm rounded-sm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm rounded-sm"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm rounded-sm"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm resize-none rounded-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full geo-btn-primary text-sm uppercase tracking-[0.1em]"
              >
                Send Message
              </motion.button>
              <p className="text-[11px] text-gray-400 text-center font-light">
                Your information is safe with us. We never share your data.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <p className="geo-label mb-3">Find Us</p>
            <h2 className="geo-heading text-3xl md:text-4xl">
              Visit Our <span className="text-[#C8102E]">Location</span>
            </h2>
          </div>
          <div className="w-full h-96 bg-gray-100 rounded-sm overflow-hidden border border-gray-100">
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

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#0A0A0A] text-white p-10 md:p-14 rounded-sm text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E] mb-4">
            Instant Support
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Need immediate assistance?
          </h3>
          <p className="text-gray-400 font-light mb-8">
            Our team is available on WhatsApp for quick responses during business hours.
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/917XXXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-[#C8102E] text-white text-sm font-semibold uppercase tracking-[0.1em] hover:bg-red-800 transition-colors duration-300"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
