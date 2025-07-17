'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { shouldShowFirstTimeLoader } from '../config/loader';
import FirstTimeLoader from './loader/FirstTimeLoader';
import DynamicLoader from './loader/DynamicLoader';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [isFirstTimeHome, setIsFirstTimeHome] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const hasVisitedHome = localStorage.getItem('hasVisitedPortfolioHome') === 'true';
    
    // Use config logic to determine which loader
    if (shouldShowFirstTimeLoader(pathname, hasVisitedHome)) {
      setIsFirstTimeHome(true);
      localStorage.setItem('hasVisitedPortfolioHome', 'true');
    } else {
      setIsFirstTimeHome(false);
    }
  }, [pathname]);

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && (
        isFirstTimeHome ? (
          <FirstTimeLoader onLoadingComplete={handleLoadingComplete} />
        ) : (
          <DynamicLoader onLoadingComplete={handleLoadingComplete} />
        )
      )}
      <div 
        className={`transition-opacity duration-500 ${
          showLoader ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}
