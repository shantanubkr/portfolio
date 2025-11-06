import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, Grid, FileText, Layout, Line } from 'lucide-react';

interface BehindTheSystemProps {
  isDark: boolean;
}

const systemLayers = [
  { name: 'Atoms', icon: Box, color: '#3b82f6', examples: ['Button', 'Input', 'Icon'] },
  { name: 'Molecules', icon: Layers, color: '#8b5cf6', examples: ['Form Field', 'Search Bar', 'Card'] },
  { name: 'Organisms', icon: Grid, color: '#ec4899', examples: ['Header', 'Sidebar', 'Content'] },
  { name: 'Templates', icon: Layout, color: '#f59e0b', examples: ['Dashboard', 'Form', 'List'] },
  { name: 'Pages', icon: FileText, color: '#10b981', examples: ['Home', 'Profile', 'Settings'] },
];

export const BehindTheSystem: React.FC<BehindTheSystemProps> = ({ isDark }) => {
  return (
    <div className="space-y-8">
      {/* Visual Hierarchy */}
      <div className="relative">
        <div className="flex flex-col items-center space-y-6">
          {systemLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="w-full flex items-center"
              >
                <div
                  className="flex-1 px-6 py-4 rounded-2xl"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                    borderColor: layer.color,
                    borderWidth: '2px',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor: `${layer.color}20`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: layer.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg mb-1">{layer.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {layer.examples.map((example) => (
                          <span
                            key={example}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                            }}
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < systemLayers.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="w-0.5 h-6"
                    style={{ backgroundColor: layer.color }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <div
        className={`p-6 rounded-2xl ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'
        }`}
      >
        <h3 className="text-xl font-medium mb-4">Design System Architecture</h3>
        <p className={`leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>
          Built using atomic design principles, starting from the smallest building blocks and scaling
          up to complete pages. This approach ensures consistency, reusability, and maintainability.
          Each layer depends on the previous one, creating a clear hierarchy that guides both design
          and development decisions.
        </p>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-sm font-medium opacity-60">
            💡 TL;DR: From atoms → molecules → organisms → templates → pages. Scale with consistency.
          </p>
        </div>
      </div>
    </div>
  );
};

