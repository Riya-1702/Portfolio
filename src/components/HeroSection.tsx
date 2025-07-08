import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { AtomAnimation } from './AtomAnimation';

export const HeroSection: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Full Section Atomic Animation */}
      <AtomAnimation />
      
      {/* Resume Accordion */}
      <div className="absolute top-8 right-8 z-10">
        <div className="bg-black/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-amber-500/30">
          <button
            onClick={() => setResumeOpen(!resumeOpen)}
            className="flex items-center gap-2 px-4 py-3 text-amber-100 hover:bg-amber-500/20 transition-colors hover-target"
          >
            <Download className="w-4 h-4" />
            <span className="font-medium">Resume</span>
            {resumeOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          {resumeOpen && (
            <div className="p-4 border-t border-amber-500/30 animate-in slide-in-from-top-2">
              <p className="text-sm text-amber-200 mb-3">
                Download my resume to learn more about my experience and skills.
              </p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-black py-2 px-4 rounded-lg transition-colors hover-target font-semibold">
                Download PDF
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8">
        {/* Left Side - Name and Tagline */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-6xl md:text-8xl font-bold text-amber-100 mb-4 leading-tight">
            Riya
            <br />
            <span className="text-amber-300">Sharma</span>
          </h1>
          
          {/* Power Tagline with Atom Animation */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 opacity-20 blur-xl rounded-lg"></div>
            <p className="relative text-2xl md:text-3xl text-amber-200 font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Unleashing the <span className="relative">
                <span className="animate-bounce">⚛️</span> Power
              </span> of Innovation
            </p>
          </div>
          
          <p className="text-xl text-amber-300 mb-2">
            Tech Explorer | AI Innovator | Artist
          </p>
          <p className="text-lg text-amber-200 mb-8 max-w-xl">
            B.Tech Computer Science & Engineering (AI) • 3rd Year
            <br />
            JECRC College, Jaipur • Linux World Informatics Intern
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="relative bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-black px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 hover-target font-semibold">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative">View My Work</span>
            </button>
            <button className="relative border-2 border-amber-500 text-amber-300 hover:bg-amber-500 hover:text-black px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover-target font-semibold hover:shadow-lg hover:shadow-amber-500/30">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side - Profile */}
        <div className="flex-1 flex justify-center items-center order-first lg:order-last">
          <div className="relative">
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 scale-150 opacity-30">
              <div className="absolute w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transform rotate-12 translate-x-4 translate-y-2 animate-pulse"></div>
              <div className="absolute w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transform -rotate-45 -translate-x-2 translate-y-8 animate-pulse delay-300"></div>
              <div className="absolute w-20 h-20 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full transform rotate-45 translate-x-8 -translate-y-4 animate-pulse delay-700"></div>
            </div>
            
            {/* Profile Image with Glow */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-500 shadow-2xl shadow-amber-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 animate-pulse"></div>
              <img
                src="/riya-sharma-photo.jpg"
                alt="Riya Sharma - Tech Explorer, AI Innovator, and Artist"
                className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400";
                  setImageLoaded(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-400 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};