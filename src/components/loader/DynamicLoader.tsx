'use client';

import { useEffect, useState, useRef } from 'react';
import { calculateDynamicDuration } from '../../config/loader';

interface DynamicLoaderProps {
  onLoadingComplete?: () => void;
}

export default function DynamicLoader({ onLoadingComplete }: DynamicLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const startTime = startTimeRef.current;

    // Track page loading events
    const handleLoad = () => setIsPageReady(true);
    const handleDOMContentLoaded = () => setIsPageReady(true);

    // Check initial state
    if (document.readyState === 'complete') {
      setIsPageReady(true);
    }

    window.addEventListener('load', handleLoad);
    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    // Check completion based on duration logic
    const checkComplete = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const duration = calculateDynamicDuration(isPageReady, elapsed);
      
      // Complete when duration logic is satisfied
      if (elapsed >= duration) {
        clearInterval(checkComplete);
        setIsLoading(false);
        onLoadingComplete?.();
      }
    }, 100);

    return () => {
      clearInterval(checkComplete);
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, [onLoadingComplete, isPageReady]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          
          {/* Simple Brand */}
          <div className="text-xl font-semibold text-foreground/80">
            Sam&apos;s Portfolio
          </div>

          {/* Simple Circular Progress */}
          <div className="w-8 h-8 mx-auto border-2 border-foreground/20 border-t-foreground rounded-full animate-spin"></div>

          {/* Simple Status */}
          <div className="text-xs text-foreground/60">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
