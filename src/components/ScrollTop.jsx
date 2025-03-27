"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div 
        className="fixed bottom-10 right-4 bg-blue-600 p-3 rounded-full cursor-pointer shadow-lg hover:bg-blue-700 transition"
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-2xl text-white" />
      </div>
    )
  );
};

export default ScrollTop;
