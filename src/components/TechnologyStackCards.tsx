import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Brain, ChevronUp, ChevronDown } from 'lucide-react';
import { CosmicBackground } from './CosmicBackground';

const technologyCards = [
  {
    id: 1,
    title: 'Programming Languages',
    icon: Code,
    technologies: ['C', 'C++', 'Python', 'JavaScript'],
    color: 'from-blue-500 to-purple-500',
    description: 'Core programming languages for software development and automation',
    bgGradient: 'from-blue-900/20 via-purple-900/20 to-indigo-900/20'
  },
  {
    id: 2,
    title: 'DevOps Tools',
    icon: Server,
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
    color: 'from-cyan-500 to-blue-500',
    description: 'Container orchestration, automation, and deployment pipelines',
    bgGradient: 'from-cyan-900/20 via-blue-900/20 to-teal-900/20'
  },
  {
    id: 3,
    title: 'Database Systems',
    icon: Database,
    technologies: ['SQL', 'MongoDB', 'PostgreSQL', 'Redis'],
    color: 'from-yellow-500 to-orange-500',
    description: 'Relational and NoSQL database management and optimization',
    bgGradient: 'from-yellow-900/20 via-orange-900/20 to-amber-900/20'
  },
  {
    id: 4,
    title: 'Artificial Intelligence',
    icon: Brain,
    technologies: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch'],
    color: 'from-purple-500 to-pink-500',
    description: 'AI/ML frameworks and neural network architectures',
    bgGradient: 'from-purple-900/20 via-pink-900/20 to-rose-900/20'
  }
];

export const TechnologyStackCards: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentCard((prev) => (prev + 1) % technologyCards.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentCard((prev) => (prev - 1 + technologyCards.length) % technologyCards.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToCard = (index: number) => {
    if (isAnimating || index === currentCard) return;
    setIsAnimating(true);
    setCurrentCard(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe) {
      nextCard();
    } else if (isDownSwipe) {
      prevCard();
    }
  };

  // Scroll handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0) {
        nextCard();
      } else {
        prevCard();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/90 via-indigo-950/95 to-slate-900/90"></div>
      </div>
      
      {/* 3D Cosmic Animation */}
      <CosmicBackground intensity="medium" className="opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Technology Ocean Layers
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            Swipe up or scroll to explore different technology depths
          </p>
        </div>

        {/* Card Stack Container */}
        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto h-[500px] perspective-1000"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Cards Stack */}
          <div className="relative w-full h-full">
            {technologyCards.map((card, index) => {
              const offset = index - currentCard;
              const isActive = offset === 0;
              const isNext = offset === 1 || (currentCard === technologyCards.length - 1 && index === 0);
              const isPrev = offset === -1 || (currentCard === 0 && index === technologyCards.length - 1);
              
              let zIndex = 10;
              let transform = '';
              let opacity = 0;
              
              if (isActive) {
                zIndex = 30;
                transform = 'translateZ(0px) rotateX(0deg) scale(1)';
                opacity = 1;
              } else if (isNext) {
                zIndex = 20;
                transform = 'translateZ(-50px) translateY(20px) rotateX(-5deg) scale(0.95)';
                opacity = 0.7;
              } else if (isPrev) {
                zIndex = 10;
                transform = 'translateZ(-100px) translateY(-20px) rotateX(5deg) scale(0.9)';
                opacity = 0.3;
              } else {
                zIndex = 5;
                transform = 'translateZ(-150px) translateY(40px) rotateX(-10deg) scale(0.8)';
                opacity = 0;
              }

              return (
                <div
                  key={card.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out cursor-pointer ${
                    isActive ? 'hover:scale-105' : ''
                  }`}
                  style={{
                    zIndex,
                    transform,
                    opacity,
                  }}
                  onClick={() => isActive && nextCard()}
                >
                  <div className={`w-full h-full rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 ${
                    isActive 
                      ? 'bg-slate-800/70 backdrop-blur-md border-cyan-400/50' 
                      : 'bg-slate-800/50 backdrop-blur-sm border-cyan-500/30'
                  }`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} ${
                      isActive ? 'opacity-100' : 'opacity-60'
                    } transition-opacity duration-500`}></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 bg-cyan-300 rounded-full transition-all duration-500 ${
                            isActive ? 'animate-pulse opacity-60' : 'opacity-20'
                          }`}
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 h-full p-8 flex items-center">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
                        {/* Left Side - Icon and Title */}
                        <div className="text-center lg:text-left">
                          <div className={`inline-flex p-8 rounded-full bg-gradient-to-r ${card.color} text-white mb-6 transition-transform duration-300 shadow-lg relative ${
                            isActive ? 'scale-110' : 'scale-100'
                          }`}>
                            <card.icon className="w-16 h-16" />
                            
                            {/* Icon Glow */}
                            {isActive && (
                              <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-40 rounded-full blur-xl animate-pulse scale-150`}></div>
                            )}
                          </div>
                          
                          <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                            isActive ? 'text-cyan-100' : 'text-cyan-200/70'
                          }`}>
                            {card.title}
                          </h3>
                          
                          <p className={`leading-relaxed transition-colors duration-300 ${
                            isActive ? 'text-cyan-300' : 'text-cyan-300/60'
                          }`}>
                            {card.description}
                          </p>
                        </div>

                        {/* Right Side - Technologies */}
                        <div className="space-y-6">
                          <h4 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                            isActive ? 'text-cyan-200' : 'text-cyan-200/70'
                          }`}>
                            Technologies:
                          </h4>
                          
                          <div className="grid grid-cols-2 gap-4">
                            {card.technologies.map((tech, techIndex) => (
                              <div
                                key={tech}
                                className={`relative overflow-hidden rounded-xl p-4 text-center transition-all duration-500 ${
                                  isActive 
                                    ? 'bg-slate-700/60 backdrop-blur-sm border border-cyan-500/40 hover:scale-105 hover:border-cyan-400/60' 
                                    : 'bg-slate-700/30 border border-cyan-500/20'
                                }`}
                                style={{
                                  animationDelay: `${techIndex * 0.1}s`,
                                }}
                              >
                                {/* Tech Badge Glow */}
                                {isActive && (
                                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 hover:opacity-10 rounded-xl transition-all duration-300`}></div>
                                )}
                                
                                <span className={`relative z-10 font-medium transition-colors duration-300 ${
                                  isActive ? 'text-cyan-100' : 'text-cyan-200/60'
                                }`}>
                                  {tech}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Glow Effect */}
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-5 rounded-3xl blur-sm animate-pulse`}></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-40">
            <button
              onClick={prevCard}
              disabled={isAnimating}
              className="bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 p-2 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 border border-cyan-500/30 backdrop-blur-sm"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextCard}
              disabled={isAnimating}
              className="bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 p-2 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 border border-cyan-500/30 backdrop-blur-sm"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Card Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
            {technologyCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCard
                    ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50'
                    : 'bg-cyan-500/30 hover:bg-cyan-500/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-cyan-500/30">
            <p className="text-cyan-300/80 text-sm">
              <span className="font-semibold text-cyan-200">Desktop:</span> Scroll or click to navigate
              <br />
              <span className="font-semibold text-cyan-200">Mobile:</span> Swipe up/down to explore layers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};