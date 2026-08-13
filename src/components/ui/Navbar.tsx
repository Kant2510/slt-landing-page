import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

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
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = (
    <>
      <li>
        <a className="navbar__link" onClick={() => scrollToSection('vision')} role="button" tabIndex={0}>
          About
        </a>
      </li>
      <li>
        <a className="navbar__link" onClick={() => scrollToSection('technology')} role="button" tabIndex={0}>
          Technology
        </a>
      </li>
      <li>
        <a className="navbar__link" onClick={() => scrollToSection('products')} role="button" tabIndex={0}>
          Products
        </a>
      </li>
      <li>
        <a className="navbar__link" onClick={() => scrollToSection('applications')} role="button" tabIndex={0}>
          Applications
        </a>
      </li>
      <li>
        <button className="navbar__cta" onClick={() => scrollToSection('email-signup')} type="button">
          Notify Me
        </button>
      </li>
    </>
  );

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner wrap">
          <div className="navbar__logo" onClick={() => scrollToSection('hero')}>
            <Logo width="130px" />
          </div>

          <ul className="navbar__links">
            {navLinks}
          </ul>

          <button
            className="navbar__hamburger"
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
            className="navbar__mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="navbar__mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <X size={28} />
            </button>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              {navLinks}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
