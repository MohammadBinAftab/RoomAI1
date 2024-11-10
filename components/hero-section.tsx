'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Space with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Redesign your room instantly using advanced AI technology
          </p>
          <Button
            size="lg"
            onClick={() => router.push('/dashboard')}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Redesign Your Room
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
              alt="Modern living room"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616137466211-f939a420be84"
              alt="Minimalist bedroom"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616137466211-f939a420be84"
              alt="Modern kitchen"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}