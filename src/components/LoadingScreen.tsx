import React from 'react';
import { Activity } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="animate-pulse-custom">
            <Activity className="w-20 h-20 text-white mx-auto" />
          </div>
          <div className="absolute inset-0 animate-ping">
            <Activity className="w-20 h-20 text-white/30 mx-auto" />
          </div>
        </div>
        
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-2 animate-fadeInUp">PrimeSpot</h1>
          <p className="text-xl opacity-90 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Precision Bone Care, At Every Spot
          </p>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;