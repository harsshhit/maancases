'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
      name: 'iPhone 15 Pro Max Clear Case',
      brand: 'Apple',
      price: '₹3,499',
      image: 'https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?w=600&h=600&fit=crop',
      rating: 4.9,
      model: 'iPhone 15 Pro Max'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Leather Case',
      brand: 'Apple',
      price: '₹4,899',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.8,
      model: 'iPhone 15 Pro'
    },
    {
      id: 3,
      name: 'iPhone 15 Silicone Case',
      brand: 'Apple',
      price: '₹3,299',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&sat=30',
      rating: 4.7,
      model: 'iPhone 15'
    },
    {
      id: 4,
      name: 'iPhone 14 Pro Max Carbon Fiber',
      brand: 'Apple',
      price: '₹5,299',
      image: 'https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?w=600&h=600&fit=crop&sat=20',
      rating: 4.9,
      model: 'iPhone 14 Pro Max'
    },
    {
      id: 5,
      name: 'iPhone 13 Mini Matte Black',
      brand: 'Apple',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=70',
      rating: 4.6,
      model: 'iPhone 13 Mini'
    },

    {
      id: 6,
      name: 'Galaxy S24 Ultra Clear Case',
      brand: 'Samsung',
      price: '₹3,299',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop',
      rating: 4.8,
      model: 'Galaxy S24 Ultra'
    },
    {
      id: 7,
      name: 'Galaxy S24+ Leather Case',
      brand: 'Samsung',
      price: '₹4,199',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.7,
      model: 'Galaxy S24+'
    },
    {
      id: 8,
      name: 'Galaxy Z Fold 5 Protective Case',
      brand: 'Samsung',
      price: '₹6,999',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=90',
      rating: 4.9,
      model: 'Galaxy Z Fold 5'
    },
    {
      id: 9,
      name: 'Galaxy Z Flip 5 Slim Case',
      brand: 'Samsung',
      price: '₹4,899',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=50',
      rating: 4.8,
      model: 'Galaxy Z Flip 5'
    },
    {
      id: 10,
      name: 'Galaxy A55 Rugged Case',
      brand: 'Samsung',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop',
      rating: 4.5,
      model: 'Galaxy A55'
    },


    {
      id: 11,
      name: 'Vivo X100 Pro Clear Case',
      brand: 'Vivo',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=30',
      rating: 4.6,
      model: 'Vivo X100 Pro'
    },
    {
      id: 12,
      name: 'Vivo V29 Pro Leather Case',
      brand: 'Vivo',
      price: '₹3,499',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.7,
      model: 'Vivo V29 Pro'
    },
    {
      id: 13,
      name: 'Vivo Y100 Carbon Fiber',
      brand: 'Vivo',
      price: '₹1,999',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&sat=40',
      rating: 4.4,
      model: 'Vivo Y100'
    },

   
    {
      id: 14,
      name: 'Oppo Find X7 Ultra Clear Case',
      brand: 'Oppo',
      price: '₹3,199',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=20',
      rating: 4.8,
      model: 'Oppo Find X7 Ultra'
    },
    {
      id: 15,
      name: 'Oppo Reno 11 Pro Silicone',
      brand: 'Oppo',
      price: '₹2,799',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=60',
      rating: 4.6,
      model: 'Oppo Reno 11 Pro'
    },
    {
      id: 16,
      name: 'Oppo A98 Rugged Case',
      brand: 'Oppo',
      price: '₹1,899',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
      rating: 4.3,
      model: 'Oppo A98'
    },

   
    {
      id: 17,
      name: 'Xiaomi 14 Ultra Premium Case',
      brand: 'Mi',
      price: '₹3,899',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=10',
      rating: 4.8,
      model: 'Xiaomi 14 Ultra'
    },
    {
      id: 18,
      name: 'Redmi Note 13 Pro+ Clear',
      brand: 'Mi',
      price: '₹2,299',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=80',
      rating: 4.5,
      model: 'Redmi Note 13 Pro+'
    },
    {
      id: 19,
      name: 'POCO X6 Pro Matte Black',
      brand: 'Mi',
      price: '₹1,999',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
      rating: 4.4,
      model: 'POCO X6 Pro'
    },

  
    {
      id: 20,
      name: 'OnePlus 12 Carbon Fiber',
      brand: 'OnePlus',
      price: '₹3,599',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=40',
      rating: 4.9,
      model: 'OnePlus 12'
    },
    {
      id: 21,
      name: 'OnePlus 12R Clear Case',
      brand: 'OnePlus',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.7,
      model: 'OnePlus 12R'
    },
    {
      id: 22,
      name: 'OnePlus Nord CE 4 Leather',
      brand: 'OnePlus',
      price: '₹2,199',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&sat=70',
      rating: 4.5,
      model: 'OnePlus Nord CE 4'
    },

  
    {
      id: 23,
      name: 'Realme GT Neo 5 SE Clear',
      brand: 'Realme',
      price: '₹2,199',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=60',
      rating: 4.6,
      model: 'Realme GT Neo 5 SE'
    },
    {
      id: 24,
      name: 'Realme 12 Pro+ Silicone',
      brand: 'Realme',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=90',
      rating: 4.5,
      model: 'Realme 12 Pro+'
    },


    {
      id: 25,
      name: 'Nothing Phone 2a Clear',
      brand: 'Nothing',
      price: '₹2,899',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=50',
      rating: 4.8,
      model: 'Nothing Phone 2a'
    },
    {
      id: 26,
      name: 'Nothing Phone 1 Carbon',
      brand: 'Nothing',
      price: '₹3,199',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.7,
      model: 'Nothing Phone 1'
    },


    {
      id: 27,
      name: 'Pixel 8 Pro Leather Case',
      brand: 'Google',
      price: '₹4,299',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=15',
      rating: 4.9,
      model: 'Pixel 8 Pro'
    },
    {
      id: 28,
      name: 'Pixel 8 Clear Case',
      brand: 'Google',
      price: '₹3,299',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=40',
      rating: 4.8,
      model: 'Pixel 8'
    },
    {
      id: 29,
      name: 'Pixel 7a Rugged Case',
      brand: 'Google',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
      rating: 4.6,
      model: 'Pixel 7a'
    },


    {
      id: 30,
      name: 'Huawei P60 Pro Premium',
      brand: 'Huawei',
      price: '₹4,899',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=25',
      rating: 4.8,
      model: 'Huawei P60 Pro'
    },
    {
      id: 31,
      name: 'Huawei Nova 11 SE Clear',
      brand: 'Huawei',
      price: '₹2,199',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop&sat=60',
      rating: 4.5,
      model: 'Huawei Nova 11 SE'
    },

   
    {
      id: 32,
      name: 'Motorola Edge 40 Pro',
      brand: 'Motorola',
      price: '₹3,199',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&sat=35',
      rating: 4.6,
      model: 'Motorola Edge 40 Pro'
    },
    {
      id: 33,
      name: 'Moto G84 Clear Case',
      brand: 'Motorola',
      price: '₹1,899',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop',
      rating: 4.4,
      model: 'Moto G84'
    }
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
            All Products
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Explore our complete collection of premium phone cases for all major brands
          </p>

          {/* Filter Section */}
          <div className="flex justify-center items-center gap-4 mb-16">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-lg font-medium text-gray-700">Filter by Brand:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-w-[200px] justify-between">
                  {selectedBrand}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-96 overflow-y-auto">
                {brands.map((brand) => (
                  <DropdownMenuItem
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className="cursor-pointer"
                  >
                    {brand}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Results Count */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              Showing {filteredProducts.length} products
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
              No products found for {selectedBrand}. Please try another brand.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
