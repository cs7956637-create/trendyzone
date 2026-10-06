import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, MessageCircle, HeartHandshake } from 'lucide-react';

const FEATURES = [
  {
    icon: <Truck className="w-8 h-8 text-pink-600" />,
    title: "Fast & Secure Delivery",
    description: "Quick shipping across India with robust packaging to ensure your cute items arrive safely."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-pink-600" />,
    title: "100% Safe Materials",
    description: "Child-friendly, non-toxic, hypoallergenic plushies and high-grade acrylic keychains."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-pink-600" />,
    title: "Instant WhatsApp Order",
    description: "No complicated checkouts. Chat directly with us on WhatsApp for fast and easy ordering."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-pink-600" />,
    title: "Made With Love",
    description: "Every single gift box and custom keychain is handpicked and packed with special care."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50/40 via-white to-pink-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">
            Why Choose ToyVerse
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
            We Make Every Moment Special ✨
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Here is why our customers love shopping their favorite toys and gifts with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-pink-100/80 transition flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition duration-300">
                  {/* Icon color transition */}
                  <div className="group-hover:brightness-200 group-hover:invert transition">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}