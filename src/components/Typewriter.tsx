import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  isVisible: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 100, isVisible }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setDisplayText('');
      setCurrentIndex(0);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isVisible]);

  return (
    <span className="inline-block">
      {displayText}
      {currentIndex < text.length && isVisible && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default Typewriter;
