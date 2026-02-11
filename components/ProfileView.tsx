
import React from 'react';

interface ProfileViewProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const ProfileView: React.FC<ProfileViewProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="p-6 animate-in slide-in-from-right duration-500">
      <div className="flex items-center space-x-4 mb-10">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
          <img src="https://picsum.photos/200" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Alex Johnson</h2>
          <p className="text-sm text-slate-400">Premium Member</p>
        </div>
      </div>

      <div className="space-y-2 mb-10">
        <label className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Account Settings</label>
        
        <ProfileOption 
          icon="history" 
          label="Booking History" 
          value="4 sessions"
        />
        <ProfileOption 
          icon="favorite_border" 
          label="Favorites" 
          value="12 photos"
        />
        <div className="flex items-center justify-between p-4 rounded-xl bg-card-light dark:bg-card-dark border border-slate-100 dark:border-white/5 shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="material-icons-round text-slate-400">dark_mode</span>
            <span className="text-sm font-medium text-slate-800 dark:text-white">Dark Mode</span>
          </div>
          <button 
            onClick={toggleDarkMode}
            className={`w-12 h-6 rounded-full transition-colors relative ${isDarkMode ? 'bg-primary' : 'bg-slate-200'}`}
          >
            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Support</label>
        <ProfileOption icon="help_outline" label="Help Center" />
        <ProfileOption icon="info_outline" label="Privacy Policy" />
      </div>

      <button className="w-full mt-10 py-3 text-red-500 text-sm font-medium border border-red-500/20 rounded-xl hover:bg-red-500/5 transition-colors">
        Log Out
      </button>
    </div>
  );
};

const ProfileOption: React.FC<{ icon: string; label: string; value?: string }> = ({ icon, label, value }) => (
  <button className="w-full flex items-center justify-between p-4 rounded-xl bg-card-light dark:bg-card-dark border border-slate-100 dark:border-white/5 shadow-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
    <div className="flex items-center space-x-3">
      <span className="material-icons-round text-slate-400">{icon}</span>
      <span className="text-sm font-medium text-slate-800 dark:text-white">{label}</span>
    </div>
    <div className="flex items-center space-x-2">
      {value && <span className="text-xs text-slate-400">{value}</span>}
      <span className="material-icons-round text-slate-300 text-sm">chevron_right</span>
    </div>
  </button>
);

export default ProfileView;
