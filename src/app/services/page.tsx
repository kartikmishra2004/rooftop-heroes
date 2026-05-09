import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface">
        {/* Hero Section: Expertise */}
        <section className="relative pt-16 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-8">
              <span className="font-label-caps text-label-caps text-primary mb-2 block uppercase">What We Do</span>
              <h1 className="font-display-xl text-display-xl uppercase">
                OUR <br />
                <span className="text-primary-container">EXPERTISE</span>
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="font-body-lg text-body-lg text-on-surface-variant border-l-4 border-primary pl-6">
                Engineered permanence for high-end architecture. We provide advanced roofing solutions that marry structural integrity with avant-garde aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* Services Listing */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-on-background text-surface">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12 items-baseline">
              <h2 className="md:col-span-6 font-display-lg text-display-lg uppercase leading-none">SERVICES</h2>
              <p className="md:col-span-6 font-body-lg text-body-lg opacity-70">Four core pillars of our architectural roofing practice.</p>
            </div>
            <div className="divide-y divide-surface/20">
              {[
                { id: '01', title: 'Roof Repairing', desc: 'Precision intervention for structural anomalies.' },
                { id: '02', title: 'Roof Replacement', desc: 'Complete system overhaul with lifetime-guaranteed materials.' },
                { id: '03', title: 'Water Leakage Repair', desc: 'Diagnostic waterproofing using industrial thermal mapping.' },
                { id: '04', title: 'Solar Panels', desc: 'Seamless integration of clean energy into architectural planes.' },
              ].map((service) => (
                <div key={service.id} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 transition-all duration-500 hover:bg-surface/5 px-4 cursor-pointer">
                  <div className="flex items-baseline gap-8">
                    <span className="font-stats-num text-stats-num text-primary-container opacity-50 group-hover:opacity-100 transition-opacity">{service.id}</span>
                    <h3 className="font-headline-lg text-headline-lg uppercase group-hover:translate-x-4 transition-transform">{service.title}</h3>
                  </div>
                  <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <span className="font-body-md text-body-md opacity-60 hidden lg:block max-w-xs text-right">{service.desc}</span>
                    <div className="transition-transform duration-300 w-12 h-12 border border-surface/30 flex items-center justify-center group-hover:rotate-45">
                      <span className="material-symbols-outlined">north_east</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-5 relative">
              <img
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6vPF2jmQVzFJ5BJjifRnY9ub17g-sqO2KXw_Gnng_AKdU5Vrc8wWke14hNt_h8tc9_mOYxCq-Pdn4Iw-0bE4fkIFPk1OKV6Ei7o8r_oUyFk94Ez3gC1PcZRGFh8u8upwDwBO5YeSBBBIS4JOiqFVPmAHEKFYXvGQT6iVmj03l93DXvQahkbgjE5IQ0MtNM4j2fQ2sEX_PFw6_1XKzTZ0fJPnL_DaPlsDTybUfCqKaY6YrYMvoEQaTdlpsbr5BC5Hyn3pXbBNilaY"
                alt="Process"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-container p-8 text-on-primary-container hidden md:block">
                <span className="font-display-lg text-stats-num text-stats-num">01</span>
                <p className="font-label-caps text-label-caps mt-1 uppercase">Initial Diagnosis</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
              <span className="font-label-caps text-label-caps text-primary mb-4 uppercase">The Process</span>
              <h2 className="font-display-lg text-headline-lg uppercase mb-8">HOW WE <br />DELIVER EXCELLENCE</h2>
              <div className="space-y-8">
                {[
                  { id: '02', title: 'Structural Engineering', desc: 'Our team of engineers evaluates the load-bearing requirements for the chosen materials, ensuring a foundation of absolute safety.' },
                  { id: '03', title: 'Industrial Craftsmanship', desc: 'Execution by elite tradespeople who view every shingle and panel as a component of a larger masterpiece.' },
                  { id: '04', title: 'Quality Verification', desc: 'Final multi-point architectural inspection to guarantee performance under extreme meteorological conditions.' },
                ].map((step) => (
                  <div key={step.id} className="border-l-2 border-surface-variant pl-8 relative group hover:border-primary-container transition-colors duration-300">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-surface-variant group-hover:bg-primary-container transition-colors"></div>
                    <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-1 opacity-50 uppercase">STEP {step.id}</h4>
                    <h3 className="font-headline-lg text-headline-lg text-[24px] font-bold uppercase mb-2">{step.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant opacity-70">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto bg-surface-container-high p-8 md:p-24 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
            <div className="relative z-10">
              <h2 className="font-display-xl text-display-xl text-headline-lg md:text-display-xl uppercase mb-6">Ready for a <span className="text-primary">Heroic</span> Upgrade?</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
                Don't let your structure suffer. Contact our architectural consultants for a comprehensive project assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero-cta" href="/contact">START YOUR PROJECT</Button>
                <Button variant="outline" href="/services" className="border-zinc-400 px-10 py-5">VIEW PORTFOLIO</Button>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[40px] border-surface-variant/20 rounded-full"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
