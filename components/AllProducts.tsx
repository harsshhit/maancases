'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';


const AllProducts = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');

  const brands = [
    'All',
    'Apple',
    'Samsung',
    'Vivo',
    'Oppo',
    'Mi',
    'OnePlus',
    'Realme',
    'Nothing',
    'Google',
    'Huawei',
    'Xiaomi',
    'Motorola'
  ];

  const products = [
   
    {
      id: 1,
      name: 'iPhone 17 Pro Max Clear Case',
      brand: 'Apple',
      price: '₹3,499',
      image: '/images/apple1.jpg',
      rating: 4.9,
      model: 'iPhone 17 Pro Max'
    },
    {
      id: 2,
      name: 'iPhone 14,15 Pro Max Clear Case',
      brand: 'Apple',
      price: '₹2,499',
      image: '/images/apple2.jpg',
      rating: 4.9,
      model: 'iPhone 14,15 Pro Max Clear Case'
    },
    {
      id: 3,
      name: 'iPhone 14,15 Pro Max Clear Case',
      brand: 'Apple',
      price: '₹3,099',
      image: '/images/apple3.jpg',
      rating: 4.9,
      model: 'iPhone 14,15 Pro Max Clear Case'
    },
    {
      id: 4,
      name: 'iPhone 14,15 Pro Max Clear Case',
      brand: 'Apple',
      price: '₹5,299',
      image: '/images/apple4.jpg',
      rating: 4.9,
      model: 'iPhone 14,15 Pro Max Clear Case'
    },
    {
      id: 5,
      name: 'iPhone 14,15 Pro Max Clear Case',
      brand: 'Apple',
      price: '₹2,899',
      image: '/images/apple5.jpg',
      rating: 4.9,
      model: 'iPhone 14,15 Pro Max Clear Case'
    },

    {
    id: 6,
      name: 'iPhone 14,15,16 Pro ',
      brand: 'Apple',
      price: '₹3,099',
      image: '/images/apple6.jpg',
      rating: 4.7,
      model: 'iPhone 14,15,16 Pro '
    },

    {
      id: 7,
        name: 'iPhone 14,15,16 Pro ',
        brand: 'Apple',
        price: '₹3,499',
        image: '/images/apple7.jpg',
        rating: 4.9,
        model: 'iPhone 14,15,16 Pro '
      },

      {
        id: 8,
          name: 'iPhone 14,15,16 Pro ',
          brand: 'Apple',
          price: '₹3,099',
          image: '/images/apple8.jpg',
          rating: 4.8,
          model: 'iPhone 14,15,16 Pro '
        },

        {
          id: 9,
            name: 'iPhone 14,15,16 Pro ',
            brand: 'Apple',
            price: '₹3,299',
            image: '/images/apple9.jpg',
            rating: 4.7,
            model: 'iPhone 14,15,16 Pro '
          },

          {
            id: 10,
              name: 'iPhone 14,15,16 Pro ',
              brand: 'Apple',
              price: '₹3,499',
              image: '/images/apple10.jpg',
              rating: 4.9,
              model: 'iPhone 14,15,16 Pro '
            },
  

    {
      id: 11,
      name: 'samsung flip 4,5',
      brand: 'Samsung',
      price: '₹3,299',
      image: '/images/samsung1.jpg',
      rating: 4.7,
      model: 'samsung flip 4,5'
    },
    {
      id: 12,
      name: 'samsung flip 4,5',
      brand: 'Samsung',
      price: '₹3,099',
      image: '/images/samsung2.jpg',
      rating: 4.8,
      model: 'samsung flip 4,5'
    },
    {
      id: 13,
      name: 'samsung flip 4,5',
      brand: 'Samsung',
      price: '₹2,599',
      image: '/images/samsung3.jpg',
      rating: 4.9,
      model: 'samsung flip 4,5'
    },
    {
      id: 14,
      name: 'samsung flip 4,5',
      brand: 'Samsung',
      price: '₹3,299',
      image: '/images/samsung4.jpg',
      rating: 4.8,
      model: 'samsung flip 4,5'
    },
    {
      id: 15,
      name: 'samsung flip 4,5',
      brand: 'Samsung',
      price: '₹3,499',
      image: '/images/samsung5.jpg',
      rating: 4.7,
      model: 'samsung flip 4,5'
    },


    {
      id: 16,
      name: 'Galaxy S24 Ultra Clear Case',
      brand: 'Samsung',
      price: '₹3,299',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop',
      rating: 4.8,
      model: 'Galaxy S24 Ultra'
    },
    {
      id: 17,
      name: 'Galaxy S24+ Leather Case',
      brand: 'Samsung',
      price: '₹4,199',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.7,
      model: 'Galaxy S24+'
    },
    {
      id: 18,
      name: 'Galaxy Z Fold 5 Protective Case',
      brand: 'Samsung',
      price: '₹6,999',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=90',
      rating: 4.9,
      model: 'Galaxy Z Fold 5'
    },
    {
      id: 19,
      name: 'Galaxy Z Flip 5 Slim Case',
      brand: 'Samsung',
      price: '₹4,899',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=50',
      rating: 4.8,
      model: 'Galaxy Z Flip 5'
    },
    {
      id: 20,
      name: 'Galaxy A55 Rugged Case',
      brand: 'Samsung',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop',
      rating: 4.5,
      model: 'Galaxy A55'
    },


    {
      id: 21,
      name: 'Vivo X100 Pro Clear Case',
      brand: 'Vivo',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=30',
      rating: 4.6,
      model: 'Vivo X100 Pro'
    },
    {
      id: 22,
      name: 'Vivo V29 Pro Leather Case',
      brand: 'Vivo',
      price: '₹3,499',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.7,
      model: 'Vivo V29 Pro'
    },
    {
      id: 23,
      name: 'Vivo Y100 Carbon Fiber',
      brand: 'Vivo',
      price: '₹1,999',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&sat=40',
      rating: 4.4,
      model: 'Vivo Y100'
    },

   
    {
      id: 24,
      name: 'Oppo Find X7 Ultra Clear Case',
      brand: 'Oppo',
      price: '₹3,199',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=20',
      rating: 4.8,
      model: 'Oppo Find X7 Ultra'
    },
    {
      id: 25,
      name: 'Oppo Reno 11 Pro Silicone',
      brand: 'Oppo',
      price: '₹2,799',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=60',
      rating: 4.6,
      model: 'Oppo Reno 11 Pro'
    },
    {
      id: 26,
      name: 'Oppo A98 Rugged Case',
      brand: 'Oppo',
      price: '₹1,899',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
      rating: 4.3,
      model: 'Oppo A98'
    },

   
    {
      id: 27,
      name: 'Xiaomi 14 Ultra Premium Case',
      brand: 'Mi',
      price: '₹3,899',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=10',
      rating: 4.8,
      model: 'Xiaomi 14 Ultra'
    },
    {
      id: 28,
      name: 'Redmi Note 13 Pro+ Clear',
      brand: 'Mi',
      price: '₹2,299',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=80',
      rating: 4.5,
      model: 'Redmi Note 13 Pro+'
    },

  
  ];

  const filteredProducts = selectedBrand === 'All' 
    ? products 
    : products.filter(product => product.brand === selectedBrand);

  return (
    <section id="all-products" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 tracking-tight">
            All Mobile Phone Cases
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Explore our complete collection of premium mobile phone cases for all major brands
          </p>

          {/* Filter Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-lg font-medium text-gray-700">Filter by Brand:</span>
            </div>
            
            {/* Brand Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {brands.map((brand) => (
                <motion.div
                  key={brand}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedBrand === brand ? "default" : "outline"}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedBrand === brand
                        ? 'bg-black text-white hover:bg-gray-800 shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {brand}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              Showing {filteredProducts.length} mobile phone cases
              {selectedBrand !== 'All' && ` for ${selectedBrand}`}
            </p>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 border border-gray-100">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {product.brand}
                    </span>
                    <span className="text-xs text-gray-500">
                      {product.model}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3 tracking-tight line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2 font-light">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-xl font-bold text-black">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-500">
              No mobile phone cases found for {selectedBrand}. Please try another brand.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;

