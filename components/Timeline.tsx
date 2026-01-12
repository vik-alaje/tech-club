import React from 'react';
import { AGENDA } from '../constants';
import { Sword, Scroll, Users, Skull } from 'lucide-react';

const iconMap: any = {
  rocket: Sword, // Kickoff -> Start Quest
  code: Scroll,  // Showcase -> Skill Scroll
  users: Users,  // Wrapup -> Party
  zap: Skull,    // Danger/Boss?
};

const Timeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-game text-game-yellow text-shadow-retro mb-4">
          QUEST LOG
        </h2>
        <div className="inline-block px-4 py-1 bg-game-black border-2 border-game-green text-game-green font-mono text-xs">
          STAGES: {AGENDA.length} // DIFFICULTY: HARDCORE
        </div>
      </div>

      <div className="relative space-y-16">
        {/* Pixelated Connecting Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 bg-gray-800 -ml-1 md:-ml-1">
           <div className="w-full h-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzjwqoAoYLkQrAKiAGQAAgCjDAoV83f1JgAAAABJRU5ErkJggg==')] opacity-50"></div>
        </div>

        {AGENDA.map((item, index) => {
          const Icon = iconMap[item.icon] || Sword;
          const isLeft = index % 2 === 0;

          return (
            <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? 'md:flex-row-reverse' : ''} group`}>
              
              {/* Level Card */}
              <div className="flex-1 md:w-1/2">
                <div className="relative bg-gray-900 border-4 border-gray-700 hover:border-game-green transition-all duration-75 group-hover:translate-x-1 group-hover:translate-y-1 shadow-retro group-hover:shadow-none p-6">
                  {/* Decorative Corner Pixels */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-gray-900 z-10"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-900 z-10"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gray-900 z-10"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gray-900 z-10"></div>

                  <div className="flex items-center justify-between mb-3 border-b-2 border-dashed border-gray-700 pb-2">
                    <span className="font-game text-xs text-game-pink">LEVEL 0{index + 1}</span>
                    <span className="font-mono text-xs text-game-green blink-slow">{item.time}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold font-game text-white mb-2 leading-tight">{item.title}</h3>
                  <p className="font-mono text-sm text-gray-400 mb-4">{item.description}</p>
                  
                  {item.details && (
                    <div className="bg-black/50 p-3 border-2 border-gray-800">
                      <ul className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 font-mono text-xs text-gray-300">
                            <span className="text-game-yellow">></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Map Node */}
              <div className="absolute left-4 md:left-1/2 w-12 h-12 -ml-6 md:-ml-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-game-black border-4 border-game-green shadow-retro-green group-hover:bg-game-green group-hover:text-black transition-colors duration-200 flex items-center justify-center z-10">
                  <Icon size={20} className="transform group-hover:rotate-12 transition-transform" />
                </div>
              </div>

              <div className="hidden md:block flex-1"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;