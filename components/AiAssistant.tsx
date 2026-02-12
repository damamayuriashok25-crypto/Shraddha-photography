
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../lib/gemini';

const QUICK_PROMPTS = [
  "Pre-wedding prices",
  "Maternity shoot",
  "Corporate photos",
  "Wedding info"
];

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hi! I’m Shradha’s assistant. I can speak many languages! How can I help you today?' }
  ]);
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
    <div className="fixed bottom-24 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[85vw] max-w-[320px] bg-white/95 dark:bg-card-dark/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col animate-in slide-in-from-bottom-6 zoom-in-95 duration-300">
          {/* Header */}
          <div className="p-5 bg-primary text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-icons-round text-sm">auto_awesome</span>
              </div>
              <div>
                <p className="text-xs font-bold leading-none">Shradha Studio</p>
                <p className="text-[10px] opacity-80 mt-0.5">Multilingual Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <span className="material-icons-round text-lg">close</span>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none shadow-md' 
                    : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200/50 dark:border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-2xl rounded-bl-none flex space-x-1">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="px-4 pb-2 flex overflow-x-auto gap-2 no-scrollbar">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-3 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[10px] text-slate-500 hover:border-primary hover:text-primary transition-all active:scale-95"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-100 dark:border-white/5 flex gap-2 items-center bg-white dark:bg-card-dark">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type in any language..."
              className="flex-1 text-xs bg-slate-50 dark:bg-white/5 border-none focus:ring-1 focus:ring-primary/30 rounded-xl py-2.5 px-4 dark:text-white placeholder:text-slate-400"
            />
            <button 
              onClick={() => handleSend()} 
              disabled={!input.trim()}
              className="bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 hover:opacity-90 transition-all disabled:opacity-30 disabled:shadow-none"
            >
              <span className="material-icons-round text-lg">send</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/40 animate-float hover:scale-110 active:scale-95 transition-all duration-300 relative"
      >
        <span className="material-icons-round text-2xl transition-transform duration-500 group-hover:rotate-12">
          {isOpen ? 'close' : 'auto_awesome'}
        </span>
        {!isOpen && (
           <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white dark:border-background-dark rounded-full"></span>
        )}
      </button>
    </div>
  );
};

export default AiAssistant;
