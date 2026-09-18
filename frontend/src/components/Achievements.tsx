import React from 'react';
import { Award, Users, Trophy, ShieldCheck, CheckCircle, Briefcase } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-[#070709] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
            ACHIEVEMENTS &amp; CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Milestones &amp; Experience
          </h2>
          <p className="text-gray-400 text-sm">
            National rank, demonstrated leadership, technical internships, and certifications.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div>
          <h3 className="text-sm font-mono font-bold tracking-wider text-[#FF5722] uppercase mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Key Recognitions &amp; Milestones
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {/* Milestone 1: AIR 833 */}
            <div className="glass-panel p-6 rounded-2xl border border-[#FF5722]/40 shadow-xl shadow-[#FF5722]/10 glass-panel-hover flex flex-col items-center justify-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-[#FF5722]/20 border border-[#FF5722]/40 flex items-center justify-center text-[#FF5722] group-hover:scale-110 group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white orange-text-glow font-mono">
                833
              </div>
              <div className="text-xs font-bold text-[#FF5722] leading-tight uppercase tracking-wider">
                ALL INDIA RANK: 833
              </div>
              <div className="text-[11px] text-gray-400">
                National Competitive Standing
              </div>
            </div>

            {/* Milestone 2: Design Team Lead */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col items-center justify-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] group-hover:scale-110 group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-white">
                Design Team Lead
              </div>
              <div className="text-xs font-bold text-gray-300 leading-tight">
                MATRTIX — University FinTech Club
              </div>
              <div className="text-[11px] text-gray-400">
                Visual Design &amp; Creative Direction
              </div>
            </div>

            {/* Milestone 3: Frontend Developer SIH */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col items-center justify-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] group-hover:scale-110 group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-white">
                Frontend Developer
              </div>
              <div className="text-xs font-bold text-gray-300 leading-tight">
                Hackathon / SIH Projects
              </div>
              <div className="text-[11px] text-gray-400">
                UI &amp; Frontend Responsibilities
              </div>
            </div>

            {/* Milestone 4: University Hackathon Participation */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col items-center justify-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] group-hover:scale-110 group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-white">
                Hackathon Participant
              </div>
              <div className="text-xs font-bold text-gray-300 leading-tight">
                University-Level Hackathons
              </div>
              <div className="text-[11px] text-gray-400">
                Team Innovation &amp; Prototyping
              </div>
            </div>

            {/* Milestone 5: Technical Project Work */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col items-center justify-center gap-3 group sm:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] group-hover:scale-110 group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-white">
                Technical Project Leadership
              </div>
              <div className="text-xs font-bold text-gray-300 leading-tight">
                PackCheck India &amp; Fullstack Engineering
              </div>
              <div className="text-[11px] text-gray-400">
                Legal Metrology Packaged Commodity Platform &amp; Web Systems
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Roles Subsection */}
        <div>
          <h3 className="text-sm font-mono font-bold tracking-wider text-[#FF5722] uppercase mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Experience &amp; Practical Leadership
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Experience 1: Cognifyz Technologies */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5722] bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded inline-block">
                  Internship / Program
                </span>
                <h4 className="text-lg font-bold text-white">UI/UX Designer</h4>
                <div className="text-xs font-semibold text-gray-300">
                  Cognifyz Technologies
                </div>
                <p className="text-gray-400 text-xs leading-relaxed pt-1">
                  Completed UI/UX design tasks as part of the internship/program. Created user-focused interface designs and worked on visual consistency, usability and design presentation.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">UI/UX Design</span>
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Usability</span>
              </div>
            </div>

            {/* Experience 2: Hackathons / SIH */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5722] bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded inline-block">
                  Hackathons &amp; Projects
                </span>
                <h4 className="text-lg font-bold text-white">Frontend Dev &amp; Design Lead</h4>
                <div className="text-xs font-semibold text-gray-300">
                  Hackathon / SIH Projects
                </div>
                <p className="text-gray-400 text-xs leading-relaxed pt-1">
                  Worked on frontend development and design-related responsibilities in hackathon and university technology projects. Contributed to responsive interfaces and frontend implementation.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Frontend Dev</span>
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Team Leadership</span>
              </div>
            </div>

            {/* Experience 3: FinTech Club */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5722] bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded inline-block">
                  Student Club
                </span>
                <h4 className="text-lg font-bold text-white">Design Team Lead</h4>
                <div className="text-xs font-semibold text-gray-300">
                  MATRTIX — University FinTech Club
                </div>
                <p className="text-gray-400 text-xs leading-relaxed pt-1">
                  Design Team Lead involved in visual design, presentation development, UI/UX thinking and creative direction for the university FinTech club.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Design Lead</span>
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">Creative Direction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Subsection */}
        <div>
          <h3 className="text-sm font-mono font-bold tracking-wider text-[#FF5722] uppercase mb-6 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Verified Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Cert 1 */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 text-[#FF5722] flex items-center justify-center shrink-0 font-bold">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#FF5722] uppercase tracking-wider block">
                  NASSCOM FutureSkills Prime
                </span>
                <h4 className="text-base font-bold text-white">Generative AI Tools</h4>
                <p className="text-xs text-gray-400">
                  Practical knowledge of generative AI tools and technical workflow integration.
                </p>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 text-[#FF5722] flex items-center justify-center shrink-0 font-bold">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#FF5722] uppercase tracking-wider block">
                  Cognifyz Technologies
                </span>
                <h4 className="text-base font-bold text-white">UI/UX Designer Internship / Program</h4>
                <p className="text-xs text-gray-400">
                  User-centered interface design, usability principles, and visual consistency.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
