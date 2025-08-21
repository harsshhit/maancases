'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-400/20 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gudgets Guardians
            <span className="block text-blue-200">
              Mobile Phone Cases
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your trusted partner for premium mobile phone cases. 
            <br />Discover our comprehensive collection for all major smartphone brands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <button className="group inline-flex items-center space-x-4 bg-white text-black px-12 py-5 rounded-full text-lg font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;