'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TopProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Minimal Clear Case',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Matte Black Pro',
      price: '$34.99',
      image: 'https://images.pexels.com/photos/4705641/pexels-photo-4705641.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Leather Classic',
      price: '$49.99',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Gradient Wave',
      price: '$39.99',
      image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Minimalist White',
      price: '$27.99',
      image: 'https://images.pexels.com/photos/147044/pexels-photo-147044.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Carbon Fiber',
      price: '$44.99',
      image: 'https://images.pexels.com/photos/335334/pexels-photo-335334.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.5,
    },
    {
      id: 7,
      name: 'Rose Gold Slim',
      price: '$32.99',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
    },
    {
      id: 8,
      name: 'Navy Blue Classic',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/163184/earth-globe-world-planet-163184.jpeg?auto=compress&cs=tinysrgb&w=600',
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale"
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