
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="rounded-3xl bg-card-light dark:bg-card-dark p-8 mb-8 border border-slate-100 dark:border-white/5 shadow-sm">
      <h2 className="font-display text-4xl text-primary mb-4 text-center">Get in Touch</h2>
      <div className="space-y-4 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">Available for worldwide travel and local collaborations.</p>
        <div className="pt-4 space-y-2">
          <a className="block text-lg font-medium text-slate-800 dark:text-white hover:text-primary transition-colors" href="mailto:hello@shradha.com">hello@shradhaphotography.com</a>
          <p className="text-sm font-light text-slate-400 tracking-wider">+1 (234) 567-8910</p>
        </div>
      </div>
      <form className="mt-10 flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input 
          className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border-none ring-1 ring-slate-200 dark:ring-white/10 text-sm focus:ring-2 focus:ring-primary transition-all text-slate-900 dark:text-white" 
          placeholder="Email Address" 
          type="email"
          required
        />
        <button 
          type="submit"
          className="w-full py-3 bg-primary text-white font-medium rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
        >
          Request Price List
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
