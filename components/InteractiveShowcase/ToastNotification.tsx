import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ToastNotificationProps {
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  onClose: () => void;
  isDark: boolean;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  type = 'info',
  onClose,
  isDark,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: isDark ? 'bg-green-500/20 border-green-500/30' : 'bg-green-500/20 border-green-500/30',
    info: isDark ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-500/20 border-blue-500/30',
    warning: isDark ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-yellow-500/20 border-yellow-500/30',
    error: isDark ? 'bg-red-500/20 border-red-500/30' : 'bg-red-500/20 border-red-500/30',
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={`fixed bottom-8 right-8 z-50 max-w-md p-4 rounded-2xl border backdrop-blur-sm ${colors[type]}`}
      >
        <div className="flex items-center gap-3">
          <p className="text-sm flex-1">{message}</p>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

