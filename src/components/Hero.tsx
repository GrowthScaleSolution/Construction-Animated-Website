'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, ShieldCheck, Ruler, Scale } from 'lucide-react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = ({ isMuted = true }: { isMuted?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotateDeg, setRotateDeg] = useState({ rX: 0, rY: 0 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
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
    const video = videoRef.current;
    if (!video) return;

    // Direct configuration settings
    video.preload = "metadata";

    // Intersection Observer to ensure video autoplays safely when visible, and pauses when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsVideoLoaded(true);
                })
                .catch((error) => {
                  console.log("Hero video autoplay failed or was prevented:", error);
                });
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(video);

    // Force call load to start buffering metadata
    video.load();

    return () => {
      observer.disconnect();
    };
  }, []);

  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-charcoal-dark text-white flex flex-col justify-between overflow-hidden pt-32 pb-12 px-6 md:px-12 select-none"
    >
      <motion.div 
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/videos/construction-hero-video-muted.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient Overlays for Readability and Vignette */}
      {/* Base overlay for general text contrast */}
      <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none" />
      
      {/* Left-to-right gradient: darker on the left to support the text, lighter on the right to show the video */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15 pointer-events-none" />
      
      {/* Bottom-up gradient for vignette/footer transition */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      
      {/* Edge vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 55%, rgba(0,0,0,0.45) 100%)' }} />
      
      {!isTouch && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 mix-blend-screen"
          style={{ background: `radial-gradient(circle 600px at ${coords.x}px ${coords.y}px, rgba(255, 200, 10, 0.08), transparent 60%)` }}
        />
      )}

      <motion.div 
        style={!isTouch ? {
          transform: `perspective(1000px) rotateX(${rotateDeg.rX}deg) rotateY(${rotateDeg.rY}deg)`,
          transformStyle: 'preserve-3d',
        } : undefined}
        className="relative z-10 w-full max-w-7xl mx-auto flex-grow flex flex-col justify-center transition-transform duration-300 ease-out"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start gap-4 md:gap-6 text-left">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold uppercase">
              Civil & Building Construction
            </span>
            
            <Heading level={1} className="text-white leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering <br />the Inevitable.
            </Heading>
 
            <p className="text-zinc-200 text-sm md:text-base tracking-wide max-w-lg font-light leading-relaxed mt-1 md:mt-2">
              Premium structural execution, concrete framing, and foundation engineering. Operating under strict, code-compliant parameters in Nallasopara, Mumbai.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end mt-4 lg:mt-0">
            <motion.div 
              style={!isTouch ? { x: rotateDeg.rY * 1.5, y: -rotateDeg.rX * 1.5 } : undefined}
              whileHover={{ scale: 1.02 }}
              className="relative bg-obsidian/85 border border-white/15 p-6 md:p-8 backdrop-blur-xl w-full max-w-md overflow-hidden group hover:bg-black/95 hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/75"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/40 transition-all duration-300 group-hover:border-gold group-hover:w-3 group-hover:h-3" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/40 transition-all duration-300 group-hover:border-gold group-hover:w-3 group-hover:h-3" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/40 transition-all duration-300 group-hover:border-gold group-hover:w-3 group-hover:h-3" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/40 transition-all duration-300 group-hover:border-gold group-hover:w-3 group-hover:h-3" />

              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-semibold text-gold uppercase tracking-widest">Quality Assurance</span>
                  <ShieldCheck className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                
                <h4 className="font-display font-semibold text-white text-base md:text-lg tracking-wide uppercase">
                  Structural Integrity
                </h4>
                
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  Every building core is cast to support complex vertical load stresses, ensuring lasting durability and safety.
                </p>

                <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/10 text-[11px] text-zinc-400 tracking-wide uppercase">
                  <div className="flex justify-between">
                    <span>Seismic Standard</span>
                    <span className="text-white font-medium">IS:1893</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Concrete Grade</span>
                    <span className="text-white font-medium">M25 Minimum</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-6 md:pt-8 gap-6 mt-8">
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 text-xs w-full overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <div className="flex items-center gap-3 shrink-0 group cursor-default">
            <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
              <Ruler className="w-3.5 h-3.5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium group-hover:text-gold transition-colors duration-300">Alignment Tolerance</span>
              <span className="text-[10px] text-zinc-300 font-mono">&lt; 2.0mm Plumb Dev</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 group cursor-default">
            <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium group-hover:text-gold transition-colors duration-300">Material Baseline</span>
              <span className="text-[10px] text-zinc-300 font-mono">Certified Concrete Mix</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 group cursor-default">
            <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
              <Scale className="w-3.5 h-3.5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium group-hover:text-gold transition-colors duration-300">Rebar Reinforcement</span>
              <span className="text-[10px] text-zinc-300 font-mono">Fe500D Seismic Steel</span>
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

      <motion.a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-[9px] font-mono tracking-[0.25em] text-arch-grey hover:text-gold transition-colors duration-500 hidden lg:flex group"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="uppercase tracking-widest text-white/50 group-hover:text-gold transition-colors">Explore</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1 group-hover:border-gold/50 transition-colors duration-300">
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.a>
    </section>
  );
};
export default Hero;
