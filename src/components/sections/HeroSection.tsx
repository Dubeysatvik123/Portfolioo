import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiChevronDown, HiSparkles } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

type HeroSectionProps = {
  onNavigate: (section: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  const titles = useMemo(() => [
    'DevOps Engineer',
    'ML Engineer', 
    'GenAI Developer',
    'Backend Developer',
    'Creative Thinker'
  ], []);

  useEffect(() => {
    // Set window size safely
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Satvik_Dubey_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-darkblue-900/40 via-black/60 to-darkblue-800/40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" style={{ backgroundPosition: '100% 0%' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              opacity: 0
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-5xl mx-auto px-6 relative"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-darkblue-600/50 to-cyan-600/50 rounded-full border border-darkblue-400/30 backdrop-blur-sm mb-8"
        >
          <HiSparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300 font-medium">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Satvik Dubey</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-4xl font-medium mb-8 h-16 flex items-center justify-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
            {displayText}
            <span className="animate-pulse text-white">|</span>
          </span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting intelligent solutions at the intersection of DevOps, AI, and creative innovation. 
          Building the future through code, automation, and imagination.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-modern hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-modern hover:shadow-modern-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiSparkles className="w-5 h-5" />
              See My Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-modern opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 font-semibold rounded-modern hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-modern hover:shadow-modern-lg"
          >
            <span className="flex items-center gap-2">
              <HiDownload className="w-5 h-5" />
              Download Resume
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex justify-center gap-6 mb-8"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/satvikdubey', color: 'hover:text-gray-300' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/satvikdubey', color: 'hover:text-blue-400' },
            { icon: FaTwitter, href: 'https://twitter.com/satvikdubey', color: 'hover:text-cyan-400' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-400 text-2xl transition-colors duration-300 ${social.color} p-2 rounded-full hover:bg-white/10 backdrop-blur-sm`}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => onNavigate('about')}
          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 p-2 rounded-full hover:bg-cyan-400/10 backdrop-blur-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <HiChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;