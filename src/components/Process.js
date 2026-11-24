import React from 'react';
import { CheckCircle2, MessageSquare, Code, ShieldCheck, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your business goals, target audience, and structuring technical specifications.',
      icon: MessageSquare,
      color: 'border-[#654368] text-[#735b75]'
    },
    {
      step: '02',
      title: 'Database & Architecture Design',
      description: 'Designing highly robust relational schemas, data models, and mapping API endpoints.',
      icon: ShieldCheck,
      color: 'border-[#654368] text-[#735b75]'
    },
    {
      step: '03',
      title: 'Frontend & UI Engineering',
      description: 'Developing highly responsive, interactive user interfaces with modern styling frameworks.',
      icon: Code,
      color: 'border-[#654368] text-[#735b75]'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Performing multi-browser testing, loading optimization, SEO audit, and deploying to Vercel.',
      icon: Rocket,
      color: 'border-[#654368] text-[#735b75]'
    }
  ];

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-mono text-[#735b75] uppercase tracking-widest mb-3">Workflow</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#302333]">
          My Development Process
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-[#654368] to-[#b58a45] mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Connector line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-[#eee2cf] -translate-y-12 z-0" />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="relative z-10 p-6 rounded-2xl bg-[#fffaf2]/50 border border-[#dfd1bb]/80 backdrop-blur-sm hover:border-[#cbb998] transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-[#a69891] font-mono group-hover:text-[#735b75]/50 transition-colors">
                    {step.step}
                  </span>
                  <div className={`p-3 rounded-xl bg-[#eee2cf] border ${step.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#302333] group-hover:text-[#8a708d] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#746872] text-xs mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#735b75]" />
                <span className="text-[10px] font-mono text-[#8c7d82] uppercase tracking-wider">Milestone Active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}