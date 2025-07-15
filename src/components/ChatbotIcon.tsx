import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ChatbotInterface from './ChatbotInterface';

const ChatbotIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Icon */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-2xl z-40 flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(139, 92, 246, 0.5)',
            '0 0 40px rgba(139, 92, 246, 0.8)',
            '0 0 20px rgba(139, 92, 246, 0.5)'
          ]
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, type: 'tween' }
        }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            type: "tween"
          }}
        />
      </motion.button>

      {/* Chatbot Interface */}
      <ChatbotInterface 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
};

export default ChatbotIcon; 