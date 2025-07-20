import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { CosmicBackground } from './CosmicBackground';

const projects = [
  {
    id: 1,
    title: 'AI Tutor Assistant',
    description: 'Interactive learning platform built with Streamlit and Gemini AI for personalized education. Features adaptive learning paths and real-time feedback.',
    tags: ['#AI', '#Streamlit', '#Python', '#Gemini'],
    github: 'https://github.com/Riya-1702/Gen-AI-.git',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Docker Menu CLI',
    description: 'Command-line interface for Docker management with automated container orchestration and deployment workflows.',
    tags: ['#Docker', '#CLI', '#DevOps', '#Python'],
    github: 'https://github.com/Riya-1702/Docker.git',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'CI/CD Pipeline',
    description: 'Automated deployment pipeline using Jenkins, Docker, and Kubernetes for seamless DevOps integration.',
    tags: ['#Jenkins', '#Kubernetes', '#DevOps', '#Docker'],
    github: 'https://github.com/Riya-1702/CI-CD-pipeline.git',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Linux Command Automation',
    description: 'Python-based automation tool for Linux system administration and task scheduling with intelligent monitoring.',
    tags: ['#Linux', '#Python', '#Automation', '#CLI'],
    github: 'https://github.com/Riya-1702/Linux.git',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Multi-Function Javascript App',
    description: 'Comprehensive web app with photo/video capture, messaging, and GPS location features built with modern web technologies.',
    tags: ['#Streamlit', '#WebApp', '#GPS', '#Media'],
    github: 'https://github.com/Riya-1702/Javascrpit.git',
    color: 'from-teal-500 to-blue-500'
  },
  {
    id: 6,
    title: 'Multi-Function Python App',
    description: 'Feature-rich Python application with email integration, media processing, and automated workflow capabilities.',
    tags: ['#Python', '#WebApp', '#Email', '#Automation'],
    github: 'https://github.com/Riya-1702/python.git',
    color: 'from-indigo-500 to-purple-500'
  }
];

export const ProjectsSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setIsAutoPlaying(false);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIsAutoPlaying(false);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentProject(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-indigo-950/90 to-purple-950/85"></div>
      </div>
      
      {/* 3D Cosmic Animation */}
      <CosmicBackground intensity="high" className="opacity-70" />
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            My Creations in the Digital Depths
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto">
            A showcase of my technical projects and innovations in AI, DevOps, and software development
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative max-w-6xl mx-auto perspective-1000">
          <div className="relative h-[500px] flex items-center justify-center">
            {projects.map((project, index) => {
              const offset = index - currentProject;
              const absOffset = Math.abs(offset);
              const isActive = absOffset === 0;
              
              return (
                <div
                  key={project.id}
                  className={`absolute transition-all duration-700 ease-in-out cursor-pointer hover-target ${
                    isActive 
                      ? 'z-30 scale-100 opacity-100' 
                      : absOffset === 1 
                      ? 'z-20 scale-75 opacity-50 blur-sm' 
                      : 'z-10 scale-50 opacity-30 blur-md'
                  }`}
                  style={{
                    transform: `
                      translateX(${offset * 280}px) 
                      translateZ(${isActive ? 0 : -200}px)
                      rotateY(${offset * 25}deg)
                    `,
                  }}
                  onClick={() => goToProject(index)}
                >
                  <div className={`w-72 h-[450px] rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-cyan-400/50' 
                      : 'bg-slate-800 border-cyan-500/30'
                  }`}>
                    {/* Project Header with Gradient */}
                    <div className={`relative h-32 bg-gradient-to-r ${project.color} ${isActive ? 'opacity-80' : 'opacity-60'}`}>
                      <div className="absolute inset-0 bg-black/30"></div>
                      
                      {/* Glow Effect for Active Card */}
                      {isActive && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 blur-xl animate-pulse`}></div>
                      )}
                      
                      {/* Project Icon/Symbol */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="text-2xl font-bold text-white">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6 flex flex-col justify-between h-[calc(100%-8rem)] text-cyan-100">
                      <div>
                        <h3 className={`text-xl font-bold mb-3 ${isActive ? 'text-cyan-200' : 'text-cyan-300/70'}`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm mb-4 line-clamp-4 ${isActive ? 'text-cyan-300/80' : 'text-cyan-300/50'}`}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 4).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-2 py-1 rounded-full text-xs border ${
                                isActive 
                                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' 
                                  : 'bg-cyan-500/10 text-cyan-300/60 border-cyan-500/20'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {isActive && (
                        <div className="flex gap-3 mt-4">
                          <a
                            href={project.github}
                            className="flex items-center gap-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 px-3 py-2 rounded-lg transition-all duration-300 text-sm border border-cyan-500/30 hover:border-cyan-400/50 flex-1 justify-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Code</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 p-3 rounded-full transition-all duration-300 hover:scale-110 hover-target border border-cyan-500/30 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 p-3 rounded-full transition-all duration-300 hover:scale-110 hover-target border border-cyan-500/30 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-target ${
                  index === currentProject
                    ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50'
                    : 'bg-cyan-500/30 hover:bg-cyan-500/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 hover-target font-semibold">
            Explore More Projects
          </button>
        </div>
      </div>
    </section>
  );
};