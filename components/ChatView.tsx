import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../lib/gemini';

const QUICK_PROMPTS = [
  "Maternity shoot pricing?",
  "Dress for maternity shoot?",
  "Wedding photography in ₹?",
  "Pre-wedding packages"
];

const LANGUAGES = ["English", "हिन्दी", "Español", "Français", "Deutsch", "मराठी", "తెలుగు"];

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

  const handleSend = async (text?: string) => {
    const message = text || input;
    if (!message.trim()) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: message }]);
    setIsTyping(true);

    const res = await chatWithAssistant(message);
    setMessages(prev => [...prev, { role: 'ai', text: res }]);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Header Area */}
      <div className="px-6 pt-6 pb-2">
        <h2 className="font-display text-7xl text-primary opacity-90 mb-4 animate-in slide-in-from-left duration-700">Assistant</h2>
        
        {/* Language Bar */}
        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-2">
          <span className="text-[10px] font-black text-slate-400 tracking-widest shrink-0 uppercase">I Speak:</span>
          {LANGUAGES.map((l) => (
            <button 
              key={l} 
              onClick={() => handleSend(`Can we talk in ${l}?`)} 
              className="text-[11px] bg-white dark:bg-white/5 px-4 py-1.5 rounded-full text-slate-500 whitespace-nowrap border border-slate-100 dark:border-white/5 shadow-sm hover:border-primary/30 transition-all"
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-6 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-4 rounded-[2rem] shadow-sm text-[13px] leading-relaxed animate-in fade-in zoom-in-95 duration-300 ${
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
            <div className="bg-white dark:bg-card-dark p-4 rounded-[2rem] rounded-bl-none shadow-sm flex space-x-1.5 border border-slate-100 dark:border-white/5">
              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="px-6 pb-6 pt-2 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {QUICK_PROMPTS.map((p) => (
            <button 
              key={p} 
              onClick={() => handleSend(p)} 
              className="whitespace-nowrap px-4 py-2 bg-white dark:bg-card-dark border border-slate-200/50 dark:border-white/5 rounded-full text-[11px] text-slate-500 shadow-sm hover:text-primary transition-colors"
            >
              {p}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type in any language..."
            className="flex-1 bg-white dark:bg-card-dark border-none ring-1 ring-slate-200 dark:ring-white/10 rounded-full py-4.5 px-7 text-[13px] shadow-sm focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-300"
          />
          <button 
            onClick={() => handleSend()} 
            disabled={!input.trim() && !isTyping}
            className="w-14 h-14 bg-[#D1C5B8] text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all disabled:opacity-50"
          >
            <span className="material-icons-round text-2xl">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;