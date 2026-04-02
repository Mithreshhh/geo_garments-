import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface ProductPreviewProps {
  products?: Product[];
}

export default function ProductPreview({ products }: ProductPreviewProps) {
  const navigate = useNavigate();

  const defaultProducts: Product[] = [
    {
      id: 1,
      name: 'Premium Egyptian Cotton Shirt',
      price: 599,
      category: 'Shirts',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    },
    {
      id: 2,
      name: 'Classic Oxford Blue Formal',
      price: 649,
      category: 'Shirts',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
    },
    {
      id: 3,
      name: 'Tailored Slim-Fit Trousers',
      price: 799,
      category: 'Trousers',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
    },
    {
      id: 4,
      name: 'Premium Stretch Chinos',
      price: 749,
      category: 'Trousers',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
    },
    {
      id: 5,
      name: 'Executive Linen Shirt',
      price: 699,
      category: 'Shirts',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=600&q=80',
    },
    {
      id: 6,
      name: 'Indigo Selvedge Denim',
      price: 899,
      category: 'Trousers',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    },
  ];

  const itemsToShow = products || defaultProducts.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="geo-label mb-4">Curated Selection</p>
          <h2 className="geo-heading text-4xl md:text-5xl mb-5">
            Featured <span className="text-[#C8102E]">Collection</span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">
            Hand-picked pieces from our latest range — designed for comfort, built to last.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {itemsToShow.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => navigate('/products')}
            >
              <div className="relative overflow-hidden rounded-sm bg-white border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-400">
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A0A0A] text-white px-3 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-[0.15em]">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#C8102E] px-6 py-2.5 uppercase tracking-[0.1em]"
                    >
                      View Details
                    </motion.span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-semibold text-[#C8102E] uppercase tracking-[0.15em] mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-base font-semibold text-[#0A0A0A] mb-3 group-hover:text-[#C8102E] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-[#0A0A0A]">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C8102E] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-3 geo-btn-primary text-sm uppercase tracking-[0.1em]"
          >
            View Full Collection
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
