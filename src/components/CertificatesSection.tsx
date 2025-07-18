import React from 'react';
import { Award, Eye } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'AI/ML Fundamentals',
    issuer: 'Coursera',
    date: '2024',
    description: 'Comprehensive course covering machine learning algorithms, neural networks, and AI applications',
    category: 'AI/ML',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'DevOps Engineering',
    issuer: 'Linux World Informatics',
    date: '2024',
    description: 'Hands-on training in Docker, Jenkins, Kubernetes, and CI/CD pipeline implementation',
    category: 'DevOps',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Python Programming',
    issuer: 'Udemy',
    date: '2023',
    description: 'Advanced Python programming with focus on automation, web development, and data science',
    category: 'Programming',
    color: 'from-green-500 to-emerald-500',
  }
];

export const CertificatesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Cosmic Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bioluminescent Particles */}
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
        
        {/* Nebula Waves */}
        <div className="absolute top-1/3 left-0 w-full h-20 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-2 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-24 bg-gradient-to-l from-transparent via-cyan-500/10 to-transparent transform -rotate-1 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${certificate.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Award className="w-6 h-6" />
                  </div>
                  
                  {/* Category Badge */}
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${certificate.color} shadow-lg`}>
                    {certificate.category}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-cyan-200 mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-cyan-300">
                      {certificate.issuer}
                    </span>
                    <span className="text-cyan-400/50">•</span>
                    <span className="text-sm text-cyan-400/70">
                      {certificate.date}
                    </span>
                  </div>
                  
                  <p className="text-cyan-300/80 text-sm leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
                    {certificate.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold hover:scale-105">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </div>
              </div>

              {/* Outer Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-0 group-hover:opacity-5 rounded-2xl blur-sm transition-all duration-500 scale-110`}></div>
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
                Continuously Learning & Growing
              </h3>
              <p className="text-cyan-300 mb-6">
                I believe in lifelong learning and regularly pursue new certifications to stay updated with the latest technologies and industry best practices.
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 hover-target font-semibold">
                View All Certificates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};