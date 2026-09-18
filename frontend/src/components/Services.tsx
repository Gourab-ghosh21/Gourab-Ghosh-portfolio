import React from 'react';
import { Layout, Smartphone, Code, Cpu, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Responsive and interactive web interfaces using HTML, CSS and JavaScript.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-focused interface design with attention to usability, visual consistency and user experience.',
  },
  {
    icon: Smartphone,
    title: 'Web Development',
    description: 'Modern layouts, animations, responsive design and interactive components.',
  },
  {
    icon: Cpu,
    title: 'AI / ML Exploration',
    description: 'Exploring Artificial Intelligence and Machine Learning concepts, tools and applications.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Programming, Data Structures & Algorithms and logical problem solving.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Can Do
          </h2>
          <p className="text-gray-400 text-sm">
            Core focus areas where I apply technical, design, and analytical skills.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-panel p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon Block */}
                  <div className="w-14 h-14 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] group-hover:scale-110 group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300 shadow-lg shadow-[#FF5722]/10">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Card Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF5722] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
