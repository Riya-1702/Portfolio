import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const education = [
  {
    id: 1,
    title: 'B.Tech in Computer Science & Engineering (AI)',
    institution: 'JECRC College, Jaipur',
    period: '2023 - Present',
    description: 'Specializing in Artificial Intelligence with focus on machine learning, deep learning, and neural networks.',
    icon: GraduationCap,
    color: 'from-blue-500 to-purple-500',
    status: 'current'
  },
  {
    id: 2,
    title: 'Linux World Informatics Internship',
    institution: 'Linux World Informatics Pvt. Ltd.',
    period: '2025',
    description: 'Hands-on experience in DevOps tools including Docker, Jenkins, and Kubernetes. Worked on real-world projects.',
    icon: Award,
    color: 'from-green-500 to-teal-500',
    status: 'ongoing'
  },
  {
    id: 3,
    title: 'Research Publications',
    institution: 'Academic Journals',
    period: '2024 - Present',
    description: 'Published research papers in AI and machine learning, contributing to academic knowledge in the field.',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    status: 'ongoing'
  },
  {
    id: 4,
    title: 'Student Teacher - Zarurat Club',
    institution: 'Community Service',
    period: '2023 - Present',
    description: 'Teaching and mentoring students in technology and programming, making education accessible to all.',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    status: 'ongoing'
  }
];

export const EducationSection: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            Education & Experience
          </h2>
          <p className="text-lg text-amber-300 max-w-2xl mx-auto">
            My academic journey and professional experiences that shaped my expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line with glow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-500/50"></div>

            {education.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot with glow */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-4 border-black z-10 shadow-lg shadow-amber-500/50"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-stone-900 rounded-xl p-6 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer hover-target group border border-amber-500/30 hover:border-amber-400/50 relative overflow-hidden">
                    {/* Glowing Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                    
                    {/* Status indicator */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === 'current' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : item.status === 'completed'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}>
                        {item.status === 'current' ? 'Current' : item.status === 'completed' ? 'Completed' : 'Ongoing'}
                      </div>
                      <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-amber-100 mb-2 group-hover:text-amber-200 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-amber-300 font-medium mb-2">
                        {item.institution}
                      </p>
                      
                      <p className="text-amber-400/70 text-sm mb-4">
                        {item.period}
                      </p>
                      
                      <p className="text-amber-200/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Outer glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-500 scale-110`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
