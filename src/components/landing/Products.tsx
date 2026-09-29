'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const scrollToContact = () => {
    const el = document.getElementById('email-signup');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20 md:py-28" id="products" aria-label="Products">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          className="h-80 md:h-115nded-[28px] relative overflow-hidden shadow-[0_20px_40px_rgba(7,17,31,0.15)] bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.47),transparent_18%),linear-gradient(145deg,#07111f,#162a44)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Inner circle effect */}
          <div
            className="absolute w-50 h-50 sm:w-67.5 sm:h-67.5 border-[3px] border-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_20px_rgba(255,255,255,0.05),0_0_70px_rgba(37,99,235,0.33)] pointer-events-none"
            aria-hidden="true"
          />
          {/* Inner diagonal beam */}
          <div
            className="absolute w-[320px] sm:w-100 h-1 bg-linear-to-r from-[#19a7ff] via-accent-purple to-accent-amber left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] shadow-[0_0_25px_#2994ff] pointer-events-none"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-accent-blue text-xs font-extrabold tracking-[0.22em] uppercase mb-3">
            Payload Platform
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.045em] text-slate-dark leading-tight mb-4">
            LUXION X-Series
          </h2>
          <p className="text-muted-slate text-base sm:text-lg leading-relaxed mb-6">
            Compact, stabilized imaging payloads engineered for professional UAV and robotic platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-7">
            <div className="p-4 bg-white border border-[#e5eaf0] hover:border-accent-blue/20 hover:shadow-md transition-all duration-200">
              <strong className="block text-slate-dark text-sm sm:text-base font-bold">10A- Optical</strong>
              <span className="block text-muted-slate text-xs sm:text-sm mt-1">Long-range imaging</span>
            </div>
            <div className="p-4 bg-white border border-[#e5eaf0] hover:border-accent-blue/20 hover:shadow-md transition-all duration-200">
              <strong className="block text-slate-dark text-sm sm:text-base font-bold">20A- Optical</strong>
              <span className="block text-muted-slate text-xs sm:text-sm mt-1">Extended observation</span>
            </div>
            <div className="p-4 bg-white border border-[#e5eaf0] hover:border-accent-blue/20 hover:shadow-md transition-all duration-200">
              <strong className="block text-slate-dark text-sm sm:text-base font-bold">3-Axis Gimbal</strong>
              <span className="block text-muted-slate text-xs sm:text-sm mt-1">Stabilized payload</span>
            </div>
            <div className="p-4 bg-white border border-[#e5eaf0] hover:border-accent-blue/20 hover:shadow-md transition-all duration-200">
              <strong className="block text-slate-dark text-sm sm:text-base font-bold">Open Integration</strong>
              <span className="block text-muted-slate text-xs sm:text-sm mt-1">Developer ready</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-slate-dark text-white hover:bg-[#1a2d48] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Explore Full Catalog
              <ArrowRight size={16} />
            </Link>
            <button
              className="inline-block px-6 py-3.5 rounded-full font-bold text-sm border border-slate-dark/20 text-slate-dark hover:border-slate-dark hover:bg-[#f8fafc] transition-all duration-200 cursor-pointer"
              type="button"
              onClick={scrollToContact}
            >
              Request Info
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
