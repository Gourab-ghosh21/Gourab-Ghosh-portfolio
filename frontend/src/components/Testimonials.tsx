import React from 'react';
import { Quote, Star, Linkedin, Users, Sparkles } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  context: string;
  tag: string;
  quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Hackathon Teammate',
    role: 'Co-developer & Teammate',
    context: 'Smart India Hackathon & Hackathon Projects',
    tag: 'Frontend Engineering & Rapid Prototyping',
    quote:
      'Gourab spearheaded our frontend architecture and UI design under intense competition time pressure. His speed in converting conceptual wireframes into interactive, responsive code was instrumental to our team’s project presentation.',
  },
  {
    name: 'FinTech Club Collaborator',
    role: 'Club Member & Peer',
    context: 'MATRTIX — University FinTech Club',
    tag: 'Design Leadership & Visual Direction',
    quote:
      'Working alongside Gourab in the design vertical has been fantastic. As Design Lead, he consistently sets high standards for visual clarity, typography, and clean aesthetic presentation across all our club initiatives.',
  },
  {
    name: 'PackCheck India Collaborator',
    role: 'Project Collaborator',
    context: 'PackCheck India Compliance Platform',
    tag: 'UI/UX & Regulatory Interface Design',
    quote:
      'Gourab demonstrated deep attention to detail while engineering the Legal Metrology compliance interface. His focus on user experience and robust component structuring made navigating complex regulatory checklists seamless.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#0A0A0C]">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5722]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
            TESTIMONIALS &amp; RECOMMENDATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Collaborators Say
          </h2>
          <p className="text-gray-400 text-sm">
            Perspectives from project teammates, hackathon partners, and university club members.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-[#FF5722]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Badge Tag */}
                <div className="pt-2">
                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5722] bg-[#FF5722]/10 border border-[#FF5722]/20 px-2.5 py-1 rounded">
                    {item.tag}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-gray-300 text-sm leading-relaxed italic pt-1">
                  "{item.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5722] shrink-0 font-bold text-sm">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Endorsement CTA Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5722] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Collaborated Together?
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Have we built something or competed as a team?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I’d be delighted to connect on LinkedIn and exchange endorsements or recommendations for our shared work and hackathons.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://www.linkedin.com/in/gourab-ghosh-6110a328a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 shadow-lg shadow-[#FF5722]/25 transform hover:scale-[1.03]"
            >
              <Linkedin className="w-4 h-4" />
              CONNECT ON LINKEDIN
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
