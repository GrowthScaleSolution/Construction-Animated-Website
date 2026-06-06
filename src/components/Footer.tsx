'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { ChevronUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';

interface FooterProps {
  isMuted?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isMuted = true }) => {
  return (
    <footer className="bg-obsidian py-16 md:py-20 select-none concrete-texture relative">
      {/* Expanding gold top border reveal on scroll */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-gradient-to-r from-transparent via-gold/45 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Main top footer layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col gap-6 lg:col-span-1"
          >
            <Logo />
            <p className="text-xs text-arch-grey leading-relaxed max-w-xs font-light">
              Premium structural execution, concrete framing, and foundation engineering in Mumbai's western nodes.
            </p>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col gap-5"
          >
            <span className="font-display font-semibold text-white text-sm tracking-wide">Quick Links</span>
            <div className="flex flex-col gap-3 text-sm text-arch-grey font-light">
              <a href="#about" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Brand Philosophy</a>
              <a href="#blueprints" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Interactive Blueprints</a>
              <a href="#showcase" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Active Portfolio</a>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col gap-5"
          >
            <span className="font-display font-semibold text-white text-sm tracking-wide">Civil Services</span>
            <div className="flex flex-col gap-3 text-sm text-arch-grey font-light">
              <a href="#services" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Structural RCC Framing</a>
              <a href="#services" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Foundation Prep</a>
              <a href="#services" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Structural Masonry</a>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col gap-5"
          >
            <span className="font-display font-semibold text-white text-sm tracking-wide">Connect</span>
            <div className="flex flex-col gap-3 text-sm text-arch-grey font-light">
              <span className="text-white">Nallasopara, Mumbai</span>
              <a href={getWhatsAppLink('Hello')} target="_blank" rel="noopener noreferrer" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">+91 97658 02900</a>
            </div>
            <a href={getWhatsAppLink('Hello, I would like to request a site visit.')} target="_blank" rel="noopener noreferrer" className="mt-2 w-max hover:-translate-y-0.5 transition-transform duration-300 inline-block">
              <Button variant="outline" className="px-6 py-2.5 text-xs" isMuted={isMuted} soundType="click">
                Request Site Visit
              </Button>
            </a>
          </motion.div>
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
            className="flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300 group uppercase tracking-widest cursor-pointer"
          >
            <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 group-hover:after:w-full after:bg-gold after:transition-all after:duration-300">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
              <ChevronUp className="w-4 h-4 text-white group-hover:text-gold group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
