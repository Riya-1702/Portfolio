import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateMousePosition);
    
    const interactiveElements = document.querySelectorAll('button, a, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        scale: isHovering ? 2 : 1,
        opacity: isHovering ? 0.8 : 0.6,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div className="w-6 h-6 bg-electric-purple rounded-full animate-glow-pulse" />
    </motion.div>
  );
};

// Animated Letters Component
const AnimatedLetters = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: 'easeOut',
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export const Enhanced3DHero: React.FC = () => {
  const { theme } = useTheme();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const controls = useAnimation();
  
  const titles = [
    'DevOps Engineer',
    'ML Engineer', 
    'Generative AI Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    });
  }, [controls]);

  return (
    <>
      <CustomCursor />
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-deep-indigo via-purple-950 to-indigo-950' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
      }`}>
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/10 via-transparent to-mint-green/10 animate-float" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mint-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
          {/* Left Side - Content */}
          <motion.div 
            className="flex-1 max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            {/* Main Title */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className={`text-6xl md:text-8xl font-bold leading-tight ${
                theme === 'dark' ? 'text-off-white' : 'text-gray-800'
              }`}>
                <AnimatedLetters 
                  text="Riya"
                  className={`block ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-electric-purple via-mint-green to-electric-purple bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-professional-blue via-ocean-cyan to-professional-blue bg-clip-text text-transparent'
                  }`}
                />
                <AnimatedLetters 
                  text="Sharma"
                  className={`block ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-mint-green via-electric-purple to-mint-green bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-ocean-cyan via-professional-blue to-ocean-cyan bg-clip-text text-transparent'
                  }`}
                />
              </h1>
            </motion.div>
            
            {/* Animated Subtitle */}
            <div className="h-16 mb-6 flex items-center justify-center lg:justify-start">
              <div className="relative">
                {titles.map((title, index) => (
                  <motion.div
                    key={title}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === currentTitleIndex ? 1 : 0,
                      y: index === currentTitleIndex ? 0 : 20,
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <AnimatedLetters 
                      text={title}
                      className={`text-2xl md:text-3xl font-bold ${
                        theme === 'dark' ? 'text-electric-purple' : 'text-professional-blue'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Description */}
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-electric-purple/20 via-mint-green/20 to-electric-purple/20' 
                  : 'from-professional-blue/20 via-ocean-cyan/20 to-professional-blue/20'
              } opacity-20 blur-xl rounded-lg`} />
              <p className={`relative text-lg md:text-xl font-medium leading-relaxed max-w-2xl text-center lg:text-left ${
                theme === 'dark' ? 'text-off-white' : 'text-gray-800'
              }`}>
                "Diving into Innovation, Floating Among Digital Galaxies"
              </p>
            </motion.div>
            
            <motion.p 
              className={`text-lg mb-8 max-w-xl leading-relaxed ${
                theme === 'dark' ? 'text-muted-text' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              B.Tech Computer Science & Engineering (AI) • 3rd Year
              <br />
              JECRC College, Jaipur • Linux World Informatics Intern
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button 
                className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 interactive ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-electric-purple to-purple-600 text-white hover:shadow-lg hover:shadow-electric-purple/30'
                    : 'bg-gradient-to-r from-professional-blue to-blue-600 text-white hover:shadow-lg hover:shadow-professional-blue/30'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button 
                className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 interactive ${
                  theme === 'dark'
                    ? 'border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white hover:shadow-lg hover:shadow-electric-purple/30'
                    : 'border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white hover:shadow-lg hover:shadow-professional-blue/30'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Profile */}
          <motion.div 
            className="flex-1 flex justify-center items-center order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Animated Background Elements */}
              <motion.div 
                className="absolute inset-0 scale-150 opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className={`absolute w-40 h-40 rounded-full blur-sm ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-electric-purple to-mint-green' 
                    : 'bg-gradient-to-r from-professional-blue to-ocean-cyan'
                } transform rotate-12 translate-x-4 translate-y-2 animate-float`} />
                <div className={`absolute w-32 h-32 rounded-full blur-sm ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-mint-green to-electric-purple' 
                    : 'bg-gradient-to-r from-ocean-cyan to-coral-red'
                } transform -rotate-45 -translate-x-2 translate-y-8 animate-float`} style={{ animationDelay: '1s' }} />
              </motion.div>
              
              {/* Profile Image with Glass Morphism */}
              <motion.div 
                className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-2xl ${
                  theme === 'dark'
                    ? 'border-electric-purple shadow-electric-purple/30 bg-glass-bg backdrop-blur-md'
                    : 'border-professional-blue shadow-professional-blue/30 bg-glass-bg-light backdrop-blur-md'
                }`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className={`absolute inset-0 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-electric-purple/20 to-mint-green/20' 
                    : 'bg-gradient-to-r from-professional-blue/20 to-ocean-cyan/20'
                } animate-glow-pulse`} />
                <img
                  src="/riya-sharma-photo.jpg"
                  alt="Riya Sharma - Tech Explorer, AI Innovator, and Artist"
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                <div className={`absolute inset-0 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-t from-deep-indigo/20 via-transparent to-electric-purple/20' 
                    : 'bg-gradient-to-t from-gray-900/20 via-transparent to-professional-blue/20'
                }`} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className={`flex flex-col items-center ${
              theme === 'dark' ? 'text-electric-purple' : 'text-professional-blue'
            }`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className={`w-1 h-8 rounded-full mb-2 ${
              theme === 'dark' 
                ? 'bg-gradient-to-b from-electric-purple to-transparent' 
                : 'bg-gradient-to-b from-professional-blue to-transparent'
            }`} />
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};