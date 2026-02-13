import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../lib/gemini';

const QUICK_PROMPTS = [
  "Maternity shoot pricing?",
  "Dress for maternity shoot?",
  "Pre-wedding in ₹?",
  "Wedding packages?"
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
      <div className="px-6 pt-4">
        <h2 className="font-display text-6xl text-primary opacity-80 mb-2">Assistant</h2>
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2">
          <span className="text-[10px] font-bold text-slate-400 tracking-widest shrink-0">I SPEAK:</span>
          {LANGUAGES.map((l) => (
            <button key={l} onClick={() => handleSend(`Hello, can we speak in ${l}?`)} className="text-[11px] bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full text-slate-500 whitespace-nowrap">
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-6 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-5 py-3.5 rounded-3xl shadow-sm text-[13px] leading-relaxed ${
              m.role === 'user' 
                ? 'bg-primary text-white rounded-br-none' 
                : 'bg-white dark:bg-card-dark text-slate-700 dark:text-slate-200 rounded-bl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-3xl rounded-bl-none shadow-sm flex space-x-1">
              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="px-6 pb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3">
          {QUICK_PROMPTS.map((p) => (
            <button key={p} onClick={() => handleSend(p)} className="whitespace-nowrap px-4 py-2 bg-white dark:bg-card-dark border border-slate-100 dark:border-white/10 rounded-full text-[11px] text-slate-500 shadow-sm">
              {p}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type in your language..."
            className="flex-1 bg-white dark:bg-card-dark border-none ring-1 ring-slate-200 dark:ring-white/10 rounded-full py-4 px-6 text-[13px] shadow-sm"
          />
          <button onClick={() => handleSend()} className="w-14 h-14 bg-[#D1C5B8] text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all">
            <span className="material-icons-round text-2xl">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;