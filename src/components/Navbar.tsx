"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-surface/90 dark:bg-on-background/90 backdrop-blur-md border-none">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link href="/" className="font-display-lg text-body-lg font-bold tracking-tighter text-on-background dark:text-surface cursor-pointer">
          ROOFTOP HEROES
        </Link>
        <div className="hidden md:flex items-center gap-10 font-label-caps text-label-caps uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive
                    ? 'text-primary dark:text-primary-fixed font-bold border-primary'
                    : 'text-on-surface-variant dark:text-surface-variant border-transparent hover:text-primary dark:hover:text-primary-container'
                } transition-all duration-300 cursor-pointer border-b-2 pb-0.5`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" href="/auth/signin" className="hidden md:block">
            Sign In
          </Button>
          <Button href="/contact" className="scale-105 hover:scale-105 active:scale-100">
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
