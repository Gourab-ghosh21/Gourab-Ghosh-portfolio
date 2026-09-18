import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 pt-16 pb-12 text-gray-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-wider">
              <span className="text-[#FF5722] font-code font-extrabold">&lt;/&gt;</span>
              <span className="text-white tracking-widest font-extrabold text-lg">GOURAB GHOSH</span>
            </a>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              B.Tech CSE Student | Frontend Developer | UI/UX Designer | AI/ML Enthusiast
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a href="#home" className="hover:text-[#FF5722] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#FF5722] transition-colors">About</a>
              <a href="#education" className="hover:text-[#FF5722] transition-colors">Education</a>
              <a href="#skills" className="hover:text-[#FF5722] transition-colors">Skills</a>
              <a href="#services" className="hover:text-[#FF5722] transition-colors">Services</a>
              <a href="#projects" className="hover:text-[#FF5722] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[#FF5722] transition-colors">Experience</a>
              <a href="#certifications" className="hover:text-[#FF5722] transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-[#FF5722] transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 3: Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              CONNECT
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Gourab-ghosh21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#FF5722] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/gourab-ghosh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#FF5722] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex items-center justify-between text-xs text-gray-400">
          <div>
            &copy; 2026 Gourab Ghosh. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-[#FF5722] hover:bg-[#E64A19] text-white flex items-center justify-center shadow-lg shadow-[#FF5722]/20 transition-transform hover:scale-110"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
