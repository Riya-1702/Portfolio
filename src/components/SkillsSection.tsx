import React from 'react';
import { Code, Database, Server, Brain, Terminal, GitBranch, Container, Cpu, Cloud, Book } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code, level: 90, color: 'from-blue-400 to-blue-600' },
  { name: 'AI/ML', icon: Brain, level: 85, color: 'from-purple-400 to-purple-600' },
  { name: 'Docker', icon: Container, level: 80, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Jenkins', icon: GitBranch, level: 75, color: 'from-orange-400 to-orange-600' },
  { name: 'Kubernetes', icon: Cloud, level: 70, color: 'from-green-400 to-green-600' },
  { name: 'SQL', icon: Database, level: 85, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Linux', icon: Terminal, level: 80, color: 'from-gray-400 to-gray-600' },
  { name: 'C/C++', icon: Cpu, level: 75, color: 'from-red-400 to-red-600' },
  { name: 'DevOps', icon: Server, level: 78, color: 'from-indigo-400 to-indigo-600' },
  { name: 'Research', icon: Book, level: 82, color: 'from-teal-400 to-teal-600' },
];

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Cosmic Ocean Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              boxShadow: '0 0 6px currentColor',
            }}
          />
        ))}
        
        {/* Nebula Waves */}
        <div className="absolute top-1/4 left-0 w-full h-20 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-3 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-24 bg-gradient-to-l from-transparent via-cyan-500/10 to-transparent transform -rotate-2 animate-pulse delay-1000"></div>
      </div>
      
      {/* Glowing Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            Passionate about technology and continuously learning new tools and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circular Progress Ring */}
              <div className="relative w-24 h-24 mb-4">
                {/* Background Circle */}
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-slate-700"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={`url(#gradient-${skill.name})`}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2.51 * skill.level} 251.2`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out group-hover:animate-pulse"
                    style={{
                      filter: 'drop-shadow(0 0 8px currentColor)',
                    }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color} text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Glowing Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-150`}></div>
              </div>
              
              {/* Skill Name */}
              <h3 className="text-lg font-bold text-cyan-200 text-center group-hover:text-cyan-100 transition-colors duration-300">
                {skill.name}
              </h3>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-sm transition-all duration-500 scale-110`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};