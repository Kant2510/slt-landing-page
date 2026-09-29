'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// 90 days target
const TARGET_TIMESTAMP = Date.now() + 90 * 24 * 60 * 60 * 1000;

function calculateTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 sm:p-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl backdrop-blur-md min-w-[76px] sm:min-w-[105px] hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300 w-full sm:w-auto">
      <div className="font-display text-2xl sm:text-4xl font-bold leading-none tracking-tight text-white drop-shadow-[0_0_15px_rgba(25,167,255,0.25)]">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-[#64748b]">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 90,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(TARGET_TIMESTAMP));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TARGET_TIMESTAMP));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative z-[1] py-6 flex justify-center w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-[580px] max-[600px]:grid max-[600px]:grid-cols-2 max-[600px]:gap-3">
        <CountdownUnit value={mounted ? timeLeft.days : 90} label="Days" />
        <span className="hidden sm:inline-block font-display text-2xl text-white/20 select-none -mt-5" aria-hidden="true">
          :
        </span>
        <CountdownUnit value={mounted ? timeLeft.hours : 0} label="Hours" />
        <span className="hidden sm:inline-block font-display text-2xl text-white/20 select-none -mt-5" aria-hidden="true">
          :
        </span>
        <CountdownUnit value={mounted ? timeLeft.minutes : 0} label="Minutes" />
        <span className="hidden sm:inline-block font-display text-2xl text-white/20 select-none -mt-5" aria-hidden="true">
          :
        </span>
        <CountdownUnit value={mounted ? timeLeft.seconds : 0} label="Seconds" />
      </div>
    </motion.div>
  );
}
