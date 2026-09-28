'use client';

import { motion } from 'framer-motion';
import Countdown from '../ui/Countdown';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section
      className="hero-bg relative min-h-screen text-white flex items-center justify-center overflow-hidden pt-[120px] pb-16"
      id="hero"
      aria-label="Hero section"
    >
      {/* Diagonal light beam */}
      <div
        className="absolute w-[650px] h-[3px] bg-gradient-to-r from-[#19a7ff] via-[#7c3aed] to-[#f59e0b] -right-[80px] top-[45%] -rotate-[28deg] shadow-[0_0_30px_#2994ff] pointer-events-none z-0 max-[800px]:-right-[300px] max-[800px]:top-[50%]"
        aria-hidden="true"
      />

      <div className="wrap relative z-10 w-full flex">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-left"
        >
          <motion.div
            className="text-[11px] sm:text-xs tracking-[0.22em] uppercase font-extrabold text-[#2e89ff] mb-5 drop-shadow-[0_0_20px_rgba(112,174,255,0.2)]"
            variants={fadeUp}
          >
            Intelligent Imaging &amp; Vision Systems
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-[-0.06em] leading-[0.94] mb-6"
            variants={fadeUp}
          >
            From{' '}
            <span className="bg-gradient-to-r from-white via-[#62a7ff] to-[#f59e0b] bg-clip-text text-transparent">
              Light
            </span>
            <br />
            to Intelligence.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg leading-relaxed text-[#b9c7d9] max-w-[620px] mb-8 font-light"
            variants={fadeUp}
          >
            LUXION develops intelligent camera payload systems that enable autonomous machines to see, understand and eventually act.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#products"
              className="inline-block px-6 py-3.5 rounded-full font-bold text-sm bg-white text-[#07111f] hover:bg-[#f0f0f5] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              Explore Payloads
            </a>
            <a
              href="#vision"
              className="inline-block px-6 py-3.5 rounded-full font-bold text-sm border border-white/30 text-white hover:border-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Discover LUXION
            </a>
          </motion.div>

          <motion.div className="w-full max-w-[580px] mb-4" variants={fadeUp}>
            <Countdown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
