import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-end px-margin-mobile md:px-margin-desktop pt-6">
          <div className="w-full max-w-container-max mx-auto z-10 relative">
            <div className="grid grid-cols-1 gap-2 mb-6">
              <h1 className="font-display-xl text-display-xl uppercase text-on-background">
                Engineering<br />
                <span className="text-primary-container">Permanence</span>
              </h1>
              <div className="flex justify-between items-end">
                <p className="font-label-caps text-label-caps text-zinc-400 max-w-xs opacity-60">
                  ELITE ARCHITECTURAL SOLUTIONS<br />FOR MODERN INFRASTRUCTURE.
                </p>
                <span className="font-display-lg text-headline-lg text-zinc-400 opacity-30">EST. 1994</span>
              </div>
            </div>
          </div>
          <div className="w-full max-w-container-max mx-auto h-[500px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
              src="/roof-hero.jpg"
              alt="Industrial Roofing"
            />
            <div className="absolute bottom-10 right-10 z-20">
              <Button variant="hero-cta" href="/contact">
                Request Quote
                <span className="material-symbols-outlined text-4xl">north_east</span>
              </Button>
            </div>
          </div>
          <div className="w-full bg-on-background py-4 overflow-hidden flex whitespace-nowrap">
            <div className="flex gap-12 animate-marquee items-center text-surface font-label-caps">
              <span>COMMERCIAL ROOFS</span> <span className="material-symbols-outlined">diamond</span>
              <span>RESIDENTIAL MASTERY</span> <span className="material-symbols-outlined">diamond</span>
              <span>INDUSTRIAL GRADE</span> <span className="material-symbols-outlined">diamond</span>
              {/* Duplicate for seamless loop */}
              <span>COMMERCIAL ROOFS</span> <span className="material-symbols-outlined">diamond</span>
              <span>RESIDENTIAL MASTERY</span> <span className="material-symbols-outlined">diamond</span>
              <span>INDUSTRIAL GRADE</span> <span className="material-symbols-outlined">diamond</span>
              <span>COMMERCIAL ROOFS</span> <span className="material-symbols-outlined">diamond</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-6">
              <span className="font-label-caps text-primary tracking-widest uppercase">Solutions</span>
              <h2 className="font-headline-lg text-display-lg text-on-background leading-tight">
                We Have<br />Completed<br /><span className="text-primary-container font-bold">700+ Projects</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
                Our agents will guide you through the entire process of roofing, ensuring every angle meets the engineering standards of tomorrow.
              </p>
              <Button variant="primary" href="/contact" className="px-8 py-4">Contact Us</Button>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4 relative">
              <div className="col-span-1 mt-8">
                <img 
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="roof-1.jpg" 
                  alt="Project 1"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="roof-2.jpg"
                  alt="Project 2"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container-highest p-8 grid grid-cols-1 gap-6 border border-white/20 backdrop-blur-lg">
                <div className="space-y-1">
                  <span className="font-stats-num text-stats-num text-primary-container block">21</span>
                  <span className="font-label-caps text-label-caps uppercase opacity-60">Countries</span>
                </div>
                <div className="space-y-1">
                  <span className="font-stats-num text-stats-num text-on-background block">250+</span>
                  <span className="font-label-caps text-label-caps uppercase opacity-60">Global Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-on-background py-16 md:py-24 text-surface overflow-hidden relative">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                className="w-3/4 aspect-square object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                src="roof-3.jpg"
                alt="Story Image 1"
              />
              <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square border-8 border-on-background overflow-hidden z-10">
                <img
                  className="w-full h-full object-cover grayscale"
                  src="roof-4.jpg"
                  alt="Story Image 2"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-[0.2em]">Our Heritage</span>
                <h2 className="font-display-lg text-headline-lg uppercase leading-none">Our Story<br />Started From<br />Our Own House</h2>
              </div>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-lg opacity-80 leading-relaxed">
                We don't just build roofs; we engineer envelopes of protection. Founded on the principle of "Engineered Permanence," Rooftop Heroes utilizes aeronautical grade materials and architectural precision to ensure your investment stands the test of time and climate.
              </p>
              <div className="flex items-center gap-8 border-t border-surface/10 pt-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-on-background bg-surface-variant overflow-hidden">
                      <img
                        alt={`Team Member ${i}`}
                        src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBVfOSk_ap1FhivIVVaolO0bSyACxqdF2bMa6JnRHKVKtKdVejZVXOMSrsXPhn5DkzQD9r638mSItCzKiQsXFOWKbH_ZqPRFWQlLpCZX4AmPURjHKWbNlMOZR4OOyEEZ1Y6eQOHT7VQKPCzwn3csbxfroGaH8N6oYeu4BN01fEVVfz5JUXj_TyWtydJKLS_p3PV5TKAYOmz7dkSfdAaBgmnv6iWFzcjKCJH5PNhBAyCjZMRbTkwyPw4S0oTFb1h_WRb0u392mgptSM`}
                      />
                    </div>
                  ))}
                </div>
                <span className="font-label-caps text-label-caps">Trusted by 250+ Elite Developers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <span className="font-label-caps text-primary uppercase">Specializations</span>
            <h2 className="font-headline-lg text-display-lg leading-tight mt-2">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden group min-h-[400px]">
              <img
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
                src="roof-5.jpg"
                alt="Residential Services"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-surface">
                <span className="font-label-caps text-label-caps text-primary-container">PREMIUM RESIDENTIAL</span>
                <h3 className="font-headline-lg text-headline-lg mt-2">Architectural Shingles</h3>
              </div>
            </div>
            <div className="flex flex-col gap-0 border-t border-surface-variant">
              {[
                { id: '01', title: 'Roof Repairing' },
                { id: '02', title: 'Roof Replacement' },
                { id: '03', title: 'Leakage Solutions' },
                { id: '04', title: 'Solar Integration' },
              ].map((service) => (
                <div key={service.id} className="group border-b border-surface-variant py-8 flex justify-between items-center hover:bg-surface-container-low px-6 transition-colors duration-300 cursor-pointer">
                  <div className="flex items-start gap-6">
                    <span className="font-label-caps text-label-caps text-on-surface-variant opacity-40 mt-1">{service.id}</span>
                    <h4 className="font-headline-lg text-headline-lg text-on-background transition-transform group-hover:translate-x-4">
                      {service.title}
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-3xl group-hover:rotate-45 transition-transform duration-300">north_east</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="font-label-caps text-label-caps text-primary uppercase">Portfolio</span>
                <h2 className="font-headline-lg text-display-lg leading-none mt-2">Selected<br /><span className="text-primary-container">Works</span></h2>
              </div>
              <Button variant="ghost" className="border-b-2 border-on-background pb-1 hover:border-primary">View All Projects</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:min-h-[800px] h-auto">
              <div className="md:col-span-7 h-[400px] md:h-full overflow-hidden relative group">
                <img
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                  src="roof-6.jpg"
                  alt="Portfolio Large"
                />
                <div className="absolute inset-0 bg-on-background/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-8 right-8 p-4 bg-surface-container-lowest/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-label-caps text-label-caps">HERITAGE PRESERVATION</span>
                </div>
              </div>
              <div className="md:col-span-5 grid grid-rows-2 gap-6 md:h-full h-auto">
                <div className="overflow-hidden relative group h-[300px] md:h-full">
                  <img
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    src="roof-7.jpg"
                    alt="Portfolio Small 1"
                  />
                </div>
                <div className="overflow-hidden relative group h-[300px] md:h-full">
                  <img
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    src="roof-8.jpg"
                    alt="Portfolio Small 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop bg-on-background text-surface">
          <div className="max-w-container-max mx-auto text-center space-y-8">
            <div className="relative inline-block">
              <h2 className="font-display-xl text-display-xl uppercase leading-tight relative z-10">Is your Roof<br /><span className="text-primary-container italic">crying?</span></h2>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
            </div>
            <p className="font-body-lg opacity-60 max-w-2xl mx-auto">
              Ignoring the signs leads to structural decay. Our engineers provide a free diagnostic scan to ensure your sanctuary remains permanent.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
              <Button variant="hero-cta" href="/contact">BOOK INSPECTION</Button>
              <Button variant="outline" href="/services">Emergency Services</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
