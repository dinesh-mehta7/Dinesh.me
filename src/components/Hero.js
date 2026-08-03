import React from 'react';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';

export default function Hero({ personal }) {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Badge container */}
      <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 animate-fade-in-down">
        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
        <span>Open to Freelance & Full-time Roles</span>
      </div>

      {/* Main Heading with dynamic gradients and custom wave hand gesture */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight sm:leading-none">
        <span className="block text-slate-100">
          Hi <span className="animate-wave inline-block">👋</span>, I am
        </span>
        <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 filter drop-shadow-sm">
          {personal.name}
        </span>
      </h1>

      {/* Tagline & Subtitles */}
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-indigo-200/90 font-medium max-w-2xl">
        {personal.role}
      </p>
      <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1 tracking-widest uppercase">
        {personal.education}
      </p>

      {/* Short Description */}
      <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
        {personal.tagline}
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 z-10">
        <a
          href="#projects"
          className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
        >
          <span>View Projects</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
        >
          <Mail className="w-5 h-5 text-indigo-400" />
          <span>Contact Me</span>
        </a>

        <a
          href="/dinesh-mehta-cv.pdf"
          download
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/40 border border-indigo-500/20 hover:border-indigo-500/50 text-indigo-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
        >
          <Download className="w-5 h-5" />
          <span>Download CV</span>
        </a>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}