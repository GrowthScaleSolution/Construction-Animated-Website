'use client';

import React, { useEffect, useState } from 'react';
import { startMixerSound, stopMixerSound } from '@/lib/sound';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ isMuted, onComplete }: { isMuted: boolean; onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start the heavy machinery hum
    startMixerSound(isMuted);

    const startTime = Date.now();
    const duration = 2200;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          stopMixerSound();
          setIsLoading(false);
          if (onComplete) onComplete();
        }, 300);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      stopMixerSound();
    };
  }, [isMuted, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center font-mono overflow-hidden touch-none"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 z-0 opacity-10 construction-grid" />

          {/* Loader Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-xs px-6">
            
            {/* Cement Mixer CAD Blueprint Animation */}
            <div className="w-24 h-24 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white/20">
                {/* Outer drafting coordinates ring */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-40" />
                
                {/* Outer rotating gear / mixer ring */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  style={{ transformOrigin: '50px 50px' }}
                >
                  <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="1" />
                  {/* Mixer teeth */}
                  <path d="M50 18 L50 14 M50 82 L50 86 M18 50 L14 50 M82 50 L86 50 M27.4 27.4 L24.5 24.5 M72.6 72.6 L75.5 75.5 M27.4 72.6 L24.5 75.5 M72.6 27.4 L75.5 24.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </motion.g>
                
                {/* Reverse rotating inner mixer drum core */}
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  style={{ transformOrigin: '50px 50px' }}
                >
                  <polygon points="50,22 74.2,36 74.2,64 50,78 25.8,64 25.8,36" fill="none" stroke="#FFC80A" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="opacity-60" />
                </motion.g>
                
                {/* Central static axis marker */}
                <circle cx="50" cy="50" r="3" fill="#FFC80A" />
              </svg>
            </div>

            {/* Loading Bar */}
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between text-[10px] text-arch-grey tracking-[0.2em] uppercase">
                <span>Initializing Assets</span>
                <span className="text-gold">{Math.round(progress)}%</span>
              </div>
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gold transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
