import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { RightSideMenu } from './components/RightSideMenu';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechnologySection } from './components/TechnologySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
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
        <RightSideMenu />
        
        <main>
          <div id="hero">
            <HeroSection />
          </div>
          
          <WaveDivider className="text-cyan-500/20" />
          
          <div id="about">
            <AboutSection />
          </div>
          
          <WaveDivider className="text-purple-500/20" flip />
          
          <div id="technology">
            <TechnologySection />
          </div>
          
          <WaveDivider className="text-cyan-500/20" />
          
          <div id="projects">
            <ProjectsSection />
          </div>
          
          <WaveDivider className="text-purple-500/20" flip />
          
          <div id="research">
            <ResearchSection />
          </div>
          
          <WaveDivider className="text-cyan-500/20" />
          
          <div id="certificates">
            <CertificatesSection />
          </div>
          
          <WaveDivider className="text-purple-500/20" flip />
          
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        
        <footer className="bg-slate-900/90 text-cyan-200 py-8 border-t border-cyan-500/30 relative">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <p className="mb-2">© 2024 Riya Sharma. All rights reserved.</p>
            <p className="text-sm text-cyan-300/70 mb-4">
              Built with React, TypeScript, and Tailwind CSS • Cosmic Ocean Theme
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/Riya-1702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors hover-target"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/riya-sharma-638a6b217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors hover-target"
              >
                LinkedIn
              </a>
              <a 
                href="https://instagram.com/_itzzz_riya_17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors hover-target"
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