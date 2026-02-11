
import React from 'react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-8 pb-4 z-50 max-w-md mx-auto">
      <button 
        onClick={() => onNavigate(AppView.WORK)}
        className={`flex flex-col items-center transition-colors ${currentView === AppView.WORK ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}
      >
        <span className="material-icons-round">grid_view</span>
        <span className="text-[10px] font-medium mt-1">Work</span>
      </button>
      
      <button 
        onClick={() => onNavigate(AppView.BOOK)}
        className={`flex flex-col items-center transition-colors ${currentView === AppView.BOOK ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}
      >
        <span className="material-icons-round">edit</span>
        <span className="text-[10px] font-medium mt-1">Book</span>
      </button>
      
      <button 
        onClick={() => onNavigate(AppView.PROFILE)}
        className={`flex flex-col items-center transition-colors ${currentView === AppView.PROFILE ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}
      >
        <span className="material-icons-round">person_outline</span>
        <span className="text-[10px] font-medium mt-1">Profile</span>
      </button>
    </nav>
  );
};

export default Navigation;
