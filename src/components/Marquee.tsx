export default function Marquee() {
  const items = [
    'Factory-Direct Pricing',
    'Hand-Stitched Precision',
    'Zero Middlemen',
    'Premium at Honest Prices',
    'Bulk Orders Welcome',
    'In-House Manufacturing',
    'Quality Guaranteed',
    'Trusted by 10,000+',
  ];

  return (
    <div className="relative w-full bg-[#0B0A08] text-white py-5 overflow-hidden border-y border-[#B8935B]/15">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0B0A08] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0B0A08] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center mx-8 text-sm md:text-base font-medium tracking-[0.1em] uppercase text-gray-300 shrink-0"
          >
            <span className="w-1.5 h-1.5 bg-[#B8935B] rounded-full mr-4" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
