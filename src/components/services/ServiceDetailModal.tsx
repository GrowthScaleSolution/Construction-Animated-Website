'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModalA11y } from './useModalA11y';
import { CivilConstructionModalContent } from './CivilConstructionModalContent';
import { StructuralRccModalContent } from './StructuralRccModalContent';
import { ServiceSelectorModalContent } from './ServiceSelectorModalContent';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalId: string | null;
}

export function ServiceDetailModal({ isOpen, onClose, modalId }: ServiceDetailModalProps) {
  const modalRef = useModalA11y(isOpen, onClose);

  return (
    <AnimatePresence>
      {isOpen && modalId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 lg:p-4 pb-0 lg:pb-4">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
            tabIndex={-1}
            className="relative w-full h-full lg:h-auto lg:max-h-[88vh] lg:max-w-xl bg-[#111111] lg:border border-white/10 lg:rounded-md shadow-2xl flex flex-col overflow-hidden outline-none mt-auto lg:mt-0 rounded-t-2xl lg:rounded-t-md"
            initial={{ y: '100%', opacity: 1, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: '100%', opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 lg:p-6 border-b border-white/10 shrink-0 bg-[#161616] sticky top-0 z-20">
              <h2 id="modal-heading" className="text-base lg:text-lg font-bold text-white uppercase tracking-wider">
                {modalId === 'civil' && 'Civil Construction'}
                {modalId === 'structural' && 'Structural Work & RCC'}
                {modalId === 'selector' && 'Which Service Do You Need?'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-sm -mr-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 lg:p-6 pb-12 lg:pb-6 relative bg-[#111111]">
              {modalId === 'civil' && <CivilConstructionModalContent />}
              {modalId === 'structural' && <StructuralRccModalContent />}
              {modalId === 'selector' && <ServiceSelectorModalContent />}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
