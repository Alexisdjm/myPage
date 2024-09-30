import React, { useState, useEffect } from 'react';

const VerticalScrollVisualizer = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  const handleScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;

    const newWidth = (scrollTop / maxScroll) * 100;
    setScrollbarWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-container">
      <span id="custom-scrollbar" style={{ width: `${scrollbarWidth}%` }}></span>
    </div>
  );
};

export default VerticalScrollVisualizer;
