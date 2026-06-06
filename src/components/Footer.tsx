'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-obsidian border-t border-white/5 py-12 md:py-16 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Main top footer layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start gap-8"
        >
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-xs text-arch-grey/70 max-w-xs leading-relaxed mt-2">
              Rigid structural calculations. Certified materials. Deflection tolerances checked against strict civil building codes.
            </p>
          </div>

          {/* Quick Index links */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] text-gold uppercase tracking-widest">[ QUICK INDEX ]</span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-arch-grey">
              <a href="#about" className="hover:text-gold transition-colors duration-300">01 // About Philosophy</a>
              <a href="#services" className="hover:text-gold transition-colors duration-300">02 // Civil Services</a>
              <a href="#blueprints" className="hover:text-gold transition-colors duration-300">03 // Interactive Blueprints</a>
              <a href="#process" className="hover:text-gold transition-colors duration-300">04 // Workflow Stages</a>
              <a href="#showcase" className="hover:text-gold transition-colors duration-300">05 // Active Portfolio</a>
              <a href="#contact" className="hover:text-gold transition-colors duration-300">06 // Coordinate Mapping</a>
            </div>
          </div>
        </motion.div>

        {/* Bottom copyright & disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            <span>SHREE UNIYA CONSTRUCTION © 2026 // ALL RIGHTS RESERVED</span>
          </div>
          <div className="text-center md:text-right text-[9px] text-gold/30">
            DISCLAIMER // PRE-LAUNCH CONCEPTUAL HOMEPAGE DEMO
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
