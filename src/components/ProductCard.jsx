import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl border border-pink-50 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Discount Badge */}
      <span className="absolute top-6 left-6 z-10 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
        {product.discount}
      </span>

      {/* Image Container */}
      <div 
        className="relative h-56 rounded-2xl overflow-hidden bg-gray-50 cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
            className="p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition"
            aria-label="View Details"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-4 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">{product.category}</span>
          <h3 className="font-bold text-gray-900 text-lg mt-1 group-hover:text-pink-600 transition">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 mt-1 text-amber-400 text-sm">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold text-gray-700">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-xl font-black text-gray-900">₹{product.price}</span>
            <span className="text-sm text-gray-400 line-through ml-2">₹{product.oldPrice}</span>
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="p-3 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-600 hover:text-white transition shadow-sm"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}