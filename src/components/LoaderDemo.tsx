'use client';

import { useState } from 'react';

export default function LoaderDemo() {
  const [showDemo, setShowDemo] = useState(false);

  const clearVisitHistory = () => {
    localStorage.removeItem('hasVisitedPortfolioHome');
    alert('Home visit history cleared! Refresh the page to see the first-time home loader.');
  };

  const testDynamicLoader = () => {
    localStorage.setItem('hasVisitedPortfolioHome', 'true');
    alert('Marked as visited home! Refresh the page to see the dynamic loader.');
  };

  if (!showDemo) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setShowDemo(true)}
          className="bg-foreground text-background px-4 py-2 rounded-lg shadow-lg hover:opacity-80 transition-opacity"
        >
          Loader Demo
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-background border border-foreground/20 rounded-lg p-4 shadow-xl max-w-sm">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-sm">Loader Demo</h3>
          <button
            onClick={() => setShowDemo(false)}
            className="text-foreground/60 hover:text-foreground"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-2 text-xs">
          <p className="text-foreground/80">
            Test home page loaders:
          </p>
          
          <button
            onClick={clearVisitHistory}
            className="w-full bg-blue-500 text-white px-3 py-2 rounded text-xs hover:bg-blue-600 transition-colors"
          >
            � Test First-Time Home
          </button>
          
          <button
            onClick={testDynamicLoader}
            className="w-full bg-green-500 text-white px-3 py-2 rounded text-xs hover:bg-green-600 transition-colors"
          >
            ⚡ Test Dynamic Loader
          </button>
          
          <p className="text-foreground/60 text-xs">
            First-time home: 3s fixed loading<br/>
            Other pages: Dynamic loading
          </p>
        </div>
      </div>
    </div>
  );
}
