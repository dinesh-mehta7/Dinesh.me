import React from 'react';

export default function GlowBackground({ mousePos }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="hidden lg:block absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#654368]/10 to-[#b58a45]/10 blur-[130px] transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y + (typeof window !== 'undefined' ? window.scrollY : 0)}px`
        }}
      />
    </div>
  );
}