'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMuted, onToggleSound }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section links
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blueprints', href: '#blueprints' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-obsidian/90 border-white/5 py-4 backdrop-blur-md'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Branding wordmark */}
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-sans font-medium text-arch-grey/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold transition-colors duration-300 relative py-1 group"
            >
              {link.name}
              {/* Sliding gold line under link on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-6">
          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="text-arch-grey hover:text-gold transition-colors duration-300 p-2 cursor-pointer flex items-center gap-2"
            title={isMuted ? 'Unmute UI audio' : 'Mute UI audio'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">MUTED</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-gold" />
                <div className="flex gap-0.5 items-end h-2.5">
                  <span className="w-0.5 bg-gold animate-bounce" style={{ height: '70%', animationDelay: '0.1s' }} />
                  <span className="w-0.5 bg-gold animate-bounce" style={{ height: '100%', animationDelay: '0.2s' }} />
                  <span className="w-0.5 bg-gold animate-bounce" style={{ height: '40%', animationDelay: '0.3s' }} />
                </div>
              </>
            )}
          </button>

          {/* WhatsApp CTA */}
          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="px-5 py-2.5 text-[10px]" isMuted={isMuted} soundType="click">
              Get Estimate
            </Button>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={onToggleSound}
            className="text-arch-grey hover:text-gold transition-colors duration-300 p-2"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-gold" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gold transition-colors duration-300 p-2"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-obsidian border-b border-white/10 flex flex-col p-6 gap-6 font-sans text-xs tracking-widest uppercase overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-arch-grey hover:text-gold py-2 transition-colors duration-300 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2"
            >
              <Button variant="accent" className="w-full" isMuted={isMuted} soundType="cta">
                Get Estimate (WhatsApp)
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
