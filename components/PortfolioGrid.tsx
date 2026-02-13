import React from 'react';

const PORTFOLIO_IMAGES = [
  // Artistic Portraits
  "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=2048x2048&w=is&k=20&c=KTpY1O4d7-EuX-R_GR_44Upc-n9esJOZFpcqvA4CM0E=", // Artistic Macro Portrait
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop", // Male Portrait
  
  // Maternity (Signature Styles)
  "https://www.athiniphotos.in/wp-content/uploads/2021/05/Abhinaya-Sai-Aravind-INSTA-2.jpg", // Elegant Heritage Maternity
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop", // Soft natural light
  
  // Wedding (Heritage Styles)
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop", // Heritage Couple
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop", // Grand Wedding Moment
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop", // Bridal Detail
  
  // Corporate (Industrial/Modern)
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", // Modern Branding
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", // Industrial Tech Headshot
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop", // Executive Portrait
  
  // Pre-Wedding / Lifestyle
  "https://dstudios.in/wp-content/uploads/2024/09/creative-pre-wedding-photoshoot-venkat-keerthi-scaled.webp" // Elegant Pre-Wedding Couple
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="columns-2 gap-3 space-y-3 px-2">
      {PORTFOLIO_IMAGES.map((src, idx) => (
        <div 
          key={idx} 
          className="break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-white/5"
        >
          <img 
            alt={`Selected Portfolio Work ${idx + 1}`} 
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