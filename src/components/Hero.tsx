'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, ShieldCheck, Ruler, Scale } from 'lucide-react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { motion } from 'framer-motion';

export const Hero = ({ isMuted = true }: { isMuted?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotateDeg, setRotateDeg] = useState({ rX: 0, rY: 0 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rX = parseFloat((((y / rect.height) - 0.5) * -6).toFixed(2));
    const rY = parseFloat((((x / rect.width) - 0.5) * 6).toFixed(2));
    
    setCoords({ x: parseFloat(x.toFixed(1)), y: parseFloat(y.toFixed(1)) });
    setRotateDeg({ rX, rY });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVideoLoaded) setIsVideoError(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-obsidian text-white flex flex-col justify-between overflow-hidden pt-32 pb-12 px-6 md:px-12 select-none"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsVideoLoaded(true)}
        onError={() => setIsVideoError(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0 opacity-15 grayscale ${
          isVideoLoaded && !isVideoError ? 'opacity-15' : 'opacity-0'
        }`}
      >
        <source src="/construction-hero-video-muted.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 construction-grid" />
      
      {!isTouch && (
        <>
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-30 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, rgba(255, 200, 10, 0.04), transparent 80%)` }}
          />
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1={coords.x} y1="0" x2={coords.x} y2="100%" stroke="rgba(255, 200, 10, 0.12)" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="0" y1={coords.y} x2="100%" y2={coords.y} stroke="rgba(255, 200, 10, 0.12)" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx={coords.x} cy={coords.y} r="2" fill="#FFC80A" className="opacity-60" />
          </svg>
        </>
      )}

      <div className="absolute bottom-28 left-6 md:left-12 font-mono text-[9px] text-white/20 z-10 flex-col gap-0.5 hidden lg:flex">
        <span>COORDS // X: {coords.x}px</span>
        <span>COORDS // Y: {coords.y}px</span>
        <span>SYS_STATUS // ACTIVE</span>
      </div>

      <motion.div 
        style={!isTouch ? {
          transform: `perspective(1000px) rotateX(${rotateDeg.rX}deg) rotateY(${rotateDeg.rY}deg)`,
          transformStyle: 'preserve-3d',
        } : undefined}
        className="relative z-10 w-full max-w-7xl mx-auto flex-grow flex flex-col justify-center transition-transform duration-300 ease-out"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start gap-4 md:gap-6 text-left">
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.35em] text-gold uppercase font-semibold">
              [ CIVIL & BUILDING CONSTRUCTION SERVICES ]
            </span>
            
            <Heading level={1} className="text-white leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering <br />the Inevitable.
            </Heading>

            <p className="text-arch-grey text-xs sm:text-sm md:text-base tracking-wide max-w-lg font-light leading-relaxed mt-1 md:mt-2">
              Premium structural execution, concrete framing, and foundation engineering. Operating under strict, code-compliant parameters in Nallasopara, Mumbai.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end mt-4 lg:mt-0">
            <div className="relative bg-charcoal-dark/45 border border-white/10 p-6 md:p-8 backdrop-blur-md w-full max-w-md overflow-hidden group">
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-gold/40" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-gold/40" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-gold/40" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-gold/40" />

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono text-gold uppercase tracking-[0.2em]">[ ENGINEERING FOCUS ]</span>
                  <ArrowUpRight className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                
                <h4 className="font-display font-semibold text-white text-sm md:text-base tracking-wide uppercase">
                  Project Integrity Check
                </h4>
                
                <p className="text-xs text-arch-grey leading-relaxed font-light">
                  Calibrating concrete compressive strengths and structural deflection indexes. Every building core is cast to support complex vertical load stresses.
                </p>

                <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-white/5 font-mono text-[9px] text-arch-grey">
                  <div className="flex justify-between">
                    <span>SEISMIC COMPLIANCE</span>
                    <span className="text-white">IS:1893 STANDARD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CONCRETE MIX AUDITS</span>
                    <span className="text-white">GRADE M25 MINIMUM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-6 md:pt-8 gap-6 mt-8">
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 text-xs w-full overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0">
              <Ruler className="w-3.5 h-3.5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium">Alignment Tolerance</span>
              <span className="text-[10px] text-arch-grey font-mono">&lt; 2.0mm Plumb Dev</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium">Material Baseline</span>
              <span className="text-[10px] text-arch-grey font-mono">Certified Concrete Mix</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0">
              <Scale className="w-3.5 h-3.5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium">Rebar Reinforcement</span>
              <span className="text-[10px] text-arch-grey font-mono">Fe500D Seismic Steel</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 mt-2 md:mt-0">
          <a href={getWhatsAppLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="accent" className="w-full px-7" isMuted={isMuted} soundType="cta">
              Connect on WhatsApp
            </Button>
          </a>
          <a href="#services" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full px-7" isMuted={isMuted} soundType="click">
              Review Specifications
            </Button>
          </a>
        </div>

      </div>

      <a href="#about" className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 text-[8px] font-mono tracking-[0.25em] text-arch-grey/40 hover:text-gold transition-colors duration-300 hidden lg:flex">
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-gold/50" />
      </a>
    </section>
  );
};
export default Hero;
