import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Brain, Zap, Database, MessageCircle, Server, Star, Cpu, Cloud, Terminal, BookOpen, User, Image } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = useMemo(() => [
    {
      title: 'Deep-Fake Detection',
      description: 'Developed a facial manipulation detection system using ML techniques to identify deepfakes in media content.',
      role: 'AI Engineer',
      stack: ['Python', 'Machine Learning', 'Computer Vision'],
      icon: Brain,
      gradient: 'from-red-500 to-pink-600',
      github: 'https://github.com/Dubeysatvik123/Deep-Fake-detection',
      constellation: 'Cassiopeia',
    },
    {
      title: 'AI Quiz Generator',
      description: 'Built a LangChain + Groq powered quiz generation app for educational use, deployed via Streamlit.',
      role: 'GenAI Engineer',
      stack: ['LangChain', 'Groq', 'Python', 'Streamlit'],
      icon: Brain,
      gradient: 'from-green-500 to-blue-600',
      github: 'https://github.com/Dubeysatvik123/AI_quiz_Generator',
      constellation: 'Andromeda',
    },
    {
      title: 'Aira',
      description: 'Developed an LLM-powered problem-solving and code-generating assistant using GEMMA2.',
      role: 'Prompt Engineer',
      stack: ['GEMMA2', 'Python', 'LLM'],
      icon: MessageCircle,
      gradient: 'from-purple-500 to-pink-600',
      github: 'https://github.com/Dubeysatvik123/aira',
      constellation: 'Phoenix',
    },
    {
      title: 'DOX - Docker Automation Tool',
      description: 'Created a CLI tool to automate Docker container creation and management using intelligent parsing and validations.',
      role: 'DevOps Engineer',
      stack: ['Python', 'Bash', 'Docker', 'CLI'],
      icon: Zap,
      gradient: 'from-orange-500 to-red-600',
      github: 'https://github.com/Dubeysatvik123/docker_automation',
      constellation: 'Ursa Major',
    },
    {
      title: 'CICD Flask',
      description: 'Built a Flask app deployed through a CI/CD pipeline using GitHub Actions and Docker.',
      role: 'DevOps Engineer',
      stack: ['Flask', 'CI/CD', 'Python', 'Docker'],
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/Dubeysatvik123/CICD_Flask',
      constellation: 'Polaris',
    },
    {
      title: 'Matrix',
      description: 'Developed an interactive UI project using matrix animations and visual logic.',
      role: 'Fullstack Developer',
      stack: ['Python', 'NumPy', 'Mathematics', 'UI'],
      icon: Cpu,
      gradient: 'from-indigo-500 to-purple-600',
      github: 'https://github.com/Dubeysatvik123/Matrix',
      constellation: 'Libra',
    },
    {
      title: 'Skill Sadhana LMS',
      description: 'Created an LMS using Frappe and Python ORM, enabling faculty to post lectures and students to access course materials.',
      role: 'Backend Developer',
      stack: ['Frappe', 'Python', 'MySQL'],
      icon: Database,
      gradient: 'from-indigo-500 to-purple-600',
      github: 'https://github.com/Dubeysatvik123/Skill-sadhana',
      constellation: 'Pegasus',
    },
    {
      title: 'Agentic AI DevOps',
      description: 'Developed a LangChain-based multi-agent system that provisions Jenkins, Docker, and Kubernetes automation pipelines.',
      role: 'Architect',
      stack: ['LangChain', 'Jenkins', 'Docker', 'Kubernetes'],
      icon: Brain,
      gradient: 'from-emerald-500 to-teal-600',
      github: 'https://github.com/Dubeysatvik123/Agentic_AI',
      constellation: 'Aquarius',
    },
    {
      title: 'Multi Streamlit Menu',
      description: 'Created a dynamic Linux command menu interface with multi-feature navigation using Streamlit.',
      role: 'Python Developer',
      stack: ['Python', 'Streamlit', 'Linux'],
      icon: Database,
      gradient: 'from-blue-500 to-indigo-600',
      github: 'https://github.com/Dubeysatvik123/Multi_Streamlit_Menu',
      constellation: 'Vega',
    },
    {
      title: 'Nexus - AI Voice Assistant',
      description: 'Built a Python-based voice assistant integrating NLP and web scraping for interactive responses.',
      role: 'ML Engineer',
      stack: ['Python', 'NLP', 'Web Scraping', 'Voice Recognition'],
      icon: MessageCircle,
      gradient: 'from-teal-500 to-blue-600',
      github: 'https://github.com/Dubeysatvik123/Nexus_The_Voice_Assistant',
      constellation: 'Cygnus',
    },
    {
      title: 'Vprofile Project',
      description: 'Deployed a 3-tier microservices app (Nginx, Tomcat, MySQL) with Docker Compose and Jenkins pipelines.',
      role: 'DevOps Engineer',
      stack: ['Docker', 'Jenkins', 'Nginx', 'Tomcat', 'MySQL'],
      icon: Server,
      gradient: 'from-green-500 to-teal-600',
      github: 'https://github.com/Dubeysatvik123/Vprofile_project',
      constellation: 'Leo',
    },
    {
      title: 'Dahej Predictor',
      description: 'Built a machine learning model to predict dowry trends and social impact analysis.',
      role: 'ML Developer',
      stack: ['Python', 'Machine Learning', 'Data Analysis'],
      icon: Brain,
      gradient: 'from-rose-500 to-pink-600',
      github: 'https://github.com/Dubeysatvik123/Dahej_Predictor',
      constellation: 'Virgo',
    },
    {
      title: 'AWS Automate',
      description: 'Created AWS Boto3 scripts for launching, stopping, and managing EC2 infrastructure.',
      role: 'DevOps Engineer',
      stack: ['AWS', 'Boto3', 'Python'],
      icon: Cloud,
      gradient: 'from-yellow-400 to-green-500',
      github: 'https://github.com/Dubeysatvik123/awsautomate',
      constellation: 'Centaurus',
    },
    {
      title: 'GenAI Experiments',
      description: 'Collection of LangChain, Groq, and OpenAI-based experiments in autonomous agent systems.',
      role: 'GenAI Developer',
      stack: ['LangChain', 'Groq', 'OpenAI', 'Python'],
      icon: Brain,
      gradient: 'from-pink-500 to-red-600',
      github: 'https://github.com/Dubeysatvik123/Genai',
      constellation: 'Draco',
    },
    {
      title: 'MERN Stack App',
      description: 'Built a MongoDB, Express, React, Node.js based fullstack CRUD app.',
      role: 'Fullstack Developer',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
      icon: Code,
      gradient: 'from-green-400 to-blue-500',
      github: 'https://github.com/Dubeysatvik123/MERN',
      constellation: 'Sirius',
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a modern dark-themed portfolio with blogs, contact, and projects section.',
      role: 'Frontend Developer',
      stack: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
      icon: Code,
      gradient: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/Dubeysatvik123/Portfolioo',
      constellation: 'Orion',
    },
    {
      title: 'Linux Automation',
      description: 'Shell scripts for OS-level task automation including backups, updates, and monitoring.',
      role: 'DevOps Scripter',
      stack: ['Bash', 'Linux', 'Shell Scripting'],
      icon: Terminal,
      gradient: 'from-orange-500 to-red-600',
      github: 'https://github.com/Dubeysatvik123/Linux_automation',
      constellation: 'Lyra',
    },
    {
      title: 'Fibonacci Generator',
      description: 'CLI Fibonacci number generator tool written with optimized recursion and memoization.',
      role: 'Python Developer',
      stack: ['Python', 'Algorithms', 'Recursion'],
      icon: Cpu,
      gradient: 'from-amber-500 to-orange-600',
      github: 'https://github.com/Dubeysatvik123/CodeAlpha_FIBONACCI_GENERATOR',
      constellation: 'Scorpio',
    },
    {
      title: 'Three Tier Microservice',
      description: 'Created a full 3-tier architecture (frontend, backend, DB) with CI/CD and container orchestration.',
      role: 'DevOps Architect',
      stack: ['Frontend', 'Backend', 'Database', 'CI/CD', 'Kubernetes'],
      icon: Server,
      gradient: 'from-blue-500 to-cyan-600',
      github: 'https://github.com/Dubeysatvik123/Three_Tier_Microservice',
      constellation: 'Hydra',
    },
    {
      title: 'Ansible Terraform',
      description: 'Infrastructure as Code automation using Ansible and Terraform for scalable cloud deployments.',
      role: 'DevOps Engineer',
      stack: ['Ansible', 'Terraform', 'Cloud'],
      icon: Cloud,
      gradient: 'from-green-500 to-yellow-500',
      github: 'https://github.com/Dubeysatvik123/Ansible_terraform',
      constellation: 'Sagittarius',
    },
  ], []);

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Enhanced Galactic Background */}
      <div className="absolute inset-0">
        {/* Constellation Stars */}
        {typeof window !== 'undefined' && [...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              opacity: [0, 1, 0.2, 1, 0],
              scale: [1, 1.5, 1, 1.2, 1]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Cosmic Energy Streams */}
        {typeof window !== 'undefined' && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -80,
              opacity: 0
            }}
            animate={{ 
              y: window.innerHeight + 80,
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: Math.random() * 4 + 3, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          />
        ))}
        
        {/* Floating Nebula Particles */}
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 3,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Project Galaxy
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Explore my constellation of {projects.length} projects spanning across the DevOps, AI/ML, and development universe
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Enhanced Cosmic Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />
              
              <motion.div 
                className="relative bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-5 h-full hover:border-purple-400/50 transition-all duration-500 flex flex-col"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
                }}
              >
                {/* Enhanced Header */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <project.icon size={24} className="text-white" />
                  </motion.div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-xs text-purple-400 mb-1">
                      <Star size={10} />
                      <span>{project.constellation}</span>
                    </div>
                    {project.isPrivate && (
                      <span className="text-xs text-orange-400 bg-orange-500/20 px-2 py-1 rounded-full">
                        Private
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="mb-4 flex-grow">
                  <motion.h3 
                    className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="text-xs text-cyan-400 font-medium mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="truncate">{project.role}</span>
                  </div>
                </div>

                {/* Enhanced Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-400/30 transition-all duration-200"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + techIndex * 0.05, duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 10px rgba(139, 92, 246, 0.4)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Action Button */}
                <div className="mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all text-sm font-medium w-full justify-center`}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                </div>

                {/* Enhanced Hover Effect Stars */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${15 + i * 15}%`,
                        top: `${10 + i * 10}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
            }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Explore More Galaxies
            </motion.h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Want to see more of my cosmic creations? Visit my GitHub universe for the complete collection of {projects.length} projects.
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl border border-blue-500/50 hover:border-blue-400 transition-all"
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