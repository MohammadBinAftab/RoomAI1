'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 9.99,
    credits: 50,
    features: [
      'Basic room redesigns',
      'Standard resolution',
      'Email support',
      '5 styles per room',
    ],
    priceId: 'price_starter',
  },
  {
    name: 'Pro',
    price: 19.99,
    credits: 150,
    features: [
      'Advanced room redesigns',
      'HD resolution',
      'Priority support',
      '15 styles per room',
    ],
    priceId: 'price_pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 49.99,
    credits: 500,
    features: [
      'Premium room redesigns',
      '4K resolution',
      '24/7 support',
      'Unlimited styles',
    ],
    priceId: 'price_enterprise',
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const onSubscribe = async (priceId: string) => {
    try {
      setLoading(priceId);
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your design needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                plan.popular
                  ? 'ring-2 ring-emerald-500 scale-105 transform'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="text-emerald-500 text-sm font-semibold mb-2">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.credits} credits/month</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => onSubscribe(plan.priceId)}
                disabled={loading === plan.priceId}
              >
                {loading === plan.priceId ? 'Processing...' : 'Subscribe Now'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}