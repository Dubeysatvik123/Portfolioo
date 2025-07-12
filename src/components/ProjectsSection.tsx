import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Brain, Zap, Database, MessageCircle, Server, Star } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Deep Fake Detection',
      description: 'Advanced machine learning model for detecting deepfake videos and images using computer vision and neural networks.',
      role: 'ML Engineer',
      stack: ['Python', 'ML', 'Computer Vision'],
      icon: Code,
      gradient: 'from-blue-500 to-purple-600',
      github: 'https://github.com/Dubeysatvik123/Deep-Fake-detection',
      demo: '#',
      constellation: 'Orion',
    },
    {
      title: 'AI Quiz Generator',
      description: 'Intelligent quiz generation platform using LangChain and Groq LLM for dynamic question creation and assessment.',
      role: 'AI/ML Developer',
      stack: ['LangChain', 'Groq LLM', 'Python'],
      icon: Brain,
      gradient: 'from-green-500 to-blue-600',
      github: 'https://github.com/Dubeysatvik123/AL_quiz_Generator',
      demo: '#',
      constellation: 'Cassiopeia',
    },
    {
      title: 'Aira (Math/Coding Assistant)',
      description: 'Sophisticated LLM assistant powered by Google Gemma2 model for math problem solving and coding assistance.',
      role: 'AI Engineer',
      stack: ['Google Gemma2', 'Python'],
      icon: MessageCircle,
      gradient: 'from-purple-500 to-pink-600',
      github: 'https://github.com/Dubeysatvik123/aira',
      demo: '#',
      constellation: 'Andromeda',
    },
    {
      title: 'Docker Automation Tool',
      description: 'Comprehensive Docker CLI automation tool that simplifies container management and deployment processes.',
      role: 'DevOps Engineer',
      stack: ['Python', 'Bash', 'Docker'],
      icon: Zap,
      gradient: 'from-orange-500 to-red-600',
      github: 'https://github.com/Dubeysatvik123/docker_automation',
      demo: '#',
      constellation: 'Ursa Major',
    },
    {
      title: 'Skill Sadhana LMS',
      description: 'Learning Management System built with Frappe framework, featuring course management and student tracking.',
      role: 'Full Stack Developer',
      stack: ['Frappe', 'Python'],
      icon: Database,
      gradient: 'from-indigo-500 to-purple-600',
      github: 'https://github.com/Dubeysatvik123/Skill-sadhana',
      demo: '#',
      constellation: 'Pegasus',
    },
    {
      title: 'Nexus Voice Assistant',
      description: 'NLP-powered voice assistant with web scraping capabilities and intelligent response generation.',
      role: 'ML Engineer',
      stack: ['NLP', 'Web Scraping'],
      icon: MessageCircle,
      gradient: 'from-teal-500 to-blue-600',
      github: 'https://github.com/Dubeysatvik123/Nexus_The_Voice_Assistant',
      demo: '#',
      constellation: 'Cygnus',
    },
    {
      title: 'VProfile Project',
      description: 'Complete DevOps project showcasing CI/CD pipeline implementation and infrastructure automation.',
      role: 'DevOps Engineer',
      stack: ['DevOps'],
      icon: Server,
      gradient: 'from-green-500 to-teal-600',
      github: 'https://github.com/Dubeysatvik123/Vprofile_project',
      demo: '#',
      constellation: 'Leo',
    },
    {
      title: 'GenAI Experiments',
      description: 'Collection of generative AI experiments and implementations exploring cutting-edge AI technologies.',
      role: 'AI Researcher',
      stack: ['Generative AI'],
      icon: Brain,
      gradient: 'from-pink-500 to-red-600',
      github: 'https://github.com/Dubeysatvik123/Genai',
      demo: '#',
      constellation: 'Phoenix',
    },
    {
      title: 'AWS Automate',
      description: 'A Python Flask application to automate provisioning of AWS EC2 instances, enabling rapid cloud infrastructure setup with a simple web interface.',
      role: 'Cloud Automation Developer',
      stack: ['Python', 'Flask', 'AWS EC2', 'Boto3'],
      icon: Server,
      gradient: 'from-yellow-400 to-green-500',
      github: 'https://github.com/Dubeysatvik123/awsautomate.git',
      demo: '#',
      constellation: 'Centaurus',
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Constellation Background */}
      <div className="absolute inset-0">
        {/* Constellation Stars */}
        {typeof window !== 'undefined' && [...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              opacity: [0, 1, 0.3, 1, 0],
              scale: [1, 1.5, 1, 1.2, 1]
            }}
            transition={{ 
              duration: Math.random() * 4 + 3, 
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {typeof window !== 'undefined' && [...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * window.innerWidth}
              y1={Math.random() * window.innerHeight}
              x2={Math.random() * window.innerWidth}
              y2={Math.random() * window.innerHeight}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: Math.random() * 3 + 2, 
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Project Galaxy
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my constellation of projects spanning across the DevOps, AI/ML, and development universe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Cosmic Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-400/40 transition-all duration-500">
                {/* Constellation Badge */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${project.gradient} shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon size={24} className="text-white" />
                  </motion.div>
                  <div className="flex items-center gap-1 text-xs text-purple-400">
                    <Star size={12} />
                    <span>{project.constellation}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-xs text-cyan-400 font-medium mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    Role: {project.role}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-400/20 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors text-sm border border-gray-600/30 hover:border-gray-500/50"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 0 20px ${project.gradient.includes('blue') ? '#3b82f6' : '#8b5cf6'}`
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all text-sm`}
                  >
                    <ExternalLink size={16} />
                    Explore
                  </motion.a>
                </div>

                {/* Hover Effect Stars */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 10}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-8 bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Explore More Galaxies</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Want to see more of my cosmic creations? Visit my GitHub universe for the complete collection.
            </p>
            <motion.a
              href="https://github.com/Dubeysatvik123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg border border-blue-500/50 hover:border-blue-400 transition-all"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;