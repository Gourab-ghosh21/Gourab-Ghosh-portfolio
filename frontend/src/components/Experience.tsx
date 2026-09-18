import React from 'react';
import { Briefcase, Award, Users } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#070709] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
            WORK &amp; LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; Leadership
          </h2>
          <p className="text-gray-400 text-sm">
            Real-world responsibilities in design, frontend implementation, and student leadership.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Cognifyz Technologies */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5722] bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded">
                  Internship / Program
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-white">UI/UX Designer</h3>
              <div className="text-sm font-semibold text-gray-300 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#FF5722]" />
                Cognifyz Technologies
              </div>

              <p className="text-gray-400 text-sm leading-relaxed pt-2">
                Completed UI/UX design tasks as part of the internship/program. Created user-focused interface designs and worked on visual consistency, usability and design presentation.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2 mt-6">
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">UI/UX Design</span>
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Visual Consistency</span>
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Usability</span>
            </div>
          </div>

          {/* Card 2: Hackathon / SIH Projects */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5722] bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded">
                  Hackathons &amp; Projects
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-white">Frontend Dev &amp; Design Lead</h3>
              <div className="text-sm font-semibold text-gray-300 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#FF5722]" />
                Hackathon / SIH Projects
              </div>

              <p className="text-gray-400 text-sm leading-relaxed pt-2">
                Worked on frontend development and design-related responsibilities in hackathon and university technology projects. Contributed to UI/UX, responsive interfaces, frontend implementation and overall product presentation.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2 mt-6">
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Frontend Implementation</span>
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Responsive UI</span>
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Team Collaboration</span>
            </div>
          </div>

          {/* Card 3: MATRTIX FinTech Club */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5722] bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded">
                  Club Leadership
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-white">Design Team Lead</h3>
              <div className="text-sm font-semibold text-gray-300 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#FF5722]" />
                MATRTIX — University FinTech Club
              </div>

              <p className="text-gray-400 text-sm leading-relaxed pt-2">
                Design Team Lead involved in visual design, presentation development, UI/UX thinking and creative direction for the university FinTech club.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2 mt-6">
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Design Team Lead</span>
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Creative Direction</span>
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Presentation Design</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
