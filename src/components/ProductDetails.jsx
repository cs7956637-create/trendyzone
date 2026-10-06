import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Star, ShoppingBag, Send } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config/whatsapp';

export default function ProductDetails({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  if (!product) return null;

  const handleWhatsAppBuy = () => {
    // T-shirt icon and size details added here
    const icon = product.category === 'T-Shirts' ? '👕' : '🧸';
    const sizeText = product.category === 'T-Shirts' ? ` (Size: ${selectedSize})` : '';
    
    const message = `Hi ${WHATSAPP_CONFIG.storeName} 👋\nI want to buy:\n${icon} ${product.name}${sizeText} x ${qty} — ₹${product.price * qty}\nTotal: ₹${product.price * qty}\nPlease confirm order.`;
    window.open(`https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full shadow hover:bg-white">
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-72 md:h-full bg-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-pink-500 uppercase">{product.category}</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">{product.name}</h2>
              
              <div className="flex items-center gap-1 mt-2 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-gray-700">{product.rating} / 5.0</span>
              </div>

              <div className="mt-4">
                <span className="text-3xl font-black text-gray-900">₹{product.price}</span>
                <span className="text-lg text-gray-400 line-through ml-3">₹{product.oldPrice}</span>
              </div>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">{product.description}</p>

              {/* T-Shirts Size Selector */}
              {product.category === 'T-Shirts' && (
                <div className="mt-4">
                  <span className="text-sm font-bold text-gray-700 block mb-2">Select Size:</span>
                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-xl font-bold text-sm border transition ${
                          selectedSize === size
                            ? 'bg-pink-600 text-white border-pink-600 shadow-md'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-pink-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-700">Quantity:</span>
                <div className="flex items-center border rounded-xl overflow-hidden">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-1 bg-gray-50 font-bold">-</button>
                  <span className="px-4 py-1 font-bold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="px-3 py-1 bg-gray-50 font-bold">+</button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { 
                    onAddToCart({ 
                      ...product, 
                      quantity: qty, 
                      size: product.category === 'T-Shirts' ? selectedSize : undefined 
                    }); 
                    onClose(); 
                  }}
                  className="py-3 bg-pink-100 text-pink-600 font-bold rounded-xl hover:bg-pink-200 transition flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" /> Add to Cart
                </button>
                <button
                  onClick={handleWhatsAppBuy}
                  className="py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition flex items-center justify-center gap-2 shadow-md shadow-emerald-200"
                >
                  <Send className="w-5 h-5" /> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  ); 
}