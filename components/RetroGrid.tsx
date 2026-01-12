import React from 'react';

const RetroGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050a0e]">
      {/* Horizon Glow */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#1a0b2e] via-[#050a0e] to-[#2d1b4e] opacity-80" />

      {/* Moving Perspective Grid */}
      <div className="absolute inset-0 [transform-style:preserve-3d] [perspective:1000px] overflow-hidden">
        <div 
          className="absolute inset-0 origin-bottom [transform:rotateX(60deg)_translateY(-100px)] animate-scroll-grid"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(74, 222, 128, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(74, 222, 128, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            height: '200%',
          }}
        />
      </div>
      
      {/* Sun/Moon */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-b from-yellow-400 to-pink-600 blur-[60px] opacity-20" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)]" />
    </div>
  );
};

export default RetroGrid;