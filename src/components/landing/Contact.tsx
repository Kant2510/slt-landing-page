'use client';

import { motion } from 'framer-motion';
import EmailSignup from '../ui/EmailSignup';

export default function Contact() {
  return (
    <section className="text-center bg-linear-to-brom-[#f7f9fc] to-white py-20 md:py-28" id="contact" aria-label="Contact LUXION">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-170auto"
        >
          <div className="text-accent-blueue text-xs font-extrabold tracking-[0.22em] uppercase mb-3">
            LUXION
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.045em] text-slate-dark leading-tight mb-4">
            See beyond the image.
          </h2>
          <p className="text-muted-slate text-base sm:text-lg mb-6">
            Build the next generation of intelligent machines with LUXION.
          </p>
          <a
            className="inline-block px-7 py-3.5 rounded-full font-bold text-sm bg-slate-dark text-white hover:bg-[#112238] hover:shadow-lg transition-all duration-200 mb-8 cursor-pointer"
            href="mailto:hello@luxion.ai"
          >
            Talk to LUXION
          </a>
          <EmailSignup />
        </motion.div>
      </div>
    </section>
  );
}
