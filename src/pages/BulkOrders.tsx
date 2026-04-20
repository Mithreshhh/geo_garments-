import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Building2, GraduationCap, Store } from 'lucide-react';

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
    console.log('Form submitted:', formData);
    setFormData({ name: '', businessName: '', quantity: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 md:py-36 bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C8102E] rounded-full blur-[200px] opacity-[0.06]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E] mb-6">
            Wholesale & Institutional
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Bulk Orders, <span className="text-[#C8102E]">Simplified</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Volume pricing that rewards your business. Full customization, dedicated support,
            and guaranteed delivery timelines.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <section className="mb-28">
          <div className="text-center mb-16">
            <p className="geo-label mb-4">Who We Serve</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              Built for <span className="text-[#C8102E]">Your Business</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Store, title: 'Retailers & Boutiques', desc: 'Wholesale pricing that protects your margins while delivering premium quality your customers will love.' },
              { icon: GraduationCap, title: 'Schools & Institutions', desc: 'Durable, well-fitted uniforms manufactured to your specifications with consistent sizing.' },
              { icon: Building2, title: 'Corporate Buyers', desc: 'Professional corporate wear and employee uniforms with custom branding and flexible delivery.' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-10 bg-[#FAF8F5] rounded-sm border border-gray-100 text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#C8102E]/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-[#C8102E]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-28">
          <div className="text-center mb-16">
            <p className="geo-label mb-4">Why Order in Bulk</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              Advantages of <span className="text-[#C8102E]">Partnering with Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Volume-Based Pricing', desc: 'Deeper discounts as your order size increases — maximise value at every scale.' },
              { title: 'Full Customization', desc: 'Custom designs, logo embroidery, label printing, and bespoke sizing available.' },
              { title: 'Rigorous Quality Control', desc: 'Dedicated quality checks for every batch ensure consistency across thousands of units.' },
              { title: 'On-Time Delivery', desc: 'Committed production schedules and reliable logistics for predictable planning.' },
              { title: 'Flexible Payment Terms', desc: 'Instalment options and milestone-based payment plans for large orders.' },
              { title: 'Dedicated Account Manager', desc: 'A single point of contact who understands your needs and keeps your orders on track.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-5 p-6 bg-white rounded-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8102E] text-white flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A0A0A] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-28">
          <div className="text-center mb-16">
            <p className="geo-label mb-4">How It Works</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              A Simple, <span className="text-[#C8102E]">Streamlined Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Submit Enquiry', desc: 'Share your requirements — quantity, customization, and timeline.' },
              { step: 2, title: 'Get Your Quote', desc: 'Receive a detailed, transparent quote within 24 hours.' },
              { step: 3, title: 'Production Begins', desc: 'We manufacture your order with full quality oversight.' },
              { step: 4, title: 'Reliable Delivery', desc: 'Safe, insured delivery to your doorstep on the agreed date.' },
            ].map((item, idx) => (
              <div key={item.step} className="text-center relative">
                <div className="w-14 h-14 bg-[#C8102E] text-white rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#0A0A0A] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-[1px] bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-2xl mx-auto">
          <div className="bg-[#FAF8F5] border border-gray-100 p-10 md:p-14 rounded-sm">
            <div className="text-center mb-10">
              <p className="geo-label mb-3">Get Started</p>
              <h2 className="geo-heading text-3xl md:text-4xl mb-3">
                Request Your <span className="text-[#C8102E]">Quote</span>
              </h2>
              <p className="text-gray-500 text-sm font-light">
                Fill in the details below and our team will respond within 24 hours.
              </p>
            </div>
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
                  type="text"
                  name="businessName"
                  placeholder="Business / Institution Name *"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm rounded-sm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity Required *"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm rounded-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone / WhatsApp *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm rounded-sm"
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your needs — customization, delivery location, timeline, etc."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-5 py-3.5 border border-gray-200 bg-white focus:border-[#C8102E] outline-none transition-colors text-sm resize-none rounded-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full geo-btn-primary text-sm uppercase tracking-[0.1em]"
              >
                Submit Enquiry
              </motion.button>
              <p className="text-[11px] text-gray-400 text-center font-light">
                No obligation. We will respond with a detailed quote within 24 hours.
              </p>
            </form>
          </div>
        </section>

        <section className="mt-20 text-center">
          <p className="text-gray-500 text-base mb-6 font-light">Prefer a direct conversation?</p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/917XXXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block geo-btn-primary text-sm uppercase tracking-[0.1em]"
          >
            Chat on WhatsApp
          </motion.a>
        </section>
      </div>
    </div>
  );
}
