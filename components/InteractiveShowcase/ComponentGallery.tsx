import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Check, X, Loader } from 'lucide-react';

interface ComponentGalleryProps {
  isDark: boolean;
  theme: 'light' | 'dark';
  size: 'sm' | 'md' | 'lg';
  showCode: boolean;
}

export const ComponentGallery: React.FC<ComponentGalleryProps> = ({ isDark, theme, size, showCode }) => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const handleToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleToast('Action completed successfully!');
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Buttons */}
      <section>
        <h3 className="text-xl font-medium mb-4">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAction}
            disabled={loading}
            className={`${sizeClasses[size]} rounded-lg font-medium transition-all ${
              theme === 'dark' || isDark
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-black text-white hover:bg-black/90'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader className="w-4 h-4 animate-spin" />
                Loading...
              </span>
            ) : (
              'Primary Button'
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${sizeClasses[size]} rounded-lg font-medium border transition-all ${
              isDark ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/10'
            }`}
          >
            Secondary Button
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${sizeClasses[size]} rounded-lg font-medium text-red-500 border border-red-500/30 hover:bg-red-500/10 transition-all`}
          >
            Danger Action
          </motion.button>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h3 className="text-xl font-medium mb-4">Inputs</h3>
        <div className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            placeholder="Enter your name"
            className={`w-full md:w-96 ${sizeClasses[size]} rounded-lg border transition-all outline-none ${
              isDark
                ? 'bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10'
                : 'bg-black/5 border-black/10 focus:border-black/30 focus:bg-black/10'
            }`}
          />
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            placeholder="your@email.com"
            className={`w-full md:w-96 ${sizeClasses[size]} rounded-lg border transition-all outline-none ${
              isDark
                ? 'bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10'
                : 'bg-black/5 border-black/10 focus:border-black/30 focus:bg-black/10'
            }`}
          />
        </div>
      </section>

      {/* Toggle Switch */}
      <section>
        <h3 className="text-xl font-medium mb-4">Toggle</h3>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              id="toggle"
            />
            <div
              className={`w-12 h-6 rounded-full transition-all ${
                isDark ? 'bg-white/20' : 'bg-black/20'
              } relative`}
            >
              <div
                className={`w-5 h-5 rounded-full absolute top-0.5 left-0.5 transition-all ${
                  isDark ? 'bg-white' : 'bg-black'
                }`}
              />
            </div>
            <span className="text-sm">Enable notifications</span>
          </label>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h3 className="text-xl font-medium mb-4">Cards</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Active Status', status: 'active', icon: Check },
            { title: 'Inactive Status', status: 'inactive', icon: X },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-6 rounded-2xl border transition-all ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{card.title}</h4>
                  <Icon
                    className={`w-5 h-5 ${
                      card.status === 'active' ? 'text-green-500' : 'text-gray-500'
                    }`}
                  />
                </div>
                <p className={`text-sm ${isDark ? 'opacity-60' : 'opacity-60'}`}>
                  Example card with hover effect
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-20 right-8 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`p-4 rounded-2xl border backdrop-blur-sm bg-green-500/20 border-green-500/30`}
          >
            <p className="text-sm">{toast}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

