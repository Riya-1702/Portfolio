import React from 'react';
import { Heart, Lightbulb, Palette, BookOpen, Award, Code, Users, Briefcase, GraduationCap } from 'lucide-react';

const personalHighlights = [
  { icon: Heart, title: 'Impact Creator', desc: 'Making a positive difference through technology', color: 'from-pink-500 to-rose-500' },
  { icon: Lightbulb, title: 'Problem Solver', desc: 'Creating solutions that empower and inspire', color: 'from-yellow-500 to-orange-500' },
  { icon: Palette, title: 'Creative Soul', desc: 'Crafting resin art and handmade expressions', color: 'from-purple-500 to-pink-500' },
  { icon: BookOpen, title: 'Lifelong Learner', desc: 'Continuously exploring new technologies', color: 'from-blue-500 to-cyan-500' }
];

const achievements = [
  {
    icon: Award,
    title: 'Research Publications',
    description: 'Published papers in AI and machine learning journals',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'AI Innovation Projects',
    description: 'Built intelligent tutoring systems and automation tools',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Teaching 50+ underprivileged children through Zarurat',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Briefcase,
    title: 'Industry Experience',
    description: 'DevOps intern at Linux World Informatics',
    color: 'from-orange-500 to-red-500'
  }
];

const experiences = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE (AI) Student',
    organization: 'JECRC College, Jaipur',
    period: '2023 - Present',
    description: 'Specializing in Artificial Intelligence with focus on machine learning and neural networks',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Briefcase,
    title: 'DevOps Intern',
    organization: 'Linux World Informatics',
    period: '2025',
    description: 'Working with Docker, Jenkins, Kubernetes, and CI/CD pipeline implementation',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Users,
    title: 'Student Mentor',
    organization: 'Zarurat Initiative',
    period: '2023 - Present',
    description: 'Teaching technology and programming to underprivileged children',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: BookOpen,
    title: 'Research Contributor',
    organization: 'Academic Journals',
    period: '2024 - Present',
    description: 'Publishing research in AI/ML and contributing to academic knowledge',
    color: 'from-emerald-500 to-teal-500'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Enhanced Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bioluminescent Particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              boxShadow: '0 0 8px currentColor',
            }}
          />
        ))}
        
        {/* Nebula Waves */}
        <div className="absolute top-1/3 left-0 w-full h-24 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-6 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-32 bg-gradient-to-l from-transparent via-cyan-500/10 to-transparent transform -rotate-3 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            ✨ About Me
          </h2>
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-20 blur-xl rounded-lg"></div>
            <p className="relative text-2xl md:text-3xl text-cyan-200 font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Crafting AI Solutions with a Creative Soul
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main About Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left Side - About Text (2/3 width) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>
                
                <div className="relative z-10 text-cyan-100 leading-relaxed space-y-4">
                  <p className="text-lg">
                    I'm <span className="font-bold text-cyan-300">Riya Sharma</span>, a B.Tech CSE (AI) student at JECRC College, an aspiring innovator, and a passionate educator. I believe in the power of AI and knowledge-sharing to shape a smarter, more compassionate world.
                  </p>
                  
                  <p>
                    Currently interning at <span className="font-semibold text-cyan-300">Linux World Informatics Pvt. Ltd.</span>, exploring AI, ML, DevOps, and automation. From building AI tutors to streamlining workflows with Docker and Jenkins, my projects are driven by the desire to help others learn and grow.
                  </p>
                  
                  <p>
                    Beyond code, I'm a mentor at <span className="font-semibold text-cyan-300">Zarurat</span>, teaching underprivileged children. I'm also a published researcher and creative soul who finds joy in art, design, and crafting.
                  </p>
                  
                  <p className="font-semibold text-cyan-300">
                    In every project, I strive to be more than a developer — I aim to be a problem-solver, a guide, and a creator of positive impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Personal Highlights & Achievements Cards (1/3 width) */}
            <div className="space-y-6">
              {/* Personal Highlights Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-cyan-200 mb-4">Personal Highlights</h3>
                  <div className="space-y-3">
                    {personalHighlights.map((item, index) => (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-200 text-sm group-hover:text-cyan-100 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-xs text-cyan-300/70 group-hover:text-cyan-300 transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-cyan-200 mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-300">50+</div>
                      <div className="text-xs text-cyan-400">Students Taught</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-300">10+</div>
                      <div className="text-xs text-cyan-400">Projects Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-300">3+</div>
                      <div className="text-xs text-cyan-400">Research Papers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-300">2+</div>
                      <div className="text-xs text-cyan-400">Years Learning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-cyan-200 text-center mb-8">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${achievement.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-cyan-200 mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    
                    <p className="text-cyan-300/80 text-sm group-hover:text-cyan-300 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold text-cyan-200 text-center mb-8">Experience & Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${experience.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <experience.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-cyan-200 group-hover:text-cyan-100 transition-colors duration-300">
                          {experience.title}
                        </h4>
                        <p className="text-cyan-300 font-medium">
                          {experience.organization}
                        </p>
                        <p className="text-cyan-400/70 text-sm">
                          {experience.period}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-cyan-300/80 leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};