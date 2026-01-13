import React, { useEffect, useState } from 'react';

// Character types: 'laptop', 'coffee', 'phone', 'backpack'
type CharacterType = 'laptop' | 'coffee' | 'phone' | 'backpack';

interface Character {
  id: number;
  type: CharacterType;
  lane: 'top' | 'bottom';
  direction: 'left' | 'right';
  speed: number; // duration in seconds
  delay: number;
  color: string;
}

const COLORS = ['#4ade80', '#00ffff', '#ff00ff', '#ffff00'];
const TYPES: CharacterType[] = ['laptop', 'coffee', 'phone', 'backpack'];

const RoamingCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Generate initial characters
    const initialChars: Character[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      type: TYPES[Math.floor(Math.random() * TYPES.length)],
      lane: Math.random() > 0.5 ? 'top' : 'bottom',
      direction: Math.random() > 0.5 ? 'left' : 'right',
      speed: 15 + Math.random() * 20, // 15-35s duration
      delay: Math.random() * -30, // Start at random positions (negative delay)
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setCharacters(initialChars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {characters.map((char) => (
        <div
          key={char.id}
          className="absolute flex flex-col items-center"
          style={{
            top: char.lane === 'top' ? '20%' : 'auto',
            bottom: char.lane === 'bottom' ? '20%' : 'auto',
            left: 0, // Starting point, animation handles movement
            animation: `
              ${char.direction === 'right' ? 'walkRight' : 'walkLeft'} ${char.speed}s linear infinite,
              bounceWalk 0.5s steps(2) infinite
            `,
            animationDelay: `${char.delay}s`,
            opacity: 0.7,
            zIndex: 0
          }}
        >
          {/* Pixel Character Construction */}
          <div className="w-8 h-12 relative" style={{ color: char.color }}>
             
             {/* Floating Elements (Bubble/Signal) */}
             {char.type === 'phone' && (
               <div className="absolute -top-4 -right-4 w-4 h-3 bg-white text-black text-[8px] flex items-center justify-center font-mono animate-pulse border border-black">
                 ...
               </div>
             )}

             {/* Head */}
             <div className="w-4 h-4 bg-current mx-auto shadow-retro-hover border border-black"></div>
             
             {/* Body */}
             <div className="w-5 h-6 bg-gray-400 mx-auto mt-0.5 relative border border-black">
               {/* Accessory Render */}
               {char.type === 'backpack' && (
                 <div className="absolute top-1 -right-2 w-2 h-4 bg-yellow-700 border border-black"></div>
               )}
               {char.type === 'laptop' && (
                 <div className="absolute top-3 -right-3 w-5 h-4 bg-gray-300 border border-white transform -rotate-12 flex items-center justify-center">
                    <div className="w-3 h-2 bg-black"></div>
                 </div>
               )}
             </div>
             
             {/* Legs */}
             <div className="flex justify-center gap-1 mt-0.5">
               <div className="w-1.5 h-3 bg-gray-600 border border-black"></div>
               <div className="w-1.5 h-3 bg-gray-600 border border-black"></div>
             </div>
             
             {/* Coffee Cup */}
             {char.type === 'coffee' && (
               <div className="absolute top-4 -left-2 w-2 h-3 bg-orange-700 border border-black animate-none"></div>
             )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoamingCharacters;