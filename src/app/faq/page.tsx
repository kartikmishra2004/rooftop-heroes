import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface">
        {/* FAQ Hero Section */}
        <section className="relative px-margin-mobile md:px-margin-desktop pt-12 md:pt-24 pb-12 md:pb-16 max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase text-on-background flex-1">
              Common <br /> <span className="text-primary-container">Questions</span>
            </h1>
            <div className="max-w-md md:text-right pb-4">
              <p className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase mb-2 tracking-[0.2em]">Engineered Permanence</p>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-surface">Clarifying our commitment to architectural excellence and high-end structural integrity.</p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <aside className="lg:col-span-4 mb-12 lg:mb-0">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-headline-lg text-display-lg-mobile md:text-headline-lg uppercase mb-4">Expertise <br /> & Logistics</h2>
                <p className="font-body-md text-sm md:text-body-md text-on-surface-variant max-w-xs opacity-70">Our processes are as robust as our roofs. Explore our standard practices for luxury developments.</p>
              </div>
            </aside>
            <div className="lg:col-span-8 flex flex-col gap-0 border-t border-on-background/10">
              {[
                {
                  id: '01',
                  q: 'What high-end materials do you specialize in?',
                  a: 'We source globally for ultra-premium materials including grade-A slate from Spanish quarries, standing-seam zinc from Germany, and custom-fabricated copper. Every material is vetted for architectural compatibility and lifetime durability in extreme climates.'
                },
                {
                  id: '02',
                  q: 'Do you offer international project management?',
                  a: 'Yes. Rooftop Heroes operates globally. Our specialized engineering teams are equipped to deploy to any continent, ensuring that our proprietary installation standards are maintained regardless of local contractor limitations.'
                },
                {
                  id: '03',
                  q: 'What is the Hero-Grade Warranty coverage?',
                  a: 'Our industry-leading "Engineered Permanence" warranty covers both materials and labor for up to 50 years. This include annual structural integrity inspections and prioritized emergency maintenance for the duration of the agreement.'
                },
                {
                  id: '04',
                  q: 'How do you handle architectural integration?',
                  a: 'We work directly with your lead architects during the design phase. Our engineers provide CAD support and material samples to ensure the roof doesn\'t just protect the building, but elevates the entire visual narrative of the project.'
                }
              ].map((faq) => (
                <details key={faq.id} className="group py-6 md:py-8 border-b border-on-background/10 cursor-pointer">
                  <summary className="flex justify-between items-center outline-none list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex gap-4 md:gap-6 items-center">
                      <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant opacity-40 uppercase">{faq.id}</span>
                      <h3 className="font-headline-lg text-xl md:text-[32px] uppercase tracking-tight group-hover:text-primary-container transition-colors leading-tight">
                        {faq.q}
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-2xl md:text-3xl transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">add</span>
                  </summary>
                  <div className="pt-6 pl-8 md:pl-12 max-w-2xl">
                    <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed opacity-80">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-margin-mobile md:px-margin-desktop mb-16 max-w-container-max mx-auto">
          <div className="bg-on-background p-10 md:p-24 relative overflow-hidden flex flex-col items-center text-center rounded-2xl md:rounded-none">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                alt="Architectural shot" 
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRTn2kj5zQNTh3pW0JXpUK1Oa_aaE1nzf8xp5k8XI6rKnXDdZ2RRUSo3onT9gMl7g_VzbEqlRGooMqcXiqENEJB6a2oiO7b5wbqkJ7jfFk_Nnxf_8ThtIvzhWiy0kE-3ZiaJtEKtNpaGxu8xOwa7EMiy2q-ew8S46igvG0SfcP1hX4R547s-sHLpxrY9n8hU249aa7neCETxhqefqqN_rrDpJGb0tVHcmPZNwA6yaamR1H-0aTKjyC2xHrhlxcAiV8Just5V3_Nh8" 
              />
            </div>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase text-surface mb-6 relative z-10">
              Still have <br /> <span className="text-primary-container">Questions?</span>
            </h2>
            <p className="font-body-lg text-body-md md:text-body-lg text-surface-variant max-w-2xl mb-8 relative z-10 opacity-80">
              Our structural consultants are available for complex technical inquiries and global logistical coordination.
            </p>
            <Button variant="hero-cta" href="/contact" className="relative z-10 w-full md:w-auto justify-center">
              Contact Our Engineers
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
