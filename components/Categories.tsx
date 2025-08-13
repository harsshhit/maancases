'use client';

import { motion } from 'framer-motion';
import { Smartphone, Tablet, Palette, Shield } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'iPhone Cases',
      description: 'Premium cases for all iPhone models',
      icon: Smartphone,
      color: 'from-gray-800 to-black',
      count: '150+ Products',
    },
    {
      id: 2,
      name: 'Samsung Cases',
      description: 'Stylish protection for Galaxy series',
      icon: Tablet,
      color: 'from-gray-700 to-gray-800',
      count: '120+ Products',
    },
    {
      id: 3,
      name: 'Custom Designs',
      description: 'Personalized cases with your style',
      icon: Palette,
      color: 'from-gray-600 to-gray-700',
      count: '200+ Designs',
    },
    {
      id: 4,
      name: 'Protection Plus',
      description: 'Maximum protection for active lifestyles',
      icon: Shield,
      color: 'from-gray-500 to-gray-600',
      count: '80+ Products',
    },
  ];

  return (
    <section id="categories" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Find the perfect case for your device and style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group-hover:scale-105 border border-gray-100">
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${category.color} mb-8`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed font-light">
                    {category.description}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    {category.count}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;