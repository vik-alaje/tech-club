import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Radio, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

const TerminalChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Connection established. What is your query, User?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key missing");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction: SYSTEM_INSTRUCTION },
        history: history
      });

      const response = await chat.sendMessage({ message: userMsg.text });
      const text = response.text || "Signal lost...";
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "ERROR: LINK SEVERED." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* HUD Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 group ${isOpen ? 'hidden' : 'block'}`}
      >
        <div className="relative bg-game-green border-4 border-white p-3 shadow-retro transition-transform group-hover:-translate-y-1">
          <MessageSquare size={24} className="text-black" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 border-2 border-white animate-pulse"></div>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black px-2 py-0.5 text-[10px] font-game text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          OPEN COMMS
        </div>
      </button>

      {/* Codec Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:right-8 w-[95vw] md:w-[450px] z-50 flex flex-col font-mono text-sm">
          
          {/* Top Bar */}
          <div className="bg-game-green border-4 border-white border-b-0 p-2 flex justify-between items-center text-black">
             <div className="flex items-center gap-2 font-bold font-game text-xs">
                <Radio size={16} className="animate-pulse" />
                <span>COMMS: ONLINE</span>
             </div>
             <button onClick={() => setIsOpen(false)} className="hover:bg-white/50 p-1">
               <X size={16} />
             </button>
          </div>

          {/* Main Display */}
          <div className="bg-black border-4 border-white h-[400px] flex flex-col relative overflow-hidden">
            {/* Scanline overlay inside chat */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-50 z-10"></div>
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 z-20">
               {messages.map((msg, idx) => (
                 <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                   <span className="text-[10px] text-gray-500 mb-1 font-game">
                     {msg.role === 'user' ? 'YOU' : 'AI_SYSTEM'}
                   </span>
                   <div className={`max-w-[85%] p-3 border-2 ${
                     msg.role === 'user' 
                       ? 'border-game-green bg-game-green/10 text-game-green' 
                       : 'border-game-cyan bg-game-cyan/10 text-game-cyan'
                   }`}>
                     {msg.text}
                   </div>
                 </div>
               ))}
               
               {isLoading && (
                 <div className="text-game-cyan text-xs animate-pulse">
                   > DECRYPTING RESPONSE...
                 </div>
               )}
               <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-2 bg-gray-900 border-t-4 border-white z-20 flex gap-2">
              <span className="text-game-green pt-2">></span>
              <input 
                autoFocus
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-600"
                placeholder="Enter command..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} disabled={isLoading} className="text-game-green hover:text-white">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalChat;