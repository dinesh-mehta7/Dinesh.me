import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Skills({ skills }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'languages', label: 'Languages' },
    { id: 'ai_ml', label: 'AI & ML' },
    { id: 'tools', label: 'Tools & Auth' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeTab || s.additionalCategories?.includes(activeTab));

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
        <h2 className="text-xs font-mono text-[#735b75] uppercase tracking-widest mb-3">Tech Stack & Skills</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#302333]">
          My Toolkit For Digital Craftsmanship
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-[#654368] to-[#b58a45] mx-auto mt-4 rounded-full" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === cat.id
                ? 'bg-gradient-to-r from-[#39223e] via-[#654368] to-[#b58a45] text-[#fffaf2] shadow-lg shadow-[#654368]/20'
                : 'bg-[#fffaf2]/60 text-[#746872] hover:text-[#302333] border border-[#dfd1bb] hover:border-[#cbb998]'
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
            className="relative group overflow-hidden rounded-2xl bg-[#fffaf2]/50 border border-[#dfd1bb]/80 p-5 backdrop-blur-md hover:border-[#cbb998]/85 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#654368]/5 flex flex-col items-center justify-center text-center"
          >
            {/* Subtle card light glow */}
            <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-[#654368]/5 rounded-full blur-2xl group-hover:bg-[#654368]/10 transition-all duration-300" />
            
            <div className="w-12 h-12 rounded-xl bg-[#f8f1e5]/80 border border-[#dfd1bb] flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            
            <span className="block text-xs font-semibold text-[#403543] group-hover:text-[#302333] transition-colors">
              {skill.name}
            </span>
            <span className="block text-[9px] font-mono text-[#8c7d82] mt-1 uppercase tracking-wider">
              {activeTab === 'ai_ml' ? 'AI / ML' : skill.category === 'frontend' ? 'UI Stack' : skill.category === 'backend' ? 'Server/DB' : skill.category === 'languages' ? 'Language' : skill.category === 'ai_ml' ? 'AI / ML' : 'Devops/Tool'}
            </span>
          </div>
        ))}
      </div>

      {/* Why Choose Me Section */}
      <div className="mt-16 p-8 rounded-3xl bg-[#f7f0e5] border border-[#dfd1bb]/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-[#735b75] uppercase tracking-widest block mb-2">Philosophy</span>
            <h3 className="text-2xl font-bold text-[#302333]">Why Choose Me For Your Next Project?</h3>
            <p className="text-[#746872] text-sm mt-3 leading-relaxed">
              I align business values with elegant code structures. Every line of code is written with performance, scalability, and maintainability in mind.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseMePoints.map((point, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#735b75] shrink-0 mt-0.5" />
                <span className="text-sm text-[#554954] font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
