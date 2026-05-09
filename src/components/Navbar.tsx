"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  const mobileMenu = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: '#f9f9f9',
            paddingTop: '7rem',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100vw',
            height: '100vh',
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[36px] font-display-lg leading-[1.1] tracking-tighter uppercase ${pathname === link.href ? 'text-primary' : 'text-on-background'
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 mt-auto"
          >
            <div className="h-px w-full mb-6" style={{ backgroundColor: 'rgba(26,28,28,0.1)' }} />
            <Button variant="ghost" href="/auth/signin" className="w-full text-body-md py-3" onClick={() => setIsOpen(false)}>
              Sign In
            </Button>
            <Button href="/contact" className="w-full text-body-md py-3" onClick={() => setIsOpen(false)}>
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="sticky top-0 w-full bg-surface/90 dark:bg-on-background/90 backdrop-blur-md border-none" style={{ zIndex: 1001 }}>
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto relative z-[101]">
          <Link
            href="/"
            className="font-display-lg text-body-lg font-bold tracking-tighter text-on-background dark:text-surface cursor-pointer z-[102]"
            onClick={() => setIsOpen(false)}
          >
            ROOFTOP HEROES
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 font-label-caps text-label-caps uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${isActive
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
            <div className="hidden lg:flex gap-4">
              <Button variant="ghost" href="/auth/signin">
                Sign In
              </Button>
              <Button href="/contact" className="scale-105 hover:scale-105 active:scale-100">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ zIndex: 1001, position: 'relative' }}
              className="lg:hidden p-2 text-on-background dark:text-surface focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="relative w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: -6 },
                    open: { rotate: 45, y: 0 },
                  }}
                  style={{ height: '2px' }}
                  className="absolute w-6 bg-current rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1, x: 0 },
                    open: { opacity: 0, x: -20 },
                  }}
                  style={{ height: '2px' }}
                  className="absolute w-6 bg-current rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 6 },
                    open: { rotate: -45, y: 0 },
                  }}
                  style={{ height: '2px' }}
                  className="absolute w-6 bg-current rounded-full"
                />
              </motion.div>
            </button>
          </div>
        </nav>
      </header>

      {/* Portal: renders directly in <body>, escaping sticky header's stacking context */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Navbar;