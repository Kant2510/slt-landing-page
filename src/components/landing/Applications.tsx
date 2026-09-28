'use client';

import { motion } from 'framer-motion';

const pillsList = [
  'UAV & Drone',
  'Robotics',
  'Inspection',
  'Mapping',
  'Public Safety',
  'Autonomous Systems',
];

export default function Applications() {
  return (
    <section className="bg-white py-20 md:py-28" id="applications" aria-label="Applications">
      <div className="wrap">
        <motion.div
          className="bg-[#07111f] text-white rounded-[30px] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(7,17,31,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#70aeff] text-xs font-extrabold tracking-[0.22em] uppercase mb-3">
            Applications
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Vision for the low-altitude economy.
          </h2>
          <p className="text-[#b9c7d9] leading-relaxed max-w-[680px] text-sm sm:text-base mb-6">
            LUXION payloads are designed for the next generation of autonomous platforms across industrial inspection, public safety, mapping, infrastructure and intelligent mobility.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {pillsList.map((pill) => (
              <span
                key={pill}
                className="border border-white/15 px-4 py-2.5 rounded-full text-[#d7dfeb] text-xs sm:text-sm hover:border-white/40 hover:bg-white/5 hover:text-white transition-all duration-200 cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
