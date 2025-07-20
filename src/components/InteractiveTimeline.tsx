import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Briefcase, Award, Users, BookOpen, Calendar } from 'lucide-react';
import { CosmicBackground } from './CosmicBackground';

const timelineData = {
  education: [
    {
      id: 1,
      title: 'B.Tech CSE (AI)',
      institution: 'JECRC College, Jaipur',
      period: '2023 - Present',
      description: 'Specializing in Artificial Intelligence with focus on machine learning and neural networks',
      icon: GraduationCap,
      status: 'current',
      year: 2023
    },
    {
      id: 2,
      title: 'Research Publications',
      institution: 'Academic Journals',
      period: '2024 - Present',
      description: 'Published research papers in AI and machine learning domains',
      icon: BookOpen,
      status: 'ongoing',
      year: 2024
    }
  ],
  experience: [
    {
      id: 3,
      title: 'DevOps Intern',
      institution: 'Linux World Informatics',
      period: '2025',
      description: 'Working with Docker, Jenkins, Kubernetes, and CI/CD pipeline implementation',
      icon: Briefcase,
      status: 'current',
      year: 2025
    },
    {
      id: 4,
      title: 'Student Teacher',
      institution: 'Zarurat Club',
      period: '2023 - Present',
      description: 'Teaching technology and programming to 50+ underprivileged children',
      icon: Users,
      status: 'ongoing',
      year: 2023
    }
  ]
};

export const InteractiveTimeline: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0');
            setVisibleItems(prev => new Set([...prev, itemId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-item-id]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const allItems = [...timelineData.education, ...timelineData.experience]
    .sort((a, b) => b.year - a.year);

  return (
    <section ref={timelineRef} className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-indigo-950/95 to-purple-950/90"></div>
      </div>
      
      {/* 3D Cosmic Animation */}
      <CosmicBackground intensity="low" className="opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Journey Through the Cosmic Timeline
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            My educational and professional milestones floating in the digital ocean
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50">
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full blur-sm opacity-50 animate-pulse"></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {allItems.map((item, index) => {
                const isEducation = timelineData.education.some(edu => edu.id === item.id);
                const isVisible = visibleItems.has(item.id);
                const isHovered = hoveredItem === item.id;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    data-item-id={item.id}
                    className={`relative flex items-center ${
                      isLeft ? 'justify-start' : 'justify-end'
                    } transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div className={`w-8 h-8 rounded-full border-4 border-slate-900 transition-all duration-300 ${
                        isHovered ? 'scale-125' : 'scale-100'
                      } ${
                        item.status === 'current' 
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-500/50'
                          : item.status === 'ongoing'
                          ? 'bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg shadow-purple-500/50'
                          : 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50'
                      }`}>
                        {/* Pulse Effect */}
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
                          item.status === 'current' 
                            ? 'bg-green-400'
                            : item.status === 'ongoing'
                            ? 'bg-purple-400'
                            : 'bg-cyan-400'
                        }`}></div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${
                      isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}>
                      <div className={`bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                        isHovered 
                          ? 'border-cyan-400/50 scale-105 shadow-2xl shadow-cyan-500/20' 
                          : 'border-cyan-500/30 shadow-lg'
                      }`}>
                        {/* Background Glow */}
                        <div className={`absolute inset-0 transition-all duration-500 ${
                          isEducation 
                            ? 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                            : 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5'
                        } ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                        {/* Floating Particles */}
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className={`absolute w-1 h-1 bg-cyan-300 rounded-full transition-all duration-500 ${
                                isHovered ? 'animate-pulse opacity-60' : 'opacity-20'
                              }`}
                              style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                animationDelay: `${Math.random() * 2}s`,
                              }}
                            />
                          ))}
                        </div>

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-full transition-transform duration-300 ${
                              isHovered ? 'scale-110' : 'scale-100'
                            } ${
                              isEducation 
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            } text-white shadow-lg`}>
                              <item.icon className="w-6 h-6" />
                            </div>
                            
                            <div className="text-right">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                item.status === 'current' 
                                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                  : item.status === 'ongoing'
                                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                  : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              }`}>
                                {item.status === 'current' ? 'Current' : item.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                              </span>
                              <div className="text-cyan-400/70 text-sm mt-1 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {item.period}
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div>
                            <h3 className="text-xl font-bold text-cyan-200 mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                              {item.title}
                            </h3>
                            
                            <p className="text-cyan-300 font-medium mb-3">
                              {item.institution}
                            </p>
                            
                            <p className="text-cyan-300/80 leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Side Indicator */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-2 h-8 rounded-full ${
                          isEducation 
                            ? 'bg-gradient-to-b from-blue-500 to-purple-500'
                            : 'bg-gradient-to-b from-cyan-500 to-blue-500'
                        } ${
                          isLeft ? '-right-1' : '-left-1'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-cyan-300 text-sm">Education</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                <span className="text-cyan-300 text-sm">Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 text-sm">Current</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};