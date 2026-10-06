import React from 'react';
import { Sparkles, MessageCircle, Instagram } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-pink-500 rounded-xl text-white">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="text-2xl font-black text-white">ToyVerse</span>
          </div>
          <p className="text-gray-400 text-sm">
            Bringing adorable toys, custom keychains and gifts to make every moment special.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-pink-400">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Shop All</li>
            <li className="hover:text-white cursor-pointer">Toys Collection</li>
            <li className="hover:text-white cursor-pointer">Custom Keychains</li>
            <li className="hover:text-white cursor-pointer">Gift Boxes</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-pink-400">Customer Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">WhatsApp Ordering Guide</li>
            <li className="hover:text-white cursor-pointer">Shipping & Delivery</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-pink-400">Connect With Us</h4>
          <div className="flex gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_CONFIG.phoneNumber}`} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-emerald-600 rounded-xl hover:bg-emerald-500 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/srikar_photostudio_rajampet?stkn=MWtiMHVjNnBlZHd3Yg==" 
              className="p-3 bg-pink-600 rounded-xl hover:bg-pink-500 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2026 ToyVerse (TrendyZone). All rights reserved. Made with ❤️ for cute things.
      </div>
    </footer>
  );
}