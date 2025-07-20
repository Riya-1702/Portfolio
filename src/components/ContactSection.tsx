import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { CosmicBackground } from './CosmicBackground';

const socialContacts = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/riya-sharma-638a6b217',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Riya-1702',
    color: 'from-gray-600 to-gray-800'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/_itzzz_riya_17',
    color: 'from-pink-500 to-purple-600'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/9782981204',
    color: 'from-green-500 to-green-700'
  }
];

export const ContactSection: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Cosmic Ocean Background Base */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-indigo-950/95 to-purple-950/90"></div>
      </div>
      
      {/* 3D Cosmic Animation */}
      <CosmicBackground intensity="medium" className="opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 mr-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Connect Across the Cosmic Ocean
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-medium">
            Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Social Media with 3D Flip Effect */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-200 mb-8 text-center">Social Media</h3>
            <div className="grid grid-cols-2 gap-6">
              {socialContacts.map((contact, index) => (
                <div
                  key={contact.name}
                  className="relative h-32 perspective-1000"
                  onMouseEnter={() => setFlippedCard(contact.name)}
                  onMouseLeave={() => setFlippedCard(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCard === contact.name ? 'rotate-y-180' : ''
                  }`}>
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className={`w-full h-full bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <a
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full h-full bg-gradient-to-r ${contact.color} rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-white p-4`}
                      >
                        <contact.icon className="w-6 h-6 mb-2" />
                        <span className="text-sm font-semibold text-center">{contact.name}</span>
                        <ExternalLink className="w-4 h-4 mt-1 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Get in Touch Card */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-200 mb-8 text-center">Get in Touch</h3>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"></div>
              
              <div className="relative z-10 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-200 mb-1">Address</h4>
                    <p className="text-cyan-300/80 text-sm">
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-200 mb-1">Email</h4>
                    <a 
                      href="mailto:riyasharmaabcd334@gmail.com"
                      className="text-cyan-300/80 text-sm hover:text-cyan-300 transition-colors duration-300"
                    >
                      riyasharmaabcd334@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-200 mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/Riya-1702"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300/80 text-sm hover:text-cyan-300 transition-colors duration-300"
                    >
                      github.com/Riya-1702
                    </a>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <a
                    href="mailto:riyasharmaabcd334@gmail.com"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 font-semibold text-center"
                  >
                    Send Email
                  </a>
                  <a
                    href="https://wa.me/9782981204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-semibold hover:shadow-lg hover:shadow-cyan-500/30 text-center"
                  >
                    WhatsApp Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-cyan-500/30 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-cyan-300 mb-6">
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 hover-target font-semibold">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};