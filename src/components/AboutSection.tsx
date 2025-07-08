import React from 'react';
import { Heart, BookOpen, Users, Lightbulb, Code, Palette } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'AI Innovator',
    description: 'Building intelligent systems that solve real-world problems',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Educator',
    description: 'Teaching underprivileged children through Zarurat initiative',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: BookOpen,
    title: 'Researcher',
    description: 'Published research papers in AI and machine learning',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Palette,
    title: 'Creative Soul',
    description: 'Crafting resin art and handmade expressions',
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Creating solutions that empower and inspire',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Heart,
    title: 'Impact Creator',
    description: 'Striving to make a positive difference in the world',
    color: 'from-red-500 to-pink-500'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-r from-amber-300/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-r from-purple-300/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            ✨ About Me
          </h2>
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 opacity-20 blur-xl rounded-lg"></div>
            <p className="relative text-2xl md:text-3xl text-amber-600 font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Crafting AI Solutions with a Creative Soul
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main About Text */}
          <div className="bg-stone-50 rounded-2xl p-8 mb-12 border border-amber-200 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-2xl"></div>
            
            <div className="relative z-10 text-stone-700 leading-relaxed space-y-4">
              <p className="text-lg">
                I'm <span className="font-bold text-amber-700">Riya Sharma</span>, a B.Tech CSE (AI) student at JECRC College, an aspiring innovator, and a passionate educator. I believe in the power of AI and knowledge-sharing to shape a smarter, more compassionate world. My work blends cutting-edge tech with a heart for teaching — because to me, <span className="italic font-semibold text-amber-600">"knowledge shared is power multiplied."</span>
              </p>
              
              <p>
                I'm currently interning at <span className="font-semibold text-amber-700">Linux World Informatics Pvt. Ltd.</span>, exploring the depth of AI, ML, DevOps, and automation. From building AI tutors to streamlining workflows with Docker and Jenkins, my projects are driven by the desire to help others learn, adapt, and grow through intelligent systems.
              </p>
              
              <p>
                Beyond the code, I'm a mentor at <span className="font-semibold text-amber-700">Zarurat</span>, a student-led social initiative where I teach underprivileged children — bringing the beauty of education to those who need it most. I'm also a published researcher and a creative soul who finds joy in art, design, and crafting — especially resin art and handmade expressions.
              </p>
              
              <p>
                I dream of launching solutions that empower students, simplify lives, and inspire curiosity. Whether it's deploying a cloud-based app or crafting a piece of handmade resin, I pour purpose and passion into every creation.
              </p>
              
              <p className="font-semibold text-amber-700">
                In every project, I strive to be more than a developer — I aim to be a problem-solver, a guide, and a creator of positive impact.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="group relative bg-stone-100 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-stone-200 hover:border-amber-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glowing Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${highlight.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-stone-600 group-hover:text-stone-700 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>

                {/* Outer glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-500 scale-110`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};