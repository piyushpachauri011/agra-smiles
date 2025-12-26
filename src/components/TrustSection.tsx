import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Shield, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Honest, Clear Treatment Plans',
    description: 'We explain every step clearly so you understand your care completely. No surprises, just transparency.',
  },
  {
    icon: Shield,
    title: 'Gentle, Anxiety-Free Care',
    description: 'Your comfort matters. We use gentle techniques and take our time to ensure a stress-free experience.',
  },
  {
    icon: Sparkles,
    title: 'Modern Equipment & Safe Procedures',
    description: 'State-of-the-art technology combined with strict hygiene protocols for the best possible outcomes.',
  },
  {
    icon: Users,
    title: 'Friendly Team That Listens',
    description: 'Our caring staff speaks Hindi and English, always ready to address your concerns and answer questions.',
  },
];

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title mb-6">
            Dentistry that puts you at ease
          </h2>
          <p className="section-subtitle mx-auto">
            At Dr. Kushal Singh Dental Clinic, we believe dental care should be comfortable, 
            transparent, and tailored to your unique needs.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
