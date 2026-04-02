import { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Shirts' | 'Pants';
  image: string;
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Shirts' | 'Pants'>('All');

  const products: Product[] = [
    { id: 1, name: 'Premium Cotton Shirt', price: 599, category: 'Shirts', image: 'https://via.placeholder.com/300x400?text=Cotton+Shirt' },
    { id: 2, name: 'Classic Blue Formal', price: 649, category: 'Shirts', image: 'https://via.placeholder.com/300x400?text=Blue+Shirt' },
    { id: 3, name: 'Casual White Tee', price: 449, category: 'Shirts', image: 'https://via.placeholder.com/300x400?text=White+Tee' },
    { id: 4, name: 'Maroon Casual Shirt', price: 499, category: 'Shirts', image: 'https://via.placeholder.com/300x400?text=Maroon' },
    { id: 5, name: 'Office Collection Shirt', price: 699, category: 'Shirts', image: 'https://via.placeholder.com/300x400?text=Office+Shirt' },
    { id: 6, name: 'Premium Linen Shirt', price: 749, category: 'Shirts', image: 'https://via.placeholder.com/300x400?text=Linen+Shirt' },
    { id: 7, name: 'Formal Black Trousers', price: 799, category: 'Pants', image: 'https://via.placeholder.com/300x400?text=Black+Pants' },
    { id: 8, name: 'Casual Chinos Beige', price: 749, category: 'Pants', image: 'https://via.placeholder.com/300x400?text=Beige+Chinos' },
    { id: 9, name: 'Navy Blue Chinos', price: 799, category: 'Pants', image: 'https://via.placeholder.com/300x400?text=Navy+Chinos' },
    { id: 10, name: 'Classic Denim Pants', price: 899, category: 'Pants', image: 'https://via.placeholder.com/300x400?text=Denim+Pants' },
    { id: 11, name: 'Grey Formal Trousers', price: 799, category: 'Pants', image: 'https://via.placeholder.com/300x400?text=Grey+Pants' },
    { id: 12, name: 'Khaki Work Pants', price: 749, category: 'Pants', image: 'https://via.placeholder.com/300x400?text=Khaki+Pants' },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="geo-heading text-5xl md:text-6xl mb-4">
            Our <span className="text-[#E60023]">Products</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Premium clothing handpicked with care and quality
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {(['All', 'Shirts', 'Pants'] as const).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? 'geo-btn-primary'
                  : 'geo-btn-secondary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-4 h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="geo-btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Quick View
                  </motion.button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-[#E60023] font-bold uppercase tracking-widest">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-black group-hover:text-[#E60023] transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-black">
                  ₹{product.price.toLocaleString()}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full geo-btn-secondary mt-4 text-sm"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}
