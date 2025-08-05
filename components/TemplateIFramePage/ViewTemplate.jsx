import React, { useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

const ProvidedSpaceLoader = () => (
  <div className="h-full w-full flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

export default function ViewTemplate({ vercelLink = "https://example.com" }) {
  const [viewMode, setViewMode] = useState('desktop');
  const [isHovered, setIsHovered] = useState(false);

  if (!vercelLink) {
    return <ProvidedSpaceLoader />;
  }

  return (
    <div 
      className="h-full w-full relative group bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Device Control Overlay */}
      <div className={`
        absolute top-4 right-4 z-20 flex gap-2 transition-all duration-500 ease-out transform
        ${isHovered ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-2 opacity-0 scale-95 pointer-events-none'}
      `}>
        {/* Desktop Button */}
        <button
          onClick={() => setViewMode('desktop')}
          className={`
            relative p-3 rounded-xl backdrop-blur-md transition-all duration-300 ease-out
            shadow-lg hover:shadow-xl transform active:scale-95
            border border-gray-200 group/btn
            ${viewMode === 'desktop' 
              ? 'bg-black text-white shadow-black' 
              : 'bg-white text-black hover:bg-gray-50'
            }
          `}
          title="Desktop View"
        >
          <Monitor 
            size={18} 
            className={`
              transition-all duration-300 
              ${viewMode === 'desktop' ? 'rotate-0' : 'group-hover/btn:rotate-12'}
            `}
          />
          <div className={`
            absolute inset-0 rounded-xl transition-all duration-300
            ${viewMode === 'desktop' 
              ? 'bg-gray-800/20 scale-100' 
              : 'bg-gray-800/0 scale-0 group-hover/btn:scale-100 group-hover/btn:bg-gray-800/10'
            }
          `}></div>
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setViewMode('mobile')}
          className={`
            relative p-3 rounded-xl backdrop-blur-md transition-all duration-300 ease-out
            shadow-lg hover:shadow-xl transform active:scale-95
            border border-gray-200 group/btn
            ${viewMode === 'mobile' 
              ? 'bg-gray-900 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
            }
          `}
          title="Mobile View"
        >
          <Smartphone 
            size={18} 
            className={`
              transition-all duration-300 
              ${viewMode === 'mobile' ? 'rotate-0' : 'group-hover/btn:-rotate-12'}
            `}
          />
          <div className={`
            absolute inset-0 rounded-xl transition-all duration-300
            ${viewMode === 'mobile' 
              ? 'bg-gray-800/20 scale-100' 
              : 'bg-gray-800/0 scale-0 group-hover/btn:scale-100 group-hover/btn:bg-gray-800/10'
            }
          `}></div>
        </button>
      </div>

      {/* View Mode Indicator */}
      <div className={`
        absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-xs font-medium
        backdrop-blur-md border border-gray-200 transition-all duration-500 ease-out
        ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}
        bg-gray-900 text-white shadow-gray-900/25
      `}>
        {viewMode === 'desktop' ? 'Desktop View' : 'Mobile View'}
      </div>

      {/* Iframe Container */}
      <div className={`
        h-full w-full relative transition-all duration-700 ease-out transform-gpu
        ${viewMode === 'mobile' ? 'scale-[0.4] origin-top-left' : 'scale-100'}
      `}>
        <div className={`
          relative overflow-hidden transition-all duration-700 ease-out
          ${viewMode === 'mobile' 
            ? 'w-[250%] h-[250%] shadow-2xl border-4 border-gray-900' 
            : 'w-full h-full shadow-none border-0'
          }
        `}>
          
          <iframe
            src={vercelLink}
            title="Template Preview"
            className="w-full h-full border-none block transition-all duration-700 ease-out"
            style={{ 
              border: 'none', 
              display: 'block',
              background: 'white'
            }}
          />
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-2 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Loading Overlay */}
      <div className={`
        absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center
        transition-all duration-500 z-30
        ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="text-gray-800 text-sm font-medium">Hover to see device controls</div>
      </div>
    </div>
  );
}