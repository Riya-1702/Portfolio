import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export const ScrollProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-50 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-electric-purple via-mint-green to-electric-purple' 
            : 'bg-gradient-to-r from-professional-blue via-ocean-cyan to-professional-blue'
        }`}
        style={{ scaleX: scrollProgress, transformOrigin: '0%' }}
        initial={{ scaleX: 0 }}
      />
      
      {/* Circular Progress Indicator */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="relative w-16 h-16">
          {/* Background Circle */}
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className={theme === 'dark' ? 'text-glass-border' : 'text-glass-border-light'}
            />
            {/* Progress Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke={theme === 'dark' ? '#7F5AF0' : '#005F73'}
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${2.51 * scrollProgress * 100} 251.2`}
              strokeLinecap="round"
              className="transition-all duration-300"
              style={{
                filter: `drop-shadow(0 0 8px ${theme === 'dark' ? '#7F5AF0' : '#005F73'})`,
              }}
            />
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xs font-bold ${
              theme === 'dark' ? 'text-electric-purple' : 'text-professional-blue'
            }`}>
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};