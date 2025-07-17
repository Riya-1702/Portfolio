import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { CertificatesSection } from './components/CertificatesSection';
import { WaveDivider } from './components/WaveDivider';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 text-cyan-100">
        <CustomCursor />
        <Navigation />
        
        <main>
          <div id="hero">
            <HeroSection />
          </div>
          
          <WaveDivider className="text-white" />
          
          <div id="about">
            <AboutSection />
          </div>
          
          <WaveDivider className="text-black" flip />
          
          <div id="skills">
            <SkillsSection />
          </div>
          
          <WaveDivider className="text-white" />
          
          <div id="projects">
            <ProjectsSection />
          </div>
          
          <WaveDivider className="text-black" flip />
          
          <div id="education">
            <EducationSection />
          </div>
          
          <WaveDivider className="text-black" flip />
          
          <div id="certificates">
            <CertificatesSection />
          </div>
          
          <WaveDivider className="text-white" />
          
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        
        <footer className="bg-black text-amber-200 py-8 border-t border-amber-500/30">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-2">© 2024 Riya Sharma. All rights reserved.</p>
            <p className="text-sm text-amber-300/70 mb-4">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/Riya-1702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-100 transition-colors hover-target"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/riya-sharma-638a6b217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-100 transition-colors hover-target"
              >
                LinkedIn
              </a>
              <a 
                href="https://instagram.com/_itzzz_riya_17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-100 transition-colors hover-target"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;