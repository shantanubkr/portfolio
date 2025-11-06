import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { FloatingWindow } from './FloatingWindow';
import { DrawerLeft_Principles } from './DrawerLeft_Principles';
import { DrawerRight_System } from './DrawerRight_System';
import { DrawerBottom_Impact } from './DrawerBottom_Impact';
import { Toolbar } from './Toolbar';
import { Project } from '../../data/types';

interface ShowcaseOverlayProps {
  project: Project;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  onClose: () => void;
}

export const ShowcaseOverlay: React.FC<ShowcaseOverlayProps> = ({
  project,
  isDark,
  setIsDark,
  onClose,
}) => {
  const navigate = useNavigate();
  const [showPrinciples, setShowPrinciples] = useState(false);
  const [showImpact, setShowImpact] = useState(false);
  const [showSystem, setShowSystem] = useState(false);
  const [showCode, setShowCode] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === '1') setShowPrinciples(!showPrinciples);
      if (e.key === '2') setShowImpact(!showImpact);
      if (e.key === '3') setShowSystem(!showSystem);
      if (e.key === 'c') setShowCode(!showCode);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPrinciples, showImpact, showSystem, showCode, onClose]);

  const metrics = [
    { label: 'Design Time', value: 60, suffix: '%', color: '#3b82f6' },
    { label: 'Reusability', value: 85, suffix: '%', color: '#8b5cf6' },
    { label: 'Coverage', value: 92, suffix: '%', color: '#ec4899' },
    { label: 'Speed', value: 75, suffix: '%', color: '#f59e0b' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-xl"
        />

        {/* Floating Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-7xl h-[85vh] rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl shadow-[0_0_60px_-20px_rgba(255,255,255,0.3)] overflow-hidden"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
            aria-label="Close showcase"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Main Content */}
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                <span className="text-sm font-mono opacity-60">{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-2">{project.name}</h1>
              <p className="text-xl opacity-60">{project.role}</p>
            </div>

            {/* Preview Area */}
            <div className="flex-1 overflow-hidden">
              <FloatingWindow project={project} isDark={isDark} />
            </div>
          </div>
        </motion.div>

        {/* Drawers */}
        <DrawerLeft_Principles isOpen={showPrinciples} onClose={() => setShowPrinciples(false)} project={project} isDark={isDark} />
        <DrawerRight_System isOpen={showSystem} onClose={() => setShowSystem(false)} project={project} isDark={isDark} />
        <DrawerBottom_Impact isOpen={showImpact} onClose={() => setShowImpact(false)} metrics={metrics} isDark={isDark} />

        {/* Toolbar */}
        <Toolbar
          showPrinciples={showPrinciples}
          showImpact={showImpact}
          showSystem={showSystem}
          showCode={showCode}
          onTogglePrinciples={() => setShowPrinciples(!showPrinciples)}
          onToggleImpact={() => setShowImpact(!showImpact)}
          onToggleSystem={() => setShowSystem(!showSystem)}
          onToggleCode={() => setShowCode(!showCode)}
          isDark={isDark}
          setIsDark={setIsDark}
          onOpenFullPage={() => {
            // Navigate to full showcase
            navigate(`/work/${project.id}/full`);
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

