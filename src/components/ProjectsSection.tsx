import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Tutor Assistant',
    description: 'Interactive learning platform built with Streamlit and Gemini AI for personalized education',
    tags: ['#AI', '#Streamlit', '#Python', '#Gemini'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com/Riya-1702',
    demo: 'https://ai-tutor-demo.streamlit.app',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Docker Menu CLI',
    description: 'Command-line interface for Docker management with automated container orchestration',
    tags: ['#Docker', '#CLI', '#DevOps', '#Python'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com/Riya-1702',
    demo: 'https://docker-cli-demo.herokuapp.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'CI/CD Pipeline',
    description: 'Automated deployment pipeline using Jenkins, Docker, and Kubernetes for seamless DevOps',
    tags: ['#Jenkins', '#Kubernetes', '#DevOps', '#Docker'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com/Riya-1702',
    demo: 'https://ci-cd-demo.example.com',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Linux Command Automation',
    description: 'Python-based automation tool for Linux system administration and task scheduling',
    tags: ['#Linux', '#Python', '#Automation', '#CLI'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com/Riya-1702',
    demo: 'https://linux-automation-demo.com',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Multi-Function Streamlit App',
    description: 'Comprehensive web app with photo/video capture, messaging, and GPS location features',
    tags: ['#Streamlit', '#WebApp', '#GPS', '#Media'],
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com/Riya-1702',
    demo: 'https://multi-app.streamlit.app',
    color: 'from-teal-500 to-blue-500'
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
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-amber-300 max-w-2xl mx-auto">
            A showcase of my technical projects and innovations in AI, DevOps, and software development
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative max-w-7xl mx-auto perspective-1000">
          <div className="relative h-[600px] flex items-center justify-center">
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
                      translateX(${offset * 300}px) 
                      translateZ(${isActive ? 0 : -200}px)
                      rotateY(${offset * 25}deg)
                    `,
                  }}
                  onClick={() => goToProject(index)}
                >
                  <div className={`w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-stone-800 to-stone-900 border-amber-400/50' 
                      : 'bg-stone-800 border-amber-500/30'
                  }`}>
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} ${isActive ? 'opacity-80' : 'opacity-60'}`}></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      
                      {/* Glow Effect for Active Card */}
                      {isActive && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 blur-xl animate-pulse`}></div>
                      )}
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6 text-amber-100">
                      <h3 className={`text-xl font-bold mb-3 ${isActive ? 'text-amber-200' : 'text-amber-300/70'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-4 line-clamp-3 ${isActive ? 'text-amber-300/80' : 'text-amber-300/50'}`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-1 rounded-full text-xs border ${
                              isActive 
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
                                : 'bg-amber-500/10 text-amber-300/60 border-amber-500/20'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {isActive && (
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            className="flex items-center gap-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 px-3 py-2 rounded-lg transition-all duration-300 text-sm border border-amber-500/30 hover:border-amber-400/50"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                          <a
                            href={project.demo}
                            className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-black px-3 py-2 rounded-lg transition-all duration-300 text-sm font-semibold"
                          >
                            <Play className="w-4 h-4" />
                            <span>Demo</span>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 p-3 rounded-full transition-all duration-300 hover:scale-110 hover-target border border-amber-500/30 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 p-3 rounded-full transition-all duration-300 hover:scale-110 hover-target border border-amber-500/30 backdrop-blur-sm"
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
                    ? 'bg-amber-500 scale-125 shadow-lg shadow-amber-500/50'
                    : 'bg-amber-500/30 hover:bg-amber-500/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};