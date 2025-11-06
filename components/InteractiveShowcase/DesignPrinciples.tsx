import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Coffee, Target } from 'lucide-react';

interface DesignPrinciplesProps {
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

export const DesignPrinciples: React.FC<DesignPrinciplesProps> = ({ isDark }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {principles.map((principle, index) => {
        const Icon = principle.icon;
        return (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-xl ${
                  isDark ? 'bg-white/10' : 'bg-black/10'
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">{principle.title}</h3>
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
  );
};

