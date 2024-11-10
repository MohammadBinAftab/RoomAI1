'use client';

import { signIn } from 'next-auth/react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-emerald-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome to RoomAI
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Sign in to start transforming your space
        </p>
        <Button
          onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
          className="w-full flex items-center justify-center space-x-2"
        >
          <Github className="h-5 w-5" />
          <span>Continue with GitHub</span>
        </Button>
      </div>
    </div>
  );
}