'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
  iconText: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ iconText, title, description, index }: FeatureCardProps) {
  return (
    <motion.article
      className="p-8 border border-[#e5eaf0] rounded-[22px] bg-white transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#2563eb]/20 group"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="w-[52px] h-[52px] rounded-[15px] bg-[#edf4ff] text-[#2563eb] grid place-items-center font-extrabold text-base mb-6 transition-all duration-300 group-hover:bg-[#2563eb] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)]">
        {iconText}
      </div>
      <h3 className="text-xl font-bold text-[#07111f] mb-2.5">{title}</h3>
      <p className="text-[#64748b] text-sm leading-relaxed font-normal">{description}</p>
    </motion.article>
  );
}
