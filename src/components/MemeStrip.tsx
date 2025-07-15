import React from 'react';
import { motion } from 'framer-motion';

const MemeStrip: React.FC = () => {
  const memeText = "Linux users be like: 'Restart? That's for Windows users, bro. 😎🔥'";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-8 mb-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
      
      {/* Animated Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_10px_#FF4500]"
      />
      
      {/* Meme Text */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-mono text-orange-400 bg-black/50 backdrop-blur-sm rounded-lg p-6 mx-auto max-w-4xl border border-orange-500/30 overflow-hidden"
        >
          {memeText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.05, delay: 0.6 + index * 0.02 }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_10px_#FF4500]"
      />
    </motion.div>
  );
};

export default MemeStrip;