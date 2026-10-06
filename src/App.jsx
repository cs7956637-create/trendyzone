import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Sparkles, ShieldCheck, Truck, Headphones } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCard.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleRemoveCartItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Filter products based on active navigation tab or category
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === 'toys') return item.category === 'Toys' && matchesSearch;
    if (activeTab === 'keychains') return item.category === 'Keychains' && matchesSearch;
    if (activeTab === 'frames') return item.category === 'Photo Frames' && matchesSearch; // <--- Frames Filter Added
    if (selectedCategory === 'All') return matchesSearch;
    return item.category === selectedCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-500 selection:text-white">
      {/* Navbar */}
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Router */}
      {activeTab === 'home' && (
        <>
          <Hero onShopClick={(tab) => setActiveTab(tab)} />

          {/* Categories Section */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black">Featured Categories</h2>
              <p className="text-gray-500 mt-2">Explore our most popular collections</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {CATEGORIES.filter(c => c.name !== 'All').map((cat) => (
                <div
                  key={cat.name}
                  onClick={() => { 
                    if(cat.name === 'Photo Frames') setActiveTab('frames');
                    else { setSelectedCategory(cat.name); setActiveTab('shop'); }
                  }}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl text-center cursor-pointer hover:shadow-lg transition transform hover:-scale-105 border border-pink-100"
                >
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <h3 className="font-bold text-lg text-gray-800">{cat.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Best Sellers */}
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black">Best Sellers ⭐</h2>
              <button onClick={() => setActiveTab('shop')} className="text-pink-600 font-bold hover:underline">
                View All →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.slice(0, 3).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onViewDetails={setSelectedProduct}
                />
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-pink-50/50 py-16 my-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <Truck className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg">Fast Delivery</h3>
                <p className="text-gray-500 text-sm mt-2">Quick shipping across India with secure packaging.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <ShieldCheck className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg">100% Safe Materials</h3>
                <p className="text-gray-500 text-sm mt-2">Child-friendly, non-toxic and premium quality.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <Headphones className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg">Instant WhatsApp Order</h3>
                <p className="text-gray-500 text-sm mt-2">Direct chat support for hassle-free custom orders.</p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Shop / Toys / Keychains / Frames Tabs */}
      {(activeTab === 'shop' || activeTab === 'toys' || activeTab === 'keychains' || activeTab === 'frames') && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black capitalize">
              {activeTab === 'shop' ? 'Explore All Products' : activeTab === 'frames' ? 'Photo Frames Collection' : `${activeTab} Collection`}
            </h2>
            <p className="text-gray-500 mt-2">Find something that makes you smile today.</p>
          </div>

          {/* Category Filter Tabs */}
          {activeTab === 'shop' && (
            <div className="flex justify-center gap-3 mb-10 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-6 py-2.5 rounded-full font-bold transition shadow-sm ${
                    selectedCategory === cat.name
                      ? 'bg-pink-600 text-white shadow-pink-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        </section>
      )}

      {activeTab === 'about' && (
        <section className="py-20 max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-black">About TrendyZone</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to TrendyZone Rajampeta, your ultimate destination for cute toys, custom keychains, photo frames, and joyful gifts. 
            We curate and design products that bring instant smiles to faces. Every item is handpicked with love and packaged securely.
          </p>
        </section>
      )}

      {activeTab === 'contact' && (
        <section className="py-20 max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-black">Get in Touch</h2>
          <p className="text-gray-600">Have questions or want custom frames and gifts? Message us directly on WhatsApp!</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition"
          >
            Chat on WhatsApp
          </a>
        </section>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveCartItem}
      />

      {/* Product Details Modal */}
      <ProductDetails
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}