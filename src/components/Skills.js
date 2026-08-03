import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Skills({ skills }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'languages', label: 'Languages' },
    { id: 'tools', label: 'Tools & Auth' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  const whyChooseMePoints = [
    'Clean and maintainable code structure',
    'Modern UI/UX with exceptional responsiveness',
    'Highly secure authentication & authorization',
    'Fast performance and SEO optimized pages',
    'Scalable API design and robust architectures',
    'Cross-browser compatibility & accessible layouts'
  ];

  return (
    <section id="skills" className="relative scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Tech Stack & Skills</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white">
          My Toolkit For Digital Craftsmanship
        </p>
        <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === cat.id
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid - Redesigned to look like clean, premium cards without percentages */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="relative group overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800/80 p-5 backdrop-blur-md hover:border-slate-700/85 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col items-center justify-center text-center"
          >
            {/* Subtle card light glow */}
            <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all duration-300" />
            
            <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            
            <span className="block text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
              {skill.name}
            </span>
            <span className="block text-[9px] font-mono text-slate-500 mt-1 uppercase tracking-wider">
              {skill.category === 'frontend' ? 'UI Stack' : skill.category === 'backend' ? 'Server/DB' : skill.category === 'languages' ? 'Language' : 'Devops/Tool'}
            </span>
          </div>
        ))}
      </div>

      {/* Why Choose Me Section */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-950/20 to-purple-950/20 border border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Philosophy</span>
            <h3 className="text-2xl font-bold text-white">Why Choose Me For Your Next Project?</h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              I align business values with elegant code structures. Every line of code is written with performance, scalability, and maintainability in mind.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseMePoints.map((point, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}