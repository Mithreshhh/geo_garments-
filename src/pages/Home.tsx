import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Features from '../components/Features';
import ProductPreview from '../components/ProductPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <div className="w-full">
      <div className="pt-20" /> {/* Navbar offset */}
      <Hero />
      <Marquee />
      <Features />
      <ProductPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
