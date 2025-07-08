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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-300/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-300/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-amber-600 max-w-2xl mx-auto font-medium">
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
                    className="text-stone-200"
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
                  <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Glowing Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-150`}></div>
              </div>
              
              {/* Skill Name */}
              <h3 className="text-lg font-bold text-stone-800 text-center group-hover:text-amber-600 transition-colors duration-300">
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