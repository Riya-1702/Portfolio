import React, { useState } from 'react';
import { Award, ExternalLink, Download, Eye } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'AI/ML Fundamentals',
    issuer: 'Coursera',
    date: '2024',
    description: 'Comprehensive course covering machine learning algorithms, neural networks, and AI applications',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'AI/ML',
    color: 'from-purple-500 to-pink-500',
    url: '#',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'DevOps Engineering',
    issuer: 'Linux World Informatics',
    date: '2024',
    description: 'Hands-on training in Docker, Jenkins, Kubernetes, and CI/CD pipeline implementation',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'DevOps',
    color: 'from-blue-500 to-cyan-500',
    url: '#',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'Python Programming',
    issuer: 'Udemy',
    date: '2023',
    description: 'Advanced Python programming with focus on automation, web development, and data science',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Programming',
    color: 'from-green-500 to-emerald-500',
    url: '#',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'Cloud Computing',
    issuer: 'AWS Academy',
    date: '2023',
    description: 'Cloud infrastructure management, serverless computing, and AWS services implementation',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cloud',
    color: 'from-orange-500 to-red-500',
    url: '#',
    downloadUrl: '#'
  },
  {
    id: 5,
    title: 'Data Science',
    issuer: 'DataCamp',
    date: '2023',
    description: 'Statistical analysis, data visualization, and predictive modeling techniques',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Data Science',
    color: 'from-teal-500 to-blue-500',
    url: '#',
    downloadUrl: '#'
  },
  {
    id: 6,
    title: 'Linux Administration',
    issuer: 'Red Hat',
    date: '2023',
    description: 'System administration, shell scripting, and Linux server management',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'System Admin',
    color: 'from-gray-500 to-slate-600',
    url: '#',
    downloadUrl: '#'
  }
];

export const CertificatesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(certificates.map(cert => cert.category)))];

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Cosmic Ocean Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
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
      
      {/* Glowing Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold hover-target ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/50 text-cyan-200 hover:bg-cyan-800/30 hover:text-cyan-100 border-2 border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCertificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(certificate.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 cursor-pointer">
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-60`}></div>
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with Certificate Icon */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Award className="w-8 h-8 text-cyan-600" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${certificate.color} shadow-lg`}>
                      {certificate.category}
                    </span>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
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
                  
                  <p className="text-cyan-300/80 text-sm mb-4 line-clamp-3">
                    {certificate.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 px-3 py-2 rounded-lg transition-all duration-300 text-sm border border-cyan-500/30 hover:border-cyan-400/50 hover-target">
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-3 py-2 rounded-lg transition-all duration-300 text-sm font-semibold hover-target">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-0 group-hover:opacity-5 rounded-2xl blur-sm transition-all duration-500 scale-110`}></div>
              </div>

              {/* Floating Elements Animation */}
              {hoveredCard === certificate.id && (
                <>
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${certificate.color} rounded-full animate-ping opacity-75`}></div>
                  <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${certificate.color} rounded-full animate-pulse`}></div>
                </>
              )}
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