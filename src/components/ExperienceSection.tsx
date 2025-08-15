import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'AIOps Intern',
      company: 'LinuxWorld Pvt. Ltd., Jaipur',
      duration: 'May 2025 – July 2025',
      location: 'Jaipur',
      description: [
        'Designed and deployed a custom cloud computing platform integrating machine learning models with DevOps pipelines for automation and scalability.',
        'Implemented Generative AI features using the ChatGPT API, enabling intelligent system interactions and automated decision-making.',
        'Automated deployment workflows with Docker, Kubernetes, and CI/CD, ensuring high availability and seamless model updates.'
      ],
      technologies: ['Cloud', 'DevOps', 'ML', 'Docker', 'Kubernetes', 'CI/CD', 'ChatGPT API'],
      gradient: 'from-purple-500 to-cyan-600'
    },
    {
      title: 'DevOps Intern',
      company: 'Netlink Software Pvt. Ltd., Mandideep',
      duration: 'Feb 2025 – May 2025',
      location: 'Mandideep',
      description: [
        'Deployed ERPNext on a Docker cluster using Docker Compose, ensuring scalability and ease of management.',
        'Built and configured a Kafka–Zookeeper production cluster for real-time data streaming and a 3-node MongoDB cluster for high availability.',
        'Conducted research and experimentation with Qdrant vector database for AI-powered search and retrieval use cases.'
      ],
      technologies: ['Docker', 'Kafka', 'Zookeeper', 'MongoDB', 'Qdrant', 'ERPNext'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Frappe LMS Developer',
      company: 'College Project',
      duration: '2024',
      location: 'Remote',
      description: [
        'Developed and deployed a custom Learning Management System (LMS) for college using the Frappe Framework, enabling course management, assignments, and student tracking.',
        'Integrated role-based access control (RBAC), automated notifications, and reporting modules to streamline academic operations and improve administrative efficiency.',
        'Deployed the application on Frappe Cloud, leveraging its managed hosting, scalability, and automated updates to ensure high availability and low operational overhead.'
      ],
      technologies: ['Frappe', 'Python', 'RBAC', 'Cloud', 'Automation'],
      gradient: 'from-orange-500 to-yellow-600'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      },
    },
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkblue-900/20 via-black/50 to-darkblue-800/20" />
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-darkblue-600/5 via-transparent to-darkblue-700/5"
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in DevOps, AI/ML, and software development
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + '-' + index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-darkblue-500/20 hover:border-darkblue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-darkblue-500/20">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Timeline Line */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-darkblue-600 to-darkblue-700 rounded-full flex items-center justify-center shadow-lg shadow-darkblue-500/30">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-darkblue-500 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-darkblue-300 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold text-darkblue-300 mb-4">
                      {exp.company}
                    </h4>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-darkblue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-darkblue-500/20 text-darkblue-300 text-sm rounded-full border border-darkblue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume Download CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(30, 58, 138, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://docs.google.com/document/d/e/2PACX-1vT7yBoeRThdxRyc4g88yK10tvFqaItJHKyixFm0taKQY-xFKHDOztCfpvl4l3Iv2GgMXPfW-GCnXyMH/pub';
              link.target = '_blank';
              link.click();
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-darkblue-600 to-darkblue-700 text-white font-semibold rounded-full hover:from-darkblue-700 hover:to-darkblue-800 transition-all duration-300 shadow-lg shadow-darkblue-500/30"
          >
            <ExternalLink className="w-5 h-5" />
            View Full Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;