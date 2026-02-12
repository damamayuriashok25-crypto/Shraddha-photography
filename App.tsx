
import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import StatusBar from './components/StatusBar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import WorkView from './components/WorkView';
import BookingView from './components/BookingView';
import ProfileView from './components/ProfileView';
import ChatView from './components/ChatView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.WORK);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Persistent chat state across tab switches
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hi! I’m Shradha’s assistant. How can I help you plan your perfect session today?' }
  ]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderView = () => {
    switch (currentView) {
      case AppView.WORK:
        return <WorkView />;
      case AppView.BOOK:
        return <BookingView />;
      case AppView.CHAT:
        return <ChatView messages={chatMessages} setMessages={setChatMessages} />;
      case AppView.PROFILE:
        return <ProfileView toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />;
      default:
        return <WorkView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-24 max-w-md mx-auto relative bg-background-light dark:bg-background-dark overflow-x-hidden transition-colors duration-500">
      <StatusBar />
      <Header />
      
      <main className="flex-1 overflow-y-auto no-scrollbar">
        {renderView()}
      </main>

      <Navigation currentView={currentView} onNavigate={setCurrentView} />
      
      {/* Home Indicator */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full z-[60]"></div>
    </div>
  );
};

export default App;
