'use client';

import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="bg-white py-20 md:py-28" id="vision" aria-label="Brand Vision">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#2563eb] text-xs font-extrabold tracking-[0.22em] uppercase mb-3">
            The meaning behind LUXION
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.045em] text-[#07111f] leading-tight mb-5">
            Light becomes intelligence.
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed mb-5">
            <strong className="text-[#07111f] font-bold">LUX</strong> represents Light — the foundation of optical vision and imaging.{' '}
            <strong className="text-[#07111f] font-bold">ION</strong> represents Intelligence — the technology that transforms what machines see into meaningful information.
          </p>
          <div className="w-[190px] h-[2px] bg-gradient-to-r from-[#19a7ff] via-[#7c3aed] to-[#f59e0b] my-7" />
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed">
            LUXION is more than a camera. It is a technology platform for machines that need to see, understand and act.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-[#091421] to-[#152944] rounded-[28px] min-h-[380px] md:min-h-[420px] p-8 md:p-12 text-white relative overflow-hidden shadow-[0_20px_40px_rgba(7,17,31,0.15)] flex flex-col justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Accent circles in card background */}
          <div
            className="absolute w-[310px] h-[310px] border-2 border-[#4297ff]/30 rounded-full -right-[50px] top-[45px] shadow-[inset_0_0_0_40px_rgba(66,151,255,0.04),inset_0_0_0_85px_rgba(66,151,255,0.04)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="text-[#70aeff] text-xs font-extrabold tracking-[0.22em] uppercase mb-2 relative z-10">
            Brand Essence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3 relative z-10">
            Seeing.<br />Understanding.<br />Acting.
          </h2>
          <div className="w-[190px] h-[2px] bg-gradient-to-r from-[#19a7ff] via-[#7c3aed] to-[#f59e0b] my-5 relative z-10" />
          <p className="text-[#b9c7d9] text-sm sm:text-base leading-relaxed relative z-10">
            Optical sensing is the first step. Intelligence is what turns visual data into decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
