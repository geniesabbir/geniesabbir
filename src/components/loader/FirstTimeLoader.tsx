'use client';

import { useEffect, useState } from 'react';
import { loaderConfig } from '../../config/loader';
import Loader from './Loader';

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
    <div>
      <Loader />
    </div>
  );
}
