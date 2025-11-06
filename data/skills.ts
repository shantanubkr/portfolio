import { Palette, Code, Layers, Zap, Brain, Coffee } from 'lucide-react';
import { Skill } from './types';

export const skills: Skill[] = [
  { icon: Palette, title: 'Design', items: ['Figma', 'Design Systems', 'UI/UX', 'Branding', 'Prototyping'] },
  { icon: Code, title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Three.js'] },
  { icon: Layers, title: 'Backend', items: ['FastAPI', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Docker'] },
  { icon: Zap, title: 'Tools', items: ['Git', 'AWS', 'Vercel', 'Linear', 'Notion'] }
];

export const principles = [
  { icon: Brain, title: 'Think in Systems', text: 'Every component is part of a larger whole. Design for scale, consistency, and evolution.' },
  { icon: Zap, title: 'Ship Fast, Iterate Faster', text: 'Perfect is the enemy of good. Build, learn, improve. Speed compounds.' },
  { icon: Coffee, title: 'Craft Over Decoration', text: 'The best design is almost invisible. Focus on clarity, not complexity.' }
];

