import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data/products';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-gray-900">Featured Categories</h2>
        <p className="text-gray-500 mt-2">Explore our most popular collections crafted with love</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {CATEGORIES.filter(c => c.name !== 'All').map((cat, index) => (
          <motion.div
            key={cat.name}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectCategory(cat.name)}
            className="bg-gradient-to-br from-pink-50 via-purple-50/40 to-pink-100/50 p-8 rounded-3xl text-center cursor-pointer shadow-sm hover:shadow-xl border border-pink-100 transition group"
          >
            <span className="text-5xl mb-4 block group-hover:scale-110 transition transform duration-300">
              {cat.icon}
            </span>
            <h3 className="font-bold text-xl text-gray-800 group-hover:text-pink-600 transition">
              {cat.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">Explore collection →</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}