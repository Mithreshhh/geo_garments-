import { Scissors, Factory, BadgeCheck, Shirt } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Scissors,
      title: 'Master Tailors',
      description: 'Every garment is crafted by artisans with 15+ years of expertise in precision tailoring.',
    },
    {
      icon: Factory,
      title: 'In-House Production',
      description: 'End-to-end quality control — from fabric selection to final stitch, nothing is outsourced.',
    },
    {
      icon: BadgeCheck,
      title: 'Honest Pricing',
      description: 'No showroom markups, no distributor margins. You pay the true cost of quality.',
    },
    {
      icon: Shirt,
      title: 'Premium Fabrics',
      description: 'Carefully sourced cotton, linen, and blended fabrics chosen for comfort and longevity.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-white via-white to-[#F6F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="geo-label mb-4">The Geo Difference</p>
          <h2 className="geo-heading text-4xl md:text-5xl mb-5">
            Why Discerning Buyers
            <br />
            <span className="text-[#B8935B]">Choose Geo Garments</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            We pair time-honoured craftsmanship with modern production discipline
            to deliver clothing that stands apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/60 border border-[#EDE6D8] rounded-sm hover:bg-white hover:border-[#B8935B]/40 hover:shadow-[0_20px_50px_rgba(11,10,8,0.08)] transition-all duration-300 cursor-pointer hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#B8935B]/15 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#B8935B] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#B8935B] group-hover:text-[#0B0A08] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#0B0A08] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="w-8 h-[2px] bg-[#B8935B] mt-6 group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
