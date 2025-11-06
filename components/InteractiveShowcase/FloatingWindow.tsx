import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/types';
import { ComponentGallery } from './ComponentGallery';

interface FloatingWindowProps {
  project: Project;
  isDark: boolean;
}

export const FloatingWindow: React.FC<FloatingWindowProps> = ({ project, isDark }) => {
  return (
    <div className="h-full p-8 overflow-y-auto">
      <div className={`max-w-4xl mx-auto rounded-2xl border ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        {/* Preview Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="p-8"
        >
          {/* Description */}
          <div className="mb-8">
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'opacity-80' : 'opacity-80'}`}>
              {project.description}
            </p>
          </div>

          {/* Approach & Impact */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <h3 className="text-sm uppercase tracking-wider opacity-60 mb-3">Approach</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'opacity-70' : 'opacity-70'}`}>
                {project.approach}
              </p>
            </div>
            <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <h3 className="text-sm uppercase tracking-wider opacity-60 mb-3">Impact</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'opacity-70' : 'opacity-70'}`}>
                {project.impact}
              </p>
            </div>
          </div>

          {/* Interactive Components */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-6">Interactive Components</h3>
            <ComponentGallery isDark={isDark} theme={isDark ? 'dark' : 'light'} size="md" showCode={false} />
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-sm uppercase tracking-wider opacity-60 mb-4">Technology</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className={`text-xs px-3 py-1.5 rounded-full border font-mono ${
                    isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

