import { motion } from 'framer-motion';
import './Contact.css';
import EmailSignup from '../ui/EmailSignup';

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-label="Contact LUXION">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="kicker">LUXION</div>
          <h2>See beyond the image.</h2>
          <p>Build the next generation of intelligent machines with LUXION.</p>
          <a className="btn" href="mailto:hello@luxion.ai">
            Talk to LUXION
          </a>
          <EmailSignup />
        </motion.div>
      </div>
    </section>
  );
}
