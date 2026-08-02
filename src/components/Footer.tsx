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
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ), 
      url: '', 
      comingSoon: true 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ), 
      url: '', 
      comingSoon: true 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ), 
      url: '', 
      comingSoon: true 
    },
    { 
      name: 'WhatsApp', 
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.263 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.729-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.884-6.97C16.538 2.034 14.08 1.01 11.472 1.01c-5.462 0-9.902 4.375-9.905 9.802-.001 1.78.48 3.52 1.395 5.093l-1.002 3.66 3.79-.983zm11.233-5.597c-.31-.154-1.834-.894-2.113-.995-.28-.102-.483-.153-.686.153-.203.306-.785.995-.96 1.199-.177.204-.355.23-.665.077-1.13-.566-1.97-1.01-2.76-2.365-.205-.353-.022-.538.154-.712.16-.156.355-.408.533-.612.178-.205.237-.346.355-.578.118-.232.06-.434-.03-.587-.09-.153-.686-1.633-.94-2.245-.247-.598-.5-.516-.686-.525-.178-.009-.38-.01-.583-.01-.203 0-.533.076-.812.378-.28.303-1.066 1.03-1.066 2.51 0 1.48 1.092 2.908 1.245 3.112.152.204 2.15 3.25 5.207 4.545.727.308 1.293.493 1.734.63.73.23 1.396.198 1.922.12.585-.087 1.834-.74 2.088-1.455.253-.715.253-1.327.177-1.455-.076-.127-.28-.203-.59-.358z"/>
        </svg>
      ), 
      url: getWhatsAppLink('Hello Shree Umiya Construction, I visited your website and would like to connect.'), 
      comingSoon: false 
    },
  ];

  return (
    <footer className="bg-obsidian py-12 md:py-20 select-none concrete-texture relative">
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

      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        {/* Main top footer layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8"
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
            {/* Social Icons Row */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => {
                if (social.comingSoon) {
                  return (
                    <div
                      key={social.name}
                      title={`${social.name} (Coming Soon)`}
                      className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/20 cursor-not-allowed"
                    >
                      {social.icon}
                    </div>
                  );
                } else {
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-8 h-8 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center text-arch-grey hover:text-gold hover:bg-gold/10 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  );
                }
              })}
            </div>
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
              <a href="/about" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Brand Philosophy</a>
              <a href="/#blueprints" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Interactive Blueprints</a>
              <a href="/#showcase" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Active Portfolio</a>
              <a href="/contact" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Contact Us</a>
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
              <a href="/#services" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Structural RCC Framing</a>
              <a href="/#services" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Foundation Prep</a>
              <a href="/#services" className="relative pb-0.5 text-arch-grey hover:text-white transition-colors duration-300 w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300">Structural Masonry</a>
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
            <span>© {new Date().getFullYear()} SHREE UMIYA CONSTRUCTION. ALL RIGHTS RESERVED.</span>
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
