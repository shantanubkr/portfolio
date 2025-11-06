import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navigation } from './components/Navigation';
import { DarkModeToggle } from './components/DarkModeToggle';
import { HomeSection } from './components/HomeSection';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ShowcaseOverlay } from './components/InteractiveShowcase';
import { Project } from './data/types';
import { projects } from './data/projects';

const HomePage: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return <HomeSection isDark={isDark} />;
};

const WorkPage: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return <WorkSection isDark={isDark} projects={projects} onProjectClick={setSelectedProject} />;
};

const AboutPage: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return <AboutSection isDark={isDark} />;
};

const ContactPage: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  return (
    <ContactSection
      isDark={isDark}
      formData={formData}
      setFormData={setFormData}
      submitted={submitted}
      setSubmitted={setSubmitted}
    />
  );
};

const ShowcasePage: React.FC<{ isDark: boolean; setIsDark: (isDark: boolean) => void }> = ({ isDark, setIsDark }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const handleClose = () => {
    navigate('/work');
  };

  return <ShowcaseOverlay project={project} isDark={isDark} setIsDark={setIsDark} onClose={handleClose} />;
};

function App() {
  const [isDark, setIsDark] = useState(true);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-700 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <ParticleCanvas isDark={isDark} />
        
        <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
        <Navigation />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage isDark={isDark} />} />
            <Route path="/work" element={<WorkPage isDark={isDark} />} />
            <Route path="/work/:id" element={<ShowcasePage isDark={isDark} setIsDark={setIsDark} />} />
            <Route path="/about" element={<AboutPage isDark={isDark} />} />
            <Route path="/contact" element={<ContactPage isDark={isDark} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
