import { HeroSection } from '@/components/hero-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ExamplesSection } from '@/components/examples-section';
import { FeaturesSection } from '@/components/features-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <ExamplesSection />
      <FeaturesSection />
    </div>
  );
}