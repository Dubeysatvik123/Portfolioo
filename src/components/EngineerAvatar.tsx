import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const EngineerAvatar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed top-4 left-4 z-50 lg:left-72"
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      <div className="relative">
        {/* Glowing Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear", type: 'tween' },
            scale: { duration: 0.3, type: 'tween' }
          }}
          className="absolute inset-0 w-20 h-20 border-2 border-blue-500 rounded-full shadow-[0_0_20px_#3B82F6]"
        />
        
        {/* Avatar Container */}
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 shadow-[0_0_15px_#FF4500] cursor-pointer"
        >
          <img
            src="https://raw.githubusercontent.com/Dubeysatvik123/Images/main/Satvik.jpg"
            alt="Satvik Dubey"
            className="w-full h-full object-cover"
          />
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm"
          />
        </motion.div>

        {/* Speech Bubble */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10 
          }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-blue-500/50 rounded-lg p-3 min-w-max"
        >
          <div className="flex items-center gap-2 text-sm text-blue-400">
            <MessageCircle size={14} />
            <span>Hi, I'm Satvik — DevOps & AI Engineer. Let's explore.</span>
          </div>
          
          {/* Speech Bubble Arrow */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-blue-500/50" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, -20, -10],
              x: [0, 5, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              type: 'tween'
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              right: `${-10 - i * 5}px`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EngineerAvatar;