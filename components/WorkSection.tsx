import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../data/types';

interface WorkSectionProps {
  isDark: boolean;
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ isDark, projects, onProjectClick }) => {
  const navigate = useNavigate();

  const handleProjectClick = (project: Project) => {
    navigate(`/work/${project.id}`);
  };

  return (
    <section className="relative z-10 pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-light mb-4">Work</h1>
        <p className={`text-lg font-light ${isDark ? 'opacity-60' : 'opacity-60'}`}>
          Selected projects across design, code, and strategy
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <article
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
              i === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            style={{ minHeight: i === 0 ? '400px' : '280px' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                isDark ? 'from-black/90 via-black/50 to-transparent' : 'from-white/90 via-white/50 to-transparent'
              } opacity-100 group-hover:opacity-90 transition-opacity`}
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-white/20 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className={`font-light ${i === 0 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                  {project.name}
                </h2>
                <p className="text-sm opacity-80">{project.role}</p>
                <p className="text-xs opacity-60 font-mono">{project.year}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-sm mt-2">
                  Explore Showcase →
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <footer className="mt-16 text-center">
        <p className={`text-sm ${isDark ? 'opacity-40' : 'opacity-40'}`}>
          Click any project to explore its interactive showcase
        </p>
      </footer>
    </section>
  );
};
