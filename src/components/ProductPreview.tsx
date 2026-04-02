import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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

  // Placeholder products
  const defaultProducts: Product[] = [
    {
      id: 1,
      name: 'Premium Cotton Shirt',
      price: 599,
      category: 'Shirts',
      image: 'https://via.placeholder.com/300x400?text=Premium+Cotton+Shirt',
    },
    {
      id: 2,
      name: 'Classic Blue Shirt',
      price: 649,
      category: 'Shirts',
      image: 'https://via.placeholder.com/300x400?text=Blue+Shirt',
    },
    {
      id: 3,
      name: 'Formal Trousers',
      price: 799,
      category: 'Pants',
      image: 'https://via.placeholder.com/300x400?text=Formal+Trousers',
    },
    {
      id: 4,
      name: 'Casual Chinos',
      price: 749,
      category: 'Pants',
      image: 'https://via.placeholder.com/300x400?text=Casual+Chinos',
    },
    {
      id: 5,
      name: 'Office Collection Shirt',
      price: 699,
      category: 'Shirts',
      image: 'https://via.placeholder.com/300x400?text=Office+Shirt',
    },
    {
      id: 6,
      name: 'Denim Pants',
      price: 899,
      category: 'Pants',
      image: 'https://via.placeholder.com/300x400?text=Denim+Pants',
    },
  ];

  const itemsToShow = products || defaultProducts.slice(0, 6);

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
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
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
            Featured <span className="text-[#E60023]">Collection</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Handpicked premium clothing for every occasion
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {itemsToShow.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              {/* Product Card */}
              <div className="relative overflow-hidden rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Image Container */}
                <motion.div
                  className="relative h-96 bg-gray-100 overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Category Badge */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute top-4 left-4 bg-[#E60023] text-white px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {product.category}
                  </motion.div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/products')}
                      className="geo-btn-primary"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Product Info */}
                <div className="p-6">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-[#E60023] text-sm font-semibold mb-2"
                  >
                    {product.category}
                  </motion.p>

                  <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-[#E60023] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-2xl font-bold text-black"
                    >
                      ₹{product.price.toLocaleString()}
                    </motion.p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-[#E60023]" />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#E60023] origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 geo-btn-primary text-lg"
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
