'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TopProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Minimal Clear Case',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',      rating: 4.8,
    },
    {
      id: 2,
      name: 'Matte Black Pro',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Leather Classic',
      price: '₹4,149',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Gradient Wave',
      price: '₹3,319',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',      rating: 4.6,
    },
    {
      id: 5,
      name: 'Minimalist White',
      price: '₹2,323',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=30',
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Carbon Fiber',
      price: '₹3,734',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
      rating: 4.5,
    },
    {
      id: 7,
      name: 'Rose Gold Slim',
      price: '₹2,738',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&sat=90',
      rating: 4.7,
    },
    {
      id: 8,
      name: 'Navy Blue Classic',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=70',
      rating: 4.6,
    },
  ];

  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 tracking-tight">
            Top Products
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our most popular phone cases, loved by customers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 border border-gray-100">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-black mb-4 tracking-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-black fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-3 font-light">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-black">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;