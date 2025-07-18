import React, { useState } from 'react';
import { Home, User, Mail, Download, FolderOpen, BookOpen, Menu, X } from 'lucide-react';

const menuItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'research', label: 'Research', icon: BookOpen },
];

export const RightSideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const downloadResume = () => {
    // Add your resume download logic here
    console.log('Downloading resume...');
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 p-3 rounded-full hover:bg-cyan-600/20 transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Right Side Menu */}
      <div className={`fixed right-0 top-0 h-full z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
      }`}>
        <div className="h-full w-20 bg-slate-900/80 backdrop-blur-md border-l border-cyan-500/30 flex flex-col items-center justify-center gap-6 shadow-2xl">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative p-4 rounded-xl bg-slate-800/50 hover:bg-cyan-600/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <item.icon className="w-6 h-6 text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300 relative z-10" />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm text-cyan-200 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-cyan-500/30">
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800/90"></div>
              </div>
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
            </button>
          ))}
          
          {/* Download Resume Button */}
          <div className="mt-8 pt-6 border-t border-cyan-500/30">
            <button
              onClick={downloadResume}
              className="group relative p-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-110 shadow-lg shadow-cyan-500/30"
            >
              <Download className="w-6 h-6 text-white relative z-10" />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm text-cyan-200 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-cyan-500/30">
                Download Resume
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800/90"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};