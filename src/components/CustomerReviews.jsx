import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Sneha Reddy",
    location: "Hyderabad",
    comment: "The teddy bear is super soft and adorable! Ordered via WhatsApp and got it delivered within 2 days. Amazing packaging! ❤️",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Rahul Varma",
    location: "Bangalore",
    comment: "Bought the custom Spotify keychain for my girlfriend. She loved it so much! The print quality is top-notch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai",
    comment: "TrendyZone has the cutest collectible products! The mystery gift box had such lovely surprises inside. Highly recommend!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
            Loved By Thousands of Smiles 🥰
          </h2>
          <p className="text-gray-500 mt-2">See what our happy customers have to say about their orders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-pink-100/60 flex flex-col justify-between relative group transition"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-pink-100 group-hover:text-pink-200 transition" />
              
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-400">{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}