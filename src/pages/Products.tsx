import { useState, useRef } from 'react';
import { MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  category: 'Shirts' | 'Trousers';
  image: string;
  images: string[];
  tag?: string;
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Shirts' | 'Trousers'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [cardImageIndex, setCardImageIndex] = useState<Record<number, number>>({});
  const touchStartX = useRef<number | null>(null);
  const cardTouchStartX = useRef<number | null>(null);
  const activeCardId = useRef<number | null>(null);

  const products: Product[] = [
    { 
      id: 1, 
      name: 'Premium Egyptian Cotton Shirt', 
      price: 599, 
      originalPrice: 1199, 
      category: 'Shirts', 
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
        'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&q=80',
        'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=800&q=80',
        'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80',
      ],
      tag: 'Bestseller' 
    },
    { 
      id: 2, 
      name: 'Classic Oxford Blue Formal', 
      price: 649, 
      originalPrice: 1299, 
      category: 'Shirts', 
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        'https://images.unsplash.com/photo-1598961942613-ba897716405b?w=800&q=80',
        'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=800&q=80',
        'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80',
      ],
    },
    { 
      id: 3, 
      name: 'Casual White Mandarin Collar', 
      price: 449, 
      originalPrice: 899, 
      category: 'Shirts', 
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=800&q=80',
        'https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800&q=80',
        'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
      ],
    },
    { 
      id: 4, 
      name: 'Maroon Slim-Fit Casual', 
      price: 499, 
      originalPrice: 999, 
      category: 'Shirts', 
      image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&q=80',
        'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
        'https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=800&q=80',
      ],
    },
    { 
      id: 5, 
      name: 'Executive Linen Shirt', 
      price: 699, 
      originalPrice: 1399, 
      category: 'Shirts', 
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
        'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=800&q=80',
        'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80',
      ],
      tag: 'Premium' 
    },
    { 
      id: 6, 
      name: 'Herringbone Weave Shirt', 
      price: 749, 
      originalPrice: 1499, 
      category: 'Shirts', 
      image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80',
        'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&q=80',
        'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80',
      ],
    },
    { 
      id: 7, 
      name: 'Formal Black Slim Trousers', 
      price: 799, 
      originalPrice: 1599, 
      category: 'Trousers', 
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
      ],
      tag: 'Bestseller' 
    },
    { 
      id: 8, 
      name: 'Premium Beige Chinos', 
      price: 749, 
      originalPrice: 1499, 
      category: 'Trousers', 
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
        'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80',
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      ],
    },
    { 
      id: 9, 
      name: 'Navy Blue Stretch Chinos', 
      price: 799, 
      originalPrice: 1599, 
      category: 'Trousers', 
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
        'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      ],
    },
    { 
      id: 10, 
      name: 'Indigo Selvedge Denim', 
      price: 899, 
      originalPrice: 1799, 
      category: 'Trousers', 
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
        'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80',
        'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80',
      ],
      tag: 'Premium' 
    },
    { 
      id: 11, 
      name: 'Grey Wool-Blend Trousers', 
      price: 799, 
      originalPrice: 1599, 
      category: 'Trousers', 
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
        'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      ],
    },
    { 
      id: 12, 
      name: 'Khaki Cotton Twill Pants', 
      price: 749, 
      originalPrice: 1499, 
      category: 'Trousers', 
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80',
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
        'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
      ],
    },
  ];

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else prevImage();
    }
    touchStartX.current = null;
  };

  const handleCardTouchStart = (e: React.TouchEvent, productId: number) => {
    cardTouchStartX.current = e.touches[0].clientX;
    activeCardId.current = productId;
  };

  const handleCardTouchEnd = (e: React.TouchEvent, product: Product) => {
    if (cardTouchStartX.current === null || activeCardId.current !== product.id) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = cardTouchStartX.current - touchEndX;
    const currentIndex = cardImageIndex[product.id] || 0;
    
    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        setCardImageIndex(prev => ({
          ...prev,
          [product.id]: (currentIndex + 1) % product.images.length
        }));
      } else {
        setCardImageIndex(prev => ({
          ...prev,
          [product.id]: (currentIndex - 1 + product.images.length) % product.images.length
        }));
      }
    }
    cardTouchStartX.current = null;
    activeCardId.current = null;
  };

  const setCardImage = (productId: number, index: number) => {
    setCardImageIndex(prev => ({
      ...prev,
      [productId]: index
    }));
  };

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
            {filteredProducts.map((product) => {
              const currentImageIndex = cardImageIndex[product.id] || 0;
              return (
              <div
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-white rounded-sm border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div
                    className="relative h-48 md:h-80 bg-gray-100 overflow-hidden"
                    onTouchStart={(e) => handleCardTouchStart(e, product.id)}
                    onTouchEnd={(e) => handleCardTouchEnd(e, product)}
                  >
                    <div 
                      className="flex h-full transition-transform duration-300 ease-out"
                      style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                      {product.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${product.name} - ${idx + 1}`}
                          className="w-full h-full object-cover shrink-0"
                          loading="lazy"
                          onClick={() => handleProductSelect(product)}
                        />
                      ))}
                    </div>
                    {product.tag && (
                      <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#0B0A08] text-white px-2 py-0.5 md:px-3 md:py-1 rounded-sm text-[8px] md:text-[10px] font-semibold uppercase tracking-[0.15em] z-10">
                        {product.tag}
                      </div>
                    )}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#0B0A08] text-[#B8935B] px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-sm text-[8px] md:text-[10px] font-bold tracking-wider z-10">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </div>
                    
                    {product.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {product.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCardImage(product.id, idx); }}
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                              idx === currentImageIndex 
                                ? 'bg-[#B8935B] w-3 md:w-4' 
                                : 'bg-white/80 hover:bg-white'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300 pointer-events-none" />
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
            );
            })}
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
            className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div 
              className="relative bg-gray-50 overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
              >
                {selectedProduct.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProduct.name} - Image ${idx + 1}`}
                    className="w-full h-[40vh] md:h-[50vh] object-contain shrink-0"
                  />
                ))}
              </div>
              
              {selectedProduct.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#0B0A08]" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                  >
                    <ChevronRight className="w-5 h-5 text-[#0B0A08]" />
                  </button>
                  
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {selectedProduct.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === activeImageIndex ? 'bg-[#B8935B] w-4' : 'bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            {selectedProduct.images.length > 1 && (
              <div className="flex gap-2 p-3 bg-gray-100 overflow-x-auto">
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex ? 'border-[#B8935B]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
            
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
