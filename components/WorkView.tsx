import React, { useState } from 'react';
import { PortfolioTab } from '../types';
import PortfolioGrid from './PortfolioGrid';
import ContactSection from './ContactSection';

const WorkView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioTab>(PortfolioTab.PORTFOLIO);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-center space-x-6 mt-4 mb-6 border-b border-slate-200 dark:border-slate-800 px-4">
        {[
          { id: PortfolioTab.PORTFOLIO, label: 'Portfolio' },
          { id: PortfolioTab.SERVICES, label: 'Services' },
          { id: PortfolioTab.STYLE, label: 'Style Guide' },
          { id: PortfolioTab.TESTIMONIALS, label: 'Reviews' }
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 border-b-2 transition-all text-[13px] font-medium whitespace-nowrap ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-slate-400 dark:text-slate-500'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="px-4 pb-8">
        {activeTab === PortfolioTab.PORTFOLIO && (
          <>
            <section className="mb-10 px-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-display text-4xl text-primary mb-3">The Artist</h2>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-light max-w-sm">
                    Capturing the quiet moments between the chaos. Specialized in natural light, intimate portraiture, and high-end events. Every frame tells a story of light, shadow, and human connection.
                  </p>
                </div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg rotate-3 flex-shrink-0 bg-slate-100">
                   <img 
                    src="https://aaft.com/blog/wp-content/uploads/2025/05/AdobeStock_150026021-1024x683.jpeg" 
                    alt="Shradha - The Artist" 
                    className="w-full h-full object-cover" 
                   />
                </div>
              </div>
              
              <div className="mt-6 flex items-center space-x-4">
                <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Book a Session
                </button>
                <div className="flex space-x-3 text-slate-400">
                  <span className="material-icons-round text-xl cursor-pointer hover:text-primary transition-colors">camera_alt</span>
                  <span className="material-icons-round text-xl cursor-pointer hover:text-primary transition-colors">mail_outline</span>
                </div>
              </div>
            </section>

            {/* Featured Series */}
            <section className="mb-12 px-2">
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl h-80 transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Featured Maternity" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-[10px] text-white/70 uppercase tracking-[0.3em] font-bold mb-2">Featured Series</span>
                  <h3 className="font-display text-5xl text-white">Maternity Elegance</h3>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center justify-between mb-6 px-2">
                <h2 className="font-display text-4xl text-primary">Selected Works</h2>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">2024 Collection</span>
              </div>
              <PortfolioGrid />
            </section>

            <ContactSection />
          </>
        )}

        {activeTab === PortfolioTab.SERVICES && (
          <div className="py-6 space-y-4 animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-display text-4xl text-primary mb-2 text-center">Our Services</h2>
            <p className="text-xs text-center text-slate-400 mb-6 uppercase tracking-widest">Premium Photography Packages</p>
            <div className="grid gap-8">
              <ServiceCard 
                title="Corporate & Branding" 
                desc="Modern professional branding with a sharp industrial edge. High-end headshots for tech-leaders and creative entrepreneurs."
                price="Starting from ₹15,000"
                imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              />
              <ServiceCard 
                title="Maternity Portraits" 
                desc="Celebrate motherhood with high-end, elegant portraits. Featuring our signature sheer-fabric and heritage aesthetics."
                price="₹35,000"
                imageUrl="https://www.athiniphotos.in/wp-content/uploads/2021/05/Abhinaya-Sai-Aravind-INSTA-2.jpg"
              />
              <ServiceCard 
                title="Wedding Storytelling" 
                desc="Exquisite heritage wedding photography capturing the grandeur of traditions and the intimacy of modern love."
                price="Starting from ₹1,50,000"
                imageUrl="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
              />
              <ServiceCard 
                title="Vintage & Pre-Wedding" 
                desc="Cinematic couple sessions featuring retro aesthetics, classic cars, and storytelling in unique settings."
                price="₹60,000"
                imageUrl="https://dstudios.in/wp-content/uploads/2024/09/creative-pre-wedding-photoshoot-venkat-keerthi-scaled.webp"
              />
            </div>
          </div>
        )}

        {activeTab === PortfolioTab.STYLE && (
          <div className="py-6 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              <h2 className="font-display text-4xl text-primary mb-2">Style Guide</h2>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Curating your visual narrative</p>
            </div>
            
            <div className="space-y-6">
              <StyleCard 
                type="Corporate Professional"
                fabrics="Tailored Wool, Crisp Poplin, High-quality Knits"
                colors="Charcoal, Navy, Black, Tech Blue"
                tip="Wear well-fitted blazers and solid neutrals. Clean lines and minimal patterns project the most professional image for industrial and tech branding."
                imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop"
              />
              <StyleCard 
                type="Elegant Maternity"
                fabrics="Chiffon, Silk Gowns, Sheer Voile"
                colors="Maroon, Ivory, Dusty Rose, Midnight Blue"
                tip="Flowy gowns and sheer fabrics create an ethereal, glowy aesthetic. Bold colors provide a stunning contrast in studio settings."
                imageUrl="https://www.athiniphotos.in/wp-content/uploads/2021/05/Abhinaya-Sai-Aravind-INSTA-2.jpg"
              />
              <StyleCard 
                type="Heritage Wedding"
                fabrics="Raw Silk, Banarasi, Brocade, Velvet"
                colors="Crimson Red, Gold, Emerald, Ivory"
                tip="Focus on texture—embroidery and heavy silks photograph beautifully under grand lighting."
                imageUrl="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop"
              />
              <StyleCard 
                type="Pre-Wedding Story"
                fabrics="Linen, Denim, Structured Cotton"
                colors="Earth Tones, Navy, White"
                tip="Coordinate colors without matching. Vintage sets like classic cars require timeless silhouettes like A-line dresses or leather jackets."
                imageUrl="https://dstudios.in/wp-content/uploads/2024/09/Venkat-keerthi-creative-pre-wedding-photoshoot-scaled.webp"
              />
            </div>
          </div>
        )}

        {activeTab === PortfolioTab.TESTIMONIALS && (
          <div className="py-12 animate-in slide-in-from-bottom-4 duration-500">
             <h2 className="font-display text-4xl text-primary mb-8 text-center">Love Stories</h2>
             <div className="space-y-8 px-4">
                <TestimonialItem 
                  quote="Shradha has an incredible gift for making you feel completely at ease. Our maternity photos are pure magic."
                  author="Priya & Rahul"
                />
                <TestimonialItem 
                  quote="The way she captures light and raw emotion is unmatched. Best investment for our wedding memories."
                  author="Ananya S."
                />
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ title: string; desc: string; price: string; imageUrl: string }> = ({ title, desc, price, imageUrl }) => (
  <div className="bg-card-light dark:bg-card-dark rounded-3xl overflow-hidden border border-slate-100 dark:border-white/5 text-left shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="h-64 w-full overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
      <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-4 leading-relaxed font-light">{desc}</p>
      <div className="flex justify-between items-center">
        <p className="text-primary font-bold text-sm">{price}</p>
        <button className="text-[10px] uppercase tracking-widest font-bold text-primary border border-primary/20 px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all">Select</button>
      </div>
    </div>
  </div>
);

const StyleCard: React.FC<{ type: string; fabrics: string; colors: string; tip: string; imageUrl: string }> = ({ type, fabrics, colors, tip, imageUrl }) => (
  <div className="bg-card-light dark:bg-card-dark rounded-3xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm">
    <div className="h-40 w-full overflow-hidden">
      <img src={imageUrl} alt={type} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-primary mb-4">{type} Style Guide</h3>
      <div className="space-y-3">
        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Recommended Fabrics</span>
          <p className="text-sm text-slate-700 dark:text-slate-300">{fabrics}</p>
        </div>
        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Color Palette</span>
          <p className="text-sm text-slate-700 dark:text-slate-300">{colors}</p>
        </div>
        <div className="pt-2">
          <p className="text-[13px] italic text-slate-500 dark:text-slate-400 leading-relaxed">
            <span className="material-icons-round text-primary text-[14px] align-middle mr-1">tips_and_updates</span>
            {tip}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialItem: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
  <div className="relative pt-8">
    <span className="material-icons-round text-5xl text-primary/10 absolute top-0 left-0">format_quote</span>
    <p className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed mb-4 relative z-10">{quote}</p>
    <p className="text-primary font-bold text-xs uppercase tracking-widest">— {author}</p>
  </div>
);

export default WorkView;