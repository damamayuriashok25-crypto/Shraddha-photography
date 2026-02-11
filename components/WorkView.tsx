
import React, { useState } from 'react';
import { PortfolioTab } from '../types';
import PortfolioGrid from './PortfolioGrid';
import ContactSection from './ContactSection';

const WorkView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioTab>(PortfolioTab.PORTFOLIO);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-center space-x-8 mt-4 mb-6 border-b border-slate-200 dark:border-slate-800">
        <button 
          onClick={() => setActiveTab(PortfolioTab.PORTFOLIO)}
          className={`pb-3 border-b-2 transition-all text-sm font-medium ${activeTab === PortfolioTab.PORTFOLIO ? 'border-primary text-primary' : 'border-transparent text-slate-400 dark:text-slate-500'}`}
        >
          Portfolio
        </button>
        <button 
          onClick={() => setActiveTab(PortfolioTab.SERVICES)}
          className={`pb-3 border-b-2 transition-all text-sm font-medium ${activeTab === PortfolioTab.SERVICES ? 'border-primary text-primary' : 'border-transparent text-slate-400 dark:text-slate-500'}`}
        >
          Services
        </button>
        <button 
          onClick={() => setActiveTab(PortfolioTab.TESTIMONIALS)}
          className={`pb-3 border-b-2 transition-all text-sm font-medium ${activeTab === PortfolioTab.TESTIMONIALS ? 'border-primary text-primary' : 'border-transparent text-slate-400 dark:text-slate-500'}`}
        >
          Testimonials
        </button>
      </div>

      <div className="px-4 pb-8">
        {activeTab === PortfolioTab.PORTFOLIO && (
          <>
            <section className="mb-10 px-2">
              <h2 className="font-display text-4xl text-primary mb-3">The Artist</h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-light max-w-sm">
                Capturing the quiet moments between the chaos. Based in the Pacific Northwest, specializing in natural light lifestyle and intimate portraiture. Every frame tells a story of light, shadow, and human connection.
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
          <div className="py-12 text-center animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-display text-4xl text-primary mb-6">Our Services</h2>
            <div className="space-y-6">
              <ServiceCard 
                title="Wedding Photography" 
                desc="Capturing your special day with a timeless and romantic eye."
                price="Starting from $2,500"
              />
              <ServiceCard 
                title="Lifestyle Portraiture" 
                desc="Authentic, natural-light sessions for individuals and families."
                price="Starting from $450"
              />
              <ServiceCard 
                title="Commercial & Branding" 
                desc="High-end imagery for your brand, product, or architectural needs."
                price="Inquire for Quote"
              />
            </div>
          </div>
        )}

        {activeTab === PortfolioTab.TESTIMONIALS && (
          <div className="py-12 animate-in slide-in-from-bottom-4 duration-500">
             <h2 className="font-display text-4xl text-primary mb-8 text-center">Love Stories</h2>
             <div className="space-y-8 px-4">
                <TestimonialItem 
                  quote="Shradha has an incredible gift for making you feel completely at ease. Our wedding photos are more than we could have ever dreamed of."
                  author="Emma & Liam"
                />
                <TestimonialItem 
                  quote="The way she captures light is pure magic. She found the beauty in the simplest moments during our family session."
                  author="Sarah J."
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
    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{desc}</p>
    <p className="text-primary font-medium">{price}</p>
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
