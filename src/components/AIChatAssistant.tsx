import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const portfolioData = {
  education: "I'm currently pursuing B.Tech in Computer Science & Engineering (AI) at JECRC College, Jaipur (2023-Present). I'm specializing in Artificial Intelligence with focus on machine learning, deep learning, and neural networks.",
  
  experience: "I'm currently a DevOps intern at Linux World Informatics Pvt. Ltd. (2025), working with Docker, Jenkins, Kubernetes, and CI/CD pipelines. I'm also a Student Teacher at Zarurat Club, teaching 50+ underprivileged children technology and programming.",
  
  skills: "My technical skills include: Programming Languages (Python, C, C++), AI/ML (TensorFlow, PyTorch, Scikit-learn), DevOps (Docker, Kubernetes, Jenkins), Database (SQL, MongoDB), and Linux system administration. I'm passionate about automation and intelligent systems.",
  
  projects: "I've built several projects including an AI Tutor Assistant with Streamlit and Gemini AI, Docker Menu CLI for container management, CI/CD Pipeline automation, Linux Command Automation tools, and Multi-Function web applications with various integrations.",
  
  contact: "You can reach me at riyasharmaabcd334@gmail.com, connect on LinkedIn (linkedin.com/in/riya-sharma-638a6b217), GitHub (github.com/Riya-1702), Instagram (@_itzzz_riya_17), or WhatsApp (+91 9782981204). I'm based in Jaipur, Rajasthan, India.",
  
  research: "I'm actively involved in research and have published papers in AI and machine learning. My research focuses on deep learning applications and chatbot development using natural language processing."
};

const getAIResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('education') || message.includes('study') || message.includes('college') || message.includes('degree')) {
    return portfolioData.education;
  }
  
  if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('intern')) {
    return portfolioData.experience;
  }
  
  if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('tech')) {
    return portfolioData.skills;
  }
  
  if (message.includes('project') || message.includes('build') || message.includes('develop') || message.includes('code')) {
    return portfolioData.projects;
  }
  
  if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')) {
    return portfolioData.contact;
  }
  
  if (message.includes('research') || message.includes('paper') || message.includes('publication')) {
    return portfolioData.research;
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! I'm Riya's AI assistant. I can help you learn about her education, work experience, skills, projects, research, and contact information. What would you like to know?";
  }
  
  if (message.includes('help')) {
    return "I can answer questions about Riya's:\n• Education & Academic Background\n• Work Experience & Internships\n• Technical Skills & Technologies\n• Projects & Developments\n• Research & Publications\n• Contact Information\n\nJust ask me anything!";
  }
  
  return "I'd be happy to help! You can ask me about Riya's education, work experience, skills, projects, research, or contact information. What specific area interests you?";
};

export const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Riya's AI assistant. Ask me about her education, skills, projects, or anything else!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cosmic-pulse"
        >
          {/* Cosmic Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 hover:opacity-30 blur-xl animate-pulse"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-60"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          
          {isOpen ? (
            <X className="w-6 h-6 text-white relative z-10" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white relative z-10" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-96 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-cyan-500/30 shadow-2xl z-40 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Header */}
          <div className="relative z-10 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-4 border-b border-cyan-500/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-cyan-200 font-semibold">Riya's AI Assistant</h3>
                <p className="text-cyan-400/70 text-xs">Ask me anything!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="relative z-10 h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-slate-800/50 text-cyan-200 border border-cyan-500/30'
                }`}>
                  <div className="flex items-start gap-2">
                    {!message.isUser && (
                      <Bot className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    )}
                    {message.isUser && (
                      <User className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 text-cyan-200 border border-cyan-500/30 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="relative z-10 p-4 border-t border-cyan-500/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about education, skills, projects..."
                className="flex-1 bg-slate-800/50 border border-cyan-500/30 rounded-lg px-3 py-2 text-cyan-200 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400/50 text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all duration-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};