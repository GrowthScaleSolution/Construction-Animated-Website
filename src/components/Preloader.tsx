'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 600); // Wait for fade out
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2; // Increments of 2-9
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-obsidian z-9999 flex flex-col items-center justify-center select-none"
        >
          {/* Construction-style coordinate markings */}
          <div className="absolute top-8 left-8 font-mono text-[9px] text-gold/30">
            SYSTEM_LOADING // INITIALIZING
          </div>
          <div className="absolute bottom-8 right-8 font-mono text-[9px] text-gold/30">
            SHREE UNIYA CONSTRUCTION
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Cement Mixer SVG Loader */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Rotating drum */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="w-12 h-12 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Custom simplified premium cement mixer drum representation */}
                <path d="M12 3a9 9 0 0 1 9 9h-3a6 6 0 0 0-6-6V3z" />
                <path d="M12 21a9 9 0 0 1-9-9h3a6 6 0 0 0 6 6v3z" />
                <circle cx="12" cy="12" r="3" />
                <line x1="6" y1="12" x2="2" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
              </motion.svg>
              
              {/* Stand / Frame */}
              <svg
                className="absolute inset-0 w-16 h-16 text-white/20 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M4 20l4-6M20 20l-4-6M12 14v6M8 20h8" />
              </svg>
            </div>

            {/* Percentage counter */}
            <div className="flex flex-col items-center gap-1 font-display">
              <span className="text-3xl font-bold tracking-widest text-white">
                {Math.min(progress, 100)}%
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-medium">
                structural load check
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Preloader;
