import { useState, useEffect, useCallback, useRef } from 'react';
import { Star } from 'lucide-react';
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
  {
    id: 4,
    name: 'Vikram Reddy',
    role: 'Hotel Manager',
    company: 'Grand Palace Hotels',
    rating: 5,
    quote:
      'We outfitted our entire staff with Geo uniforms. The durability is exceptional — even after months of daily wear and washing, they look as good as new. Highly recommended for hospitality.',
    initials: 'VR',
  },
  {
    id: 5,
    name: 'Sneha Mehta',
    role: 'Fashion Boutique Owner',
    company: 'Style Studio',
    rating: 5,
    quote:
      'My customers keep coming back for Geo shirts. The stitching quality and fabric feel premium, but the prices let me offer great value. It has become my best-selling brand.',
    initials: 'SM',
  },
];

const AUTOPLAY_DURATION = 3000;

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
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartTime = useRef<number>(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
    setPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const timeDiff = Date.now() - touchStartTime.current;
    
    if (Math.abs(diff) > 50 && timeDiff < 300) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
    setPaused(false);
  };

  useEffect(() => {
    if (paused) return;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + (100 / (AUTOPLAY_DURATION / 50));
      });
    }, 50);
    
    return () => clearInterval(progressInterval);
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

        {/* Desktop: grid - show first 3 in top row, next 2 centered below */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Mobile: carousel with swipe and progress bar */}
        <div
          className="md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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

          <div className="mt-8 px-4">
            <div className="relative h-1 w-full max-w-xs mx-auto bg-[#B8935B]/20 rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-[#B8935B] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setProgress(0); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === active 
                      ? 'bg-[#B8935B] scale-125' 
                      : 'bg-[#B8935B]/30 hover:bg-[#B8935B]/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-3">
              Swipe left or right to navigate
            </p>
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
