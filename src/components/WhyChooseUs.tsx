import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import CountUp from './CountUp';

export default function WhyChooseUs() {
  const navigate = useNavigate();

  const reasons = [
    {
      title: 'Factory-Direct Supply',
      desc: 'We manufacture and sell directly — eliminating every unnecessary cost between our factory floor and your wardrobe.',
    },
    {
      title: 'Artisan Craftsmanship',
      desc: 'Skilled tailors with decades of experience hand-stitch every garment for a precise, lasting fit.',
    },
    {
      title: 'Uncompromising Quality',
      desc: 'Multi-point quality inspections at every stage ensure that only flawless pieces leave our facility.',
    },
    {
      title: 'Custom Bulk Solutions',
      desc: 'From 50 to 50,000 pieces — we offer flexible bulk orders with full branding and customization.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F6F1E8] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0B0A08 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Premium Tailoring Process"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-[#0B0A08] text-white p-6 rounded-sm shadow-2xl max-w-[220px] border border-[#B8935B]/30">
              <p className="font-display text-3xl font-bold leading-none text-[#B8935B]"><CountUp end={10000} suffix="+" /></p>
              <p className="text-sm mt-2 text-white/70 font-light">
                Satisfied customers across India
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="geo-label mb-3">Built on Trust</p>
              <h2 className="geo-heading text-4xl md:text-5xl mb-5">
                Why Customers
                <br />
                <span className="text-[#B8935B]">Stay with Us</span>
              </h2>
              <p className="text-gray-500 text-base font-light leading-relaxed">
                We are not just another clothing label. We are a committed manufacturer
                who believes in transparent pricing, verified quality, and long-term partnerships.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 bg-white rounded-sm border border-gray-100 hover:shadow-md hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#0B0A08] text-[#B8935B] flex items-center justify-center ring-1 ring-[#B8935B]/30">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0A08] mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/about')}
              className="geo-btn-primary text-sm uppercase tracking-[0.1em] mt-2 active:scale-[0.97]"
            >
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
