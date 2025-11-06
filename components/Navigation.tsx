import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pages: { path: string; label: string }[] = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-8 left-8 z-40 flex gap-8 text-sm tracking-wide" role="navigation" aria-label="Main navigation">
      {pages.map(page => {
        const isActive = location.pathname === page.path || (page.path === '/' && location.pathname === '/');
        return (
          <button
            key={page.path}
            onClick={() => navigate(page.path)}
            className={`transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {page.label}
          </button>
        );
      })}
    </nav>
  );
};

