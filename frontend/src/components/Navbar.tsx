import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-xl font-bold tracking-wider"
          >
            <span className="text-[#FF5722] font-code font-extrabold group-hover:scale-110 transition-transform">
              &lt;/&gt;
            </span>
            <span className="text-white tracking-widest font-extrabold text-lg">
              GOURAB GHOSH
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navItems.map(item => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-semibold tracking-wider transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#FF5722]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#FF5722] rounded-full shadow-[0_0_8px_#FF5722]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#E64A19] text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-[#FF5722]/25"
            >
              LET'S TALK
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-6 space-y-3 mt-4">
          {navItems.map(item => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-semibold py-2 transition-colors ${
                  isActive ? 'text-[#FF5722]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#FF5722] text-white py-3 rounded-lg text-xs font-bold tracking-wider mt-4"
          >
            LET'S TALK
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};
