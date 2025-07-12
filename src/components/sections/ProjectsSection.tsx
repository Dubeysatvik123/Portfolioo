import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub, FaPython, FaReact, FaDocker, FaRobot } from 'react-icons/fa';
import { SiStreamlit, SiKubernetes, SiTensorflow } from 'react-icons/si';

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Interactive 3D portfolio website built with React, Three.js, and Framer Motion, featuring immersive animations and responsive design.',
      technologies: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
      category: 'Frontend',
      github: 'https://github.com/Dubeysatvik123/Portfolioo',
      demo: '#',
      gradient: 'from-cyan-500 to-blue-600',
      icon: <FaReact className="w-8 h-8" />,
    },
    {
      title: 'Deep Fake Detection',
      description: 'Advanced deep learning model for detecting deepfake videos and images using computer vision and neural networks.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      category: 'AI/ML',
      github: 'https://github.com/Dubeysatvik123/Deep-Fake-detection',
      demo: '#',
      gradient: 'from-red-500 to-pink-600',
      icon: <FaRobot className="w-8 h-8" />,
    },
    {
      title: 'AI Quiz Generator',
      description: 'Intelligent quiz generation system using Langchain and Groq API, deployed on Streamlit with advanced NLP capabilities.',
      technologies: ['Python', 'Langchain', 'Groq', 'Streamlit', 'NLP'],
      category: 'AI/ML',
      github: 'https://github.com/Dubeysatvik123/AI_quiz_Generator',
      demo: '#',
      gradient: 'from-green-500 to-teal-600',
      icon: <FaRobot className="w-8 h-8" />,
    },
    {
      title: 'Aira Prompt Solver',
      description: 'Advanced prompt engineering solution using GEMMA2 model for intelligent query resolution and automated response generation.',
      technologies: ['Python', 'GEMMA2', 'HuggingFace', 'Transformers'],
      category: 'GenAI',
      github: 'https://github.com/Dubeysatvik123/aira',
      demo: '#',
      gradient: 'from-purple-500 to-pink-600',
      icon: <SiTensorflow className="w-8 h-8" />,
    },
    {
      title: 'Docker Automation',
      description: 'Command-line automation tool for Docker operations, streamlining container management and deployment workflows.',
      technologies: ['Python', 'Docker', 'CLI', 'Automation'],
      category: 'DevOps',
      github: 'https://github.com/Dubeysatvik123/docker_automation',
      demo: '#',
      gradient: 'from-orange-500 to-red-600',
      icon: <FaDocker className="w-8 h-8" />,
    },
    {
      title: 'Python Notes',
      description: 'Comprehensive Python learning resource with examples, best practices, and advanced concepts for developers.',
      technologies: ['Python', 'Documentation', 'Learning'],
      category: 'Education',
      github: 'https://github.com/Dubeysatvik123/Python-Notes',
      demo: '#',
      gradient: 'from-yellow-500 to-orange-600',
      icon: <FaPython className="w-8 h-8" />,
    },
    {
      title: 'Matrix Operations',
      description: 'Advanced matrix manipulation and mathematical operations library with visualization capabilities.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Mathematics'],
      category: 'Data Science',
      github: 'https://github.com/Dubeysatvik123/Matrix',
      demo: '#',
      gradient: 'from-indigo-500 to-purple-600',
      icon: <FaPython className="w-8 h-8" />,
    },
    {
      title: 'Linux World Repository',
      description: 'Collection of Linux scripts, automation tools, and system administration utilities for DevOps engineers.',
      technologies: ['Bash', 'Linux', 'Shell Scripting', 'DevOps'],
      category: 'DevOps',
      github: 'https://github.com/Dubeysatvik123/Linuxworld_repo',
      demo: '#',
      gradient: 'from-green-500 to-emerald-600',
      icon: <FaPython className="w-8 h-8" />,
    },
    {
      title: 'Skill Sadhana LMS',
      description: 'A comprehensive Learning Management System built with Frappe framework, featuring course management and progress tracking.',
      technologies: ['Python', 'Frappe', 'JavaScript', 'MySQL'],
      category: 'Full Stack',
      github: 'https://github.com/Dubeysatvik123/Skill-sadhana',
      demo: '#',
      gradient: 'from-blue-500 to-purple-600',
      icon: <FaPython className="w-8 h-8" />,
    },
    {
      title: 'Nexus Voice Assistant',
      description: 'AI-powered voice assistant with natural language processing capabilities and API integrations for smart automation.',
      technologies: ['Python', 'NLP', 'APIs', 'Voice Recognition'],
      category: 'AI/ML',
      github: 'https://github.com/Dubeysatvik123/Nexus_The_Voice_Assistant',
      demo: '#',
      gradient: 'from-indigo-500 to-purple-600',
      icon: <FaRobot className="w-8 h-8" />,
    },
    {
      title: 'VProfile Project',
      description: 'Complete DevOps project with CI/CD pipeline, containerization, and cloud deployment using modern tools.',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      category: 'DevOps',
      github: 'https://github.com/Dubeysatvik123/Vprofile_project',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-600',
      icon: <FaDocker className="w-8 h-8" />,
    },
    {
      title: 'AWS Automation',
      description: 'Cloud automation scripts and infrastructure as code for AWS services using Terraform and Python.',
      technologies: ['AWS', 'Terraform', 'Python', 'Cloud'],
      category: 'DevOps',
      github: 'https://github.com/Dubeysatvik123/awsautomate',
      demo: '#',
      gradient: 'from-orange-500 to-yellow-600',
      icon: <FaPython className="w-8 h-8" />,
    },
    {
      title: 'GenAI Projects',
      description: 'Collection of Generative AI projects including text generation, image processing, and AI model implementations.',
      technologies: ['Python', 'AI/ML', 'Generative AI', 'NLP'],
      category: 'GenAI',
      github: 'https://github.com/Dubeysatvik123/Genai',
      demo: '#',
      gradient: 'from-purple-500 to-pink-600',
      icon: <FaRobot className="w-8 h-8" />,
    },
    {
      title: 'Portfolio (Legacy)',
      description: 'Previous portfolio website showcasing different design approaches and technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      category: 'Frontend',
      github: 'https://github.com/Dubeysatvik123/portfolio',
      demo: '#',
      gradient: 'from-gray-500 to-slate-600',
      icon: <FaReact className="w-8 h-8" />,
    },
    {
      title: 'Chanakya AI LMS',
      description: 'Intelligent Learning Management System with AI-powered features for personalized education.',
      technologies: ['Python', 'AI/ML', 'LMS', 'Education'],
      category: 'AI/ML',
      github: 'https://github.com/Dubeysatvik123/chanakya-ai-lms',
      demo: '#',
      gradient: 'from-emerald-500 to-teal-600',
      icon: <FaRobot className="w-8 h-8" />,
    },
    {
      title: 'Fibonacci Generator',
      description: 'Advanced Fibonacci sequence generator with visualization and mathematical analysis tools.',
      technologies: ['Python', 'Mathematics', 'Visualization'],
      category: 'Data Science',
      github: 'https://github.com/Dubeysatvik123/CodeAlpha_FIBONACCI_GENERATOR',
      demo: '#',
      gradient: 'from-amber-500 to-orange-600',
      icon: <FaPython className="w-8 h-8" />,
    },
    {
      title: 'Dahej Predictor',
      description: 'Machine learning model for predictive analytics and data-driven insights.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      category: 'AI/ML',
      github: 'https://github.com/Dubeysatvik123/Dahej_Predictor',
      demo: '#',
      gradient: 'from-rose-500 to-pink-600',
      icon: <FaRobot className="w-8 h-8" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Python: <FaPython className="w-4 h-4" />,
      React: <FaReact className="w-4 h-4" />,
      Docker: <FaDocker className="w-4 h-4" />,
      Streamlit: <SiStreamlit className="w-4 h-4" />,
      Kubernetes: <SiKubernetes className="w-4 h-4" />,
    };
    return icons[tech] || <HiCode className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work spanning DevOps, AI/ML, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                    {project.icon}
                  </div>
                  <span className="text-xs font-medium text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/satvikdubey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;