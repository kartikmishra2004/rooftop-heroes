'use client';

import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Select project type');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    'Commercial Roofing',
    'Residential Estate',
    'Industrial Facility',
    'Consultation Only'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* ... Hero Section remains same ... */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full overflow-hidden">
            <img
              alt="Architectural Roofing Detail"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4MA_cFRnKGK0W_zCHeA1luCAoTIf5ck8xvcXbxgpCovzT7VTOK_Xw4433O8Ez49fZGuyJRm3AQx5D6FlLDb3hcLoVIpch1o3NJbL9fA56DtbD7zAGjzBs9IAGLv1tjEQ-hgBXf9ZpxUPd3KugrNGi17njqEi9-dvBVhAhHoqCOT4iWa2hKYqihsy657vrXK_Mux_X4l7qVkY_8d5T_dJVqLsPznOGvk3HZCHpiGyPGlL8btFBCtB2JMYh0vrLjLGA1cGOk2XZRoY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-transparent opacity-80 lg:opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-margin-mobile md:p-12 lg:p-16 z-10 w-full">
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-surface mb-6 leading-[0.9] uppercase">
                LET'S BUILD <br />
                <span className="text-primary-container">SOMETHING</span> <br />
                PERMANENT.
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <div>
                  <span className="font-label-caps text-[10px] md:text-label-caps text-surface/60 uppercase block mb-1">Office Headquarters</span>
                  <p className="font-body-md text-sm md:text-body-md text-surface">122 Industrial Way, Suite 400<br />Modern District, NY 10012</p>
                </div>
                <div>
                  <span className="font-label-caps text-[10px] md:text-label-caps text-surface/60 uppercase block mb-1">Direct Inquiry</span>
                  <p className="font-body-md text-sm md:text-body-md text-surface">+1 (555) 890-2344<br />hero@rooftopheroes.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-1/2 bg-surface px-margin-mobile md:px-12 lg:px-20 py-16 md:py-24 flex flex-col justify-center">
            <div className="max-w-xl mx-auto w-full">
              <div className="mb-10 md:mb-12">
                <span className="font-label-caps text-[10px] md:text-label-caps text-primary tracking-[0.2em] uppercase mb-3 block">New Projects</span>
                <h2 className="font-headline-lg text-display-lg-mobile md:text-headline-lg text-on-background mb-4">Discuss your architectural vision with our engineering experts.</h2>
              </div>
              <form action="#" className="space-y-8">
                <div className="group border-b border-surface-variant pb-2 transition-all focus-within:border-primary-container">
                  <label className="font-label-caps text-label-caps text-on-surface-variant/50 uppercase block mb-1 group-focus-within:text-primary-container transition-colors">Full Name</label>
                  <input
                    className="w-full bg-transparent border-none p-0 font-body-lg text-body-lg placeholder:text-surface-variant outline-none focus:ring-0"
                    placeholder="Johnathan Doe"
                    type="text"
                  />
                </div>
                <div className="group border-b border-surface-variant pb-2 transition-all focus-within:border-primary-container">
                  <label className="font-label-caps text-label-caps text-on-surface-variant/50 uppercase block mb-1 group-focus-within:text-primary-container transition-colors">Email Address</label>
                  <input
                    className="w-full bg-transparent border-none p-0 font-body-lg text-body-lg placeholder:text-surface-variant outline-none focus:ring-0"
                    placeholder="j.doe@architectural.com"
                    type="email"
                  />
                </div>

                {/* Custom Project Type Dropdown */}
                <div
                  className={`group border-b pb-2 transition-all relative outline-none ${isOpen ? 'border-primary-container' : 'border-surface-variant'}`}
                  ref={dropdownRef}
                  tabIndex={0}
                >
                  <label className={`font-label-caps text-label-caps uppercase block mb-1 transition-colors ${isOpen ? 'text-primary-container' : 'text-on-surface-variant/50'}`}>
                    Project Type
                  </label>
                  <div className="relative">
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full flex justify-between items-center py-1 cursor-pointer font-display-lg text-body-lg text-on-background"
                    >
                      <span className={selected === 'Select project type' ? 'opacity-40' : ''}>
                        {selected}
                      </span>
                      <span className={`material-symbols-outlined transition-all duration-500 ${isOpen ? 'rotate-180 text-primary-container' : 'text-on-surface-variant/30'}`}>
                        keyboard_arrow_down
                      </span>
                    </div>

                    {/* Custom Options List */}
                    {isOpen && (
                      <div className="absolute top-full left-0 w-full mt-2 bg-on-background text-surface shadow-2xl z-50 border-t-4 border-primary-container">
                        {options.map((opt) => (
                          <div
                            key={opt}
                            onClick={() => {
                              setSelected(opt);
                              setIsOpen(false);
                            }}
                            className="px-6 py-4 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer font-body-md border-b border-surface/5 last:border-none"
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="group border-b border-surface-variant pb-2 transition-all focus-within:border-primary-container">
                  <label className="font-label-caps text-label-caps text-on-surface-variant/50 uppercase block mb-1 group-focus-within:text-primary-container transition-colors">Your Message</label>
                  <textarea
                    className="w-full bg-transparent border-none p-0 font-body-lg text-body-lg placeholder:text-surface-variant resize-none outline-none focus:ring-0"
                    placeholder="Tell us about requirements..."
                    rows={3}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <Button variant="hero-cta" type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-20 md:py-32 bg-on-background text-surface overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter items-end mb-16 md:mb-24">
              <div className="md:col-span-8">
                <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-headline-lg leading-none mb-6">GLOBAL <span className="text-primary-container italic">PRECISION.</span></h3>
                <p className="font-body-lg text-body-md md:text-body-lg opacity-60 max-w-2xl leading-relaxed">From modern skylines to coastal estates, our solutions are engineered to define the horizon.</p>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <div className="md:text-right">
                  <span className="font-stats-num text-stats-num-mobile md:text-stats-num text-primary-container block leading-none">21</span>
                  <span className="font-label-caps text-[10px] md:text-label-caps uppercase tracking-widest opacity-60">Countries Served</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'architecture', title: 'Design Integration', desc: 'We collaborate with architects to ensure structural elements serve the broader design narrative.' },
                { icon: 'construction', title: 'Material Innovation', desc: 'Utilizing aerospace-grade alloys and composites for multi-generational durability.' },
                { icon: 'security', title: 'Warranted Safety', desc: 'Every project is backed by our signature 50-year guarantee for complete peace of mind.' },
              ].map((item) => (
                <div key={item.title} className="p-8 border border-surface/10 hover:border-primary-container transition-all group">
                  <span className="material-symbols-outlined text-primary-container mb-6 text-3xl">{item.icon}</span>
                  <h4 className="font-headline-lg text-lg md:text-body-lg font-bold mb-3 uppercase tracking-tight">{item.title}</h4>
                  <p className="font-body-md opacity-60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map/Location Section */}
        <section className="h-[450px] md:h-[500px] w-full relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-60"
              src="/map.webp"
              alt="Map"
            />
          </div>
          <div className="relative z-10 h-full flex items-center justify-center p-margin-mobile">
            <div className="bg-surface p-8 md:p-10 max-w-sm border-l-8 border-primary-container shadow-2xl">
              <span className="font-label-caps text-[10px] md:text-label-caps text-primary-container uppercase block mb-3">Main Studio</span>
              <h4 className="font-headline-lg text-xl md:text-body-lg font-bold mb-4 uppercase tracking-tight">Visit Our Gallery</h4>
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-8 leading-relaxed">Experience our materials and craftsmanship in person at our flagship architectural studio.</p>
              <button className="font-label-caps text-[10px] md:text-label-caps uppercase border-b-2 border-on-background pb-1 flex items-center gap-2 hover:text-primary-container hover:border-primary-container transition-all cursor-pointer">
                Get Directions <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
