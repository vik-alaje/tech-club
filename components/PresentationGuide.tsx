import React from 'react';
import { SHOWCASE_RULES } from '../constants';
import { Zap, Gamepad2, Laptop } from 'lucide-react';

const PresentationGuide: React.FC = () => {
  return (
    <div className="py-20 border-y-4 border-gray-800 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVQYV2NkYGD4z4AHMP7//x8A3d1/wW3e24gAAAAASUVORK5CYII=')]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-game text-white mb-6">
            <span className="text-game-pink">&lt;</span> TUTORIAL <span className="text-game-pink">/&gt;</span>
          </h2>
          <p className="font-mono text-game-green text-sm max-w-2xl mx-auto border border-game-green/30 bg-game-green/5 p-4 rounded">
            [SYSTEM MESSAGE]: Presentation protocol loaded. Follow these rules to maximize XP gain.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {SHOWCASE_RULES.map((rule, idx) => (
            <div key={idx} className="group relative bg-gray-900 border-4 border-gray-700 p-6 transition-all hover:-translate-y-2 hover:border-game-cyan hover:shadow-retro">
              <div className="absolute -top-5 -left-2 bg-game-cyan text-black font-game text-xs px-2 py-1 border-2 border-white shadow-sm">
                RULE_0{idx + 1}
              </div>
              
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-game text-white mb-4 mt-2">{rule.title}</h3>
                <p className="font-mono text-sm text-gray-400 mb-6 flex-grow">{rule.description}</p>
                
                {rule.example && (
                   <div className="mt-auto bg-black p-3 border-l-4 border-game-pink">
                     <p className="font-mono text-xs text-game-pink">"{rule.example}"</p>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Special Item Section */}
        <div className="relative border-4 border-game-yellow bg-gray-900 p-8 shadow-retro-pink">
           <div className="absolute top-0 right-0 p-2 bg-game-yellow text-black font-bold font-game text-xs">
              LEGENDARY ITEM
           </div>

           <div className="flex flex-col md:flex-row gap-12 items-center">
             
             {/* Text Side */}
             <div className="flex-1 space-y-4">
               <h3 className="text-2xl font-game text-white">THE "SECRET SAUCE"</h3>
               <p className="font-mono text-gray-300 leading-relaxed">
                 Unlocks <span className="text-game-green font-bold">Adaptive IDE</span> ability. 
                 Provides +50 Efficiency and +20 Peer Support aura.
               </p>
               <div className="inline-flex items-center gap-2 border-2 border-game-green px-4 py-2 bg-game-green/10 text-game-green font-mono text-xs animate-pulse-fast">
                 <Zap size={14} />
                 <span>LIVE DEMO: 00:10</span>
               </div>
             </div>

             {/* Visual Side: 8-bit Screen */}
             <div className="w-full md:w-96 aspect-video bg-black border-4 border-gray-600 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-green-500 opacity-30 leading-none whitespace-pre select-none">
                  {`
                  010101010101010101
                  101010  CODE  1010
                  010101010101010101
                  `}
                </div>
                
                {/* Simulated IDE UI */}
                <div className="absolute inset-4 border border-game-green/50 p-2">
                   <div className="flex justify-between border-b border-game-green/30 pb-1 mb-2">
                     <span className="text-[10px] text-game-green">IDE.exe</span>
                     <div className="flex gap-1">
                       <div className="w-2 h-2 bg-red-500"></div>
                       <div className="w-2 h-2 bg-yellow-500"></div>
                     </div>
                   </div>
                   <div className="space-y-1 font-mono text-[10px] text-white">
                      <div><span className="text-purple-400">fn</span> <span className="text-yellow-400">main</span>() {"{"}</div>
                      <div className="pl-2">alert(<span className="text-green-300">"HACK THE PLANET"</span>);</div>
                      <div className="pl-2 bg-white text-black mt-2 animate-float-pixel">
                        > SUGGESTION: Use shortcut [CTRL+K]
                      </div>
                      <div>{"}"}</div>
                   </div>
                </div>
             </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationGuide;