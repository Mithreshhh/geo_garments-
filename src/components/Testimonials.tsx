import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Shop Owner',
      company: 'Premium Wear Store',
      rating: 5,
      quote:
        'The quality is exceptional and the pricing is unbeatable. My customers love the fit and durability. Highly recommended!',
      image: 'https://via.placeholder.com/100x100?text=R',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Bulk Buyer',
      company: 'Corporate Uniforms Ltd',
      rating: 5,
      quote:
        'Working with Geo Garments has been smooth and professional. They delivered exactly 2000 uniforms on time with perfect finish.',
      image: 'https://via.placeholder.com/100x100?text=P',
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Fashion Enthusiast',
      company: 'Individual Customer',
      rating: 5,
      quote:
        'Finally found premium clothing at factory prices. The fit is perfect and the craftsmanship is evident. 10/10 experience!',
      image: 'https://via.placeholder.com/100x100?text=A',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="geo-heading text-4xl md:text-5xl mb-4">
            What Our <span className="text-[#E60023]">Customers</span> Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real testimonials from real customers who trust Geo Garments
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -12, transitionDuration: 0.3 }}
              className="geo-card p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-lg"
            >
              {/* Rating */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex gap-1 mb-4"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="text-[#E60023] text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-gray-700 italic mb-6 leading-relaxed"
              >
                "{testimonial.quote}"
              </motion.p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <motion.img
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover bg-[#E60023]"
                />
                <div>
                  <h4 className="font-bold text-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-16 text-center"
        >
          {[
            { number: '10K+', label: 'Happy Customers' },
            { number: '4.9★', label: 'Average Rating' },
            { number: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-black text-[#E60023] mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
