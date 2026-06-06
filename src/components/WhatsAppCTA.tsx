'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export const WhatsAppCTA = ({ isMuted = true }: { isMuted?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
      className="fixed right-4 sm:right-6 z-40 select-none"
    >
      <a
        href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gold text-obsidian rounded-full shadow-lg shadow-gold/20 cursor-pointer border border-gold hover:bg-white hover:border-white transition-colors duration-300"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
        
        {/* Ring animation */}
        <span className="absolute -inset-1 rounded-full border border-gold/40 animate-ping pointer-events-none" />

        {/* Text tooltips */}
        <span className="absolute right-full mr-3 bg-charcoal-dark border border-white/10 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          Contact Civil Team
        </span>
      </a>
    </motion.div>
  );
};
export default WhatsAppCTA;
