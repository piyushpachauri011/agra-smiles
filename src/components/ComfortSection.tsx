import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Monitor, 
  Leaf, 
  Heart, 
  MessageCircle,
  ShieldCheck,
  Clock
} from 'lucide-react';

const amenities = [
  {
    icon: Monitor,
    title: 'Modern Equipment',
    description: 'Latest dental technology for precise treatment',
  },
  {
    icon: Heart,
    title: 'Gentle Approach',
    description: 'Careful, pain-minimizing techniques',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Environment',
    description: 'Strict sterilization and safety protocols',
  },
  {
    icon: MessageCircle,
    title: 'Bilingual Staff',
    description: 'Guidance in Hindi and English',
  },
  {
    icon: Clock,
    title: 'Flexible Timing',
    description: 'Convenient appointment scheduling',
  },
  {
    icon: Leaf,
    title: 'Calming Ambience',
    description: 'Relaxing atmosphere to ease anxiety',
  },
];

export function ComfortSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
            Your Comfort
          </span>
          <h2 className="section-title mb-6">
            Comfort in every visit
          </h2>
          <p className="section-subtitle mx-auto">
            We've thought of everything to make your dental experience as 
            pleasant and comfortable as possible.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-start gap-4 p-6 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <amenity.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {amenity.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
