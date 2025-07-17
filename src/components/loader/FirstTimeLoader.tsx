'use client';

import { useEffect, useState } from 'react';
import { loaderConfig } from '../../config/loader';

interface FirstTimeLoaderProps {
  onLoadingComplete?: () => void;
}

export default function FirstTimeLoader({ onLoadingComplete }: FirstTimeLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple fixed duration from config
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, loaderConfig.routing.firstTimeHomeDuration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-foreground/5">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          
          {/* Brand Name */}
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
            Sam&apos;s Portfolio
          </div>
          
          {/* Subtitle */}
          <div className="text-lg md:text-xl text-foreground/70">
            Full-Stack Developer & Designer
          </div>

          {/* Simple Circular Progress */}
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 border-4 border-foreground/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-foreground rounded-full animate-spin"></div>
          </div>

          {/* Simple Status */}
          <div className="text-sm text-foreground/60">
            Welcome to my portfolio...
          </div>
        </div>
      </div>
    </div>
  );
}
