import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Zap, Coffee } from 'lucide-react';
import { skills, principles } from '../data/skills';

interface AboutSectionProps {
  isDark: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <section className="relative z-10 pt-32 pb-20 px-8 max-w-4xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl md:text-7xl font-light mb-6">About</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8" />
      </header>
      
      <div className="space-y-8 mb-20">
        <article>
          <h2 className="text-2xl md:text-3xl font-light mb-4">Who I Am</h2>
          <p className={`text-lg leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>
            I'm a designer and builder who thinks in systems. I work at the intersection of design,
            code, and strategy — where ideas become interfaces, and interfaces become experiences.
          </p>
        </article>
        <article>
          <h2 className="text-2xl md:text-3xl font-light mb-4">What I Do</h2>
          <p className={`text-lg leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>
            I help founders and teams turn complexity into clarity. Whether it's designing a product
            from scratch, building a scalable design system, or architecting the backend that powers
            it — I bridge the gap between vision and execution.
          </p>
        </article>
        <article>
          <h2 className="text-2xl md:text-3xl font-light mb-4">How I Work</h2>
          <p className={`text-lg leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>
            I believe good design is invisible. It doesn't announce itself — it just works. My
            process starts with understanding the problem deeply, then building solutions that feel
            inevitable in hindsight. I work fast, iterate constantly, and care deeply about craft.
          </p>
        </article>
      </div>
      
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-light mb-8">Principles</h2>
        <div className="grid gap-6">
          {principles.map(p => {
            const Icon = p.icon;
            return (
              <div key={p.title} className={`p-6 rounded-lg border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">{p.title}</h3>
                    <p className={`text-sm ${isDark ? 'opacity-70' : 'opacity-70'}`}>{p.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-light mb-8">What I Work With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(cat => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className={`p-6 rounded-lg border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5" />
                  <h3 className="font-medium">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className={`text-xs px-3 py-1 rounded-full border ${isDark ? 'border-white/20' : 'border-black/20'}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <footer className="mt-20 text-center">
        <p className={`text-lg mb-6 ${isDark ? 'opacity-80' : 'opacity-80'}`}>Let's build something together</p>
        <button
          onClick={() => navigate('/contact')}
          className={`inline-block px-8 py-4 rounded-lg border transition-all ${
            isDark
              ? 'border-white/20 hover:bg-white/10 hover:border-black/40'
              : 'border-black/20 hover:bg-black/5 hover:border-black/40'
          }`}
        >
          Get in Touch
        </button>
      </footer>
    </section>
  );
};

