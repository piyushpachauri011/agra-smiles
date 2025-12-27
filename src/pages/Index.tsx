import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { AboutDoctorSection } from '@/components/AboutDoctorSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ComfortSection } from '@/components/ComfortSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { LocationSection } from '@/components/LocationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutDoctorSection />
      <ExperienceSection />
      <ServicesSection />
      <ComfortSection />
      <ReviewsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;