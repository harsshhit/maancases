'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Contact Hero */}
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
                Have a question about our products or need help with your order? We're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-4xl font-bold text-black mb-8 tracking-tight">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed font-light">
                    Whether you're looking for the perfect case for your device or have questions about our products, 
                    we're here to help. Reach out to us and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gray-100 p-4 rounded-full">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black tracking-tight">Email Us</h3>
                      <p className="text-gray-500 font-light">hello@maancases.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="bg-gray-100 p-4 rounded-full">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black tracking-tight">Call Us</h3>
                      <p className="text-gray-500 font-light">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="bg-gray-100 p-4 rounded-full">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black tracking-tight">Visit Us</h3>
                      <p className="text-gray-500 font-light">123 Design Street<br />New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="bg-gray-100 p-4 rounded-full">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black tracking-tight">Business Hours</h3>
                      <p className="text-gray-500 font-light">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-50 p-12 rounded-3xl border border-gray-100"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-3 tracking-tight">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 font-light"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-3 tracking-tight">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 font-light"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-black mb-3 tracking-tight">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none font-light"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white py-5 px-8 rounded-xl font-medium text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}