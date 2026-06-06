'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight, Compass } from 'lucide-react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import ShovelIcon from '@/components/ui/ShovelIcon';
import { playPopupOpenSound, playCTAConfirmSound } from '@/lib/sound';

interface LeadPopupProps {
  isMuted: boolean;
}

export const LeadPopup: React.FC<LeadPopupProps> = ({ isMuted }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in the current browser session
    const isShown = sessionStorage.getItem('suc_lead_popup_shown');
    
    if (!isShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('suc_lead_popup_shown', 'true');
      }, 5000); // 5 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  // Play sound when the modal opens
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
            className="absolute inset-0 bg-obsidian/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-charcoal-dark border border-white/10 w-full max-w-lg relative z-10 flex flex-col p-6 md:p-8 overflow-hidden"
          >
            {/* Custom blueprint styling grids */}
            <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-10" />

            {/* Corner structural markings */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-gold" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-arch-grey hover:text-gold transition-colors duration-300 p-1.5 cursor-pointer z-20"
              title="Close invitation"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-6 select-none">
              {/* Drafting references */}
              <div className="flex justify-between items-center font-mono text-[9px] text-white/25">
                <span>ESTIMATE_DESK // INVITATION</span>
                <span>SEC_ID: SUC_EST_INV_1</span>
              </div>

              {/* Icon / Brand mark */}
              <div className="w-12 h-12 border border-gold/40 rotate-45 flex items-center justify-center bg-obsidian/60 mt-2">
                <Calendar className="w-5 h-5 text-gold -rotate-45" />
              </div>

              {/* Headline */}
              <div className="flex flex-col gap-2 mt-2">
                <Heading level={3} sectionTag="CIVIL ESTIMATE INQUIRY">
                  Schedule Structural Consultation
                </Heading>
                <p className="text-xs text-arch-grey leading-relaxed mt-1 font-light">
                  Request a structural review, load calculation inquiry, or concrete pour cost estimation with our Nallasopara-based engineering team.
                </p>
              </div>

              {/* Technical features overview */}
              <div className="border-y border-white/5 py-4 flex flex-col gap-3 font-mono text-[10px] text-arch-grey">
                <div className="flex items-start gap-2.5">
                  <ShovelIcon className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>GPS location mapping and site dimensions checks.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShovelIcon className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Concrete grade mixture planning (M25 / M30).</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full">
                <a
                  href={getWhatsAppLink(leadMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCTAClick}
                  className="w-full sm:w-grow"
                >
                  <Button variant="accent" className="w-full text-[10px] py-3 flex items-center justify-center gap-2">
                    Request Consultation <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto text-[10px] py-3 border-white/15"
                  onClick={handleClose}
                >
                  View Website
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
