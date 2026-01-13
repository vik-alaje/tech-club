import React from 'react';
import { ShowcaseRule, EventContent, Language } from '../types';
import { Zap } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';

interface PresentationGuideProps {
  rules: ShowcaseRule[];
  labels: {
    tutorial: string;
    legendaryItem: string;
    aiBuilder: string;
    aiBuilderDesc: string;
    acceleration: string;
  };
  content: EventContent;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const PresentationGuide: React.FC<PresentationGuideProps> = ({ rules, labels, content, language, setLanguage }) => {
  return (
    <div className="py-20 border-y-4 border-gray-800 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVQYV2NkYGD4z4AHMP7//x8A3d1/wW3e24gAAAAASUVORK5CYII=')]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-game text-white mb-6">
            <span className="text-game-pink">&lt;</span> {labels.tutorial} <span className="text-game-pink">/&gt;</span>
          </h2>
          <p className="font-mono text-game-green text-sm max-w-2xl mx-auto border border-game-green/30 bg-game-green/5 p-4 rounded">
            [SYSTEM MESSAGE]: Speakers have 8 minutes each. Here is how to use that time best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {rules.map((rule, idx) => (
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
           <div className="absolute top-0 right-0 p-2 bg-game-yellow text-black font-bold font-game text-xs animate-pulse">
              {labels.legendaryItem}
           </div>

           <div className="flex flex-col md:flex-row gap-12 items-start">
             
             {/* Text Side */}
             <div className="flex-1 space-y-4 pt-4">
               <h3 className="text-2xl font-game text-white">{labels.aiBuilder}</h3>
               <p className="font-mono text-gray-300 leading-relaxed">
                 {labels.aiBuilderDesc}
               </p>
               <div className="inline-flex items-center gap-2 border-2 border-game-green px-4 py-2 bg-game-green/10 text-game-green font-mono text-xs">
                 <Zap size={14} className="animate-bounce" />
                 <span>{labels.acceleration}</span>
               </div>
             </div>

             {/* Visual Side: Interactive Terminal */}
             <div className="w-full md:w-[450px]">
                <InteractiveTerminal 
                  content={content}
                  language={language}
                  setLanguage={setLanguage}
                  className="w-full aspect-video"
                />
             </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationGuide;