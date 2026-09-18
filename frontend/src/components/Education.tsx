import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#070709] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 glass-panel-hover relative overflow-hidden">
            
            {/* Ambient Radial Accent */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#FF5722]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-md bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30 text-xs font-mono font-bold tracking-wider">
                  CURRENT DEGREE
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  B.Tech in Computer Science &amp; Engineering
                </h3>
                <p className="text-base text-gray-300 font-semibold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#FF5722]" />
                  Adamas University
                </p>
              </div>

              <div className="text-left md:text-right">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Current Standing
                </div>
                <div className="text-lg font-extrabold text-white mt-1">
                  2nd Year / 3rd Semester
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                    1st Semester
                  </span>
                  <span className="text-sm font-semibold text-gray-200">
                    Cumulative Grade Point
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-[#FF5722] font-mono">
                  7.35 <span className="text-xs text-gray-400 font-normal">CGPA</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                    After 2nd Semester
                  </span>
                  <span className="text-sm font-semibold text-gray-200">
                    Overall Semester Grade
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-[#FF5722] font-mono">
                  7.10 <span className="text-xs text-gray-400 font-normal">SGPA</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
