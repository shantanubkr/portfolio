import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { PlaygroundControls } from './PlaygroundControls';
import { ComponentGallery } from './ComponentGallery';
import { DesignPrinciples } from './DesignPrinciples';
import { ImpactMetrics } from './ImpactMetrics';
import { BehindTheSystem } from './BehindTheSystem';
import { Project } from '../../data/types';

interface ShowcaseContainerProps {
  project: Project;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

type Tab = 'components' | 'principles' | 'impact' | 'system';

export const ShowcaseContainer: React.FC<ShowcaseContainerProps> = ({ project, isDark, setIsDark }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('components');
  const [theme, setTheme] = useState<'light' | 'dark'>(isDark ? 'dark' : 'light');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  // Save preferences to localStorage
  useEffect(() => {
    const savedSize = localStorage.getItem('showcase-size');
    if (savedSize) setSize(savedSize as 'sm' | 'md' | 'lg');
  }, []);

  useEffect(() => {
    localStorage.setItem('showcase-size', size);
  }, [size]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/work');
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const tabs: Tab[] = ['components', 'principles', 'impact', 'system'];
        const currentIndex = tabs.indexOf(activeTab);
        if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
          setActiveTab(tabs[currentIndex + 1]);
        }
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setActiveTab(tabs[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, navigate]);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'components', label: 'Interactive Components' },
    { id: 'principles', label: 'Design Principles' },
    { id: 'impact', label: 'Impact' },
    { id: 'system', label: 'Behind the System' },
  ];

  const metrics = [
    { label: 'Design Time', value: 60, suffix: '%', color: '#3b82f6' },
    { label: 'Reusability', value: 85, suffix: '%', color: '#8b5cf6' },
    { label: 'Coverage', value: 92, suffix: '%', color: '#ec4899' },
    { label: 'Speed', value: 75, suffix: '%', color: '#f59e0b' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start justify-between"
        >
          <div className="flex-1">
            <button
              onClick={() => navigate('/work')}
              className={`flex items-center gap-2 mb-6 text-sm transition-all hover:opacity-70 ${
                isDark ? 'opacity-60' : 'opacity-60'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </button>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  <span className="text-sm font-mono opacity-60">{project.year}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-light mb-2">{project.name}</h1>
                <p className="text-xl opacity-60">{project.role}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/work')}
            className={`p-3 rounded-full transition-all hover:bg-white/10 ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'
            }`}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.header>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
        >
          <p className={`leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>
            {project.description}
          </p>
        </motion.div>

        {/* Playground Controls */}
        <PlaygroundControls
          theme={theme}
          size={size}
          showCode={showCode}
          onThemeChange={setTheme}
          onSizeChange={setSize}
          onShowCodeChange={setShowCode}
          isDark={isDark}
        />

        {/* Tabs */}
        <div
          className={`flex gap-2 p-2 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? isDark
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                  : isDark
                    ? 'hover:bg-white/10'
                    : 'hover:bg-black/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'components' && (
              <ComponentGallery isDark={isDark} theme={theme} size={size} showCode={showCode} />
            )}
            {activeTab === 'principles' && <DesignPrinciples isDark={isDark} />}
            {activeTab === 'impact' && <ImpactMetrics isDark={isDark} metrics={metrics} />}
            {activeTab === 'system' && <BehindTheSystem isDark={isDark} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
