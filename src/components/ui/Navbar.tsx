'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const navLinks = (
    <>
      <li>
        <button
          className="font-medium text-[#d7dfeb]/85 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
          onClick={() => handleNavClick('vision')}
          type="button"
        >
          About
        </button>
      </li>
      <li>
        <button
          className="font-medium text-[#d7dfeb]/85 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
          onClick={() => handleNavClick('technology')}
          type="button"
        >
          Technology
        </button>
      </li>
      <li>
        <Link
          href="/products"
          onClick={() => setMobileOpen(false)}
          className={`font-medium transition-colors duration-200 cursor-pointer text-sm ${
            pathname.startsWith('/products') ? 'text-[#38bdf8] font-bold' : 'text-[#d7dfeb]/85 hover:text-white'
          }`}
        >
          Products
        </Link>
      </li>
      <li>
        <button
          className="font-medium text-[#d7dfeb]/85 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
          onClick={() => handleNavClick('applications')}
          type="button"
        >
          Applications
        </button>
      </li>
      <li>
        <button
          className="border border-white/30 px-4 py-2 rounded-full text-white text-xs font-semibold hover:border-white hover:bg-white/10 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          onClick={() => handleNavClick('email-signup')}
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
          scrolled || pathname !== '/'
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
          <Link
            href="/"
            className="cursor-pointer focus:outline-none"
            onClick={() => setMobileOpen(false)}
          >
            <Logo width={130} />
          </Link>

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