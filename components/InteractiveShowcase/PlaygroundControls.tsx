import React from 'react';
import { Code, Palette, Maximize } from 'lucide-react';

interface PlaygroundControlsProps {
  theme: 'light' | 'dark';
  size: 'sm' | 'md' | 'lg';
  showCode: boolean;
  onThemeChange: (theme: 'light' | 'dark') => void;
  onSizeChange: (size: 'sm' | 'md' | 'lg') => void;
  onShowCodeChange: (show: boolean) => void;
  isDark: boolean;
}

export const PlaygroundControls: React.FC<PlaygroundControlsProps> = ({
  theme,
  size,
  showCode,
  onThemeChange,
  onSizeChange,
  onShowCodeChange,
  isDark,
}) => {
  return (
    <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
      <div className="flex flex-wrap gap-6 items-center">
        {/* Theme Toggle */}
        <div className="flex items-center gap-3">
          <Palette className="w-4 h-4 opacity-60" />
          <span className="text-sm font-medium">Theme</span>
          <div className="flex gap-2">
            {(['light', 'dark'] as const).map((t) => (
              <button
                key={t}
                onClick={() => onThemeChange(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  theme === t
                    ? isDark
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                    : isDark
                      ? 'bg-white/10 hover:bg-white/20'
                      : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Size Toggle */}
        <div className="flex items-center gap-3">
          <Maximize className="w-4 h-4 opacity-60" />
          <span className="text-sm font-medium">Size</span>
          <div className="flex gap-2">
            {(['sm', 'md', 'lg'] as const).map((s) => (
              <button
                key={s}
                onClick={() => onSizeChange(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  size === s
                    ? isDark
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                    : isDark
                      ? 'bg-white/10 hover:bg-white/20'
                      : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Show Code Toggle */}
        <div className="flex items-center gap-3">
          <Code className="w-4 h-4 opacity-60" />
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showCode}
              onChange={(e) => onShowCodeChange(e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <span className="text-sm font-medium">Show Code</span>
          </label>
        </div>
      </div>
    </div>
  );
};

