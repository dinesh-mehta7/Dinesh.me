import React from 'react';
import { User, BookOpen, Cpu, Globe } from 'lucide-react';

export default function About({ personal }) {
  return (
    <section id="about" className="relative scroll-mt-24">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">About Me</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white">
          Crafting High-Performance Applications With Modern Tech
        </p>
        <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Visual Mockup / Profile frame */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition-all duration-500" />
          
          <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-slate-500">dinesh-profile.json</span>
            </div>

            <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-2">
              <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
              <p className="pl-4"><span className="text-purple-400">name</span>: <span className="text-green-300">"{personal.name}"</span>,</p>
              <p className="pl-4"><span className="text-purple-400">role</span>: <span className="text-green-300">"{personal.role}"</span>,</p>
              <p className="pl-4"><span className="text-purple-400">education</span>: <span className="text-green-300">"{personal.education}"</span>,</p>
              <p className="pl-4"><span className="text-purple-400">passion</span>: <span className="text-green-300">"Scalable Architectures & UX"</span>,</p>
              <p className="pl-4"><span className="text-purple-400">status</span>: <span className="text-green-300">"Always Learning"</span></p>

              <p>&#125;;</p>
            </div>

            {/* Leetcode highlight tag */}
            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-xs text-slate-400 font-mono">PROBLEM SOLVING</p>
                  <p className="text-sm font-bold text-amber-300">Strong foundation in DSA</p>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">Data Structures</span>
            </div>
          </div>
        </div>

        {/* Right column: Bio / Narrative and key points */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <User className="w-6 h-6 text-indigo-400" />
            Who is {personal.name}?
          </h3>
          
          <p className="text-slate-300 leading-relaxed">
            {personal.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start space-x-3">
              <BookOpen className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-sm">B.Tech IT Student</h4>
                <p className="text-xs text-slate-400 mt-1">Synthesizing academic computer science with real-world industry standards.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start space-x-3">
              <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-sm">Robust Backends</h4>
                <p className="text-xs text-slate-400 mt-1">Designing relational and non-relational database models with Node & Supabase.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start space-x-3">
              <Globe className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-sm">Modern Frontend UI</h4>
                <p className="text-xs text-slate-400 mt-1">Crafting pixel-perfect responsive layouts with Tailwind, React, and Next.js.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start space-x-3">
              <User className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-sm">Continuous Evolution</h4>
                <p className="text-xs text-slate-400 mt-1">Constantly learning new frameworks, libraries, and architectural patterns.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}