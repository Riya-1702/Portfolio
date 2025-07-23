import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider';
import { LoadingScreen } from './components/LoadingScreen';
import { Enhanced3DHero } from './components/Enhanced3DHero';
import { Enhanced3DProjectCards } from './components/Enhanced3DProjectCards';
import { ScrollProgressIndicator } from './components/ScrollProgressIndicator';
import { ThemeToggle } from './components/ThemeToggle';
import { FloatingNavigation } from './components/FloatingNavigation';
import { AIChatAssistant } from './components/AIChatAssistant';
import { AboutSection } from './components/AboutSection';
import { EnhancedSkillsSection } from './components/EnhancedSkillsSection';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { TechnologyStackCards } from './components/TechnologyStackCards';
import { ResearchSection } from './components/ResearchSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { WaveDivider } from './components/WaveDivider';
import { useTheme } from './components/ThemeProvider';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`min-h-screen transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-deep-indigo text-off-white' 
          : 'bg-gray-50 text-gray-800'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgressIndicator />
      <ThemeToggle />
      <FloatingNavigation />
      <AIChatAssistant />
      
      <main>
        <motion.div 
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Enhanced3DHero />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WaveDivider className={theme === 'dark' ? 'text-electric-purple/20' : 'text-professional-blue/20'} />
        </motion.div>
        
        <motion.div 
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WaveDivider className={theme === 'dark' ? 'text-mint-green/20' : 'text-ocean-cyan/20'} flip />
        </motion.div>
        
        <motion.div 
          id="technology"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TechnologyStackCards />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WaveDivider className={theme === 'dark' ? 'text-electric-purple/20' : 'text-professional-blue/20'} />
        </motion.div>
        
        <motion.div 
          id="timeline"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <InteractiveTimeline />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WaveDivider className={theme === 'dark' ? 'text-mint-green/20' : 'text-ocean-cyan/20'} flip />
        </motion.div>
        
        <motion.div 
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Enhanced3DProjectCards />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WaveDivider className={theme === 'dark' ? 'text-electric-purple/20' : 'text-professional-blue/20'} flip />
        </motion.div>
        
        <motion.div 
          id="research"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ResearchSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WaveDivider className={theme === 'dark' ? 'text-mint-green/20' : 'text-ocean-cyan/20'} />
        </motion.div>
        
        <motion.div 
          id="certificates"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CertificatesSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WaveDivider className={theme === 'dark' ? 'text-electric-purple/20' : 'text-professional-blue/20'} flip />
        </motion.div>
        
        <motion.div 
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactSection />
        </motion.div>
      </main>
      
      <motion.footer 
        className={`relative py-8 border-t transition-colors duration-500 ${
          theme === 'dark'
            ? 'bg-glass-bg backdrop-blur-md border-glass-border text-muted-text'
            : 'bg-glass-bg-light backdrop-blur-md border-glass-border-light text-gray-600'
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                theme === 'dark' ? 'bg-electric-purple' : 'bg-professional-blue'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="mb-2">© 2024 Riya Sharma. All rights reserved.</p>
          <p className="text-sm mb-4 opacity-70">
            Built with React, TypeScript, Framer Motion & Three.js • Modern 3D Portfolio
          </p>
          <div className="flex justify-center gap-4">
            {[
              { name: 'GitHub', url: 'https://github.com/Riya-1702' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/riya-sharma-638a6b217' },
              { name: 'Instagram', url: 'https://instagram.com/_itzzz_riya_17' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 interactive ${
                  theme === 'dark'
                    ? 'text-muted-text hover:text-electric-purple'
                    : 'text-gray-600 hover:text-professional-blue'
                }`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

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
      <AnimatePresence mode="wait">
        <AppContent />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;