'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Landmark, Construction } from 'lucide-react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { playPopupOpenSound, playCTAConfirmSound } from '@/lib/sound';

interface CivilModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMuted: boolean;
}

export const CivilModal: React.FC<CivilModalProps> = ({ isOpen, onClose, isMuted }) => {
  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Play sound when the modal opens
  useEffect(() => {
    if (isOpen) {
      playPopupOpenSound(isMuted);
    }
  }, [isOpen, isMuted]);

  const handleCTAClick = () => {
    playCTAConfirmSound(isMuted);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-charcoal-dark border border-white/10 w-full max-w-3xl max-h-[85vh] overflow-y-auto relative z-10 flex flex-col p-6 md:p-8 no-scrollbar"
          >
            {/* Corner structural markings */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold" />

            {/* Header */}
            <div className="flex justify-between items-start border-b border-white/10 pb-5 mb-6">
              <Heading level={3} sectionTag="ENGINEERING DATASHEET">
                Civil Execution Specifications
              </Heading>
              <button
                onClick={onClose}
                className="text-arch-grey hover:text-gold transition-colors duration-300 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="flex flex-col gap-6 text-sm text-arch-grey leading-relaxed">
              <p>
                This datasheet details the structural tolerances, concrete grade designs, and reinforcement specifications applied to our building frames. Every calculation is calibrated in accordance with building code requirements.
              </p>

              {/* Concrete Grades Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-6">
                <div className="border border-white/5 bg-charcoal-light/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Construction className="w-4 h-4 text-gold" />
                    <span className="font-display font-semibold text-white">M25 Concrete</span>
                  </div>
                  <p className="text-xs text-arch-grey/85">
                    Designed compressive strength of 25 MPa at 28 days. Specified for standard column, beam, and structural slab RCC frameworks.
                  </p>
                </div>
                
                <div className="border border-white/5 bg-charcoal-light/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span className="font-display font-semibold text-white">M30 Concrete</span>
                  </div>
                  <p className="text-xs text-arch-grey/85">
                    Designed compressive strength of 30 MPa at 28 days. Formulated with concrete admixes for foundations and structural water retaining elements.
                  </p>
                </div>

                <div className="border border-white/5 bg-charcoal-light/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Landmark className="w-4 h-4 text-gold" />
                    <span className="font-display font-semibold text-white">Reinforcement</span>
                  </div>
                  <p className="text-xs text-arch-grey/85">
                    Utilizing Fe500D and Fe550 high-ductility steel rebar configurations, ensuring resistance to seismic stresses in coastal environments.
                  </p>
                </div>
              </div>

              {/* Structural Tolerances Table */}
              <div className="border-t border-white/5 pt-6">
                <span className="font-display font-semibold text-white block mb-3 uppercase tracking-wider text-xs">
                  Structural Tolerance Thresholds
                </span>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border border-white/5">
                    <thead>
                      <tr className="bg-charcoal-light/40 font-display text-white text-xs border-b border-white/10">
                        <th className="p-3 border-r border-white/5">Parameter</th>
                        <th className="p-3 border-r border-white/5">Designed Tolerance</th>
                        <th className="p-3">Audit Method</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs font-mono text-arch-grey">
                      <tr className="border-b border-white/5">
                        <td className="p-3 border-r border-white/5 text-white">Plumb Alignment</td>
                        <td className="p-3 border-r border-white/5">± 3mm per floor</td>
                        <td className="p-3">Laser alignment check</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-3 border-r border-white/5 text-white">Foundation Soil Pressure</td>
                        <td className="p-3 border-r border-white/5">180 kN/m² Min</td>
                        <td className="p-3">Standard Geotechnical plate load test</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-r border-white/5 text-white">Structural Deflection</td>
                        <td className="p-3 border-r border-white/5">Span / 350 max</td>
                        <td className="p-3">Digital strain monitoring sensors</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer containing multiple WhatsApp options and close trigger */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-5 mt-6">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.siteVisit)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCTAClick}
                  className="w-full sm:w-auto"
                >
                  <Button variant="accent" className="w-full text-[10px] py-2.5 px-4">
                    Request Site Visit
                  </Button>
                </a>
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.technical)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCTAClick}
                  className="w-full sm:w-auto"
                >
                  <Button variant="secondary" className="w-full text-[10px] py-2.5 px-4 border-white/15">
                    Datasheet Inquiry
                  </Button>
                </a>
              </div>
              <Button variant="outline" className="w-full sm:w-auto py-2.5 px-5 text-[10px]" onClick={onClose}>
                Acknowledge & Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default CivilModal;
