import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Stethoscope, 
  Wrench, 
  Sparkles,
  ShieldCheck,
  Smile,
  Brush
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'Preventive Care',
    icon: ShieldCheck,
    color: 'bg-primary-light text-primary',
    services: [
      { name: 'Routine Check-ups', desc: 'Comprehensive oral examinations' },
      { name: 'Professional Cleaning', desc: 'Deep cleaning and scaling' },
      { name: 'Dental X-rays', desc: 'Digital imaging for accurate diagnosis' },
      { name: 'Fluoride Treatment', desc: 'Strengthen and protect enamel' },
    ],
  },
  {
    title: 'Restorative Dentistry',
    icon: Wrench,
    color: 'bg-accent/20 text-accent',
    services: [
      { name: 'Dental Fillings', desc: 'Tooth-colored composite fillings' },
      { name: 'Root Canal Treatment', desc: 'Pain-free endodontic care' },
      { name: 'Dental Crowns', desc: 'Custom ceramic crowns' },
      { name: 'Bridges & Dentures', desc: 'Replace missing teeth' },
    ],
  },
  {
    title: 'Cosmetic Dentistry',
    icon: Sparkles,
    color: 'bg-secondary text-secondary-foreground',
    services: [
      { name: 'Teeth Whitening', desc: 'Professional brightening treatment' },
      { name: 'Smile Makeover', desc: 'Complete smile transformation' },
      { name: 'Veneers', desc: 'Porcelain shells for perfect teeth' },
      { name: 'Tooth Bonding', desc: 'Repair chips and cracks' },
    ],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="section-title mb-6">
            Complete dental care in one clinic
          </h2>
          <p className="section-subtitle mx-auto">
            From routine check-ups to advanced treatments, we provide comprehensive 
            dental services for the whole family under one roof.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + serviceIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <div>
                        <span className="font-medium text-foreground block">
                          {service.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {service.desc}
                        </span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
