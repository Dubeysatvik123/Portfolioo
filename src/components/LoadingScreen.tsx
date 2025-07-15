import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onComplete(), 800);
    }, 1800); // Show for 1.8s, then fade out
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-gradient-to-br from-darkblue-900 via-black to-darkblue-800 z-50 flex flex-col items-center justify-center"
        >
          <motion.img
            src="/avatar.png"
            alt="Satvik Dubey"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-2xl mb-8 object-cover bg-darkblue-900"
            style={{ border: '4px solid #2563eb' }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold gradient-text text-center drop-shadow-lg"
          >
            Satvik Dubey
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;