import React from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { X, Layers, Box, Grid, FileText, Layout } from 'lucide-react';
import { Project } from '../../data/types';

interface DrawerRightProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  isDark: boolean;
}

const systemLayers = [
  { name: 'Atoms', icon: Box, color: '#3b82f6', examples: ['Button', 'Input', 'Icon'] },
  { name: 'Molecules', icon: Layers, color: '#8b5cf6', examples: ['Form Field', 'Search Bar', 'Card'] },
  { name: 'Organisms', icon: Grid, color: '#ec4899', examples: ['Header', 'Sidebar', 'Content'] },
  { name: 'Templates', icon: Layout, color: '#f59e0b', examples: ['Dashboard', 'Form', 'List'] },
  { name: 'Pages', icon: FileText, color: '#10b981', examples: ['Home', 'Profile', 'Settings'] },
];

const AnimatedCounter: React.FC<{ value: number; suffix: string; color: string }> = ({
  value,
  suffix,
  color,
}) => {
  const spring = useSpring(0, { stiffness: 50, damping: 30 });
  const display = useTransform(spring, (current) => Math.round(current));

  React.useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className="text-3xl font-bold" style={{ color }}>
      {display}
      {suffix}
    </motion.span>
  );
};

export const DrawerRight_System: React.FC<DrawerRightProps> = ({ isOpen, onClose, isDark }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-black/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-40 overflow-y-auto"
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light">Behind the System</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Hierarchy */}
            <div className="space-y-4 mb-8">
              {systemLayers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
                    style={{ borderColor: `${layer.color}30` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${layer.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: layer.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{layer.name}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {layer.examples.map((example) => (
                            <span
                              key={example}
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Components', value: 150, color: '#3b82f6' },
                { label: 'Reusable', value: 85, color: '#8b5cf6' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}
                >
                  <AnimatedCounter value={stat.value} suffix="" color={stat.color} />
                  <p className="text-xs mt-2 opacity-60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

