import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Anita S.',
    rating: 5,
    text: 'Dr. Kushal made me feel so comfortable during my root canal. I was terrified before, but he explained everything step by step. Absolutely painless experience!',
  },
  {
    name: 'Rajesh K.',
    rating: 5,
    text: 'Best dental clinic in Agra. The clinic is spotlessly clean and the staff is incredibly friendly. My whole family gets their check-ups done here.',
  },
  {
    name: 'Priya M.',
    rating: 5,
    text: 'After years of avoiding dentists due to anxiety, I finally found a place where I feel safe. The calming environment and gentle care made all the difference.',
  },
  {
    name: 'Vikram T.',
    rating: 5,
    text: 'Got my teeth whitening done here and the results are amazing. Dr. Singh is very professional and the pricing is fair. Highly recommended!',
  },
  {
    name: 'Sunita D.',
    rating: 5,
    text: 'My children love coming here! The doctor is so patient with kids and makes the experience fun for them. Such a relief for us parents.',
  },
  {
    name: 'Amit B.',
    rating: 5,
    text: 'Modern equipment, honest advice, and no unnecessary treatments pushed. Finally found a dentist I can trust completely.',
  },
];

export function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Show 3 reviews on desktop, 1 on mobile
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="section-title mb-6">
            Patients from Agra trust us
          </h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it. Here's what our patients have to say 
            about their experience at our clinic.
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, index) => (
              <motion.div
                key={`${review.name}-${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-card relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                    <span className="font-display font-semibold text-primary">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-foreground">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Single Card */}
          <div className="lg:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-2xl p-8 shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="font-display font-semibold text-primary">
                    {reviews[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">
                  {reviews[currentIndex].name}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
