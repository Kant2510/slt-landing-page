import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Countdown.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE.getTime() - now);

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
    <div className="countdown__unit">
      <div className="countdown__number">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-block' }}
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="countdown__label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="countdown"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="countdown__inner">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <span className="countdown__separator" aria-hidden="true">:</span>
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <span className="countdown__separator" aria-hidden="true">:</span>
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <span className="countdown__separator" aria-hidden="true">:</span>
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </motion.div>
  );
}
