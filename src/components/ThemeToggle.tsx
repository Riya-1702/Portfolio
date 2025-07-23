import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300 interactive ${
        theme === 'dark'
          ? 'bg-glass-bg border-glass-border text-electric-purple hover:bg-electric-purple/20'
          : 'bg-glass-bg-light border-glass-border-light text-professional-blue hover:bg-professional-blue/20'
      }`}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
      </motion.div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-full opacity-0 hover:opacity-30 transition-opacity duration-300 ${
        theme === 'dark' 
          ? 'bg-electric-purple blur-xl' 
          : 'bg-professional-blue blur-xl'
      }`} />
    </motion.button>
  );
};