import React from 'react';
import { CheckCircle2, MessageSquare, Code, ShieldCheck, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your business goals, target audience, and structuring technical specifications.',
      icon: MessageSquare,
      color: 'border-indigo-500 text-indigo-400'
    },
    {
      step: '02',
      title: 'Database & Architecture Design',
      description: 'Designing highly robust relational schemas, data models, and mapping API endpoints.',
      icon: ShieldCheck,
      color: 'border-purple-500 text-purple-400'
    },
    {
      step: '03',
      title: 'Frontend & UI Engineering',
      description: 'Developing highly responsive, interactive user interfaces with modern styling frameworks.',
      icon: Code,
      color: 'border-cyan-500 text-cyan-400'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Performing multi-browser testing, loading optimization, SEO audit, and deploying to Vercel.',
      icon: Rocket,
      color: 'border-emerald-500 text-emerald-400'
    }
  ];

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Workflow</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white">
          My Development Process
        </p>
        <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Connector line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-12 z-0" />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="relative z-10 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-slate-700 font-mono group-hover:text-indigo-400/50 transition-colors">
                    {step.step}
                  </span>
                  <div className={`p-3 rounded-xl bg-slate-850 border ${step.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Milestone Active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}