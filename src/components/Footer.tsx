import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-on-background dark:bg-surface-container-lowest w-full relative">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-margin-mobile md:px-margin-desktop pt-16 pb-24 gap-12 max-w-container-max mx-auto">
        <div className="space-y-6 md:space-y-8 w-full md:w-1/3">
          <div className="font-display-lg text-display-lg-mobile md:text-headline-lg text-surface dark:text-on-background uppercase font-bold leading-tight">
            ROOFTOP<br />HEROES
          </div>
          <p className="font-body-md text-sm md:text-body-md text-surface-variant opacity-50 max-w-xs">
            Engineered for the elite. Protecting the skyline since 1994.
          </p>
          <div className="flex gap-6">
            <a className="hover:text-primary-container transition-all cursor-pointer text-surface/60" href="#" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a className="hover:text-primary-container transition-all cursor-pointer text-surface/60" href="#" aria-label="Instagram">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a className="hover:text-primary-container transition-all cursor-pointer text-surface/60" href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 w-full md:w-auto md:pt-32">
          <div className="flex flex-col gap-6 md:gap-8">
            <span className="font-label-caps text-[10px] md:text-label-caps text-primary-container uppercase tracking-widest">Company</span>
            <ul className="flex flex-col gap-3 font-body-md text-sm md:text-body-md text-surface-variant">
              <li><Link className="hover:text-primary transition-colors cursor-pointer" href="#">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors cursor-pointer" href="#">Our Projects</Link></li>
              <li><Link className="hover:text-primary transition-colors cursor-pointer" href="#">Careers</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <span className="font-label-caps text-[10px] md:text-label-caps text-primary-container uppercase tracking-widest">Support</span>
            <ul className="flex flex-col gap-3 font-body-md text-sm md:text-body-md text-surface-variant">
              <li><Link className="hover:text-primary transition-colors cursor-pointer" href="/faq">FAQ's</Link></li>
              <li><Link className="hover:text-primary transition-colors cursor-pointer" href="/contact">Contact</Link></li>
              <li><Link className="hover:text-primary transition-colors cursor-pointer" href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 sm:col-span-2 md:col-span-1">
            <span className="font-label-caps text-[10px] md:text-label-caps text-primary-container uppercase tracking-widest">Office</span>
            <p className="font-body-md text-sm md:text-body-md text-surface-variant opacity-70 leading-relaxed">
              88 Architectural Way<br />Industrial District, NY 10012
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-margin-mobile md:px-margin-desktop py-6 border-t border-surface/5 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-label-caps text-[9px] md:text-label-caps text-surface-variant opacity-40">
        <span className="text-center md:text-left uppercase tracking-widest">© 2024 ROOFTOP HEROES. ENGINEERED PERMANENCE.</span>
        <div className="flex gap-8 uppercase tracking-widest">
          <Link href="#" className="cursor-pointer hover:opacity-100 transition-opacity">Terms</Link>
          <Link href="#" className="cursor-pointer hover:opacity-100 transition-opacity">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
