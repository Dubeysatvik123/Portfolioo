import * as React from 'react';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LoadingScreen from './components/LoadingScreen';
import FirefliesBackground from './components/FirefliesBackground';
import EngineerAvatar from './components/EngineerAvatar';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import MemeStrip from './components/MemeStrip';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import BlogSection from './components/BlogSection';
import ChatbotIcon from './components/ChatbotIcon';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection Observer hooks for each section
  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.3 });
  const [blogRef, blogInView] = useInView({ threshold: 0.3 });

  // Update active section based on scroll position
  useEffect(() => {
    if (heroInView) setActiveSection('hero');
    else if (aboutInView) setActiveSection('about');
    else if (skillsInView) setActiveSection('skills');
    else if (projectsInView) setActiveSection('projects');
    else if (experienceInView) setActiveSection('experience');
    else if (contactInView) setActiveSection('contact');
    else if (blogInView) setActiveSection('blog');
  }, [heroInView, aboutInView, skillsInView, projectsInView, experienceInView, contactInView, blogInView]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoadingComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600); // 600ms fade duration
  };

  if (isLoading) {
    return (
      <div className={fadeOut ? 'opacity-0 transition-opacity duration-700' : 'opacity-100 transition-opacity duration-700'}>
        <LoadingScreen onComplete={handleLoadingComplete} />
      </div>
    );
  }

  // Render the full main content after loading
  return (
    <div className="min-h-screen bg-cosmic-gradient text-white overflow-x-hidden relative" style={{ zIndex: 1, background: '#0a0a1a' }}>
      <FirefliesBackground />
      <div className="relative z-10">
        <EngineerAvatar />
        <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
        <main className="lg:ml-64">
          <section id="hero" ref={heroRef}>
            <HeroSection onNavigate={scrollToSection} />
          </section>
          <MemeStrip />
          <section id="about" ref={aboutRef}>
            <AboutSection />
          </section>
          <section id="skills" ref={skillsRef}>
            <SkillsSection />
          </section>
          <section id="projects" ref={projectsRef}>
            <ProjectsSection />
          </section>
          <section id="experience" ref={experienceRef}>
            <ExperienceSection />
          </section>
          <section id="contact" ref={contactRef}>
            <ContactSection />
          </section>
          <section id="blog" ref={blogRef}>
            <BlogSection />
          </section>
        </main>
        <ChatbotIcon />
      </div>
    </div>
  );
}

export default App;