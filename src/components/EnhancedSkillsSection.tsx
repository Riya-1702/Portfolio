import React, { useState, useRef, useEffect } from 'react';
import { Code, Database, Server, Brain, Terminal, GitBranch, Container, Cpu, Cloud, Book } from 'lucide-react';
import { CosmicBackground } from './CosmicBackground';

const skillCategories = [
  {
    id: 1,
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'C', 'C++', 'JavaScript'],
    color: 'from-blue-500 to-purple-500',
    description: 'Core programming languages for software development and automation'
  },
  {
    id: 2,
    title: 'DevOps & Cloud',
    icon: Server,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
    color: 'from-cyan-500 to-blue-500',
    description: 'Container orchestration, automation, and deployment pipelines'
  },
  {
    id: 3,
    title: 'Database Systems',
    icon: Database,
    skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Redis'],
    color: 'from-yellow-500 to-orange-500',
    description: 'Relational and NoSQL database management and optimization'
  },
  {
    id: 4,
    title: 'Artificial Intelligence',
    icon: Brain,
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch'],
    color: 'from-purple-500 to-pink-500',
    description: 'AI/ML frameworks and neural network architectures'
  },
  {
    id: 5,
    title: 'System Administration',
    icon: Terminal,
    skills: ['Linux', 'Bash Scripting', 'System Monitoring', 'Automation'],
    color: 'from-green-500 to-emerald-500',
    description: 'Linux system administration and automation scripting'
  }
];

export const EnhancedSkillsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-card-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/90 via-indigo-950/95 to-slate-900/90"></div>
      </div>
      
      {/* 3D Cosmic Animation */}
      <CosmicBackground intensity="medium" className="opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Skills Floating in the Cosmic Depths
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            Interactive 3D skill cards that rise from the ocean depths
          </p>
        </div>

        {/* 3D Stacked Cards */}
        <div className="max-w-4xl mx-auto relative perspective-1000">
          <div className="relative">
            {skillCategories.map((category, index) => {
              const isVisible = visibleCards.has(index);
              const isHovered = hoveredCard === index;
              const zIndex = skillCategories.length - index;
              
              return (
                <div
                  key={category.id}
                  data-card-index={index}
                  className={`relative mb-8 transition-all duration-700 ease-out transform-style-preserve-3d ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  } ${
                    isHovered ? 'scale-105 -translate-y-4' : ''
                  }`}
                  style={{
                    zIndex,
                    animationDelay: `${index * 0.2}s`,
                    transform: `
                      ${isVisible ? 'translateY(0)' : 'translateY(80px)'} 
                      ${isHovered ? 'translateY(-16px) scale(1.02) rotateX(5deg)' : ''}
                      translateZ(${isHovered ? '20px' : '0px'})
                    `,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-slate-800/60 backdrop-blur-md rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden relative group cursor-pointer ${
                    isHovered ? 'shadow-2xl shadow-cyan-500/20' : 'shadow-lg'
                  }`}>
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 bg-cyan-300 rounded-full transition-all duration-500 ${
                            isHovered ? 'animate-pulse opacity-60' : 'opacity-20'
                          }`}
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                          }}
                        />
                      ))}
                    </div>

                    <div className="relative z-10 p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Side - Icon and Title */}
                        <div className="text-center lg:text-left">
                          <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}>
                            <category.icon className="w-12 h-12" />
                            
                            {/* Icon Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-40 rounded-full blur-xl transition-all duration-500 scale-150`}></div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-cyan-200 mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                            {category.title}
                          </h3>
                          
                          <p className="text-cyan-300/80 leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
                            {category.description}
                          </p>
                        </div>

                        {/* Right Side - Skills */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-cyan-200 mb-4">Technologies:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {category.skills.map((skill, skillIndex) => (
                              <div
                                key={skill}
                                className={`bg-slate-700/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 group-hover:bg-slate-700/70 ${
                                  isHovered ? 'transform translate-y-0' : ''
                                }`}
                                style={{
                                  animationDelay: `${skillIndex * 0.1}s`,
                                }}
                              >
                                <span className="text-cyan-200 font-medium text-sm group-hover:text-cyan-100 transition-colors duration-300">
                                  {skill}
                                </span>
                                
                                {/* Skill Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 hover:opacity-5 rounded-lg transition-all duration-300`}></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Outer Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500 scale-110`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-cyan-500/30 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                Continuously Evolving Skills
              </h3>
              <p className="text-cyan-300 mb-6">
                I'm passionate about learning new technologies and staying updated with the latest industry trends and best practices.
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 hover-target font-semibold">
                Explore My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};