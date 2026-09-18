import React from 'react';

export const TechStack: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '<>',
      skills: ['C', 'C++', 'Python'],
    },
    {
      title: 'Core Foundations',
      icon: '⚙',
      skills: ['Data Structures & Algorithms'],
      highlight: true,
    },
    {
      title: 'Frontend',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Design',
      icon: '🎨',
      skills: ['UI/UX Design', 'Canva'],
    },
    {
      title: 'AI / ML',
      icon: '🤖',
      skills: ['AI/ML Fundamentals', 'Hugging Face'],
    },
    {
      title: 'Development',
      icon: '🛠',
      skills: ['Git', 'GitHub'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#070709] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
            TECH STACK &amp; CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-sm">
            Organized strictly by discipline according to my verified curriculum.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center font-bold text-sm">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-gray-200">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                      category.highlight
                        ? 'bg-[#FF5722]/10 border-[#FF5722]/30 text-[#FF5722]'
                        : 'bg-white/5 border-white/10 text-white hover:border-[#FF5722]'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills, Languages, Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Soft Skills */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
              SOFT SKILLS
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Communication',
                'Teamwork',
                'Leadership',
                'Problem Solving',
                'Creativity',
                'UI/UX Thinking',
                'Quick Learning',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
              LANGUAGES
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {['English', 'Bengali', 'Hindi'].map((lang) => (
                <div
                  key={lang}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-white">{lang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
              AREAS OF INTEREST
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'AI & ML',
                'Frontend Development',
                'UI/UX Design',
                'Data Structures & Algorithms',
                'Hackathons',
                'Emerging Tech',
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
