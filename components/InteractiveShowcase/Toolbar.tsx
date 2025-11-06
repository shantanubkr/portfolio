import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, ExternalLink } from 'lucide-react';

interface ToolbarProps {
  showPrinciples: boolean;
  showImpact: boolean;
  showSystem: boolean;
  showCode: boolean;
  onTogglePrinciples: () => void;
  onToggleImpact: () => void;
  onToggleSystem: () => void;
  onToggleCode: () => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  onOpenFullPage: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  showPrinciples,
  showImpact,
  showSystem,
  showCode,
  onTogglePrinciples,
  onToggleImpact,
  onToggleSystem,
  onToggleCode,
  isDark,
  setIsDark,
  onOpenFullPage,
}) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className={`flex items-center gap-3 p-3 rounded-2xl border backdrop-blur-xl shadow-2xl ${
        isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-black/10'
      }`}>
        {/* Principles Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onTogglePrinciples}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showPrinciples
              ? isDark
                ? 'bg-white text-black'
                : 'bg-black text-white'
              : isDark
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-black/10 hover:bg-black/20'
          }`}
          title="Design Principles (1)"
        >
          Principles
        </motion.button>

        {/* Impact Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleImpact}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showImpact
              ? isDark
                ? 'bg-white text-black'
                : 'bg-black text-white'
              : isDark
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-black/10 hover:bg-black/20'
          }`}
          title="Impact Metrics (2)"
        >
          Impact
        </motion.button>

        {/* System Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleSystem}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showSystem
              ? isDark
                ? 'bg-white text-black'
                : 'bg-black text-white'
              : isDark
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-black/10 hover:bg-black/20'
          }`}
          title="Behind the System (3)"
        >
          System
        </motion.button>

        {/* Divider */}
        <div className={`w-px h-8 ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDark(!isDark)}
          className={isDark 
            ? 'p-2 rounded-lg transition-all hover:bg-white/10' 
            : 'p-2 rounded-lg transition-all hover:bg-black/10'}
          title="Toggle Theme"
          aria-label="Toggle theme"
        >
          <Palette className="w-5 h-5" />
        </motion.button>

        {/* Show Code Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleCode}
          className={showCode
            ? isDark
              ? 'p-2 rounded-lg transition-all bg-white text-black'
              : 'p-2 rounded-lg transition-all bg-black text-white'
            : isDark
              ? 'p-2 rounded-lg transition-all hover:bg-white/10'
              : 'p-2 rounded-lg transition-all hover:bg-black/10'}
          title="Show Code (C)"
          aria-label="Show code"
        >
          <Code className="w-5 h-5" />
        </motion.button>

        {/* Open Full Page */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenFullPage}
          className={isDark 
            ? 'p-2 rounded-lg transition-all hover:bg-white/10' 
            : 'p-2 rounded-lg transition-all hover:bg-black/10'}
          title="Open Full Page"
          aria-label="Open full page"
        >
          <ExternalLink className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

