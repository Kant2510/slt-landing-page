import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import './Features.css';

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
    <section className="features" id="technology" aria-label="Technology">
      <div className="features__inner wrap">
        <motion.div
          className="features__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="kicker">Technology</div>
          <h2>Built for machines<br />that need to see.</h2>
          <p className="lead">
            A scalable imaging architecture for UAVs, robotics and autonomous systems.
          </p>
        </motion.div>

        <div className="grid">
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
