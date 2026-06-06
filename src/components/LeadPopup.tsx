'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { playPopupOpenSound, playCTAConfirmSound } from '@/lib/sound';

interface LeadPopupProps {
  isMuted: boolean;
}

export const LeadPopup: React.FC<LeadPopupProps> = ({ isMuted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenTriggered, setHasBeenTriggered] = useState(false);

  useEffect(() => {
    // If the popup has already been triggered in the current page load lifecycle, do nothing
    if (hasBeenTriggered) return;

    let isTriggered = false;

    const triggerPopup = () => {
      if (isTriggered) return;
      isTriggered = true;
      setHasBeenTriggered(true);
      setIsOpen(true);
    };

    // Trigger 1: 7 seconds delay (fits user requirement of 6-8 seconds)
    const timer = setTimeout(() => {
      triggerPopup();
    }, 7000);

    // Trigger 2: Scroll past second section (using IntersectionObserver to prevent scroll lag)
    let observer: IntersectionObserver | null = null;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerPopup();
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0 }
      );
      
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        observer.observe(servicesSection);
      }
    }

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [hasBeenTriggered]);

  // Play subtle sound feedback when the modal opens
  useEffect(() => {
    if (isOpen) {
      playPopupOpenSound(isMuted);
    }
  }, [isOpen, isMuted]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    playCTAConfirmSound(isMuted);
  };

  const leadMessage = 'Hello Shree Uniya Construction, I would like to schedule a civil construction consultation and request an estimate for my project.';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)',
              backgroundSize: '8px 8px'
            }}
            className="bg-obsidian border-t-[3px] border-gold border-x border-b border-white/10 w-full max-w-md relative z-10 flex flex-col p-8 shadow-2xl shadow-black/90 select-none rounded-sm concrete-texture"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white hover:scale-105 transition-all duration-200 p-1.5 cursor-pointer z-20"
              title="Close"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center mt-4">
              
              {/* Construction Visual Cue */}
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center bg-gold/5 mb-5">
                <MessageSquare className="w-5 h-5 text-gold" />
              </div>

              {/* Headline */}
              <h3 className="font-display font-bold text-white text-xl md:text-2xl uppercase tracking-wide mb-3">
                Plan Your Civil Construction Project
              </h3>
              
              {/* Short Copy */}
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light mb-8 max-w-sm">
                Get a quick consultation for structural work, foundation planning, RCC work, renovation, or site execution in Nallasopara and nearby areas.
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-3 w-full">
                <a
                  href={getWhatsAppLink(leadMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCTAClick}
                  className="w-full block"
                >
                  <Button variant="accent" className="w-full text-xs py-3.5 flex items-center justify-center gap-2" isMuted={isMuted} soundType="cta">
                    Request Consultation on WhatsApp
                  </Button>
                </a>
                <Button
                  variant="secondary"
                  className="w-full text-xs py-3.5 border-white/10"
                  onClick={handleClose}
                  isMuted={isMuted}
                  soundType="click"
                >
                  Continue Exploring
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
