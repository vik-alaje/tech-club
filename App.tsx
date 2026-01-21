import React, { useState, useEffect } from 'react';
import { ArrowDown, Gamepad2, Heart, UserPlus } from 'lucide-react';
import RetroGrid from './components/RetroGrid';
import Timeline from './components/Timeline';
import PresentationGuide from './components/PresentationGuide';
import { CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [language, setLanguage] = useState<Language>('fr');
  const [userName, setUserName] = useState('');

  const currentContent = CONTENT[language];

  useEffect(() => {
    if (hasStarted) {
      window.scrollTo(0, 0);
    }
  }, [hasStarted]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;

      const scroll = maxScroll > 0 ? scrollTop / maxScroll : 0;
      const safeScroll = Number.isFinite(scroll) ? Math.min(Math.max(scroll, 0), 1) : 0;
      
      setScrollProgress(safeScroll);

      // Add slight background change when complete
      if (safeScroll >= 0.99) {
        document.body.classList.add('level-complete');
      } else {
        document.body.classList.remove('level-complete');
      }
    };

    // Attach to window for global scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once to set initial state if page is already scrolled or refreshed
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted]); // Re-bind if view changes, though technically window scroll is global

  // START SCREEN
  if (!hasStarted) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center font-game text-center relative overflow-hidden">
        <RetroGrid />
        
        <div className="z-20 flex flex-col items-center animate-float-pixel px-4">
           <h1 className="text-4xl md:text-6xl text-white mb-8 text-shadow-retro leading-relaxed">
             {currentContent.ui.heroTitleLine1} <br/>
             <span className="text-game-green">{currentContent.ui.heroTitleLine2}</span>
           </h1>
           
           <div className="text-game-yellow text-sm mb-8 animate-pulse">
             © 2026 AIVANCITY SCHOOL OF TECHNOLOGY
           </div>

           {/* User Setup Section */}
           <div className="flex flex-col gap-6 mb-12 bg-black/50 p-6 border-2 border-gray-700 backdrop-blur-md">
              {/* Language Toggle */}
              <div className="flex justify-center gap-4">
                 <button 
                   onClick={() => setLanguage('fr')}
                   className={`px-4 py-2 text-xs border-2 transition-all ${language === 'fr' ? 'bg-white text-black border-white' : 'text-gray-500 border-gray-800 hover:border-gray-500'}`}
                 >
                   FRANÇAIS
                 </button>
                 <button 
                   onClick={() => setLanguage('en')}
                   className={`px-4 py-2 text-xs border-2 transition-all ${language === 'en' ? 'bg-white text-black border-white' : 'text-gray-500 border-gray-800 hover:border-gray-500'}`}
                 >
                   ENGLISH
                 </button>
              </div>

              {/* Name Input */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-[10px] text-game-cyan">{currentContent.ui.enterName}</label>
                <input 
                  type="text" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="PLAYER 1"
                  className="bg-gray-900 border-b-2 border-game-green text-white font-mono p-2 focus:outline-none focus:bg-gray-800 transition-colors"
                />
              </div>
           </div>

           <button 
             onClick={() => setHasStarted(true)}
             className="px-8 py-4 bg-transparent border-4 border-white text-white text-xl hover:bg-white hover:text-black transition-colors animate-pulse-fast hover:animate-none disabled:opacity-50 disabled:cursor-not-allowed"
           >
             {currentContent.ui.pressStart}
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
    <div className={`min-h-screen bg-[#050a0e] text-gray-100 font-sans selection:bg-game-green/30 cursor-crosshair transition-colors duration-1000 ${scrollProgress > 0.99 ? 'shadow-[inset_0_0_100px_rgba(0,255,255,0.1)]' : ''}`}>
      <RetroGrid />
      
      {/* Liquid Spill Effect Overlay */}
      <div className={`spill-overlay ${scrollProgress > 0.99 ? 'animate-spill' : 'h-0 opacity-0'}`}></div>

      {/* HUD (Navbar) */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 border-b border-gray-800 backdrop-blur-sm">
        {/* Progress Bar Container */}
        <div className="w-full h-2 bg-gray-900">
           {/* The Liquid Bar */}
           <div 
             className="h-full bg-game-cyan shadow-[0_0_10px_#00ffff] transition-all duration-100 ease-out relative"
             style={{ width: `${Math.min(scrollProgress * 100, 100)}%` }}
           >
             {/* Leading Edge Sparkle */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_white]"></div>
           </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center font-game">
          <div className="text-xs text-game-cyan animate-pulse flex gap-4">
             <span>{currentContent.ui.levelProgress}: {Math.floor(scrollProgress * 100)}%</span>
             {userName && <span className="hidden md:inline text-white">| {currentContent.ui.welcomeUser} {userName}</span>}
          </div>

          <div className="flex items-center gap-4">
             <a 
               href={currentContent.ui.joinUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="px-4 py-2 bg-game-green text-black text-[10px] border-b-4 border-green-800 active:border-b-0 active:translate-y-1 hover:brightness-110 transition-all"
             >
               {currentContent.ui.joinClub}
             </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="goals" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black border-2 border-game-green text-game-green text-[10px] font-game mb-4 shadow-retro-green">
            <span className="w-2 h-2 bg-game-green animate-ping"></span>
            {currentContent.ui.newQuest}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-game leading-tight tracking-tight">
             {currentContent.ui.heroTitleLine1} <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-green via-game-cyan to-game-pink animate-pulse">
               {currentContent.ui.heroTitleLine2}
             </span>
          </h1>
          
          <div className="bg-black/50 p-6 border-2 border-gray-700 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-lg md:text-xl font-mono text-gray-300">
              {currentContent.eventDetails.mission} <br/>
            </p>
            <div className="mt-4 text-xs font-game text-game-yellow">
              {currentContent.ui.missionObj}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 font-game text-xs">
            {/* Date Block */}
            <div className="group cursor-pointer">
              <div className="bg-game-black border-4 border-white px-6 py-4 shadow-retro group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                <span className="text-gray-400 block mb-1">{currentContent.ui.dateLabel}</span>
                <span className="text-game-cyan">{currentContent.eventDetails.date}</span>
              </div>
            </div>

            {/* Time Block */}
            <div className="group cursor-pointer">
              <div className="bg-game-black border-4 border-white px-6 py-4 shadow-retro group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                <span className="text-gray-400 block mb-1">{currentContent.ui.timeLabel}</span>
                <span className="text-game-yellow">{currentContent.eventDetails.time}</span>
              </div>
            </div>
            
            {/* Location Block */}
            <div className="group cursor-pointer">
              <div className="bg-game-black border-4 border-white px-6 py-4 shadow-retro group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                <span className="text-gray-400 block mb-1">{currentContent.ui.locationLabel}</span>
                <span className="text-game-pink">{currentContent.eventDetails.location}</span>
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
        <Timeline 
          agenda={currentContent.agenda} 
          labels={{
            questLog: currentContent.ui.questLog,
            stages: currentContent.ui.stages,
            timeframe: currentContent.ui.timeframe,
            level: currentContent.ui.level
          }}
        />
      </section>

      {/* Tutorial (Rules) */}
      <section className="relative z-10">
        <PresentationGuide 
          rules={currentContent.showcaseRules} 
          labels={{
            tutorial: currentContent.ui.tutorial,
            legendaryItem: currentContent.ui.legendaryItem,
            aiBuilder: currentContent.ui.aiBuilder,
            aiBuilderDesc: currentContent.ui.aiBuilderDesc,
            acceleration: currentContent.ui.acceleration,
            systemMessage: currentContent.ui.systemMessage
          }}
          content={currentContent}
          language={language}
          setLanguage={setLanguage}
        />
      </section>

      {/* Game Over / Credits */}
      <footer className="relative z-10 py-24 px-4 text-center bg-black border-t-4 border-white">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-5xl font-game text-white glitch" data-text={currentContent.ui.ready}>
            {currentContent.ui.ready}
          </h2>
          
          <div className="font-mono text-gray-400">
             <p>{currentContent.ui.footerText1}</p>
             <p className="mt-2 text-game-green">{currentContent.ui.footerText2}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 font-game text-xs">
             <a 
               href={currentContent.ui.registerUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-3 px-12 py-6 text-sm bg-white text-black border-b-8 border-gray-400 hover:border-gray-500 active:border-b-0 active:translate-y-2 transition-all transform hover:scale-105"
             >
               <UserPlus size={24} />
               {currentContent.ui.viewGoals}
             </a>
          </div>
          
          <div className="pt-16 flex items-center justify-center gap-4 text-gray-600 font-mono text-xs">
            <Gamepad2 size={16} />
            <span>{currentContent.ui.credits}</span>
            <Heart size={16} className="text-red-900 fill-red-900" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;