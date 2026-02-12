
import React from 'react';

const MATERNITY_IMAGES = [
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558230113-d02336f33256?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="columns-2 gap-3 space-y-3">
      {MATERNITY_IMAGES.map((src, idx) => (
        <div 
          key={idx} 
          className="break-inside-avoid overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm"
        >
          <img 
            alt={`Maternity portfolio work ${idx + 1}`} 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
            src={src} 
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
