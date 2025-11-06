import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface ImpactMetricsProps {
  isDark: boolean;
  metrics: {
    label: string;
    value: number;
    suffix: string;
    color: string;
  }[];
}

const AnimatedCounter: React.FC<{ value: number; suffix: string; color: string }> = ({
  value,
  suffix,
  color,
}) => {
  const spring = useSpring(0, { stiffness: 50, damping: 30 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
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

  useEffect(() => {
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

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ isDark, metrics }) => {
  return (
    <div className="space-y-8">
      {/* Animated Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-2xl text-center ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'
            }`}
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
  );
};

