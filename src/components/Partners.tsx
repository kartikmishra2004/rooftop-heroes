'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Google', logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
  { name: 'Adobe', logo: 'https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg' },
  { name: 'Microsoft', logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' },
  { name: 'Amazon', logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg' },
  { name: 'Meta', logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg' },
  { name: 'Netflix', logo: 'https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg' },
  { name: 'Tesla', logo: 'https://www.vectorlogo.zone/logos/tesla/tesla-ar21.svg' },
  { name: 'Samsung', logo: 'https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg' },
];

const Partners = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low overflow-hidden border-y border-surface-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label-caps text-[10px] md:text-label-caps text-primary uppercase tracking-[0.3em]">Collaborations</span>
            <h2 className="font-headline-lg text-2xl md:text-4xl text-on-background uppercase mt-2">Global Partners</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="font-body-md text-on-surface-variant max-w-xs text-sm md:text-right"
          >
            Integrating with world-class technologies to deliver unparalleled architectural precision.
          </motion.p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 md:gap-12">
        {/* First Row - Moving Left */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-16 md:gap-32 animate-marquee items-center shrink-0 py-4">
            {[...partners].concat([...partners]).map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex items-center gap-4"
              >
                <div className="h-10 md:h-14 w-auto flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right (Reverse) */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-16 md:gap-32 animate-marquee-reverse items-center shrink-0 py-4">
            {[...partners].reverse().concat([...partners]).map((partner, index) => (
              <div 
                key={`${partner.name}-rev-${index}`} 
                className="flex items-center gap-4"
              >
                <div className="h-10 md:h-14 w-auto flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
