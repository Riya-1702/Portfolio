import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Brain, Terminal, GitBranch, Container, Cpu, Cloud, Book } from 'lucide-react';

const technologies = [
  { name: 'Python', icon: Code, color: 'from-blue-400 to-blue-600', position: { x: 20, y: 30 } },
  { name: 'AI/ML', icon: Brain, color: 'from-purple-400 to-purple-600', position: { x: 70, y: 20 } },
  { name: 'Docker', icon: Container, color: 'from-cyan-400 to-cyan-600', position: { x: 80, y: 60 } },
  { name: 'Jenkins', icon: GitBranch, color: 'from-orange-400 to-orange-600', position: { x: 30, y: 70 } },
  { name: 'Kubernetes', icon: Cloud, color: 'from-green-400 to-green-600', position: { x: 60, y: 80 } },
  { name: 'SQL', icon: Database, color: 'from-yellow-400 to-yellow-600', position: { x: 10, y: 60 } },
  { name: 'Linux', icon: Terminal, color: 'from-gray-400 to-gray-600', position: { x: 50, y: 10 } },
  { name: 'C/C++', icon: Cpu, color: 'from-red-400 to-red-600', position: { x: 85, y: 35 } },
];

const techCategories = [
  {
    title: 'Programming Languages',
    technologies: ['C', 'C++', 'Python'],
    color: 'from-blue-500 to-purple-500',
    icon: Code
  },
  {
    title: 'Database',
    technologies: ['SQL', 'MongoDB', 'PostgreSQL'],
    color: 'from-yellow-500 to-orange-500',
    icon: Database
  },
  {
    title: 'DevOps',
    technologies: ['Docker', 'Kubernetes', 'Jenkins'],
    color: 'from-cyan-500 to-blue-500',
    icon: Server
  },
  {
    title: 'AI/ML',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    color: 'from-purple-500 to-pink-500',
    icon: Brain
  }
];

export const TechnologySection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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
      </div>
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Technology Arsenal
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            Interactive exploration of my technical skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Tech Category Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-200 mb-6">Tech Categories</h3>
            {techCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-cyan-200 group-hover:text-cyan-100 transition-colors duration-300">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30 group-hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Interactive Floating Tech Spheres */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-cyan-200 mb-6 text-center">Interactive Tech Spheres</h3>
            <div
              ref={containerRef}
              className="relative h-96 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-cyan-500/30 overflow-hidden"
            >
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-cyan-500/20"></div>
                  ))}
                </div>
              </div>

              {/* Floating Tech Spheres */}
              {technologies.map((tech, index) => {
                const distance = Math.sqrt(
                  Math.pow(mousePosition.x - tech.position.x, 2) + 
                  Math.pow(mousePosition.y - tech.position.y, 2)
                );
                const influence = Math.max(0, 20 - distance);
                const offsetX = (mousePosition.x - tech.position.x) * influence * 0.1;
                const offsetY = (mousePosition.y - tech.position.y) * influence * 0.1;

                return (
                  <div
                    key={tech.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer group"
                    style={{
                      left: `${tech.position.x + offsetX}%`,
                      top: `${tech.position.y + offsetY}%`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    {/* Sphere */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center shadow-lg group-hover:scale-125 transition-all duration-300 border-2 border-cyan-400/30 group-hover:border-cyan-300/60`}>
                      <tech.icon className="w-8 h-8 text-white" />
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-30 blur-xl scale-150 transition-all duration-300`}></div>
                    </div>

                    {/* Popup Tooltip */}
                    {hoveredTech === tech.name && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-cyan-200 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-cyan-500/30 animate-in slide-in-from-top-2">
                        {tech.name}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-slate-800/90"></div>
                      </div>
                    )}

                    {/* Orbital Ring */}
                    <div className="absolute inset-0 rounded-full border border-cyan-400/20 scale-150 opacity-0 group-hover:opacity-100 animate-spin transition-all duration-300" style={{ animationDuration: '3s' }}></div>
                  </div>
                );
              })}

              {/* Mouse Cursor Effect */}
              <div
                className="absolute w-4 h-4 bg-cyan-400/50 rounded-full pointer-events-none transition-all duration-100"
                style={{
                  left: `${mousePosition.x}%`,
                  top: `${mousePosition.y}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 20px rgba(103, 232, 249, 0.5)',
                }}
              />
            </div>

            {/* Instructions */}
            <div className="mt-6 text-center">
              <p className="text-cyan-300/70 text-sm">
                Move your cursor over the sphere area to interact with the floating tech spheres
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};