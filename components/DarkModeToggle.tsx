import React from 'react';

interface DarkModeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`fixed top-8 right-8 z-50 w-12 h-12 rounded-full border transition-all duration-300 ${
        isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className={`w-5 h-5 rounded-full mx-auto transition-all duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
    </button>
  );
};

