import React from 'react';
import { Code, Heart } from 'lucide-react';

export default function Footer({ personal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-900 bg-slate-950/80 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-bold tracking-wider text-white text-sm uppercase">{personal.name}</span>
              <p className="text-[10px] text-slate-500 font-mono">{personal.education}</p>
            </div>
          </div>

          {/* Navigation links quick access */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600 mt-1 flex items-center justify-center md:justify-end gap-1">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> in India
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}