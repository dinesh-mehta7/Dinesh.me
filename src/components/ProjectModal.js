import React from 'react';
import { X, ExternalLink, Github, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#f8f1e5]/80 backdrop-blur-md">
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#fffaf2] border border-[#dfd1bb] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#f8f1e5]/80 border border-[#dfd1bb] text-[#746872] hover:text-[#302333] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-grow">
          
          {/* Banner image */}
          <div className="relative aspect-video w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#291d2a] to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded bg-gradient-to-r from-[#39223e] to-[#654368] text-[#fffaf2]">
                {project.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fffaf2] mt-2">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Body content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono text-[#735b75] uppercase tracking-widest mb-2">Project Overview</h4>
              <p className="text-[#554954] text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Highlights / Features List */}
            <div>
              <h4 className="text-xs font-mono text-[#735b75] uppercase tracking-widest mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-[#554954]">
                    <CheckCircle className="w-4 h-4 text-[#735b75] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack used */}
            <div>
              <h4 className="text-xs font-mono text-[#735b75] uppercase tracking-widest mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono text-[#8a708d] bg-[#654368]/10 border border-[#654368]/20 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-[#dfd1bb] bg-[#f8f1e5]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#8c7d82]">
            Designed & Built by Dinesh Mehta
          </span>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#eee2cf] hover:bg-[#e5d8c4] text-[#403543] font-semibold text-sm flex items-center justify-center space-x-2 border border-[#cbb998] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#39223e] via-[#654368] to-[#b58a45] text-[#fffaf2] font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#654368]/20 hover:shadow-[#654368]/30 transition-all"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}