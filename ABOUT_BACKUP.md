# About.tsx — Original Backup (Before Mobile Optimization)

Replace the contents of `src/pages/About.tsx` with the code below to restore the original version.

```tsx
import { useNavigate } from 'react-router-dom';
import CountUp from '../components/CountUp';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 md:py-36 text-white relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0A08 0%, #1A1815 60%, #0B0A08 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#B8935B] rounded-full blur-[200px] opacity-[0.12]" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#B8935B] rounded-full blur-[180px] opacity-[0.08]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8935B]/40 to-transparent z-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8935B] mb-6">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-[#B8935B]">Geo Garments</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Where master craftsmanship meets factory-direct integrity — delivering clothing
            that earns trust, one stitch at a time.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Geo Garments — our manufacturing facility"
                className="w-full rounded-sm shadow-2xl aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <p className="geo-label">Our Beginning</p>
              <h2 className="geo-heading text-4xl md:text-5xl">
                The Geo <span className="text-[#B8935B]">Story</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Founded in Kompally, Hyderabad (Western Plaza, Satyam Enclave), Geo Garments was born from a clear conviction: 
                premium clothing should not carry a premium price. By manufacturing in-house and 
                selling directly, we remove every unnecessary cost between our factory floor and 
                your wardrobe.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Our team of master tailors combines decades of traditional textile expertise 
                with modern quality discipline, ensuring every garment meets exacting standards 
                before it reaches you.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                What began as a small workshop has grown into a brand trusted by retailers, 
                institutions, and discerning individuals across India — all built on the foundation 
                of quality, transparency, and honest pricing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-28">
          <div className="text-center mb-16">
            <p className="geo-label mb-4">Our Purpose</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              Mission <span className="text-[#B8935B]">&</span> Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-[#F6F1E8] border-l-2 border-[#B8935B] rounded-sm">
              <p className="geo-label mb-4">Mission</p>
              <p className="text-gray-600 leading-relaxed">
                To deliver expertly tailored clothing at factory-direct prices, making 
                authentic quality accessible to every customer while supporting our skilled 
                artisans and strengthening local manufacturing.
              </p>
            </div>
            <div className="p-10 bg-[#F6F1E8] border-l-2 border-[#B8935B] rounded-sm">
              <p className="geo-label mb-4">Vision</p>
              <p className="text-gray-600 leading-relaxed">
                To become India&apos;s most trusted factory-direct clothing brand — recognised for 
                uncompromising quality, transparent pricing, and a customer experience that sets 
                new industry standards.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-28">
          <div className="text-center mb-16">
            <p className="geo-label mb-4">What We Stand For</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              Our <span className="text-[#B8935B]">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality First', desc: 'Every piece reflects our commitment to excellence and precision craftsmanship.' },
              { title: 'Honest Pricing', desc: 'No inflated margins, no hidden costs — just the true cost of quality.' },
              { title: 'Full Transparency', desc: 'We maintain open and clear communication with every customer at every stage.' },
              { title: 'Sustainable Practice', desc: 'Responsible manufacturing processes that respect both people and the planet.' },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#F6F1E8] rounded-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-[#0B0A08] text-[#B8935B] rounded-full flex items-center justify-center font-display font-bold text-lg mx-auto mb-5 ring-1 ring-[#B8935B]/30">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-[#0B0A08] text-lg mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-28">
          <div className="text-center mb-16">
            <p className="geo-label mb-4">Our Process</p>
            <h2 className="geo-heading text-4xl md:text-5xl">
              How We <span className="text-[#B8935B]">Work</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Fabric Selection', desc: 'Premium fabrics sourced from trusted mills for durability and comfort.' },
              { step: 2, title: 'Precision Cutting', desc: 'Advanced pattern cutting for consistent sizing and minimal waste.' },
              { step: 3, title: 'Expert Stitching', desc: 'Hand-stitched by master tailors with meticulous attention to detail.' },
              { step: 4, title: 'Quality Assurance', desc: 'Multi-point inspection ensures only perfect garments leave our facility.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[#0B0A08] text-[#B8935B] rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto mb-5 ring-1 ring-[#B8935B]/30">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#0B0A08] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0B0A08] text-white py-20 px-8 rounded-sm mb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-[#B8935B] mb-2">
                <CountUp end={2000} suffix="+" />
              </p>
              <p className="text-gray-400 text-sm font-light">Orders Fulfilled</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-[#B8935B] mb-2">
                <CountUp end={10000} suffix="+" />
              </p>
              <p className="text-gray-400 text-sm font-light">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-[#B8935B] mb-2">
                <CountUp end={50} suffix="+" />
              </p>
              <p className="text-gray-400 text-sm font-light">Expert Tailors</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-[#B8935B] mb-2">
                <CountUp end={4.9} decimals={1} suffix="/5" />
              </p>
              <p className="text-gray-400 text-sm font-light">Average Rating</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p className="geo-label mb-4">Get Started</p>
          <h2 className="geo-heading text-3xl md:text-4xl mb-5">
            Experience the Geo <span className="text-[#B8935B]">Difference</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto font-light">
            Premium quality, honest pricing, and a commitment to craftsmanship that speaks for itself.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="geo-btn-primary text-sm uppercase tracking-[0.1em] active:scale-[0.97]"
          >
            Explore Our Collection
          </button>
        </section>
      </div>
    </div>
  );
}
```
