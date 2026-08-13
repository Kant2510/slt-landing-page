import { motion } from 'framer-motion';
import Countdown from '../ui/Countdown';
import './Hero.css';

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
    <section className="hero" id="hero" aria-label="Hero section">

      <div className="hero__inner wrap">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__eyebrow" variants={fadeUp}>
            Intelligent Imaging & Vision Systems
          </motion.div>

          <motion.h1 variants={fadeUp}>
            From <span>Light</span>
            <br />
            to Intelligence.
          </motion.h1>

          <motion.p className="hero__subtitle" variants={fadeUp}>
            LUXION develops intelligent camera payload systems that enable autonomous machines to see, understand and eventually act.
          </motion.p>

          <motion.a className="btn primary" href="#products">Explore Payloads</motion.a>
          <motion.a className="btn secondary" href="#vision">Discover LUXION</motion.a>

          <motion.div className="hero__countdown-container" variants={fadeUp}>
            <Countdown />
          </motion.div>

          {/*<motion.div className="hero__signup-container" variants={fadeUp}>
            <EmailSignup />
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
