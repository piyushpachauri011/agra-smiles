import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap, Heart, Clock } from 'lucide-react';
import doctorImage from '@/assets/doctor-portrait.jpg';

const credentials = [
  { icon: GraduationCap, text: 'BDS from reputed dental college' },
  { icon: Award, text: '10+ years of clinical experience' },
  { icon: Heart, text: 'Dedicated to gentle, patient-first care' },
  { icon: Clock, text: 'Timely, efficient treatments' },
];

export function AboutDoctorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-3" />
              <img
                src={doctorImage}
                alt="Dr. Kushal Singh - Dentist in Agra"
                className="relative rounded-3xl shadow-card-hover w-full object-cover aspect-square"
              />
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg"
              >
                <p className="text-3xl font-display font-bold">10+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
              Meet Your Dentist
            </span>
            <h2 className="section-title mb-6">
              Dr. Kushal Singh
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Dr. Kushal Singh is a dedicated dental professional who believes that every patient 
              deserves personalized, compassionate care. With over a decade of experience serving 
              families in Agra, he combines modern techniques with a gentle approach to make 
              dental visits a positive experience.
            </p>
            <p className="text-muted-foreground mb-8">
              "My goal is simple – to help you achieve a healthy, beautiful smile in a comfortable 
              environment. I take time to listen to your concerns, explain your options clearly, 
              and ensure you feel confident in your treatment plan."
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
