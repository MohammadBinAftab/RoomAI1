'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Paintbrush2, Home, CreditCard, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Paintbrush2 className="h-6 w-6 text-emerald-600" />
              <span className="font-bold text-xl">RoomAI</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/dashboard">
              <Button
                variant={isActive('/dashboard') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Button>
            </Link>

            <Link href="/pricing">
              <Button
                variant={isActive('/pricing') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <CreditCard className="h-4 w-4" />
                <span>Pricing</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="/dashboard" className="flex w-full">
                    Redesign
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/pricing" className="flex w-full">
                    Buy Credits
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}