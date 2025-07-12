import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  showCursor?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  className = '',
  speed = 100,
  showCursor = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursorBlink(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={className}>
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.02 }}
          className="inline-block"
          style={{
            textShadow: '0 0 20px currentColor, 0 0 40px currentColor',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          animate={{ opacity: showCursorBlink ? 1 : 0 }}
          className="inline-block w-1 bg-current ml-1"
          style={{ height: '1em' }}
        />
      )}
    </div>
  );
};

export default TypingAnimation;