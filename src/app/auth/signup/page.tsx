'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function SignUpPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      {/* Top Navigation Minimal Identity */}
      <header className="w-full px-margin-mobile md:px-margin-desktop py-3 flex justify-center border-b border-surface-variant/10 bg-surface/50 backdrop-blur-sm z-20">
        <Link href="/" className="font-display-lg text-[18px] font-bold tracking-tighter text-on-background cursor-pointer">
          ROOFTOP HEROES
        </Link>
      </header>

      <main className="relative flex-grow w-full flex items-center justify-center p-4 py-12 md:py-16">
        {/* Industrial Texture Background Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none grayscale bg-cover bg-center"
          style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCLMdH95jNRBKjg2-bFrd6bC5QHN0s31S2FslTY-fOGYmGMeG_3WPrQbTlx83trkC9SDlfNdDMTY30CDKEwQMO725tbfo0gdDjoqUTuqWyzL8p8dZxit4Q83W7uV8I9UXDM39NPK8MKLvmy0wAhTXtD8X5TysyMGxQwzB60FIZ6axr8MAuSVXchF5vuyijH4L_GHRCvsi-lS-QIgJCA74b27uDXnGjGlBbuLC_BvsI-xOmuNWvjMm1oOo12wtI9NfPblwIVnONpkKg)' }}
        ></div>

        {/* Compact Form Canvas */}
        <section className="relative z-10 w-full max-w-[420px] mx-auto">
          <div className="text-center mb-4">
            <span className="font-label-caps text-[9px] text-primary tracking-[0.2em] mb-1 block uppercase">Authentication</span>
            <h1 className="font-display-lg text-[32px] md:text-[36px] leading-none font-bold tracking-tighter text-on-background mb-1 uppercase">
              CREATE ACCOUNT
            </h1>
            <p className="font-body-md text-[13px] text-on-surface-variant opacity-70">Join the architectural elite.</p>
          </div>

          <div className="bg-surface p-6 border border-surface-variant/20 shadow-sm space-y-4">
            {/* Toggle Control */}
            <div className="flex border-b border-surface-variant">
              <Link href="/auth/signin" className="flex-1 py-2 text-center font-label-caps text-[10px] border-b-2 border-transparent text-on-surface-variant opacity-50 hover:opacity-100 transition-all cursor-pointer">SIGN IN</Link>
              <Link href="/auth/signup" className="flex-1 py-2 text-center font-label-caps text-[10px] border-b-2 border-on-background text-on-background transition-all cursor-pointer">CREATE ACCOUNT</Link>
            </div>

            {/* Input Fields */}
            <form className="space-y-3">
              <div className="group space-y-0.5">
                <label className="font-label-caps text-[9px] tracking-widest text-on-surface-variant opacity-60 uppercase transition-colors group-focus-within:text-primary-container">FULL NAME</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-surface-variant py-2 font-body-md text-on-background focus:ring-0 focus:border-primary-container placeholder:text-surface-variant/50 transition-all outline-none"
                  placeholder="Architect John Doe" 
                  type="text" 
                />
              </div>
              <div className="group space-y-0.5">
                <label className="font-label-caps text-[9px] tracking-widest text-on-surface-variant opacity-60 uppercase transition-colors group-focus-within:text-primary-container">WORK EMAIL</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-surface-variant py-2 font-body-md text-on-background focus:ring-0 focus:border-primary-container placeholder:text-surface-variant/50 transition-all outline-none"
                  placeholder="name@rooftopheroes.com" 
                  type="email" 
                />
              </div>
              <div className="group space-y-0.5">
                <label className="font-label-caps text-[9px] tracking-widest text-on-surface-variant opacity-60 uppercase transition-colors group-focus-within:text-primary-container">CREATE PASSWORD</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-surface-variant py-2 font-body-md text-on-background focus:ring-0 focus:border-primary-container placeholder:text-surface-variant/50 transition-all outline-none"
                  placeholder="••••••••" 
                  type="password" 
                />
              </div>
              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer group">
                  <input className="mt-1 w-3 h-3 border-surface-variant text-on-background focus:ring-0 rounded-none bg-transparent cursor-pointer" type="checkbox" />
                  <span className="font-label-caps text-[8px] text-on-surface-variant opacity-70 group-hover:opacity-100 transition-opacity uppercase leading-tight">
                    I agree to the industrial terms and data protection policies.
                  </span>
                </label>
              </div>

              {/* Primary Action Button */}
              <Button variant="form-cta" type="submit" className="py-3">
                REGISTER PROFILE
              </Button>
            </form>

            {/* Alternative Methods */}
            <div className="relative flex items-center justify-center">
              <span className="absolute bg-surface px-2 font-label-caps text-[8px] text-surface-variant z-10 uppercase">OR REGISTER WITH</span>
              <hr className="w-full border-surface-variant/30" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="border border-surface-variant py-2 flex items-center justify-center gap-2 hover:bg-on-background hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[14px]">domain</span>
                <span className="font-label-caps text-[9px]">GOOGLE</span>
              </button>
              <button className="border border-surface-variant py-2 flex items-center justify-center gap-2 hover:bg-on-background hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[14px]">architecture</span>
                <span className="font-label-caps text-[9px]">BUILDER ID</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Identity */}
      <footer className="w-full border-t border-surface-variant/20 bg-surface z-20">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 gap-4 max-w-container-max mx-auto">
          <Link href="/" className="font-display-lg text-[14px] font-bold tracking-tighter text-on-background cursor-pointer">
            ROOFTOP HEROES
          </Link>
          <p className="font-label-caps text-[8px] opacity-50 tracking-widest uppercase text-center hidden md:block">
            © 2024 ROOFTOP HEROES. ENGINEERED PERMANENCE.
          </p>
          <div className="flex gap-4">
            <Link className="font-label-caps text-[9px] opacity-70 hover:opacity-100 hover:text-primary transition-all cursor-pointer" href="#">PRIVACY</Link>
            <Link className="font-label-caps text-[9px] opacity-70 hover:opacity-100 hover:text-primary transition-all cursor-pointer" href="#">TERMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
