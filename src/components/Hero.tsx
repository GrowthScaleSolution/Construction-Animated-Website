'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);

  // Track cursor coordinates
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = parseFloat((e.clientX - rect.left).toFixed(1));
    const y = parseFloat((e.clientY - rect.top).toFixed(1));
    setCoords({ x, y });
  };

  // Safe timeout for video fallback detection
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVideoLoaded) {
        // Keeps fallback grid visible if video takes too long or fails
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-obsidian text-white flex flex-col justify-center items-center overflow-hidden py-24 px-6 md:px-12 select-none"
    >
      {/* 1. Backdrop Video Loop (Monochrome) */}
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

      {/* 2. Interactive SVG Fallback / Drafting Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 construction-grid" />
      
      {/* Interactive blueprint vertical/horizontal crosshair following cursor */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <line
          x1={coords.x}
          y1="0"
          x2={coords.x}
          y2="100%"
          stroke="rgba(255, 200, 10, 0.15)"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <line
          x1="0"
          y1={coords.y}
          x2="100%"
          y2={coords.y}
          stroke="rgba(255, 200, 10, 0.15)"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        {/* Subtle coordinate dot */}
        <circle cx={coords.x} cy={coords.y} r="2" fill="#FFC80A" className="opacity-60" />
      </svg>

      {/* Live tracking coordinates readout */}
      <div className="absolute bottom-16 left-6 md:left-12 font-mono text-[10px] text-gold/60 z-10 flex flex-col gap-1">
        <span>COORDS // X: {coords.x}px</span>
        <span>COORDS // Y: {coords.y}px</span>
        <span>GRID_LOCK // ACTIVE</span>
      </div>

      {/* Sheet details (structural text decoration) */}
      <div className="absolute top-28 right-6 md:right-12 font-mono text-[9px] text-white/20 z-10 text-right uppercase tracking-[0.2em] hidden md:block">
        <span>ESTD // 2026 // NALLASOPARA_MUMBAI</span>
        <br />
        <span>REF_ID // SUC_HERO_DRAW_01</span>
      </div>

      {/* 3. Hero content */}
      <div className="max-w-4xl text-center flex flex-col items-center gap-8 z-10">
        <span className="text-[10px] font-mono tracking-[0.4em] text-gold uppercase font-semibold">
          [ CIVIL & BUILDING CONSTRUCTION SERVICES ]
        </span>
        
        <Heading level={1} className="text-white max-w-3xl leading-[1.1]">
          Engineering the Inevitable.
        </Heading>

        <p className="text-arch-grey text-sm md:text-base tracking-wide max-w-2xl font-light leading-relaxed">
          Premium structural execution, concrete framing, and foundation engineering. Operating under strict, code-compliant quality controls in Nallasopara, Mumbai.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="accent">
              Connect on WhatsApp
            </Button>
          </a>
          <a href="#services">
            <Button variant="secondary">
              Review Specifications
            </Button>
          </a>
        </div>
      </div>

      {/* 4. Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-[9px] font-mono tracking-[0.3em] text-arch-grey/60 hover:text-gold transition-colors duration-300"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold/70" />
      </a>
    </section>
  );
};
export default Hero;
