
import React, { useState } from 'react';

const BookingView: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <div className="p-6 animate-in slide-in-from-right duration-500">
      <h2 className="font-display text-4xl text-primary mb-6">Book a Session</h2>
      
      <div className="mb-8">
        <label className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Step 1: Select Package</label>
        <div className="space-y-3">
          {['Mini Session', 'Signature Portrait', 'Wedding Package'].map((pkg) => (
            <button
              key={pkg}
              onClick={() => setSelectedPackage(pkg)}
              className={`w-full p-4 rounded-xl text-left transition-all border ${selectedPackage === pkg ? 'bg-primary/5 border-primary' : 'bg-card-light dark:bg-card-dark border-slate-100 dark:border-white/5'}`}
            >
              <div className="flex justify-between items-center">
                <span className={`font-medium ${selectedPackage === pkg ? 'text-primary' : 'text-slate-800 dark:text-white'}`}>{pkg}</span>
                {selectedPackage === pkg && <span className="material-icons-round text-primary text-sm">check_circle</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <label className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Step 2: Preferred Date</label>
        <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-medium text-slate-400 mb-2">
          <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 31 }).map((_, i) => (
            <button
              key={i}
              className={`h-10 rounded-lg flex items-center justify-center text-xs transition-colors ${i + 1 === 14 ? 'bg-primary text-white font-bold' : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <button 
        disabled={!selectedPackage}
        className="w-full py-4 bg-primary text-white font-semibold rounded-xl disabled:opacity-50 shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        Continue to Checkout
      </button>
    </div>
  );
};

export default BookingView;
