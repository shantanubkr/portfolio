import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'supahealth',
    name: 'SupaHealth',
    role: 'Product Design System Lead',
    year: '2024',
    tags: ['Design Systems', 'Healthcare', 'UX'],
    description: 'Led the complete product design system and workflow architecture for a healthcare platform.',
    approach: 'Built scalable design system from first principles, created component library, established design-dev protocols.',
    impact: 'Reduced design-to-dev time by 60%, enabled consistent UX across 12+ features.',
    tech: ['Figma', 'Design Systems', 'Component Architecture'],
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'homeoeostack',
    name: 'HomoeoStack',
    role: 'Frontend Engineer & Designer',
    year: '2024',
    tags: ['React', 'AI', 'Frontend'],
    description: 'Designed and built the complete frontend for an AI-powered homeopathy web application.',
    approach: 'Architected responsive UI with modern React patterns, integrated AI APIs, optimized for performance.',
    impact: 'Delivered production-ready app with 95+ Lighthouse score.',
    tech: ['React', 'TypeScript', 'REST APIs'],
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'lazr',
    name: 'LAZR',
    role: 'Backend Architect',
    year: '2023',
    tags: ['Backend', 'API', 'Infrastructure'],
    description: 'Built complete backend infrastructure for a SaaS platform serving healthcare practitioners.',
    approach: 'Designed FastAPI architecture, implemented MongoDB schema, created RESTful APIs with auth.',
    impact: 'Platform handling 10K+ daily requests with <100ms response times.',
    tech: ['FastAPI', 'MongoDB', 'Python', 'Docker'],
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'clinic-digitization',
    name: 'Digitizing Clinics',
    role: 'Brand & Product Designer',
    year: '2023',
    tags: ['Branding', 'UI/UX', 'Strategy'],
    description: 'Complete branding and UI/UX redesign for clinics modernizing their practice.',
    approach: 'Conducted user research, created visual identity, designed intuitive patient management interfaces.',
    impact: 'Helped 5+ clinics transition to digital-first operations.',
    tech: ['Figma', 'Brand Design', 'User Research'],
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'experiments',
    name: 'Personal Lab',
    role: 'Creator & Experimenter',
    year: 'Ongoing',
    tags: ['AI', 'Games', 'Visual Systems'],
    description: 'Small tools, games, and visual experiments exploring design and code.',
    approach: 'Built AI tools, created interactive visuals, developed games, explored generative art.',
    impact: 'Continuous learning lab for new technologies and creative ideas.',
    tech: ['React', 'Three.js', 'AI APIs', 'WebGL'],
    gradient: 'from-violet-500 to-indigo-600'
  }
];

