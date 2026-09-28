'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = (
    <>
      <li>
        <a
          className="font-medium text-[#d7dfeb]/85 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
          onClick={() => scrollToSection('vision')}
          role="button"
          tabIndex={0}
        >
          About
        </a>
      </li>
      <li>
        <a
          className="font-medium text-[#d7dfeb]/85 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
          onClick={() => scrollToSection('technology')}
          role="button"
          tabIndex={0}
        >
          Technology
        </a>
      </li>
      <li>
        <a
          className="font-medium text-[#d7dfeb]/85 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
          onClick={() => scrollToSection('products')}
          role="button"
          tabIndex={0}
        >
          Products
        </a>
      </li>
      <li>
        <a
          className="font-medium text-[#d7dfeb]/85 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
          onClick={() => scrollToSection('applications')}
          role="button"
          tabIndex={0}
        >
          Applications
        </a>
      </li>
      <li>
        <button
          className="border border-white/30 px-4 py-2 rounded-full text-white text-xs font-semibold hover:border-white hover:bg-white/10 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          onClick={() => scrollToSection('email-signup')}
          type="button"
        >
          Notify Me
        </button>
      </li>
    </>
  );

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[82px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'scrolled-navbar-bg backdrop-blur-[20px] shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="wrap flex items-center justify-between w-full">
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
            role="button"
            tabIndex={0}
          >
            <Logo width={130} />
          </div>

          <ul className="hidden md:flex items-center gap-7 text-[#d7dfeb] text-sm list-none">
            {navLinks}
          </ul>

          <button
            className="md:hidden text-white p-2 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[101] bg-[#07111f]/98 backdrop-blur-[30px] flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 text-white p-2 hover:opacity-80 cursor-pointer"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <X size={28} />
            </button>
            <ul className="list-none flex flex-col items-center gap-6 text-lg">
              {navLinks}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
