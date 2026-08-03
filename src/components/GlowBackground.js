import React from 'react';

export default function GlowBackground({ mousePos }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Aurora Radial Glow follow mouse */}
      <div
        className="hidden lg:block absolute w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y + (typeof window !== 'undefined' ? window.scrollY : 0)}px`
        }}
      />

      {/* Top Left Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-indigo-600/10 blur-[150px] animate-pulse" />

      {/* Middle Right Gradient Blob */}
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] rounded-full bg-purple-600/10 blur-[130px] [animation-duration:8s] animate-pulse" />

      {/* Bottom Left Gradient Blob */}
      <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] max-w-[400px] rounded-full bg-cyan-600/10 blur-[120px] [animation-duration:12s] animate-pulse" />
      
      {/* Subtle Grid overlay for that premium developer aesthetic */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
    </div>
  );
}