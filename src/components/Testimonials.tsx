import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  initials: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Retail Store Owner',
      company: 'Premium Wear Store',
      rating: 5,
      quote:
        'The quality is genuinely outstanding — my customers notice the difference immediately. And the factory-direct pricing means better margins for my business. A partnership I truly value.',
      initials: 'RK',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Procurement Head',
      company: 'Corporate Uniforms Ltd',
      rating: 5,
      quote:
        'We ordered 2,000 uniforms with custom branding. Every single piece was delivered on time, perfectly finished. Their professionalism and reliability are second to none.',
      initials: 'PS',
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Repeat Customer',
      company: 'Individual Buyer',
      rating: 5,
      quote:
        'I have tried dozens of brands, and nothing comes close to this quality-to-price ratio. The fit is impeccable, the fabrics feel luxurious, and the service is always personal.',
      initials: 'AP',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F6F1E8] via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="geo-label mb-4">Testimonials</p>
          <h2 className="geo-heading text-4xl md:text-5xl mb-5">
            Trusted by Thousands
            <br />
            <span className="text-[#B8935B]">Across India</span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">
            Hear from retailers, institutions, and individual customers who have made Geo Garments their preferred choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-[#F6F1E8] border border-[#EDE6D8] rounded-sm hover:border-[#B8935B]/40 hover:shadow-[0_20px_50px_rgba(11,10,8,0.08)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8935B] text-[#B8935B]" />
                ))}
              </div>

              <p className="text-gray-700 text-[15px] leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-11 h-11 rounded-full bg-[#0B0A08] text-[#B8935B] flex items-center justify-center text-sm font-bold tracking-wide ring-1 ring-[#B8935B]/30">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B0A08] text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '99%', label: 'Would Recommend' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-[#B8935B] mb-1">
                {stat.number}
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-[0.1em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
