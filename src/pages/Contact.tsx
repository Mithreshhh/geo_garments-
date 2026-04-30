import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const FORM_EMAIL = 'mithreshuttarwarmmvi@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Geo Garments Contact: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Western Plaza, beside Bata, Ruby Block',
      desc: 'Satyam Enclave, Kompally, Hyderabad, Telangana 500014',
      href: undefined,
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 63003 02421',
      desc: 'Monday – Saturday, 9 AM – 7 PM',
      href: 'tel:+916300302421',
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
      href: 'https://wa.me/916300302421',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-16 md:py-24 text-white relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0A08 0%, #1A1815 60%, #0B0A08 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#B8935B] rounded-full blur-[200px] opacity-[0.12]" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#B8935B] rounded-full blur-[180px] opacity-[0.08]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8935B]/40 to-transparent z-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8935B] mb-6">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            We Would Love to <span className="text-[#B8935B]">Hear from You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Whether you have a question about our products, need a custom quote, or simply want
            to say hello — our team is ready to assist.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="geo-label mb-3">Reach Out</p>
              <h2 className="geo-heading text-4xl md:text-5xl mb-4">
                Contact <span className="text-[#B8935B]">Information</span>
              </h2>
              <p className="text-gray-500 text-base font-light leading-relaxed">
                We are here to help with orders, enquiries, custom requirements, or any questions
                you may have about our products and services.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, idx) => {
                const Icon = contact.icon;
                const Tag = contact.href ? 'a' : 'div';
                return (
                  <Tag
                    key={idx}
                    {...(contact.href ? {
                      href: contact.href,
                      target: contact.href.includes('http') ? '_blank' : undefined,
                      rel: contact.href.includes('http') ? 'noopener noreferrer' : undefined,
                    } : {})}
                    className="flex items-start gap-5 p-6 bg-[#F6F1E8] rounded-sm border border-gray-100 hover:border-[#B8935B]/40 hover:shadow-md transition-all duration-300 cursor-pointer block"
                  >
                    <div className="w-10 h-10 bg-[#B8935B]/15 rounded-sm flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#B8935B]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B0A08] text-sm mb-1">{contact.title}</h3>
                      <p className="font-medium text-[#B8935B] text-sm mb-0.5">{contact.value}</p>
                      <p className="text-xs text-gray-400 font-light">{contact.desc}</p>
                    </div>
                  </Tag>
                );
              })}
            </div>

            <div>
              <h3 className="font-semibold text-[#0B0A08] text-sm mb-4 uppercase tracking-[0.1em]">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { label: 'IG', title: 'Instagram', href: 'https://www.instagram.com/geo.garments_/' },
                  { label: 'WA', title: 'WhatsApp', href: 'https://wa.me/916300302421' },
                  { label: 'FB', title: 'Facebook', href: 'https://facebook.com' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-gray-200 text-gray-500 rounded-sm flex items-center justify-center text-xs font-semibold hover:border-[#B8935B] hover:text-[#B8935B] transition-all duration-300 active:scale-[0.95]"
                    title={social.title}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F6F1E8] border border-gray-100 p-8 md:p-12 rounded-sm">
            <h3 className="text-xl font-semibold text-[#0B0A08] mb-2">
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
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#B8935B] outline-none transition-colors text-sm rounded-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#B8935B] outline-none transition-colors text-sm rounded-sm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#B8935B] outline-none transition-colors text-sm rounded-sm"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-5 py-3.5 border border-gray-200 bg-white focus:border-[#B8935B] outline-none transition-colors text-sm rounded-sm"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-3.5 border border-gray-200 bg-white focus:border-[#B8935B] outline-none transition-colors text-sm resize-none rounded-sm"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full geo-btn-primary text-sm uppercase tracking-[0.1em] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-[12px] text-green-600 text-center font-medium">
                  Thank you! We will get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-[12px] text-red-500 text-center font-medium">
                  Something went wrong. Please try again or contact us on WhatsApp.
                </p>
              )}
              <p className="text-[11px] text-gray-400 text-center font-light">
                Your information is safe with us. We never share your data.
              </p>
            </form>
          </div>
        </div>

        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="geo-label mb-3">Find Us</p>
            <h2 className="geo-heading text-3xl md:text-4xl">
              Visit Our <span className="text-[#B8935B]">Location</span>
            </h2>
          </div>
          <div className="w-full h-96 bg-gray-100 rounded-sm overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4865596!3d17.5328837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85003913dfe3%3A0x56973e4bf8fd0964!2sGeo%20Garments!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Geo Garments Location"
            />
          </div>
        </section>

        <section className="mt-20 bg-[#0B0A08] text-white p-10 md:p-14 rounded-sm text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8935B] mb-4">
            Instant Support
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Need immediate assistance?
          </h3>
          <p className="text-gray-400 font-light mb-8">
            Our team is available on WhatsApp for quick responses during business hours.
          </p>
          <a
            href="https://wa.me/916300302421"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-[#B8935B] text-[#0B0A08] text-sm font-semibold uppercase tracking-[0.15em] hover:bg-[#D4B88A] transition-colors duration-300 active:scale-[0.97]"
          >
            Chat on WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
