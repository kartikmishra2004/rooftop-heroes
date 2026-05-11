'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Header & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="space-y-4">
              <span className="font-label-caps text-[10px] md:text-label-caps text-primary uppercase tracking-[0.2em]">Global Presence</span>
              <h2 className="font-headline-lg text-display-lg-mobile md:text-display-lg leading-tight uppercase">
                Where We<br />
                <span className="text-primary-container italic">Operate</span>
              </h2>
            </div>
            
            <div className="space-y-6 pt-8 border-t border-surface-variant">
              <div className="space-y-2">
                <h4 className="font-label-caps text-xs uppercase opacity-40">Headquarters</h4>
                <p className="font-body-lg text-on-background">
                  Elite Plaza, 4th Floor<br />
                  Architectural District<br />
                  London, UK EC1A 1BB
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-label-caps text-xs uppercase opacity-40">Operations</h4>
                <p className="font-body-lg text-on-background">
                  Serving 21+ Countries across<br />
                  Europe, Asia, and North America.
                </p>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-on-background text-surface flex items-center justify-center group-hover:bg-primary-container transition-colors duration-500">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <span className="font-label-caps text-xs uppercase tracking-widest border-b border-on-background/10 pb-1 group-hover:border-primary-container transition-colors">Get Directions</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 relative h-[400px] md:h-[600px] w-full bg-surface-container-highest overflow-hidden border border-surface-variant group"
          >
            {/* Styled Iframe Map */}
            <iframe 
              src="https://maps.google.com/maps?q=40.7484,-74.0048&z=15&output=embed" 
              className="absolute inset-0 w-full h-full pointer-events-none md:pointer-events-auto"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay for Premium Feel */}
            <div className="absolute inset-0 pointer-events-none border-[10px] md:border-[20px] border-surface-container-low/30"></div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
