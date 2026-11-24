import React from 'react';
import { User, BookOpen, Cpu, Globe } from 'lucide-react';

export default function About({ personal }) {
  return (
    <section id="about" className="relative scroll-mt-24">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-mono text-[#735b75] uppercase tracking-widest mb-3">About Me</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#302333]">
          Crafting High-Performance Applications With Modern Tech
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-[#654368] to-[#b58a45] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Visual Mockup / Profile frame */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#654368]/20 to-[#b58a45]/10 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition-all duration-500" />
          
          <div className="relative rounded-3xl bg-gradient-to-br from-[#fffaf2] to-[#f1e7d5] border border-[#dfd1bb] p-8 shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#654368]" />
              <div className="w-3 h-3 rounded-full bg-[#8a708d]" />
              <div className="w-3 h-3 rounded-full bg-[#735b75]" />
              <span className="text-xs font-mono text-[#8c7d82]">dinesh-profile.json</span>
            </div>

            <div className="font-mono text-xs sm:text-sm text-[#554954] space-y-2">
              <p><span className="text-[#735b75]">const</span> <span className="text-[#8a708d]">developer</span> = &#123;</p>
              <p className="pl-4"><span className="text-[#735b75]">name</span>: <span className="text-[#654368]">"{personal.name}"</span>,</p>
              <p className="pl-4"><span className="text-[#735b75]">role</span>: <span className="text-[#654368]">"{personal.role}"</span>,</p>
              <p className="pl-4"><span className="text-[#735b75]">education</span>: <span className="text-[#654368]">"{personal.education}"</span>,</p>
              <p className="pl-4"><span className="text-[#735b75]">passion</span>: <span className="text-[#654368]">"Scalable Architectures & UX"</span>,</p>
              <p className="pl-4"><span className="text-[#735b75]">status</span>: <span className="text-[#654368]">"Always Learning"</span></p>

              <p>&#125;;</p>
            </div>

            {/* Leetcode highlight tag */}
            <div className="mt-8 p-4 rounded-xl bg-[#b58a45]/10 border border-[#b58a45]/25 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-xs text-[#746872] font-mono">PROBLEM SOLVING</p>
                  <p className="text-sm font-bold text-[#9a7137]">Strong foundation in DSA</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#746872] bg-[#eee2cf] px-2 py-1 rounded">Data Structures</span>
            </div>
          </div>
        </div>

        {/* Right column: Bio / Narrative and key points */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl font-bold text-[#302333] flex items-center gap-2">
            <User className="w-6 h-6 text-[#735b75]" />
            Who is {personal.name}?
          </h3>
          
          <p className="text-[#554954] leading-relaxed">
            {personal.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-[#fffaf2]/40 border border-[#dfd1bb]/80 flex items-start space-x-3">
              <BookOpen className="w-5 h-5 text-[#735b75] shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#302333] text-sm">B.Tech IT Student</h4>
                <p className="text-xs text-[#746872] mt-1">Synthesizing academic computer science with real-world industry standards.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#fffaf2]/40 border border-[#dfd1bb]/80 flex items-start space-x-3">
              <Cpu className="w-5 h-5 text-[#735b75] shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#302333] text-sm">Robust Backends</h4>
                <p className="text-xs text-[#746872] mt-1">Designing relational and non-relational database models with Node & Supabase.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#fffaf2]/40 border border-[#dfd1bb]/80 flex items-start space-x-3">
              <Globe className="w-5 h-5 text-[#735b75] shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#302333] text-sm">Modern Frontend UI</h4>
                <p className="text-xs text-[#746872] mt-1">Crafting pixel-perfect responsive layouts with Tailwind, React, and Next.js.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#fffaf2]/40 border border-[#dfd1bb]/80 flex items-start space-x-3">
              <User className="w-5 h-5 text-[#735b75] shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#302333] text-sm">Continuous Evolution</h4>
                <p className="text-xs text-[#746872] mt-1">Constantly learning new frameworks, libraries, and architectural patterns.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}