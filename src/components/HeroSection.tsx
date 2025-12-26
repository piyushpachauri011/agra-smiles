import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-clinic.jpg';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-gentle" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-6"
            >
              Modern Dentistry in Agra
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold text-foreground leading-tight mb-6"
            >
              Rediscover a{' '}
              <span className="text-primary">calm, confident</span> smile
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Experience a modern, stress-free dental journey at our patient-friendly clinic. 
              We're here to care for you and your family in Agra, Uttar Pradesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" onClick={scrollToContact}>
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="tel:+919837712777">
                  <Phone className="w-5 h-5" />
                  Call: +91 98377 12777
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Gentle Care</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Modern Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Family Friendly</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.img
                src={heroImage}
                alt="Modern dental clinic interior with calming atmosphere"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -left-8 bottom-12 bg-background/95 backdrop-blur-sm rounded-2xl p-5 shadow-card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                    <span className="text-2xl">😊</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">1000+</p>
                    <p className="text-sm text-muted-foreground">Happy Patients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
