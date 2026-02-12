
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../lib/gemini';

const QUICK_PROMPTS = [
  "Maternity shoot pricing?",
  "Maternity dress ideas?",
  "Pre-wedding in ₹?",
  "Wedding packages?",
  "Corporate photos"
];

const SUPPORTED_LANGUAGES = [
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "Español", code: "es" },
  { name: "Français", code: "fr" },
  { name: "मराठी", code: "mr" },
  { name: "తెలుగు", code: "te" }
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
    <div className="flex flex-col h-full animate-in slide-in-from-right duration-500">
      <div className="px-6 py-2">
        <h2 className="font-display text-4xl text-primary">Assistant</h2>
        
        {/* Interactive Language Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center space-x-1.5 min-w-fit px-2 py-1 bg-primary/5 rounded-full border border-primary/10">
            <span className="material-icons-round text-[12px] text-primary">translate</span>
            <span className="text-[9px] uppercase tracking-tighter text-primary font-bold whitespace-nowrap">Multi-Language Support</span>
          </div>
          <div className="flex space-x-2">
            {SUPPORTED_LANGUAGES.map((lang, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(`Hello, I'd like to speak in ${lang.name}`)}
                className="text-[10px] bg-white dark:bg-white/5 px-3 py-1 rounded-full text-slate-500 whitespace-nowrap border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors shadow-sm"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto px-6 py-4 space-y-4 no-scrollbar min-h-0"
        style={{ height: 'calc(100vh - 380px)' }}
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
              m.role === 'user' 
                ? 'bg-primary text-white rounded-br-none shadow-md' 
                : 'bg-white dark:bg-card-dark text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200/50 dark:border-white/5 shadow-sm'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-card-dark p-4 rounded-2xl rounded-bl-none flex space-x-1 shadow-sm border border-slate-200/50 dark:border-white/5">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Area: Quick Prompts & Input */}
      <div className="px-6 py-4 bg-background-light dark:bg-background-dark">
        {/* Quick Prompts */}
        <div className="pb-4 flex overflow-x-auto gap-2 no-scrollbar">
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="whitespace-nowrap px-4 py-2 bg-white dark:bg-card-dark border border-slate-200 dark:border-white/10 rounded-full text-[10px] text-slate-500 hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex gap-2 items-center">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about shoots, pricing, styling..."
            className="flex-1 text-sm bg-white dark:bg-card-dark border-none ring-1 ring-slate-200 dark:ring-white/10 focus:ring-2 focus:ring-primary rounded-2xl py-3.5 px-5 dark:text-white placeholder:text-slate-400 shadow-sm"
          />
          <button 
            onClick={() => handleSend()} 
            disabled={!input.trim()}
            className="bg-primary text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:opacity-90 transition-all disabled:opacity-30 disabled:shadow-none"
          >
            <span className="material-icons-round">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
