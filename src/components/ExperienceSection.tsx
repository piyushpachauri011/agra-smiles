import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import waitingRoom from '@/assets/waiting-room.jpg';
import treatmentRoom from '@/assets/treatment-room.jpg';
import consultation from '@/assets/consultation.jpg';

const images = [
  {
    src: waitingRoom,
    alt: 'Comfortable waiting area with modern decor',
    title: 'Relaxing Waiting Area',
  },
  {
    src: treatmentRoom,
    alt: 'State-of-the-art treatment room',
    title: 'Modern Treatment Room',
  },
  {
    src: consultation,
    alt: 'Doctor consulting with patient',
    title: 'Personal Consultations',
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
              Our Space
            </span>
            <h2 className="section-title mb-6">
              A calming space for your smile
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Step into our clinic and feel the difference. We've designed every corner 
              to help you relax, from our comfortable waiting area to our modern treatment 
              rooms. Our goal is to make dental visits something you look forward to, 
              not dread.
            </p>
            <ul className="space-y-4">
              {[
                'Comfortable, spa-like atmosphere',
                'Private treatment rooms for your comfort',
                'Child-friendly environment',
                'Calming music and ambient lighting',
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.title}
                className={`relative overflow-hidden rounded-2xl ${
                  index === 0 ? 'col-span-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover ${
                    index === 0 ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-medium">
                    {image.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
