import React, { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { CosmicBackground } from './CosmicBackground';

export const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950">
      {/* Enhanced Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep Ocean Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-indigo-950/90 to-purple-950/95"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 via-transparent to-transparent"></div>
      </div>
      
      {/* 3D Cosmic Ocean Animation */}
      <div className="absolute inset-0 opacity-80">
        <CosmicBackground intensity="high" />
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8">
        {/* Left Side - Name and Animated Titles */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          {/* Cosmic Glowing Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl" 
                  style={{ textShadow: '0 0 30px rgba(103, 232, 249, 0.5)' }}>
              Riya
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ textShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}>
              Sharma
            </span>
          </h1>
          
          {/* Animated Titles */}
          <div className="h-16 mb-6 flex items-center justify-center lg:justify-start">
            <div className="relative">
              {titles.map((title, index) => (
                <div
                  key={title}
                  className={`absolute inset-0 text-2xl md:text-3xl font-bold transition-all duration-1000 ${
                    index === currentTitleIndex 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}
                  style={{
                    background: 'linear-gradient(45deg, #67e8f9, #06b6d4, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(103, 232, 249, 0.3)',
                  }}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
          
          {/* Cosmic Ocean Tagline */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-20 blur-xl rounded-lg"></div>
            <p className="relative text-lg md:text-xl text-cyan-200 font-medium leading-relaxed max-w-2xl text-center lg:text-left">
              "Diving into Innovation, Floating Among Digital Galaxies"
            </p>
          </div>
          
          <p className="text-lg text-cyan-300 mb-8 max-w-xl leading-relaxed">
            B.Tech Computer Science & Engineering (AI) • 3rd Year
            <br />
            JECRC College, Jaipur • Linux World Informatics Intern
          </p>
          
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 hover-target font-semibold">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative">View My Work</span>
            </button>
            <button className="relative border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover-target font-semibold hover:shadow-lg hover:shadow-cyan-500/30">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side - Profile with Enhanced Cosmic Effects */}
        <div className="flex-1 flex justify-center items-center order-first lg:order-last">
          <div className="relative">
            {/* Enhanced Glowing Background Effect */}
            <div className="absolute inset-0 scale-150 opacity-40">
              <div className="absolute w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform rotate-12 translate-x-4 translate-y-2 animate-pulse blur-sm"></div>
              <div className="absolute w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform -rotate-45 -translate-x-2 translate-y-8 animate-pulse delay-300 blur-sm"></div>
              <div className="absolute w-28 h-28 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full transform rotate-45 translate-x-8 -translate-y-4 animate-pulse delay-700 blur-sm"></div>
            </div>
            
            {/* Profile Image with Enhanced Cosmic Glow */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 animate-pulse"></div>
              <img
                src="/riya-sharma-photo.jpg"
                alt="Riya Sharma - Tech Explorer, AI Innovator, and Artist"
                className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400";
                  setImageLoaded(true);
                }}
              />
              {/* Cosmic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-purple-900/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mb-2"></div>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};