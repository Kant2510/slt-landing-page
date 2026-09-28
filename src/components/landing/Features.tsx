'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const techCards = [
  {
    iconText: 'EO',
    title: 'Electro-Optical',
    description: 'Long-range visual imaging for inspection, mapping, surveillance and industrial applications.',
  },
  {
    iconText: 'IR',
    title: 'Thermal & IR',
    description: 'Expand perception beyond visible light for low-light and thermal sensing applications.',
  },
  {
    iconText: 'AI',
    title: 'Intelligent Vision',
    description: 'Move from image capture toward analytics, perception and machine intelligence.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-[#f6f8fb]" id="technology" aria-label="Technology">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#2563eb] text-xs font-extrabold tracking-[0.22em] uppercase mb-3">
            Technology
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.045em] text-[#07111f] leading-tight mb-4">
            Built for machines<br />that need to see.
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed max-w-[680px]">
            A scalable imaging architecture for UAVs, robotics and autonomous systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {techCards.map((card, index) => (
            <FeatureCard
              key={card.iconText}
              iconText={card.iconText}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
