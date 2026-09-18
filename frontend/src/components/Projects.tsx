import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-sm">
              Real technical projects built with focus on practicality, compliance, and user experience.
            </p>
          </div>

          <a
            href="https://github.com/Gourab-ghosh21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-[#FF5722] transition-colors border border-white/10 hover:border-[#FF5722] px-4 py-2.5 rounded-lg bg-white/5"
          >
            GITHUB PROFILE
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2 Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: PackCheck India */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 glass-panel-hover flex flex-col justify-between group">
            <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-code text-[#FF5722] uppercase tracking-wider bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded">
                    Legal Metrology System
                  </span>
                  <span className="text-xs text-gray-400 font-medium">Design &amp; Frontend Lead</span>
                </div>
                
                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#FF5722] transition-colors">
                  PackCheck India
                </h3>
                
                <p className="text-xs font-semibold text-gray-300">
                  Legal Metrology Packaged Commodity Compliance System
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed pt-2">
                  Worked on a digital system for checking packaged-commodity compliance under Legal Metrology requirements. Designed and developed the frontend interface with a focus on usability and accessibility. Worked on UI/UX, responsive layouts, information presentation, and compliance-related features. Focused on creating a clean, practical interface rather than a generic AI-generated design.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Legal Metrology</span>
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Frontend Dev</span>
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">UI/UX Design</span>
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Accessibility</span>
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Compliance Logic</span>
                </div>

                <div className="text-xs text-gray-400 font-medium italic">
                  Role: Frontend Developer &amp; Design Team Lead
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Web Development Projects */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 glass-panel-hover flex flex-col justify-between group">
            <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-code text-[#FF5722] uppercase tracking-wider bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded">
                    Web Applications
                  </span>
                  <span className="text-xs text-gray-400 font-medium">Frontend Developer</span>
                </div>
                
                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#FF5722] transition-colors">
                  Web Development Projects
                </h3>
                
                <p className="text-xs font-semibold text-gray-300">
                  Responsive Web Interfaces &amp; Interactive Components
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed pt-2">
                  Developed frontend interfaces using HTML, CSS and JavaScript. Worked on modern UI layouts, animations, responsive design and interactive components. Used GitHub for project and version management.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">HTML5</span>
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">CSS3</span>
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">JavaScript</span>
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Git &amp; GitHub</span>
                  <span className="text-[11px] font-code font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Responsive UI</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-gray-400 font-medium italic">
                    Version Managed on GitHub
                  </div>
                  <a
                    href="https://github.com/Gourab-ghosh21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5722] hover:text-[#E64A19] transition-colors"
                  >
                    View on GitHub
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
