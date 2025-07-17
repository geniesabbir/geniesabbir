// Loader Configuration - Simple Logic Only
export const loaderConfig = {
  // When to show which loader
  routing: {
    firstTimeHomeDuration: 3000,  // Fixed duration for first-time home visits
    dynamicMinDuration: 500,      // Minimum duration for dynamic loader
    dynamicMaxDuration: 2000      // Maximum duration for dynamic loader
  }
};

// Logic: Which loader to show when
export const shouldShowFirstTimeLoader = (pathname: string, hasVisitedHome: boolean): boolean => {
  const isHomePage = pathname === '/' || pathname === '/page';
  return isHomePage && !hasVisitedHome;
};

// Logic: Duration calculation for dynamic loader
export const calculateDynamicDuration = (isPageReady: boolean, elapsed: number): number => {
  const { dynamicMinDuration, dynamicMaxDuration } = loaderConfig.routing;
  
  if (isPageReady && elapsed >= dynamicMinDuration) {
    return Math.max(elapsed, dynamicMinDuration);
  }
  
  return Math.min(elapsed, dynamicMaxDuration);
};

export default loaderConfig;
