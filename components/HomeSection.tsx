import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeSectionProps {
  isDark: boolean;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ isDark }) => {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight">Shantanu Borkar</h1>
        <div className="space-y-2">
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">I design to understand,</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">build to simplify,</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">and create to make things move.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-8 text-sm">
          {['Designer', 'Builder', 'Founder'].map(role => (
            <span key={role} className="px-4 py-2 rounded-full bg-white text-black">
              {role}
            </span>
          ))}
        </div>
        <button
          onClick={() => navigate('/work')}
          className={`mt-12 px-8 py-4 rounded-lg border transition-all hover:scale-105 ${isDark ? 'border-white/20 hover:bg-white/10 hover:border-white/40' : 'border-black/20 hover:bg-black/5 hover:border-black/40'}`}
        >
          View My Work <span className="inline-block animate-bounce">↓</span>
        </button>
      </div>
    </section>
  );
};

