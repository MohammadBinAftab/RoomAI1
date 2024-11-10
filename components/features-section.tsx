'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const features = [
  {
    image: '/features/feature-1.jpg',
    title: 'Multiple Style Options',
    description: 'Choose from various design styles to match your taste.',
  },
  {
    image: '/features/feature-2.jpg',
    title: 'Instant Generation',
    description: 'Get AI-powered design suggestions in seconds.',
  },
  {
    image: '/features/feature-3.jpg',
    title: 'Customization',
    description: 'Fine-tune the generated designs to your preferences.',
  },
];

export function FeaturesSection() {
  const router = useRouter();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${
                  index === 2 ? 'sm:col-span-2' : ''
                } bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the future of interior design with our AI-powered platform.
            </p>
            <Button
              size="lg"
              onClick={() => router.push('/dashboard')}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Try It Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}