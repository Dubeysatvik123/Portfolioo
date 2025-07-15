import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, ExternalLink, Twitter, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    { 
      icon: Mail, 
      text: 'satvikdubey1203@gmail.com', 
      href: 'mailto:satvikdubey1203@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Github, 
      text: 'github.com/Dubeysatvik123', 
      href: 'https://github.com/Dubeysatvik123',
      color: 'from-gray-500 to-slate-500'
    },
    { 
      icon: Linkedin, 
      text: 'linkedin.com/in/satvik-dubey-8477ab23b', 
      href: 'https://www.linkedin.com/in/satvik-dubey-8477ab23b',
      color: 'from-blue-500 to-indigo-500'
    },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Dubeysatvik123', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/satvik-dubey-8477ab23b', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/Sat__vik_dubey',
      label: 'X (Twitter): Sat__vik_dubey',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/sat__vik_dubey',
      label: 'Instagram: sat__vik_dubey',
      color: 'hover:text-pink-400'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Cosmic Contact Background - Shooting Stars & Pulsar */}
      <div className="absolute inset-0">
        {/* Shooting Stars */}
        {typeof window !== 'undefined' && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: -50, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              x: window.innerWidth + 50, 
              y: Math.random() * window.innerHeight - 100,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Pulsar Effect */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [1, 0.3, 1],
            boxShadow: [
              '0 0 20px #06b6d4',
              '0 0 60px #06b6d4',
              '0 0 20px #06b6d4'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Cosmic Dust */}
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 8, 
              repeat: Infinity, 
              delay: Math.random() * 3,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Mission Control
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to launch your next project? Let's connect across the digital cosmos and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            
            <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{info.text}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

            {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl" />
            
            <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <span className="text-white font-medium">{social.label}</span>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
            </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Ready to Collaborate?</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I'm always excited to work on new projects and explore innovative solutions. 
                  Whether it's DevOps automation, AI/ML development, or full-stack applications, 
                  let's create something amazing together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;