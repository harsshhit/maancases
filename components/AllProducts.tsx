'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Type definitions
interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  rating: number;
  model: string;
  image?: string;
  images?: string[];
}

const AllProducts = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide6, setCurrentSlide6] = useState(0);
  const [currentSlide11, setCurrentSlide11] = useState(0);

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

  const products: Product[] = [
   
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
      images: ['/images/apple2.jpg', '/images/apple3.jpg', '/images/apple4.jpg', '/images/apple5.jpg'],
      rating: 4.9,
      model: 'iPhone 14,15 Pro Max Clear Case'
    },

    {
    id: 6,
      name: 'iPhone 14,15,16 Pro ',
      brand: 'Apple',
      price: '₹3,099',
      images: ['/images/apple6.jpg', '/images/apple7.jpg', '/images/apple8.jpg', '/images/apple9.jpg', '/images/apple10.jpg'],
      rating: 4.7,
      model: 'iPhone 14,15,16 Pro '
    },

    {
      id: 11,
      name: 'samsung flip 4,5',
      brand: 'Samsung',
      price: '₹3,299',
      images: ['/images/samsung1.jpg', '/images/samsung2.jpg', '/images/samsung3.jpg', '/images/samsung4.jpg', '/images/samsung5.jpg'],
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

  // Calculate pagination
  const productsPerPage = 4;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Reset to first page when brand changes
  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setCurrentPage(0);
  };

  // Auto slideshow for product ID 2
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide2((prev) => {
        const next = (prev + 1) % 4;
        console.log('Auto slideshow changing to slide:', next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide2((prev) => {
      const next = (prev + 1) % 4;
      console.log('Manual next slide:', next);
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide2((prev) => {
      const next = (prev - 1 + 4) % 4;
      console.log('Manual prev slide:', next);
      return next;
    });
  };

  // Auto slideshow for product ID 6
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide6((prev) => {
        const next = (prev + 1) % 5;
        console.log('Auto slideshow changing to slide:', next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide6 = () => {
    setCurrentSlide6((prev) => {
      const next = (prev + 1) % 5;
      console.log('Manual next slide:', next);
      return next;
    });
  };

  const prevSlide6 = () => {
    setCurrentSlide6((prev) => {
      const next = (prev - 1 + 5) % 5;
      console.log('Manual prev slide:', next);
      return next;
    });
  };

  // Auto slideshow for product ID 11
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide11((prev) => {
        const next = (prev + 1) % 5;
        console.log('Auto slideshow changing to slide:', next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide11 = () => {
    setCurrentSlide11((prev) => {
      const next = (prev + 1) % 5;
      console.log('Manual next slide:', next);
      return next;
    });
  };

  const prevSlide11 = () => {
    setCurrentSlide11((prev) => {
      const next = (prev - 1 + 5) % 5;
      console.log('Manual prev slide:', next);
      return next;
    });
  };

  // Check if product ID 2 is in current products
  const hasSlideshowProduct = currentProducts.some(product => product.id === 2);
  const hasSlideshowProduct6 = currentProducts.some(product => product.id === 6);
  const hasSlideshowProduct11 = currentProducts.some(product => product.id === 11);
  console.log('Current products:', currentProducts.map(p => p.id));
  console.log('Has slideshow product 2:', hasSlideshowProduct);
  console.log('Has slideshow product 6:', hasSlideshowProduct6);
  console.log('Has slideshow product 11:', hasSlideshowProduct11);

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
                    onClick={() => handleBrandChange(brand)}
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
            {/* Debug info */}
            <p className="text-sm text-gray-400 mt-2">
              Slide 2: {currentSlide2} | Slide 6: {currentSlide6} | Slide 11: {currentSlide11} | Has slideshow 2: {hasSlideshowProduct ? 'Yes' : 'No'} | Has slideshow 6: {hasSlideshowProduct6 ? 'Yes' : 'No'} | Has slideshow 11: {hasSlideshowProduct11 ? 'Yes' : 'No'}
            </p>
          </div>
        </motion.div>

        {/* Products Grid with Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <Button
                onClick={prevPage}
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={nextPage}
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-300"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Products Grid - Always 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 border border-gray-100">
                  <div className="aspect-square overflow-hidden bg-gray-50 relative">
                    {/* Single Image */}
                    {product.id !== 2 && product.id !== 6 && product.id !== 11 && product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    
                    {/* Slideshow for Product ID 2 */}
                    {product.id === 2 && product.images && (
                      <>
                        <img
                          src={product.images[currentSlide2]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Slideshow Badge */}
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Slideshow ({currentSlide2 + 1}/4)
                        </div>
                        
                        {/* Slideshow Navigation - Always Visible */}
                        <div className="absolute inset-0 flex items-center justify-between p-2">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevSlide();
                            }}
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-white/90 hover:bg-white shadow-lg border-gray-300"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextSlide();
                            }}
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-white/90 hover:bg-white shadow-lg border-gray-300"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {/* Slideshow Indicators - Always Visible */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {[0, 1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide2 === i
                                  ? 'bg-white scale-125 shadow-lg'
                                  : 'bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Slideshow for Product ID 6 */}
                    {product.id === 6 && product.images && (
                      <>
                        <img
                          src={product.images[currentSlide6]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Slideshow Badge */}
                        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Slideshow ({currentSlide6 + 1}/5)
                        </div>
                        
                        {/* Slideshow Navigation - Always Visible */}
                        <div className="absolute inset-0 flex items-center justify-between p-2">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevSlide6();
                            }}
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-white/90 hover:bg-white shadow-lg border-gray-300"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextSlide6();
                            }}
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-white/90 hover:bg-white shadow-lg border-gray-300"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {/* Slideshow Indicators - Always Visible */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide6 === i
                                  ? 'bg-white scale-125 shadow-lg'
                                  : 'bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Slideshow for Product ID 11 */}
                    {product.id === 11 && product.images && (
                      <>
                        <img
                          src={product.images[currentSlide11]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Slideshow Badge */}
                        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Slideshow ({currentSlide11 + 1}/5)
                        </div>
                        
                        {/* Slideshow Navigation - Always Visible */}
                        <div className="absolute inset-0 flex items-center justify-between p-2">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevSlide11();
                            }}
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-white/90 hover:bg-white shadow-lg border-gray-300"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextSlide11();
                            }}
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-white/90 hover:bg-white shadow-lg border-gray-300"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {/* Slideshow Indicators - Always Visible */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide11 === i
                                  ? 'bg-white scale-125 shadow-lg'
                                  : 'bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
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

          {/* Page Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? 'bg-black scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
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

