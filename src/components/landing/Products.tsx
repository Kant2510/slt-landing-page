import { motion } from 'framer-motion';
import './Products.css';

export default function Products() {
  const scrollToContact = () => {
    const el = document.getElementById('email-signup');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="products-section" id="products" aria-label="Products">
      <div className="wrap product">
        <motion.div
          className="products-section__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="kicker">Payload Platform</div>
          <h2>LUXION X-Series</h2>
          <p className="lead" style={{ color: 'var(--m)' }}>
            Compact, stabilized imaging payloads engineered for professional UAV and robotic platforms.
          </p>

          <div className="products-section__specs">
            <div className="products-section__spec">
              <b>10× Optical</b>
              <span>Long-range imaging</span>
            </div>
            <div className="products-section__spec">
              <b>20× Optical</b>
              <span>Extended observation</span>
            </div>
            <div className="products-section__spec">
              <b>3-Axis Gimbal</b>
              <span>Stabilized payload</span>
            </div>
            <div className="products-section__spec">
              <b>Open Integration</b>
              <span>Developer ready</span>
            </div>
          </div>

          <button className="btn" type="button" onClick={scrollToContact}>
            Request Product Info
          </button>
        </motion.div>
      </div>
    </section>
  );
}
