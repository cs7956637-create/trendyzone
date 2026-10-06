import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Flame } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  // Tabs list lo 'frames' (Photo Frames) ni add chesam mawa
  const navTabs = ['home', 'shop', 'toys', 'keychains', 'frames', 'about', 'contact'];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('home')}>
            {/* Round Logo Image */}
            <img 
              src="/logo.png" 
              alt="TrendyZone" 
              className="w-10 h-10 object-cover rounded-full border-2 border-pink-300 shadow-sm p-0.5 bg-white" 
            />
            
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent leading-none">
                TrendyZone
              </span>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1 ml-0.5">
                Rajampeta
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 font-medium text-gray-600">
            {navTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize transition hover:text-pink-600 ${
                  activeTab === tab ? 'text-pink-600 font-bold border-b-2 border-pink-500 pb-1' : ''
                }`}
              >
                {/* Frames ki neat ga "Photo Frames" ani display avvadaniki */}
                {tab === 'frames' ? 'Photo Frames' : tab}
              </button>
            ))}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setActiveTab('shop')} 
              className="p-2 text-gray-600 hover:text-pink-600 transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-pink-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-100 px-4 pt-2 pb-4 space-y-2">
          {navTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setIsOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg capitalize text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium"
            >
              {tab === 'frames' ? 'Photo Frames' : tab}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}