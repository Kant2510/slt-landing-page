import { motion } from 'framer-motion';
import './Applications.css';

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
    <section className="applications-section" id="applications" aria-label="Applications">
      <div className="wrap">
        <motion.div
          className="dark"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="kicker">Applications</div>
          <h2>Vision for the low-altitude economy.</h2>
          <p style={{ marginBottom: '25px' }}>
            LUXION payloads are designed for the next generation of autonomous platforms across industrial inspection, public safety, mapping, infrastructure and intelligent mobility.
          </p>
          <div className="pills">
            {pillsList.map((pill) => (
              <span key={pill} className="pill">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
