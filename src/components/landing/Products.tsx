'use client';

import { motion } from 'framer-motion';

export default function Products() {
  const scrollToContact = () => {
    const el = document.getElementById('email-signup');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20 md:py-28" id="products" aria-label="Products">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          className="h-[320px] md:h-[460px] rounded-[28px] relative overflow-hidden shadow-[0_20px_40px_rgba(7,17,31,0.15)] bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.47),transparent_18%),linear-gradient(145deg,#07111f,#162a44)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Inner circle effect */}
          <div
            className="absolute w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] border-[3px] border-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_20px_rgba(255,255,255,0.05),0_0_70px_rgba(37,99,235,0.33)] pointer-events-none"
            aria-hidden="true"
          />
          {/* Inner diagonal beam */}
          <div
            className="absolute w-[320px] sm:w-[400px] h-[4px] bg-gradient-to-r from-[#19a7ff] via-[#7c3aed] to-[#f59e0b] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[28deg] shadow-[0_0_25px_#2994ff] pointer-events-none"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#2563eb] text-xs font-extrabold tracking-[0.22em] uppercase mb-3">
            Payload Platform
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.045em] text-[#07111f] leading-tight mb-4">
            LUXION X-Series
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed mb-6">
            Compact, stabilized imaging payloads engineered for professional UAV and robotic platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-7">
            <div className="p-4 bg-white border border-[#e5eaf0] rounded-[15px] hover:border-[#2563eb]/20 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <strong className="block text-[#07111f] text-sm sm:text-base font-bold">10A- Optical</strong>
              <span className="block text-[#64748b] text-xs sm:text-sm mt-1">Long-range imaging</span>
            </div>
            <div className="p-4 bg-white border border-[#e5eaf0] rounded-[15px] hover:border-[#2563eb]/20 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <strong className="block text-[#07111f] text-sm sm:text-base font-bold">20A- Optical</strong>
              <span className="block text-[#64748b] text-xs sm:text-sm mt-1">Extended observation</span>
            </div>
            <div className="p-4 bg-white border border-[#e5eaf0] rounded-[15px] hover:border-[#2563eb]/20 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <strong className="block text-[#07111f] text-sm sm:text-base font-bold">3-Axis Gimbal</strong>
              <span className="block text-[#64748b] text-xs sm:text-sm mt-1">Stabilized payload</span>
            </div>
            <div className="p-4 bg-white border border-[#e5eaf0] rounded-[15px] hover:border-[#2563eb]/20 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <strong className="block text-[#07111f] text-sm sm:text-base font-bold">Open Integration</strong>
              <span className="block text-[#64748b] text-xs sm:text-sm mt-1">Developer ready</span>
            </div>
          </div>

          <button
            className="inline-block px-6 py-3.5 rounded-full font-bold text-sm bg-[#07111f] text-white hover:bg-[#112238] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 cursor-pointer"
            type="button"
            onClick={scrollToContact}
          >
            Request Product Info
          </button>
        </motion.div>
      </div>
    </section>
  );
}
