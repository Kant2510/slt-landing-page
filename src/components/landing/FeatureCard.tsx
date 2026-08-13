import { motion } from 'framer-motion';
import './FeatureCard.css';

interface FeatureCardProps {
  iconText: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ iconText, title, description, index }: FeatureCardProps) {
  return (
    <motion.article
      className="feature-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="feature-card__icon">{iconText}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </motion.article>
  );
}
