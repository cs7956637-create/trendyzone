import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, Send } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config/whatsapp';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemove }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    
    let message = `Hi ${WHATSAPP_CONFIG.storeName} 👋\nI would like to place an order:\n\n`;
    cart.forEach(item => {
      // T-shirt aithe size tho patu t-shirt icon vach laaga update chesam
      const icon = item.category === 'T-Shirts' ? '👕' : '🧸';
      const sizeInfo = item.size ? ` (Size: ${item.size})` : '';
      message += `${icon} ${item.name}${sizeInfo} x ${item.quantity} — ₹${item.price * item.quantity}\n`;
    });
    message += `\n*Total: ₹${subtotal}*\nPlease confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-pink-600" />
                  <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                </div>
                <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto text-pink-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-gray-500 font-medium">Your cart is empty!</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={`${item.id}-${item.size || 'nosize'}`} className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                        {/* Size display in cart */}
                        {item.size && (
                          <span className="text-xs font-bold text-pink-600 block mt-0.5">Size: {item.size}</span>
                        )}
                        <p className="text-pink-600 font-bold text-sm mt-1">₹{item.price}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                            className="w-6 h-6 bg-white border rounded flex items-center justify-center text-sm font-bold"
                          >-</button>
                          <span className="text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                            className="w-6 h-6 bg-white border rounded flex items-center justify-center text-sm font-bold"
                          >+</button>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => onRemove(item.id, item.size)}
                        className="text-gray-400 hover:text-red-500 p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer / Subtotal & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                  <div className="flex justify-between text-base font-bold text-gray-900">
                    <span>Subtotal:</span>
                    <span>₹{subtotal}</span>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 transition flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-6 h-6" /> Order on WhatsApp
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}