import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
            CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Cert 1 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 text-[#FF5722] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider block">
                NASSCOM FutureSkills Prime
              </span>
              <h3 className="text-lg font-bold text-white">
                Generative AI Tools
              </h3>
              <p className="text-xs text-gray-400">
                Practical knowledge of generative AI tools and technical workflow integration.
              </p>
            </div>
          </div>

          {/* Cert 2 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 text-[#FF5722] flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider block">
                Cognifyz Technologies
              </span>
              <h3 className="text-lg font-bold text-white">
                UI/UX Designer Internship / Program
              </h3>
              <p className="text-xs text-gray-400">
                User-centered interface design, usability principles, and visual consistency.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
