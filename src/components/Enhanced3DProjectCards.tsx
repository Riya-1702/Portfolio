import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, Code, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const projects = [
  {
    id: 1,
    title: 'AI Tutor Assistant',
    description: 'Interactive learning platform built with Streamlit and Gemini AI for personalized education.',
    fullDescription: 'Advanced AI-powered tutoring system that adapts to individual learning styles, provides real-time feedback, and creates personalized learning paths. Built with cutting-edge machine learning algorithms.',
    tags: ['AI', 'Streamlit', 'Python', 'Gemini'],
    github: 'https://github.com/Riya-1702/Gen-AI-.git',
    color: 'from-purple-500 to-pink-500',
    icon: Code,
    stats: { lines: '2.5K', commits: '45', stars: '12' }
  },
  {
    id: 2,
    title: 'Docker Menu CLI',
    description: 'Command-line interface for Docker management with automated container orchestration.',
    fullDescription: 'Comprehensive Docker management tool with intuitive CLI interface, automated deployment workflows, and advanced container orchestration capabilities for DevOps teams.',
    tags: ['Docker', 'CLI', 'DevOps', 'Python'],
    github: 'https://github.com/Riya-1702/Docker.git',
    color: 'from-blue-500 to-cyan-500',
    icon: Zap,
    stats: { lines: '1.8K', commits: '32', stars: '8' }
  },
  {
    id: 3,
    title: 'CI/CD Pipeline',
    description: 'Automated deployment pipeline using Jenkins, Docker, and Kubernetes.',
    fullDescription: 'Enterprise-grade CI/CD pipeline with automated testing, deployment, and monitoring. Integrates seamlessly with cloud platforms and provides detailed analytics.',
    tags: ['Jenkins', 'Kubernetes', 'DevOps', 'Docker'],
    github: 'https://github.com/Riya-1702/CI-CD-pipeline.git',
    color: 'from-green-500 to-emerald-500',
    icon: Eye,
    stats: { lines: '3.2K', commits: '67', stars: '15' }
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isHovered, onHover }) => {
  const { theme } = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-80 h-96 perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={() => onHover(null)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        whileHover={{ 
          scale: 1.05,
          rotateX: 5,
          rotateY: isFlipped ? 180 : 5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden ${
          theme === 'dark'
            ? 'bg-glass-bg backdrop-blur-md border border-glass-border'
            : 'bg-glass-bg-light backdrop-blur-md border border-glass-border-light'
        } shadow-2xl`}>
          {/* Header with Gradient */}
          <div className={`relative h-32 bg-gradient-to-r ${project.color} opacity-80`}>
            <div className="absolute inset-0 bg-black/20" />
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <project.icon className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/40 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 flex flex-col justify-between h-[calc(100%-8rem)]">
            <div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-off-white' : 'text-gray-800'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-4 line-clamp-3 ${
                theme === 'dark' ? 'text-muted-text' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className={`px-2 py-1 rounded-full text-xs border ${
                      theme === 'dark'
                        ? 'bg-electric-purple/20 text-electric-purple border-electric-purple/30'
                        : 'bg-professional-blue/20 text-professional-blue border-professional-blue/30'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <motion.a
                href={project.github}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm border flex-1 justify-center ${
                  theme === 'dark'
                    ? 'bg-electric-purple/20 hover:bg-electric-purple/30 text-electric-purple border-electric-purple/30'
                    : 'bg-professional-blue/20 hover:bg-professional-blue/30 text-professional-blue border-professional-blue/30'
                }`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </motion.a>
              <motion.button
                className={`p-2 rounded-lg transition-all duration-300 border ${
                  theme === 'dark'
                    ? 'bg-mint-green/20 hover:bg-mint-green/30 text-mint-green border-mint-green/30'
                    : 'bg-ocean-cyan/20 hover:bg-ocean-cyan/30 text-ocean-cyan border-ocean-cyan/30'
                }`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden rotate-y-180 ${
          theme === 'dark'
            ? 'bg-glass-bg backdrop-blur-md border border-glass-border'
            : 'bg-glass-bg-light backdrop-blur-md border border-glass-border-light'
        } shadow-2xl`}>
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-off-white' : 'text-gray-800'
              }`}>
                Project Details
              </h3>
              <p className={`text-sm mb-6 leading-relaxed ${
                theme === 'dark' ? 'text-muted-text' : 'text-gray-600'
              }`}>
                {project.fullDescription}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-electric-purple' : 'text-professional-blue'
                  }`}>
                    {project.stats.lines}
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-muted-text' : 'text-gray-500'
                  }`}>
                    Lines
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-mint-green' : 'text-ocean-cyan'
                  }`}>
                    {project.stats.commits}
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-muted-text' : 'text-gray-500'
                  }`}>
                    Commits
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-electric-purple' : 'text-professional-blue'
                  }`}>
                    {project.stats.stars}
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-muted-text' : 'text-gray-500'
                  }`}>
                    Stars
                  </div>
                </div>
              </div>
              
              {/* All Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 rounded-full text-xs border ${
                      theme === 'dark'
                        ? 'bg-electric-purple/20 text-electric-purple border-electric-purple/30'
                        : 'bg-professional-blue/20 text-professional-blue border-professional-blue/30'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <motion.button
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-electric-purple to-purple-600 text-white hover:shadow-lg hover:shadow-electric-purple/30'
                  : 'bg-gradient-to-r from-professional-blue to-blue-600 text-white hover:shadow-lg hover:shadow-professional-blue/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Live Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Enhanced3DProjectCards: React.FC = () => {
  const { theme } = useTheme();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-deep-indigo via-purple-950 to-indigo-950'
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-electric-purple/30' : 'bg-professional-blue/30'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-mint-green/30' : 'bg-ocean-cyan/30'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-off-white' : 'text-gray-800'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-muted-text' : 'text-gray-600'
          }`}>
            Interactive 3D project cards with flip animations and detailed insights
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={setHoveredProject}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 interactive ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-electric-purple to-purple-600 text-white hover:shadow-lg hover:shadow-electric-purple/30'
                : 'bg-gradient-to-r from-professional-blue to-blue-600 text-white hover:shadow-lg hover:shadow-professional-blue/30'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};