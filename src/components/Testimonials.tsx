import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import CountUp from './CountUp';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  initials: string;
}

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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-8 bg-[#F6F1E8] border border-[#EDE6D8] rounded-sm hover:border-[#B8935B]/40 hover:shadow-[0_20px_50px_rgba(11,10,8,0.08)] transition-all duration-300 md:hover:-translate-y-2 h-full flex flex-col">
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#B8935B] text-[#B8935B]" />
        ))}
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed mb-8 font-light italic flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        <div className="w-11 h-11 rounded-full bg-[#0B0A08] text-[#B8935B] flex items-center justify-center text-sm font-bold tracking-wide ring-1 ring-[#B8935B]/30 shrink-0">
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
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [paused, next]);

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

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div
          className="md:hidden relative"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0 px-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={() => { prev(); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
              className="w-9 h-9 rounded-full border border-[#B8935B]/40 flex items-center justify-center text-[#B8935B] active:scale-90 transition-transform"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-[#B8935B]' : 'w-2 bg-[#B8935B]/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
              className="w-9 h-9 rounded-full border border-[#B8935B]/40 flex items-center justify-center text-[#B8935B] active:scale-90 transition-transform"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-[#B8935B] mb-1">
              <CountUp end={10000} suffix="+" />
            </p>
            <p className="text-gray-400 text-xs uppercase tracking-[0.1em]">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-[#B8935B] mb-1">
              <CountUp end={4.9} decimals={1} suffix="/5" />
            </p>
            <p className="text-gray-400 text-xs uppercase tracking-[0.1em]">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-[#B8935B] mb-1">
              <CountUp end={99} suffix="%" />
            </p>
            <p className="text-gray-400 text-xs uppercase tracking-[0.1em]">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
