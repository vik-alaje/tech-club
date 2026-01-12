import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Gamepad2, Heart, Battery } from 'lucide-react';
import RetroGrid from './components/RetroGrid';
import Timeline from './components/Timeline';
import PresentationGuide from './components/PresentationGuide';
import TerminalChat from './components/TerminalChat';
import { EVENT_DETAILS } from './constants';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // START SCREEN
  if (!hasStarted) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center font-game text-center relative overflow-hidden">
        <RetroGrid />
        <div className="z-20 flex flex-col items-center animate-float-pixel">
           <h1 className="text-4xl md:text-6xl text-white mb-8 text-shadow-retro leading-relaxed">
             TECH CLUB <br/>
             <span className="text-game-green">LAUNCH EVENT</span>
           </h1>
           
           <div className="text-game-yellow text-sm mb-12 animate-pulse">
             © 2026 AIVANCITY SCHOOL OF TECHNOLOGY
           </div>

           <button 
             onClick={() => setHasStarted(true)}
             className="px-8 py-4 bg-transparent border-4 border-white text-white text-xl hover:bg-white hover:text-black transition-colors animate-pulse-fast hover:animate-none"
           >
             PRESS START
           </button>
        </div>
        
        {/* Decorative Sprites */}
        <div className="absolute bottom-10 left-10 text-gray-500 text-xs font-mono">
          CREDITS: 01
        </div>
      </div>
    );
  }

  // MAIN GAME
  return (
    <div className="min-h-screen bg-[#050a0e] text-gray-100 font-sans selection:bg-game-green/30 cursor-crosshair">
      <RetroGrid />
      
      {/* HUD (Navbar) */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b-4 ${scrolled ? 'bg-black/90 border-game-green py-2' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center font-game">
          
          {/* Health/Mana Bars Concept */}
          <div className="flex flex-col gap-1">
             <div className="flex items-center gap-2 text-xs text-white">
                <span className="text-game-pink">HP</span>
                <div className="w-24 h-3 bg-gray-800 border border-gray-600">
                  <div className="w-[80%] h-full bg-game-pink"></div>
                </div>
             </div>
             <div className="flex items-center gap-2 text-xs text-white">
                <span className="text-game-cyan">MP</span>
                <div className="w-24 h-3 bg-gray-800 border border-gray-600">
                  <div className="w-[100%] h-full bg-game-cyan"></div>
                </div>
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="hidden md:flex px-4 py-2 text-[10px] text-gray-300 hover:text-white border-2 border-transparent hover:border-white transition-all">
               LOGIN_
             </button>
             <button className="px-4 py-2 bg-game-green text-black text-[10px] border-b-4 border-green-800 active:border-b-0 active:translate-y-1 hover:brightness-110 transition-all">
               JOIN DISCORD
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black border-2 border-game-green text-game-green text-[10px] font-game mb-4 shadow-retro-green">
            <span className="w-2 h-2 bg-game-green animate-ping"></span>
            NEW QUEST AVAILABLE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-game leading-tight tracking-tight">
            AIVANCITY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-green via-game-cyan to-game-pink animate-pulse">
              TECH CLUB
            </span>
          </h1>
          
          <div className="bg-black/50 p-6 border-2 border-gray-700 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-lg md:text-xl font-mono text-gray-300">
              {EVENT_DETAILS.mission} <br/>
            </p>
            <div className="mt-4 text-xs font-game text-game-yellow">
              >> MISSION OBJECTIVE: Build Portfolios. Avoid Theory.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 font-game text-xs">
            <div className="group cursor-pointer">
              <div className="bg-game-black border-4 border-white px-6 py-4 shadow-retro group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                <span className="text-gray-400 block mb-1">DATE</span>
                <span className="text-game-cyan">{EVENT_DETAILS.date}</span>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-game-black border-4 border-white px-6 py-4 shadow-retro group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                <span className="text-gray-400 block mb-1">LOCATION</span>
                <span className="text-game-pink">MAIN HALL / DISCORD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-game-green">
          <ArrowDown size={32} />
        </div>
      </header>

      {/* Level Select (Agenda) */}
      <section className="relative z-10 border-t-4 border-gray-800 bg-[#080c14]">
        <Timeline />
      </section>

      {/* Tutorial (Rules) */}
      <section className="relative z-10">
        <PresentationGuide />
      </section>

      {/* Game Over / Credits */}
      <footer className="relative z-10 py-24 px-4 text-center bg-black border-t-4 border-white">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-5xl font-game text-white glitch" data-text="READY TO SHIP?">
            READY TO SHIP?
          </h2>
          
          <div className="font-mono text-gray-400">
             <p>Classes teach us theory. This guild is for the grind.</p>
             <p className="mt-2 text-game-green">Are you ready to join the party?</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 font-game text-xs">
             <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black border-b-8 border-gray-400 hover:border-gray-500 active:border-b-0 active:translate-y-2 transition-all">
               <Github size={20} />
               VIEW SOURCE
             </button>
             <button className="px-8 py-4 bg-game-green text-black border-b-8 border-green-800 hover:brightness-110 active:border-b-0 active:translate-y-2 transition-all">
               REGISTER [FREE]
             </button>
          </div>
          
          <div className="pt-16 flex items-center justify-center gap-4 text-gray-600 font-mono text-xs">
            <Gamepad2 size={16} />
            <span>BUILT WITH REACT & TAILWIND</span>
            <Heart size={16} className="text-red-900 fill-red-900" />
          </div>
        </div>
      </footer>

      <TerminalChat />
    </div>
  );
};

export default App;