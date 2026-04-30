import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  category: 'Shirts' | 'Trousers';
  image: string;
  tag?: string;
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Shirts' | 'Trousers'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    { id: 1, name: 'Premium Egyptian Cotton Shirt', price: 599, originalPrice: 1199, category: 'Shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80', tag: 'Bestseller' },
    { id: 2, name: 'Classic Oxford Blue Formal', price: 649, originalPrice: 1299, category: 'Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80' },
    { id: 3, name: 'Casual White Mandarin Collar', price: 449, originalPrice: 899, category: 'Shirts', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=600&q=80' },
    { id: 4, name: 'Maroon Slim-Fit Casual', price: 499, originalPrice: 999, category: 'Shirts', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&q=80' },
    { id: 5, name: 'Executive Linen Shirt', price: 699, originalPrice: 1399, category: 'Shirts', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80', tag: 'Premium' },
    { id: 6, name: 'Herringbone Weave Shirt', price: 749, originalPrice: 1499, category: 'Shirts', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80' },
    { id: 7, name: 'Formal Black Slim Trousers', price: 799, originalPrice: 1599, category: 'Trousers', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80', tag: 'Bestseller' },
    { id: 8, name: 'Premium Beige Chinos', price: 749, originalPrice: 1499, category: 'Trousers', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80' },
    { id: 9, name: 'Navy Blue Stretch Chinos', price: 799, originalPrice: 1599, category: 'Trousers', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80' },
    { id: 10, name: 'Indigo Selvedge Denim', price: 899, originalPrice: 1799, category: 'Trousers', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80', tag: 'Premium' },
    { id: 11, name: 'Grey Wool-Blend Trousers', price: 799, originalPrice: 1599, category: 'Trousers', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80' },
    { id: 12, name: 'Khaki Cotton Twill Pants', price: 749, originalPrice: 1499, category: 'Trousers', image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80' },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 md:py-36 text-white relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0A08 0%, #1A1815 60%, #0B0A08 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#B8935B] rounded-full blur-[200px] opacity-[0.12]" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#B8935B] rounded-full blur-[180px] opacity-[0.08]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8935B]/40 to-transparent z-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8935B] mb-6">Our Collection</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Premium <span className="text-[#B8935B]">Garments</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto">
            Every piece is expertly crafted from premium fabrics, tailored for the perfect fit,
            and priced without middleman markups.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 relative" style={{ background: 'linear-gradient(180deg, #F6F1E8 0%, #EDE6D8 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-3 mb-16">
            {(['All', 'Shirts', 'Trousers'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 active:scale-[0.97] ${
                  selectedCategory === category
                    ? 'bg-[#0B0A08] text-[#B8935B] border border-[#B8935B]'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-[#B8935B] hover:text-[#B8935B]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-white rounded-sm border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div
                    className="relative h-48 md:h-80 bg-gray-100 overflow-hidden"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {product.tag && (
                      <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#0B0A08] text-white px-2 py-0.5 md:px-3 md:py-1 rounded-sm text-[8px] md:text-[10px] font-semibold uppercase tracking-[0.15em]">
                        {product.tag}
                      </div>
                    )}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#0B0A08] text-[#B8935B] px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-sm text-[8px] md:text-[10px] font-bold tracking-wider">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />
                  </div>
                  <div className="p-3 md:p-6">
                    <p className="text-[8px] md:text-[10px] font-semibold text-[#B8935B] uppercase tracking-[0.15em] mb-1 md:mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xs md:text-base font-semibold text-[#0B0A08] mb-2 md:mb-3 group-hover:text-[#B8935B] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5 md:gap-3">
                      <p className="text-sm md:text-xl font-bold text-[#0B0A08]">
                        ₹{product.price.toLocaleString()}
                      </p>
                      <p className="text-[10px] md:text-sm text-gray-400 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/916300302421?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name} (₹${product.price}) - ID: ${product.id}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 md:gap-2 w-full mt-3 md:mt-5 py-2 md:py-3 bg-[#25D366] text-white text-[9px] md:text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#1da851] transition-all duration-300 active:scale-[0.97] rounded-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg font-light">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full max-h-[70vh] object-contain bg-gray-50"
            />
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold text-[#B8935B] uppercase tracking-[0.15em] mb-1">{selectedProduct.category}</p>
                  <h3 className="text-lg md:text-xl font-semibold text-[#0B0A08]">{selectedProduct.name}</h3>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xl md:text-2xl font-bold text-[#0B0A08]">₹{selectedProduct.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-400 line-through">₹{selectedProduct.originalPrice.toLocaleString()}</p>
                </div>
              </div>
              <a
                href={`https://wa.me/916300302421?text=${encodeURIComponent(`Hi, I'm interested in: ${selectedProduct.name} (₹${selectedProduct.price}) - ID: ${selectedProduct.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-4 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#1da851] transition-all duration-300 active:scale-[0.97] rounded-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
