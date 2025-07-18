import React from 'react';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';

const researchPapers = [
  {
    id: 1,
    title: 'Deep Learning',
    description: 'Advanced research in neural networks and deep learning architectures for computer vision and natural language processing applications.',
    category: 'Artificial Intelligence',
    status: 'Published',
    year: '2024',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Chatbot Development',
    description: 'Innovative approaches to conversational AI and natural language understanding for intelligent chatbot systems.',
    category: 'Natural Language Processing',
    status: 'In Review',
    year: '2024',
    color: 'from-blue-500 to-cyan-500'
  }
];

export const ResearchSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bioluminescent Particles */}
        {[...Array(35)].map((_, i) => (
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
        <div className="absolute top-1/3 left-0 w-full h-20 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-2 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-24 bg-gradient-to-l from-transparent via-cyan-500/10 to-transparent transform -rotate-1 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Research Contributions
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            Contributing to the advancement of AI and machine learning through academic research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {researchPapers.map((paper, index) => (
            <div
              key={paper.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${paper.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${paper.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <BookOpen className="w-8 h-8" />
                  </div>
                  
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      paper.status === 'Published' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {paper.status}
                    </span>
                    <div className="text-cyan-400/70 text-sm mt-1">{paper.year}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-cyan-200 mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                    {paper.title}
                  </h3>
                  
                  <p className="text-cyan-300 font-medium mb-2 text-sm">
                    {paper.category}
                  </p>
                  
                  <p className="text-cyan-300/80 leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
                    {paper.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 font-semibold">
                    <FileText className="w-5 h-5" />
                    <span>Explore</span>
                  </button>
                </div>
              </div>

              {/* Outer Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${paper.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500 scale-110`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-cyan-500/30 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                Advancing AI Research
              </h3>
              <p className="text-cyan-300 mb-6">
                I'm passionate about contributing to the AI research community and exploring new frontiers in machine learning and artificial intelligence.
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 hover-target font-semibold">
                View All Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};