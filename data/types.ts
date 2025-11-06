import React from 'react';

export type Page = 'home' | 'work' | 'about' | 'contact';

export interface Project {
  id: string;
  name: string;
  role: string;
  year: string;
  tags: string[];
  description: string;
  approach: string;
  impact: string;
  tech: string[];
  gradient: string;
}

export interface Skill {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  items: string[];
}

export interface Contact {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  href: string;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

