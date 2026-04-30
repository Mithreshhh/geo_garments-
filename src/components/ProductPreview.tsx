import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

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

  return (
    <section className="py-20 md:py-28 bg-[#F6F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="geo-label mb-4">Curated Selection</p>
          <h2 className="geo-heading text-4xl md:text-5xl mb-5">
            Featured <span className="text-[#B8935B]">Collection</span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">
            Hand-picked pieces from our latest range — designed for comfort, built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {itemsToShow.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => navigate('/products')}
            >
              <div className="relative overflow-hidden rounded-sm bg-white border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B0A08] text-white px-3 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-[0.15em]">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-[#0B0A08] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#B8935B] px-6 py-2.5 uppercase tracking-[0.15em]">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-semibold text-[#B8935B] uppercase tracking-[0.15em] mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-base font-semibold text-[#0B0A08] mb-3 group-hover:text-[#B8935B] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-[#0B0A08]">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/916300302421?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name} (ID: ${product.id})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 flex items-center justify-center border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 active:scale-[0.95] rounded-sm"
                        title={`Enquire about ${product.name} on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#B8935B] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-3 geo-btn-primary text-sm uppercase tracking-[0.1em] active:scale-[0.97]"
          >
            View Full Collection
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
