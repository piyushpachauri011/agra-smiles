import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
              Find Us
            </span>
            <h2 className="section-title mb-6">
              Visit us in Agra
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conveniently located in Agra, Uttar Pradesh. We're easily accessible 
              and ready to welcome you for your next dental appointment.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    Dr. Kushal Singh Dental Clinic<br />
                    Agra, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Phone / WhatsApp
                  </h3>
                  <a 
                    href="tel:+919837712777" 
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    +91 98377 12777
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Working Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <a 
                  href="https://maps.google.com/?q=Agra,Uttar+Pradesh,India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+919837712777">
                  <Phone className="w-5 h-5" />
                  Call: +91 98377 12777
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/3] bg-secondary rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.76504412947!2d77.9234!3d27.1767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Kushal Singh Dental Clinic Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Overlay Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-card-hover hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Agra, UP</p>
                  <p className="text-sm text-muted-foreground">Easy to reach</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
