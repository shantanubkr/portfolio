import React, { useState, useEffect, useRef } from 'react';
import { X, Mail, Linkedin, Calendar, Send, Check, Brain, Zap, Coffee, Palette, Layers, Code } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [particles, setParticles] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const canvasRef = useRef(null);
  const particleIdRef = useRef(0);
  const lastParticleTime = useRef(0);
  const animationFrameRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastParticleTime.current < 40) return;
      lastParticleTime.current = now;
      
      const newParticle = {
        id: particleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        life: 1,
        size: Math.random() * 3 + 2
      };
      
      setParticles(prev => [...prev.slice(-25), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      setParticles(prev => {
        const updated = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.012
          }))
          .filter(p => p.life > 0);

        updated.forEach(p => {
          ctx.fillStyle = isDark 
            ? `rgba(255, 255, 255, ${p.life * 0.2})` 
            : `rgba(0, 0, 0, ${p.life * 0.2})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size + 2, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = isDark 
            ? `rgba(255, 255, 255, ${p.life * 0.8})` 
            : `rgba(0, 0, 0, ${p.life * 0.8})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });

        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const dx = updated[i].x - updated[j].x;
            const dy = updated[i].y - updated[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
              const opacity = (1 - dist / 150) * updated[i].life * updated[j].life * 0.5;
              ctx.strokeStyle = isDark 
                ? `rgba(255, 255, 255, ${opacity})` 
                : `rgba(0, 0, 0, ${opacity})`;
              ctx.lineWidth = 1.2;
              ctx.beginPath();
              ctx.moveTo(updated[i].x, updated[i].y);
              ctx.lineTo(updated[j].x, updated[j].y);
              ctx.stroke();
            }
          }
        }

        return updated;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  const projects = [
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

  const skills = [
    { icon: Palette, title: 'Design', items: ['Figma', 'Design Systems', 'UI/UX', 'Branding', 'Prototyping'] },
    { icon: Code, title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Three.js'] },
    { icon: Layers, title: 'Backend', items: ['FastAPI', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Docker'] },
    { icon: Zap, title: 'Tools', items: ['Git', 'AWS', 'Vercel', 'Linear', 'Notion'] }
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ pointerEvents: 'none' }} />

      <button onClick={() => setIsDark(!isDark)} className={`fixed top-8 right-8 z-50 w-12 h-12 rounded-full border transition-all duration-300 ${isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'}`}>
        <div className={`w-5 h-5 rounded-full mx-auto transition-all duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
      </button>

      <nav className="fixed top-8 left-8 z-40 flex gap-8 text-sm tracking-wide">
        {['home', 'work', 'about', 'contact'].map(page => (
          <button key={page} onClick={() => setCurrentPage(page)} className={`transition-all ${currentPage === page ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>

      {currentPage === 'home' && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight">Shantanu Borkar</h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">I design to understand,</p>
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">build to simplify,</p>
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">and create to make things move.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-8 text-sm">
              {['Designer', 'Builder', 'Founder'].map(role => (
                <span key={role} className={`px-4 py-2 rounded-full border ${isDark ? 'border-white/20' : 'border-black/20'}`}>{role}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentPage === 'work' && (
        <div className="relative z-10 pt-32 pb-20 px-8 max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-4">Work</h1>
            <p className={`text-lg font-light ${isDark ? 'opacity-60' : 'opacity-60'}`}>Selected projects across design, code, and strategy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={project.id} onClick={() => setSelectedProject(project)} className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`} style={{ minHeight: i === 0 ? '400px' : '280px' }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/90 via-black/50 to-transparent' : 'from-white/90 via-white/50 to-transparent'} opacity-100 group-hover:opacity-90 transition-opacity`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-white/20 backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                    <h2 className={`font-light ${i === 0 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>{project.name}</h2>
                    <p className="text-sm opacity-80">{project.role}</p>
                    <p className="text-xs opacity-60 font-mono">{project.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className={`text-sm ${isDark ? 'opacity-40' : 'opacity-40'}`}>Detailed case studies available upon request</p>
          </div>
        </div>
      )}

      {currentPage === 'about' && (
        <div className="relative z-10 pt-32 pb-20 px-8 max-w-4xl mx-auto">
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-6">About</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8" />
          </div>
          <div className="space-y-8 mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Who I Am</h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>I'm a designer and builder who thinks in systems. I work at the intersection of design, code, and strategy — where ideas become interfaces, and interfaces become experiences.</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">What I Do</h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>I help founders and teams turn complexity into clarity. Whether it's designing a product from scratch, building a scalable design system, or architecting the backend that powers it — I bridge the gap between vision and execution.</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">How I Work</h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>I believe good design is invisible. It doesn't announce itself — it just works. My process starts with understanding the problem deeply, then building solutions that feel inevitable in hindsight. I work fast, iterate constantly, and care deeply about craft.</p>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-light mb-8">Principles</h2>
            <div className="grid gap-6">
              {[
                { icon: Brain, title: 'Think in Systems', text: 'Every component is part of a larger whole. Design for scale, consistency, and evolution.' },
                { icon: Zap, title: 'Ship Fast, Iterate Faster', text: 'Perfect is the enemy of good. Build, learn, improve. Speed compounds.' },
                { icon: Coffee, title: 'Craft Over Decoration', text: 'The best design is almost invisible. Focus on clarity, not complexity.' }
              ].map(p => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className={`p-6 rounded-lg border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                    <div className="flex items-start gap-4">
                      <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">{p.title}</h3>
                        <p className={`text-sm ${isDark ? 'opacity-70' : 'opacity-70'}`}>{p.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-light mb-8">What I Work With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map(cat => {
                const Icon = cat.icon;
                return (
                  <div key={cat.title} className={`p-6 rounded-lg border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5" />
                      <h3 className="font-medium">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map(item => (
                        <span key={item} className={`text-xs px-3 py-1 rounded-full border ${isDark ? 'border-white/20' : 'border-black/20'}`}>{item}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-20 text-center">
            <p className={`text-lg mb-6 ${isDark ? 'opacity-80' : 'opacity-80'}`}>Let's build something together</p>
            <button onClick={() => setCurrentPage('contact')} className={`inline-block px-8 py-4 rounded-lg border transition-all ${isDark ? 'border-white/20 hover:bg-white/10 hover:border-white/40' : 'border-black/20 hover:bg-black/5 hover:border-black/40'}`}>Get in Touch</button>
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="relative z-10 pt-32 pb-20 px-8 max-w-3xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-4">Get in Touch</h1>
            <p className={`text-lg ${isDark ? 'opacity-80' : 'opacity-80'}`}>Let's build something together</p>
          </div>
          <div className="space-y-3 mb-12">
            {[
              { icon: Mail, title: 'Email', text: 'shantanu@example.com', href: 'mailto:shantanu@example.com' },
              { icon: Linkedin, title: 'LinkedIn', text: '@shantanubkr', href: 'https://www.linkedin.com/in/shantanubkr/' },
              { icon: Calendar, title: 'Schedule a Call', text: 'Book a time that works for you', href: '#' }
            ].map(contact => {
              const Icon = contact.icon;
              return (
                <a key={contact.title} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`flex items-center gap-4 p-4 rounded-lg border transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isDark ? 'bg-white/10 group-hover:bg-white/20' : 'bg-black/10 group-hover:bg-black/20'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-0.5">{contact.title}</h3>
                    <p className={`text-sm ${isDark ? 'opacity-60' : 'opacity-60'}`}>{contact.text}</p>
                  </div>
                </a>
              );
            })}
          </div>
          <div className={`relative my-12 ${isDark ? 'opacity-20' : 'opacity-20'}`}>
            <div className={`border-t ${isDark ? 'border-white' : 'border-black'}`} />
            <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 text-xs ${isDark ? 'bg-black' : 'bg-white'}`}>or</span>
          </div>
          <div>
            <h2 className="text-xl font-light mb-6">Send a Message</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${isDark ? 'bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10' : 'bg-black/5 border-black/10 focus:border-black/30 focus:bg-black/10'}`} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${isDark ? 'bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10' : 'bg-black/5 border-black/10 focus:border-black/30 focus:bg-black/10'}`} placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} rows={5} className={`w-full px-4 py-3 rounded-lg border transition-all outline-none resize-none ${isDark ? 'bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10' : 'bg-black/5 border-black/10 focus:border-black/30 focus:bg-black/10'}`} placeholder="Tell me about your project..." />
              </div>
              <button onClick={handleSubmit} disabled={submitted} className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${submitted ? 'bg-green-500 text-white cursor-not-allowed' : isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}>
                {submitted ? <><Check className="w-5 h-5" />Message Sent!</> : <><Send className="w-5 h-5" />Send Message</>}
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className={`text-xs ${isDark ? 'opacity-40' : 'opacity-40'}`}>Based in Ambarnath, Maharashtra · Open to remote work worldwide</p>
            <p className={`text-xs mt-2 ${isDark ? 'opacity-40' : 'opacity-40'}`}>Usually respond within 24 hours</p>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className={`relative max-w-3xl w-full rounded-2xl overflow-hidden ${isDark ? 'bg-black border border-white/10' : 'bg-white border border-black/10'}`} onClick={e => e.stopPropagation()}>
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-80`} />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black to-transparent' : 'from-white to-transparent'}`} />
            </div>
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
              <X className="w-5 h-5" />
            </button>
            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-4xl font-light mb-2">{selectedProject.name}</h2>
                <p className={`text-sm ${isDark ? 'opacity-60' : 'opacity-60'}`}>{selectedProject.role} · {selectedProject.year}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className={`text-xs px-3 py-1 rounded-full border ${isDark ? 'border-white/20' : 'border-black/20'}`}>{tag}</span>
                ))}
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Overview</h3>
                <p className={`leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>{selectedProject.description}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Approach</h3>
                <p className={`leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>{selectedProject.approach}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Impact</h3>
                <p className={`leading-relaxed ${isDark ? 'opacity-80' : 'opacity-80'}`}>{selectedProject.impact}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-3">Technology</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className={`text-xs px-3 py-1 rounded font-mono ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;