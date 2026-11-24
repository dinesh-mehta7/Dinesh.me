import React from 'react';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';

export default function Projects({ projects, onSelectProject }) {
  const filteredProjects = projects;

  return (
    <section id="projects" className="relative scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-xs font-mono text-[#735b75] uppercase tracking-widest mb-3">Featured Work</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#302333]">
          Real-World Applications & Digital Solutions
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-[#654368] to-[#b58a45] mx-auto mt-4 rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#fffaf2]/60 border border-[#dfd1bb]/80 overflow-hidden backdrop-blur-sm hover:border-[#654368]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#654368]/5"
          >
            {/* Image Container with Hover Effect */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#291d2a] via-[#291d2a]/20 to-transparent opacity-90" />
              
              {/* Category Tag */}
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded bg-gradient-to-r from-[#39223e] to-[#654368] text-[#fffaf2] shadow-lg shadow-[#654368]/20">
                {project.subtitle}
              </span>

              {/* Quick View Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#f8f1e5]/60 backdrop-blur-[2px]">
                <button 
                  onClick={() => onSelectProject(project)}
                  className="px-5 py-2.5 rounded-full bg-white text-[#352a35] font-semibold text-sm flex items-center space-x-2 hover:scale-105 active:scale-95 transition-transform shadow-lg"
                >
                  <Eye className="w-4 h-4" />
                  <span>Quick View</span>
                </button>
              </div>
            </div>

            {/* Project Info Body */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#302333] group-hover:text-[#735b75] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#746872] text-sm mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono text-[#554954] bg-[#eee2cf]/80 rounded border border-[#cbb998]/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-[#dfd1bb]/80">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-[#735b75] hover:text-[#8a708d] flex items-center space-x-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => { e.stopPropagation(); }}
                      className="text-xs text-[#746872] hover:text-[#302333] transition-colors"
                    >
                      GitHub
                    </a>
                    <span className="text-[#a69891]">|</span>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => { e.stopPropagation(); }}
                      className="text-xs text-[#735b75] hover:text-[#8a708d] flex items-center gap-1 transition-colors font-semibold"
                    >
                      Live <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}