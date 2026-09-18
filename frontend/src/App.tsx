import React from 'react';
import { ScrollVideoBackground } from './components/ScrollVideoBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white selection:bg-[#FF5722] selection:text-white relative">
      <ScrollVideoBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
