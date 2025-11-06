import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, Zap, Coffee, Target } from 'lucide-react';
import { Project } from '../../data/types';

interface DrawerLeftProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  isDark: boolean;
}

const principles = [
  {
    icon: Brain,
    title: 'Systematic Thinking',
    description:
      'Every component exists within a larger system. I design for scalability, ensuring each element can be reused and extended without breaking the overall architecture.',
    tldr: 'Components are part of a whole, not isolated pieces.',
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description:
      'Perfect is the enemy of good. I ship fast, iterate constantly, and focus on what matters most. Performance and developer experience are first-class concerns.',
    tldr: 'Ship fast, iterate faster, compound the speed.',
  },
  {
    icon: Coffee,
    title: 'Subtle Craftsmanship',
    description:
      'The best design is almost invisible. I focus on clarity over complexity, ensuring every pixel serves a purpose. Beauty emerges from function, not decoration.',
    tldr: 'Invisible design that just works.',
  },
  {
    icon: Target,
    title: 'User-Centered',
    description:
      'Every decision is backed by user understanding. I conduct research, test assumptions, and validate with real users. Empathy drives design decisions.',
    tldr: 'Users know best — design with them, not for them.',
  },
];

export const DrawerLeft_Principles: React.FC<DrawerLeftProps> = ({ isOpen, onClose, isDark }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-0 top-0 bottom-0 w-full md:w-96 bg-black/95 backdrop-blur-2xl border-r border-white/10 shadow-2xl z-40 overflow-y-auto"
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light">Design Principles</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Principles */}
            <div className="space-y-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl flex-shrink-0 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-2">{principle.title}</h3>
                        <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'opacity-70' : 'opacity-70'}`}>
                          {principle.description}
                        </p>
                        <div
                          className={`text-xs font-medium px-3 py-1 rounded-full inline-block ${
                            isDark ? 'bg-white/10' : 'bg-black/10'
                          }`}
                        >
                          {principle.tldr}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

