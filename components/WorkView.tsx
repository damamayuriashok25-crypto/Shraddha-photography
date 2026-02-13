
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
              <h2 className="font-display text-4xl text-primary mb-3">The Artist</h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-light max-w-sm">
                Capturing the quiet moments between the chaos. Specialized in natural light, intimate portraiture, and high-end events. Every frame tells a story of light, shadow, and human connection.
              </p>
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
            <p className="text-xs text-center text-slate-400 mb-6 uppercase tracking-widest">Pricing & Packages</p>
            <div className="grid gap-4">
              <ServiceCard 
                title="Wedding Storytelling" 
                desc="Comprehensive coverage of your special day with a timeless romantic aesthetic."
                price="Starting from ₹1,50,000"
              />
              <ServiceCard 
                title="Maternity Portraits" 
                desc="Celebrate the journey of motherhood with elegant, glow-focused sessions."
                price="₹35,000"
              />
              <ServiceCard 
                title="Pre-Wedding" 
                desc="Cinematic couple sessions at breathtaking locations."
                price="₹60,000"
              />
              <ServiceCard 
                title="Corporate Branding" 
                desc="Elevate your professional presence with high-end headshots."
                price="Starting from ₹15,000"
              />
            </div>
          </div>
        )}

        {activeTab === PortfolioTab.STYLE && (
          <div className="py-6 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              <h2 className="font-display text-4xl text-primary mb-2">Style Guide</h2>
              <p className="text-xs text-slate-400 uppercase tracking-widest">What to wear for your session</p>
            </div>
            
            <div className="space-y-6">
              <StyleCard 
                type="Maternity"
                fabrics="Chiffon, Silk, Lace, Lightweight Cotton"
                colors="Peach, Cream, Sage Green, Lavender"
                tip="Empire waists highlight the bump beautifully. Flowy gowns create movement in natural light."
                imageUrl="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop"
              />
              <StyleCard 
                type="Pre-Wedding"
                fabrics="Linen, Chiffon, Denim, Structured Cotton"
                colors="Dusty Rose, Navy, White, Earth Tones"
                tip="Coordinate colors without matching exactly. Avoid busy logos or heavy patterns."
                imageUrl="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400&auto=format&fit=crop"
              />
              <StyleCard 
                type="Corporate"
                fabrics="Wool, Heavy Silk, Poplin"
                colors="Charcoal, Navy, White, Soft Blue"
                tip="Iron everything! Tailored blazers work best. Keep jewelry minimal and classic."
                imageUrl="https://images.unsplash.com/photo-1558223039-d074360667e2?q=80&w=400&auto=format&fit=crop"
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

const ServiceCard: React.FC<{ title: string; desc: string; price: string }> = ({ title, desc, price }) => (
  <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-slate-100 dark:border-white/5 text-left shadow-sm">
    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{title}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{desc}</p>
    <p className="text-primary font-bold">{price}</p>
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