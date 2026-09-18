import React from 'react';
import { CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';

const features = [
  'Clean & Semantic Code',
  'Responsive Web Design',
  'UI/UX Design Thinking',
  'Data Structures & Algorithms',
  'Modern Web Standards',
  'Collaborative Problem Solving',
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0C]">
      {/* Background glow element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Card & Stat Badge */}
          <div className="lg:col-span-5 relative flex justify-center sticky top-28">
            <div className="relative max-w-sm w-full">
              
              {/* Angled Orange Border Effect */}
              <div className="absolute -inset-3 border-2 border-[#FF5722] rounded-3xl transform -rotate-3 z-0 opacity-80" />

              {/* Main Photo Card */}
              <div className="relative z-10 glass-panel rounded-2xl p-3 border border-white/15 overflow-hidden shadow-2xl">
                <img
                  src="/images/gourab_portrait.jpg"
                  alt="Gourab Ghosh Portrait"
                  className="w-full aspect-[4/5] object-cover object-center rounded-xl contrast-105 hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Signature & Stat Badge */}
                <div className="absolute bottom-6 right-6 z-20 glass-panel p-4 rounded-xl border border-white/20 shadow-2xl text-right bg-[#0A0A0C]/90 backdrop-blur-md">
                  <div className="text-2xl font-extrabold text-[#FF5722] tracking-tight">
                    2nd YEAR
                  </div>
                  <div className="text-[10px] font-bold text-white uppercase tracking-widest leading-tight">
                    B.TECH CSE (AI ML)<br />ADAMAS UNIV
                  </div>
                  <div className="text-[#FF5722] font-serif italic text-lg mt-1 font-bold">
                    Gourab Ghosh
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Content & Academic Background */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section Tag */}
            <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase block">
              ABOUT ME
            </span>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Turning Ideas Into Powerful Digital Experiences
            </h2>

            {/* Paragraph Bio */}
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                I am Gourab Ghosh, a B.Tech Computer Science and Engineering (AI ML) student at Adamas University and a Fullstack Developer. I specialize in frontend development, modern UI/UX design, software development, and intelligent systems.
              </p>
              <p>
                I enjoy building responsive interfaces, exploring modern web technologies, solving programming and Data Structures &amp; Algorithms problems, and collaborating on high-impact technology projects and hackathons.
              </p>
              <p>
                My goal is to continuously improve my technical and creative skills through real-world software engineering, internships, and hands-on development.
              </p>
            </div>

            {/* 6 Feature Checklists in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722]/15 flex items-center justify-center text-[#FF5722] shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Academic Standing Card embedded directly in About */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5722] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#FF5722]" />
                  Academic Background
                </span>
                <span className="text-xs text-gray-400 font-semibold">Current Standing</span>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-white/10 space-y-4 glass-panel-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      B.Tech in Computer Science &amp; Engineering (AI ML)
                    </h3>
                    <p className="text-sm text-gray-300 font-medium mt-0.5">
                      Adamas University • 2nd Year / 3rd Semester
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded bg-[#FF5722]/15 border border-[#FF5722]/30 text-[#FF5722] text-xs font-mono font-bold self-start sm:self-auto">
                    ACTIVE DEGREE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">1st Semester</span>
                      <span className="text-xs font-semibold text-gray-200">Cumulative Grade</span>
                    </div>
                    <div className="text-xl font-extrabold text-[#FF5722] font-mono">
                      7.35 <span className="text-xs text-gray-400 font-normal">CGPA</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">After 2nd Semester</span>
                      <span className="text-xs font-semibold text-gray-200">Semester Grade</span>
                    </div>
                    <div className="text-xl font-extrabold text-[#FF5722] font-mono">
                      7.10 <span className="text-xs text-gray-400 font-normal">SGPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider transition-all duration-300 shadow-lg shadow-[#FF5722]/25 group"
              >
                GET IN TOUCH
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider transition-all duration-300"
              >
                EXPLORE SERVICES
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
