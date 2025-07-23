import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Award } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const FloatingNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-40 ${
            theme === 'dark'
              ? 'bg-glass-bg backdrop-blur-md border border-glass-border'
              : 'bg-glass-bg-light backdrop-blur-md border border-glass-border-light'
          } rounded-2xl p-2 shadow-2xl`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-xl transition-all duration-300 group interactive ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'bg-electric-purple/20 text-electric-purple'
                      : 'bg-professional-blue/20 text-professional-blue'
                    : theme === 'dark'
                    ? 'text-muted-text hover:text-electric-purple hover:bg-electric-purple/10'
                    : 'text-gray-500 hover:text-professional-blue hover:bg-professional-blue/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <motion.div
                  className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    theme === 'dark'
                      ? 'bg-glass-bg backdrop-blur-md border border-glass-border text-off-white'
                      : 'bg-glass-bg-light backdrop-blur-md border border-glass-border-light text-gray-800'
                  }`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                >
                  {item.label}
                  <div className={`absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent ${
                    theme === 'dark' ? 'border-r-glass-bg' : 'border-r-glass-bg-light'
                  }`} />
                </motion.div>
                
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className={`absolute inset-0 rounded-xl ${
                      theme === 'dark' 
                        ? 'bg-electric-purple/10 border border-electric-purple/30' 
                        : 'bg-professional-blue/10 border border-professional-blue/30'
                    }`}
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Glow Effect */}
                {activeSection === item.id && (
                  <div className={`absolute inset-0 rounded-xl opacity-20 blur-sm ${
                    theme === 'dark' ? 'bg-electric-purple' : 'bg-professional-blue'
                  }`} />
                )}
              </motion.button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};