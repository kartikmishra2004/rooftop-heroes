'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alexander Wright",
    avatar: "https://i.pravatar.cc/150?u=alex",
    rating: 5,
    date: "2 months ago",
    text: "Rooftop Heroes transformed our industrial complex. Their engineering precision is unmatched. The team was professional, and the result is clearly built to last. Highly recommend for any large-scale project."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    date: "1 month ago",
    text: "After several failed attempts with other contractors, these guys finally fixed our persistent leakage issue. Their diagnostic scan found things others missed. Exceptional service and worth every penny."
  },
  {
    id: 3,
    name: "Marcus Thorne",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    rating: 5,
    date: "3 weeks ago",
    text: "The architectural shingles they installed on our heritage home look incredible. They managed to maintain the historical aesthetic while providing modern protection. Truly masters of their craft."
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    avatar: "https://i.pravatar.cc/150?u=elena",
    rating: 5,
    date: "2 weeks ago",
    text: "Professional, clean, and efficient. They finished the roof replacement ahead of schedule. The team went above and beyond to ensure everything was perfect before leaving. Best in the business."
  }
];

const GoogleReviews = () => {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface overflow-hidden border-y border-surface-variant/50">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-[10px] md:text-label-caps text-primary uppercase tracking-widest">Testimonials</span>
              <div className="h-px w-12 bg-primary/30"></div>
            </div>
            <h2 className="font-headline-lg text-display-lg-mobile md:text-display-lg leading-tight uppercase">
              Proven<br />
              <span className="text-primary-container italic">Reliability</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-2"
          >
            <div className="flex items-center gap-1 text-primary-container">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="material-symbols-outlined text-2xl fill-1">star</span>
              ))}
            </div>
            <p className="font-label-caps text-[10px] md:text-label-caps opacity-60">
              4.9/5 RATING BASED ON 150+ GOOGLE REVIEWS
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-surface-container-lowest p-8 border border-surface-variant flex flex-col justify-between hover:border-primary-container transition-all duration-500 group relative"
            >
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-surface-variant group-hover:border-primary-container">
                      <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-label-caps text-[11px] uppercase tracking-wider">{review.name}</h4>
                      <span className="text-[10px] opacity-40 uppercase tracking-tighter">{review.date}</span>
                    </div>
                  </div>
                  <div className="bg-surface p-1 rounded">
                    <img 
                      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                      alt="Google" 
                      className="h-3.5 grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="flex gap-0.5 text-primary-container">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`material-symbols-outlined text-sm ${i < review.rating ? 'fill-1' : ''}`}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface-variant/90 italic leading-relaxed text-[15px]">
                  "{review.text}"
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-surface-variant flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">verified</span>
                  <span className="font-label-caps text-[10px] opacity-50 uppercase">Verified Review</span>
                </div>
                <span className="material-symbols-outlined text-surface-variant group-hover:text-primary-container transition-colors duration-500">format_quote</span>
              </div>
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <div className="h-px w-24 bg-surface-variant"></div>
          <a 
            href="https://www.google.com/search?q=Rooftop+Heroes+Reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary-container group-hover:bg-primary-container group-hover:text-white transition-all duration-500 relative overflow-hidden">
              <span className="material-symbols-outlined relative z-10 group-hover:scale-110 transition-transform">rate_review</span>
              <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-xs md:text-sm tracking-[0.2em] uppercase group-hover:text-primary-container transition-colors">
                Write a Review
              </span>
              <span className="text-[10px] opacity-40 uppercase tracking-widest">ON GOOGLE MAPS</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
