'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TopProducts = () => {
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max Guardian',
      price: '₹3,499',
      image: 'https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?w=600&h=600&fit=crop',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra Shield',
      price: '₹3,299',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'OnePlus 12 Carbon Fiber',
      price: '₹3,599',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=40',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Pixel 8 Pro Leather',
      price: '₹4,299',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=15',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'iPhone 15 Clear Guardian',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Galaxy Z Fold 5 Protector',
      price: '₹6,999',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=90',
      rating: 4.5,
    },
    {
      id: 7,
      name: 'Nothing Phone 2a Clear',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=50',
      rating: 4.7,
    },
    {
      id: 8,
      name: 'Vivo X100 Pro Guardian',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=30',
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
            Featured Mobile Phone Cases
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our most popular mobile phone cases, trusted by customers worldwide
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