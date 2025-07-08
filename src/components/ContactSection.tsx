import React from 'react';
import { Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';

const contacts = [
  {
    name: 'GitHub',
    icon: Github,
    color: 'hover:bg-gray-800 hover:text-white hover:shadow-gray-500/50',
    borderColor: 'hover:border-gray-500',
    url: 'https://github.com/Riya-1702',
    username: '@Riya-1702',
    bgGradient: 'from-gray-600 to-gray-800'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'hover:bg-blue-600 hover:text-white hover:shadow-blue-500/50',
    borderColor: 'hover:border-blue-500',
    url: 'https://www.linkedin.com/in/riya-sharma-638a6b217',
    username: 'Riya Sharma',
    bgGradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:shadow-pink-500/50',
    borderColor: 'hover:border-pink-500',
    url: 'https://instagram.com/_itzzz_riya_17',
    username: '@_itzzz_riya_17',
    bgGradient: 'from-pink-500 to-purple-600'
  },
  {
    name: 'Email',
    icon: Mail,
    color: 'hover:bg-red-500 hover:text-white hover:shadow-red-500/50',
    borderColor: 'hover:border-red-500',
    url: 'mailto:riyasharmaabcd334@gmail.com',
    username: 'riyasharmaabcd334@gmail.com',
    bgGradient: 'from-red-500 to-red-700'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    color: 'hover:bg-green-500 hover:text-white hover:shadow-green-500/50',
    borderColor: 'hover:border-green-500',
    url: 'https://wa.me/9782981204',
    username: '+91 9782981204',
    bgGradient: 'from-green-500 to-green-700'
  }
];

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-amber-300/20 to-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-amber-600 max-w-2xl mx-auto font-medium">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circular Container */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                {/* Glowing Ring */}
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.bgGradient} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-110 group-hover:scale-125`}></div>
                
                {/* Main Circle */}
                <div className={`relative w-full h-full bg-stone-100 border-2 border-stone-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${contact.color} ${contact.borderColor}`}>
                  {/* Icon */}
                  <contact.icon className="w-8 h-8 text-stone-600 group-hover:text-current transition-colors duration-300" />
                  
                  {/* Pop-up Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.bgGradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100`}></div>
                  
                  {/* Icon on hover */}
                  <contact.icon className="absolute w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                </div>
                
                {/* Outer Glow Ring */}
                <div className={`absolute inset-0 border-2 border-transparent rounded-full transition-all duration-500 group-hover:border-current group-hover:scale-125 ${contact.borderColor}`}></div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {contact.name}
                </h3>
                <p className="text-stone-600 group-hover:text-stone-800 transition-colors duration-300 text-sm">
                  {contact.username}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.bgGradient} opacity-0 group-hover:opacity-5 rounded-2xl blur-sm transition-all duration-500 scale-110`}></div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-stone-50 rounded-2xl p-8 max-w-2xl mx-auto border border-amber-200 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-amber-700 mb-6">
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:riyasharmaabcd334@gmail.com"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 hover-target font-semibold"
                >
                  Send Me an Email
                </a>
                <a
                  href="https://wa.me/9782981204"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover-target font-semibold hover:shadow-lg hover:shadow-amber-500/30"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};