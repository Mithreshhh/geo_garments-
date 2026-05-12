import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CountUp from './CountUp';

const isSafari = () => {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  const isSafariBrowser = ua.includes('safari') && !ua.includes('chrome') && !ua.includes('android');
  const isIOS = /iphone|ipad|ipod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  return isSafariBrowser || isIOS;
};

export default function Hero() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Use animated WebP for Safari/iOS - no autoplay issues with images
    if (isSafari()) {
      setUseFallback(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // If video fails to play, use fallback
        setUseFallback(true);
      });
    };

    tryPlay();
    const t1 = setTimeout(tryPlay, 300);

    video.addEventListener('canplay', tryPlay);

    return () => {
      clearTimeout(t1);
      video.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0A08]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {useFallback ? (
          <img
            src="/hero-bg.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-bg-optimized.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 hero-vignette" />
      </div>

      <div className="absolute top-1/3 left-6 md:left-12 hidden lg:block z-10 opacity-40">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#B8935B] [writing-mode:vertical-rl] rotate-180">
            Est. Hyderabad
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[#B8935B] to-transparent" />
        </div>
      </div>

      <div className="absolute top-1/3 right-6 md:right-12 hidden lg:block z-10 opacity-40">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#B8935B] [writing-mode:vertical-rl]">
            Factory — Direct
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[#B8935B] to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="mb-7 inline-flex items-center gap-3 bg-black/30 border border-[#B8935B]/30 px-5 py-2 rounded-full">
          <span className="w-1.5 h-1.5 bg-[#B8935B] rounded-full shimmer-gold" />
          <p className="text-[#D4B88A] font-medium text-[11px] tracking-[0.25em] uppercase">
            Master Tailored in India Since 2014
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-5">
          <span className="geo-divider-gold" />
          <p className="text-[#B8935B] text-[11px] tracking-[0.3em] uppercase font-medium">
            Geo Garments
          </p>
          <span className="geo-divider-gold" />
        </div>

        <h1 className="font-display text-[28px] sm:text-5xl md:text-7xl lg:text-[84px] font-bold text-white mb-5 leading-[1.08] tracking-tight">
          Where Heritage
          <br />
          Meets <span className="italic text-gradient-gold pr-1">Craftsmanship</span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-9 max-w-xl mx-auto font-light leading-relaxed px-2 sm:px-0">
          Hand-stitched shirts and trousers, sculpted by master artisans.
          Premium fabrics. Timeless fit. Priced with integrity — direct from our atelier to you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => navigate('/products')}
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#B8935B] text-[#0B0A08] font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#D4B88A] active:scale-[0.97]"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => navigate('/bulk-orders#quote-form')}
            className="px-10 py-4 border border-white/40 text-white font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-[#0B0A08] active:scale-[0.97]"
          >
            Bulk Enquiry
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto pt-7 border-t border-white/10">
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-[#D4B88A]"><CountUp end={10000} suffix="+" /></p>
            <p className="text-[9px] md:text-[10px] text-gray-400 mt-1 tracking-[0.2em] uppercase">Customers Served</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-[#D4B88A]"><CountUp end={4.9} decimals={1} suffix="/5" /></p>
            <p className="text-[9px] md:text-[10px] text-gray-400 mt-1 tracking-[0.2em] uppercase">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-[#D4B88A]"><CountUp end={50} suffix="+" /></p>
            <p className="text-[9px] md:text-[10px] text-gray-400 mt-1 tracking-[0.2em] uppercase">Expert Tailors</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-bounce-slow">
        <div className="flex flex-col items-center gap-1.5 text-[#B8935B]/60">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
