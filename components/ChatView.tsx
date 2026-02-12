
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../lib/gemini';

const QUICK_PROMPTS = [
  "Maternity shoot pricing?",
  "Dress for maternity shoot?",
  "Pre-wedding in ₹?",
  "Wedding packages?",
  "Corporate photos"
];

const SUPPORTED_LANGUAGES = [
  "English", "हिन्दी", "Español", "Français", "Deutsch", "मराठी", "తెలుగు"
];

interface ChatViewProps {
  messages: {role: 'user' | 'ai', text: string}[];
  setMessages: React.Dispatch<React.SetStateAction<{role: 'user' | 'ai', text: string}[]>>;
}

const ChatView: React.FC<ChatViewProps> = ({ messages, setMessages }) => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (textToSend?: string) => {
    const message = textToSend || input;
    if (!message.trim()) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: message }]);
    setIsTyping(true);

    const aiResponse = await chatWithAssistant(message);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] animate-in slide-in-from-right duration-500 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Header / Assistant Info */}
      <div className="px-6 pt-4 pb-2">
        <h2 className="font-display text-5xl text-primary mb-3">Assistant</h2>
        
        {/* Language Selection Bar */}
        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-2 border-b border-slate-100 dark:border-white/5">
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold whitespace-nowrap shrink-0">I SPEAK:</span>
          {SUPPORTED_LANGUAGES.map((lang, i) => (
            <button 
              key={i} 
              onClick={() => handleSend(`Hello, can we speak in ${lang}?`)}
              className="text-[11px] bg-white dark:bg-white/5 px-4 py-1.5 rounded-full text-slate-500 whitespace-nowrap hover:bg-primary/10 hover:text-primary transition-all border border-slate-200 dark:border-white/10 shadow-sm"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto px-6 py-6 space-y-6 no-scrollbar"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-[13px] leading-relaxed shadow-sm ${
              m.role === 'user' 
                ? 'bg-primary text-white rounded-br-none shadow-primary/20' 
                : 'bg-white dark:bg-card-dark text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-100 dark:border-white/5'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-card-dark p-4 rounded-3xl rounded-bl-none flex space-x-1.5 shadow-sm border border-slate-100 dark:border-white/5">
              <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Area with Quick Prompts and Input */}
      <div className="px-6 pb-4 bg-background-light dark:bg-background-dark border-t border-slate-100 dark:border-white/5 pt-4">
        {/* Quick Prompts */}
        <div className="pb-4 flex overflow-x-auto gap-2 no-scrollbar">
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="whitespace-nowrap px-4 py-2 bg-white dark:bg-card-dark border border-slate-200 dark:border-white/10 rounded-full text-[11px] text-slate-500 hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm font-medium"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Field */}
        <div className="flex gap-3 items-center relative">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type in your language..."
            className="flex-1 text-[13px] bg-white dark:bg-card-dark border-none ring-1 ring-slate-200 dark:ring-white/10 focus:ring-2 focus:ring-primary rounded-full py-4 px-6 dark:text-white placeholder:text-slate-400 shadow-sm"
          />
          <button 
            onClick={() => handleSend()} 
            disabled={!input.trim()}
            className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-20"
          >
            <span className="material-icons-round">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
