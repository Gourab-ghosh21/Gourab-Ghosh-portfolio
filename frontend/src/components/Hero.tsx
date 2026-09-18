import React from 'react';
import { ArrowRight, Download, Github, Linkedin, MousePointer } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5722]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/30">
              <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
                FULLSTACK DEVELOPER &bull; AI / ML
              </span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              I BUILD <br />
              <span className="text-[#FF5722] orange-text-glow">DIGITAL EXPERIENCES</span> <br />
              THAT STAND OUT.
            </h1>

            {/* Subtitle */}
            <div className="space-y-2 text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              <p>
                B.Tech CSE (AI ML) student at Adamas University &amp; Fullstack Developer passionate about modern web engineering, clean UI/UX architectures, and intelligent systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 bg-[#FF5722] hover:bg-[#E64A19] text-white px-7 py-3.5 rounded-xl font-bold text-sm tracking-wider transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-[#FF5722]/25"
              >
                VIEW MY WORK
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wider transition-all duration-300"
              >
                DOWNLOAD CV
                <Download className="w-4 h-4 text-gray-400" />
              </a>
            </div>

            {/* Social Connect Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                LET'S CONNECT
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Gourab-ghosh21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#FF5722] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#FF5722]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gourab-ghosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#FF5722] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#FF5722]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Profile & Status Badges */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center lg:items-end gap-6">
            
            {/* Floating Code Card */}
            <div className="w-full max-w-sm glass-panel p-6 rounded-2xl border border-white/15 shadow-2xl transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[10px] font-mono text-gray-400 pl-2">gourab.config.ts</span>
              </div>
              <div className="font-mono text-xs leading-relaxed text-gray-300">
                <span className="text-[#FF5722] font-semibold">const</span> student = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-emerald-400">"Gourab Ghosh"</span>,<br />
                &nbsp;&nbsp;role: <span className="text-amber-300">"Fullstack Developer"</span>,<br />
                &nbsp;&nbsp;degree: <span className="text-sky-300">"B.Tech CSE (AI ML)"</span>,<br />
                &nbsp;&nbsp;college: <span className="text-purple-300">"Adamas University"</span>,<br />
                &nbsp;&nbsp;focus: [<span className="text-[#FF5722]">"Fullstack"</span>, <span className="text-[#FF5722]">"AI/ML"</span>, <span className="text-[#FF5722]">"UI/UX"</span>],<br />
                &nbsp;&nbsp;status: <span className="text-emerald-400">"Available for Internships"</span><br />
                &#125;;
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass-panel px-6 py-4 rounded-xl border border-white/15 shadow-2xl flex items-center gap-3.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  STATUS
                </div>
                <div className="text-xs font-extrabold text-white tracking-wider flex items-center gap-2">
                  OPEN TO OPPORTUNITIES
                  <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 text-gray-400 text-[10px] font-mono tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">
        <span>SCROLL</span>
        <MousePointer className="w-4 h-4 text-[#FF5722] animate-bounce" />
        <span>↓</span>
      </div>
    </section>
  );
};
