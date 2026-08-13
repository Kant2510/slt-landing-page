import { motion } from 'framer-motion';
import './Vision.css';

export default function Vision() {
  return (
    <section className="vision-section" id="vision" aria-label="Brand Vision">
      <div className="wrap split">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="kicker">The meaning behind LUXION</div>
          <h2>Light becomes intelligence.</h2>
          <p className="lead" style={{ color: 'var(--m)', marginBottom: '20px' }}>
            <b>LUX</b> represents Light — the foundation of optical vision and imaging.{' '}
            <b>ION</b> represents Intelligence — the technology that transforms what machines see into meaningful information.
          </p>
          <div className="line"></div>
          <p className="lead" style={{ color: 'var(--m)' }}>
            LUXION is more than a camera. It is a technology platform for machines that need to see, understand and act.
          </p>
        </motion.div>

        <motion.div
          className="vision-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="kicker">Brand Essence</div>
          <h2>Seeing.<br />Understanding.<br />Acting.</h2>
          <div className="line"></div>
          <p>Optical sensing is the first step. Intelligence is what turns visual data into decisions.</p>
        </motion.div>
      </div>
    </section>
  );
}
