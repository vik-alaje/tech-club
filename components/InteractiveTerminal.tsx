import React, { useState, useRef, useEffect } from 'react';
import { EventContent, Language } from '../types';

interface InteractiveTerminalProps {
  content: EventContent;
  language: Language;
  setLanguage: (lang: Language) => void;
  className?: string;
}

const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ content, language, setLanguage, className }) => {
  const [history, setHistory] = useState<string[]>([
    "HELPER_TERMINAL v2.0.4 [ONLINE]",
    "Copyright (c) 2026 Tech Club",
    "",
    "Type 'help' for available commands."
  ]);
  const [input, setInput] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const args = cleanCmd.split(' ');
    const mainCmd = args[0];
    const subCmd = args[1];

    let output: string | string[] = [];

    switch (mainCmd) {
      case 'help':
        if (subCmd === 'aipoints') {
          output = [
            "--- AI POINTS INFO ---",
            "Presenting at the launch event grants BONUS AI POINTS.",
            "Logic: Sharing knowledge = Community Growth.",
            "Status: ACTIVE"
          ];
        } else if (subCmd === 'info') {
          output = [
            "--- EVENT INFO ---",
            content.eventDetails.mission,
            `Date: ${content.eventDetails.date}`,
            `Location: ${content.eventDetails.location}`
          ];
        } else if (subCmd === 'join') {
           output = ["To join the club community:", content.ui.joinUrl];
        } else if (subCmd === 'register') {
           output = ["To register for the event:", content.ui.registerUrl];
        } else {
          output = [
            "AVAILABLE COMMANDS:",
            "  help          : Show this list",
            "  help aipoints : Info about rewards",
            "  help info     : Event summary",
            "  help join     : Join link",
            "  help register : Register link",
            "  whoami        : Current user",
            "  language      : Toggle EN/FR",
            "  clear         : Clear screen"
          ];
        }
        break;
      
      case 'whoami':
        output = "guest_user";
        break;

      case 'clear':
        setHistory([]);
        return; // Early return to avoid adding the command line back

      case 'language':
        const newLang = language === 'en' ? 'fr' : 'en';
        setLanguage(newLang);
        output = `Language switched to [${newLang.toUpperCase()}]`;
        break;
      
      case 'aipoints':
         output = "Presenters earn bonus AI Points. Type 'help aipoints' for details.";
         break;

      case '':
        output = '';
        break;

      default:
        output = `Command not found: ${mainCmd}. Type 'help'.`;
    }

    setHistory(prev => [
      ...prev, 
      `> ${cmd}`, 
      ...(Array.isArray(output) ? output : [output]),
      ""
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div 
      className={`bg-black border-4 border-gray-600 relative overflow-hidden flex flex-col font-mono text-xs md:text-sm shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-shadow duration-300 ${className}`}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20 z-10"></div>
      
      {/* Header */}
      <div className="bg-gray-800 text-gray-400 px-2 py-1 flex justify-between items-center border-b border-gray-600 z-20 select-none">
        <span>HELPER_TERMINAL.exe</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 p-4 overflow-y-auto text-game-green z-20 min-h-[200px] cursor-text" 
        style={{ textShadow: '0 0 5px rgba(74, 222, 128, 0.5)' }}
      >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words leading-relaxed">
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-game-pink">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-game-cyan"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;