import React from 'react';
import { X } from 'lucide-react';
import { Project } from '../data/types';

interface ProjectModalProps {
  project: Project;
  isDark: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isDark, onClose }) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className={`relative max-w-3xl w-full rounded-2xl overflow-hidden ${
          isDark ? 'bg-black border border-white/10' : 'bg-white border border-black/10'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              isDark ? 'from-black to-transparent' : 'from-white to-transparent'
            }`}
          />
        </div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-8 space-y-6">
          <header>
            <h2 id="project-title" className="text-4xl font-light mb-2">
              {project.name}
            </h2>
            <p className={`text-sm ${isDark ? 'opacity-60' : 'opacity-60'}`}>
              {project.role} · {project.year}
            </p>
          </header>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className={`text-xs px-3 py-1 rounded-full border ${isDark ? 'border-white/20' : 'border-black/20'}`}>
                {tag}
              </span>
            ))}
          </div>
          <section>
            <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Overview</h3>
            <p className={`leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>{project.description}</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Approach</h3>
            <p className={`leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>{project.approach}</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Impact</h3>
            <p className={`leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>{project.impact}</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider opacity-60 mb-3">Technology</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span key={tech} className={`text-xs px-3 py-1 rounded font-mono ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

