import React from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { X } from 'lucide-react';

interface DrawerBottomProps {
  isOpen: boolean;
  onClose: () => void;
  metrics: { label: string; value: number; suffix: string; color: string }[];
  isDark: boolean;
}

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
    <motion.span className="text-4xl font-bold" style={{ color }}>
      {display}
      {suffix}
    </motion.span>
  );
};

const ProgressBar: React.FC<{ label: string; percentage: number; isDark: boolean }> = ({
  label,
  percentage,
  isDark,
}) => {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });

  React.useEffect(() => {
    spring.set(percentage);
  }, [spring, percentage]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <motion.span>
          {useTransform(spring, (v) => Math.round(v))}%
        </motion.span>
      </div>
      <div
        className={`h-2 rounded-full overflow-hidden ${
          isDark ? 'bg-white/10' : 'bg-black/10'
        }`}
      >
        <motion.div
          className={`h-full ${isDark ? 'bg-white' : 'bg-black'}`}
          style={{ width: useTransform(spring, (v) => `${v}%`) }}
        />
      </div>
    </div>
  );
};

export const DrawerBottom_Impact: React.FC<DrawerBottomProps> = ({ isOpen, onClose, metrics, isDark }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 h-96 bg-black/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl z-40 overflow-y-auto"
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light">Impact Metrics</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-8">
              {/* Animated Counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl text-center ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}
                  >
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} color={metric.color} />
                    <p className="text-sm mt-2 opacity-60">{metric.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                {[
                  { label: 'Design-to-Dev Time Reduction', percentage: 60 },
                  { label: 'Component Reusability', percentage: 85 },
                  { label: 'Design System Coverage', percentage: 92 },
                  { label: 'Development Speed', percentage: 75 },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProgressBar label={item.label} percentage={item.percentage} isDark={isDark} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

