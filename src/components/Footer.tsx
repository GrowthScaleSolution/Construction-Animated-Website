'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { ChevronUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-white/5 py-16 md:py-20 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Main top footer layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Logo />
            <p className="text-xs text-arch-grey leading-relaxed max-w-xs font-light">
              Premium structural execution, concrete framing, and foundation engineering in Mumbai's western nodes.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-display font-semibold text-white text-sm tracking-wide">Quick Links</span>
            <div className="flex flex-col gap-3 text-sm text-arch-grey font-light">
              <a href="#about" className="hover:text-gold transition-colors duration-300 w-max">Brand Philosophy</a>
              <a href="#blueprints" className="hover:text-gold transition-colors duration-300 w-max">Interactive Blueprints</a>
              <a href="#showcase" className="hover:text-gold transition-colors duration-300 w-max">Active Portfolio</a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-display font-semibold text-white text-sm tracking-wide">Civil Services</span>
            <div className="flex flex-col gap-3 text-sm text-arch-grey font-light">
              <a href="#services" className="hover:text-gold transition-colors duration-300 w-max">Structural RCC Framing</a>
              <a href="#services" className="hover:text-gold transition-colors duration-300 w-max">Foundation Prep</a>
              <a href="#services" className="hover:text-gold transition-colors duration-300 w-max">Structural Masonry</a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-display font-semibold text-white text-sm tracking-wide">Connect</span>
            <div className="flex flex-col gap-3 text-sm text-arch-grey font-light">
              <span className="text-white">Nallasopara, Mumbai</span>
              <a href={getWhatsAppLink('Hello')} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300 w-max">+91 97658 02900</a>
            </div>
            <a href={getWhatsAppLink('Hello, I would like to request a site visit.')} target="_blank" rel="noopener noreferrer" className="mt-2 w-max">
              <Button variant="outline" className="px-6 py-2.5 text-xs" isMuted={true} soundType="click">
                Request Site Visit
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Bottom copyright & back to top */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/40"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center text-center md:text-left">
            <span>© {new Date().getFullYear()} SHREE UNIYA CONSTRUCTION. ALL RIGHTS RESERVED.</span>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 hover:text-gold transition-colors duration-300 group uppercase tracking-widest"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
              <ChevronUp className="w-4 h-4 text-white group-hover:text-gold group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
