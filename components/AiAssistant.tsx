
import React, { useState } from 'react';
import { chatWithAssistant } from '../lib/gemini';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hi! I’m Shradha’s virtual assistant. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const aiResponse = await chatWithAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || "I didn't quite catch that." }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-72 bg-white dark:bg-card-dark rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <span className="text-sm font-semibold">AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="material-icons-round text-sm">close</button>
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-3 no-scrollbar text-xs">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2.5 rounded-2xl ${m.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-bl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-white/5 p-2.5 rounded-2xl rounded-bl-none italic text-slate-400">Typing...</div>
              </div>
            )}
          </div>
          <div className="p-3 border-t border-slate-100 dark:border-white/5 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 text-xs bg-slate-50 dark:bg-white/5 border-none focus:ring-1 focus:ring-primary rounded-lg dark:text-white"
            />
            <button onClick={handleSend} className="bg-primary text-white p-2 rounded-lg material-icons-round text-sm">send</button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 animate-float hover:scale-110 active:scale-95 transition-all"
      >
        <span className="material-icons-round text-2xl">{isOpen ? 'close' : 'chat'}</span>
      </button>
    </div>
  );
};

export default AiAssistant;
