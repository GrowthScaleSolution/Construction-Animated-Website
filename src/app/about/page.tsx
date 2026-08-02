'use client';

import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Button from '@/components/ui/Button';
import { playClickSound, preloadAudioFiles, prewarmAudio } from '@/lib/sound';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ClipboardCheck, ArrowRight, ArrowDownRight, Compass, Settings, Ruler, Maximize, MapPin } from 'lucide-react';
import Image from 'next/image';

// Animation Helpers
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
  }
};

const itemFadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const itemFadeLeft: any = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const slowScaleMask: any = {
  hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.05 },
  visible: { 
    clipPath: "inset(0% 0 0 0)", 
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function AboutPage() {
  const [isMuted, setIsMuted] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis smooth scrolling for desktop
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Synchronize sound settings
  useEffect(() => {
    const storedMute = localStorage.getItem('suc_sound_muted');
    if (storedMute !== null) {
      const isMutedVal = storedMute === 'true';
      setIsMuted(isMutedVal);
      if (!isMutedVal) {
        preloadAudioFiles();
        prewarmAudio();
      }
    }
  }, []);

  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem('suc_sound_muted', String(nextMuted));
    playClickSound(nextMuted);
  };

  // Scroll Progress Hooks
  const { scrollYProgress: globalScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: processScroll } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });

  // Parallax Transforms
  const heroY = useTransform(globalScroll, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(globalScroll, [0, 0.15], [1, 0]);
  
  const storyImageY = useTransform(storyScroll, [0, 1], ["-10%", "10%"]);
  const processLineHeight = useTransform(processScroll, [0, 1], ["0%", "100%"]);

  // Active state for What We Stand For accordion
  const [activeValueIndex, setActiveValueIndex] = useState<number | null>(0);

  return (
    <div ref={containerRef} className="min-h-screen bg-obsidian text-white relative font-sans antialiased selection:bg-gold selection:text-obsidian flex flex-col overflow-hidden">
      <Navbar isMuted={isMuted} onToggleSound={handleToggleSound} />

      <main className="flex-grow flex flex-col z-10 bg-obsidian">
        
        {/* 1. Editorial About Hero (DEEP CHARCOAL) */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-obsidian border-b border-white/5">
          {/* Subtle industrial texture */}
          <div className="absolute inset-0 bg-[url('/images/hero-video-poster.png')] bg-[length:200px_200px] opacity-[0.02] mix-blend-screen pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Massive Typographic Left Block */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-7 flex flex-col items-start gap-8 z-20"
              >
                <div className="flex flex-col gap-2">
                  <motion.div variants={itemFadeLeft} className="flex items-center gap-3">
                    <motion.span 
                      initial={{ scaleX: 0, transformOrigin: 'left' }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                      className="w-12 h-[1px] bg-gold" 
                    />
                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-gold uppercase">Shree Umiya Construction</span>
                  </motion.div>
                  
                  <motion.h1 variants={itemFadeUp} className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white uppercase tracking-tight leading-[0.95] mt-4">
                    Built on <span className="text-zinc-500 block">Planning.</span>
                    Delivered with <span className="text-gold block relative inline-block">
                      Responsibility.
                      {/* Blueprint tick mark accent */}
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="absolute -bottom-2 -right-4 w-3 h-3 border-b border-r border-gold/40"
                      />
                    </span>
                  </motion.h1>
                </div>

                <motion.div variants={itemFadeUp} className="relative pl-6 mt-4">
                  <motion.div 
                    initial={{ scaleY: 0, transformOrigin: 'top' }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10"
                  />
                  <p className="text-zinc-300 text-sm md:text-base lg:text-lg tracking-wide max-w-md font-light leading-relaxed">
                    Civil construction and structural engineering driven by absolute discipline, practical site execution, and an uncompromising dedication to structural integrity based in Nallasopara, Mumbai.
                  </p>
                </motion.div>

                <motion.div variants={itemFadeUp} className="mt-4">
                  <a href="#company-story" className="inline-flex items-center gap-3 text-arch-grey text-xs font-semibold uppercase tracking-[0.2em] hover:text-white transition-colors group cursor-pointer">
                    Read Our Story <ArrowDownRight className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Architectural Asymmetric Image Panel */}
              <motion.div 
                style={{ y: shouldReduceMotion ? 0 : heroY, opacity: shouldReduceMotion ? 1 : heroOpacity }}
                className="lg:col-span-5 relative h-[50vh] lg:h-[75vh] w-full mt-8 lg:mt-0"
              >
                <div className="absolute inset-0 bg-section-alt1 border border-white/10 shadow-2xl p-4 overflow-hidden group">
                  {/* Drafting corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40 z-20" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40 z-20" />
                  
                  <motion.div 
                    variants={slowScaleMask}
                    initial="hidden"
                    animate="visible"
                    className="relative w-full h-full overflow-hidden filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  >
                    <Image 
                      src="/images/about-construction-site.jpeg"
                      alt="Construction Site Overview"
                      fill
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000" />
                  </motion.div>

                  {/* Measurement Accent */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-8 flex items-end gap-4 z-20 mix-blend-difference opacity-50"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] font-mono tracking-widest uppercase text-white">Elevation</span>
                      <span className="text-xs font-mono tracking-widest text-gold">+0.00m</span>
                    </div>
                    <div className="w-[1px] h-12 bg-gold/50" />
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. Company Story - Asymmetric Layout (SOFT CONCRETE GREY) */}
        <section id="company-story" ref={storyRef} className="relative py-24 md:py-32 bg-[#dfdfe4] border-t border-[#d4d4d8] overflow-hidden">
          
          {/* Subtle architectural background visual (faded construction model lines) */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.04] mix-blend-multiply pointer-events-none">
             <Image 
              src="/images/about/about-process-blueprint-temp.webp"
              alt="Background Blueprint Pattern"
              fill
              className="object-cover object-right filter grayscale contrast-150"
             />
          </div>
          
          {/* Subtle blueprint grid in concrete theme */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Landscape Editorial Image Left */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0 overflow-hidden bg-[#eef0f2] p-2 border border-obsidian/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <motion.div 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative overflow-hidden group"
              >
                <motion.div 
                  style={{ y: shouldReduceMotion ? 0 : storyImageY }}
                  className="absolute -inset-10"
                >
                  <Image 
                    src="/images/about/about-company-story-temp.webp"
                    alt="Engineer reviewing work at an active construction site"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </motion.div>
                
                {/* No heavy black overlays. Just a very subtle bottom fade for depth. */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                
                {/* Subtle border framing inside the image */}
                <div className="absolute inset-2 border border-white/20 pointer-events-none z-10" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-gold/40 rounded-full flex items-center justify-center pointer-events-none group-hover:scale-110 group-hover:border-gold transition-all duration-700">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Wide Text Block Right (Dark Text) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 flex flex-col gap-8 lg:pl-10 relative z-10"
            >
              <div className="flex flex-col gap-4">
                <motion.h2 variants={itemFadeUp} className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] uppercase tracking-tight leading-[1.1]">
                  A Foundation of <br/><span className="text-zinc-500">Professionalism</span>
                </motion.h2>
                <motion.div variants={itemFadeLeft} className="w-16 h-[2px] bg-gold mt-2" />
              </div>

              <motion.div variants={containerVariants} className="flex flex-col gap-6 text-[#3a3a3e] text-sm md:text-base font-medium leading-relaxed">
                <motion.p variants={itemFadeUp}>
                  Shree Umiya Construction was established to provide highly reliable, technically sound civil construction services. We focus heavily on the physical reality of building—managing materials, coordinating labor, and executing architectural blueprints with absolute precision.
                </motion.p>
                <motion.p variants={itemFadeUp}>
                  Unlike firms that focus merely on surface aesthetics, our core strength lies in structural integrity. From foundation excavation and RCC framing to the final masonry, we ensure every stage is governed by strict engineering standards and clear client communication.
                </motion.p>
                <motion.p variants={itemFadeUp}>
                  We are not just contractors; we are practical execution partners dedicated to translating complex requirements into enduring, high-quality structures safely and responsibly.
                </motion.p>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* 3. How We Think Before We Build - Inspection Board / Sticky Style (MID-DARK GRAPHITE) */}
        <section ref={processRef} className="relative bg-[#1a1a1a] border-t border-[#2a2a2a] overflow-hidden">
          {/* Subtle canvas/concrete texture for rich dark background */}
          <div className="absolute inset-0 bg-[url('/images/hero-video-poster.png')] bg-[length:150px_150px] opacity-[0.03] mix-blend-screen pointer-events-none z-0" />
          
          {/* Architectural Blueprint Background */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-screen pointer-events-none z-0">
             <Image 
              src="/images/about/about-process-blueprint-temp.webp"
              alt="Construction blueprint and structural planning illustration"
              fill
              className="object-cover object-center filter grayscale contrast-125"
             />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
            
            {/* Left Sticky Header */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32 flex flex-col gap-6">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase flex items-center gap-3"
                >
                  <Settings className="w-4 h-4" />
                  Process & Discipline
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[1.1]"
                >
                  How We Think <br/><span className="text-zinc-500">Before We Build</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-sm mt-4"
                >
                  A structured inspection board detailing our methodical approach from the first site visit to final project handover.
                </motion.p>
              </div>
            </div>

            {/* Right Vertical Flow */}
            <div className="lg:col-span-7 flex flex-col relative pt-4">
              
              {/* Static faint background line */}
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/5 hidden sm:block pointer-events-none" />
              
              {/* Animated active highlight line */}
              <motion.div 
                style={{ height: shouldReduceMotion ? "100%" : processLineHeight }}
                className="absolute left-6 top-0 w-[2px] bg-gold hidden sm:block pointer-events-none origin-top shadow-[0_0_10px_rgba(255,200,0,0.5)]" 
              />

              {[
                { step: '01', title: 'Site Condition', desc: 'Evaluating soil, topography, existing structures, and local environmental constraints before any material is moved.' },
                { step: '02', title: 'Requirement Understanding', desc: 'Deep-diving into client blueprints, load-bearing requirements, and functional use-cases for the final structure.' },
                { step: '03', title: 'Planning & Phasing', desc: 'Developing a realistic timeline, defining material phases, and organizing labor schedules to ensure non-stop execution.' },
                { step: '04', title: 'Work & Material Coordination', desc: 'Sourcing high-grade materials and aligning delivery logistics strictly with the daily on-site work progress.' },
                { step: '05', title: 'Execution & Safety', desc: 'Implementing the build with rigorous adherence to structural safety protocols and engineering best practices.' },
                { step: '06', title: 'Final Review', desc: 'Conducting comprehensive quality checks, load tests, and finishing inspections before project handover.' }
              ].map((phase, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-6 relative group py-8 sm:py-12 border-b border-white/5 last:border-0"
                >
                  {/* Step Node */}
                  <motion.div 
                    whileInView={{ backgroundColor: "rgba(255,200,0,0.1)", borderColor: "rgba(255,200,0,0.5)" }}
                    viewport={{ margin: "-50% 0px -50% 0px" }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-obsidian border border-white/10 rounded-none flex items-center justify-center shrink-0 relative z-10 transition-colors duration-300"
                  >
                    <motion.span 
                      whileInView={{ color: "#FFC800" }}
                      viewport={{ margin: "-50% 0px -50% 0px" }}
                      className="font-mono text-sm text-zinc-500 transition-colors duration-300"
                    >
                      {phase.step}
                    </motion.span>
                    {/* Active pulse dot on hover */}
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_5px_#FFC800]" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-3 mt-2">
                    <motion.h4 
                      whileInView={{ color: "#ffffff" }}
                      viewport={{ margin: "-50% 0px -50% 0px" }}
                      className="font-display font-semibold text-lg md:text-xl text-zinc-400 uppercase tracking-wide transition-colors duration-300"
                    >
                      {phase.title}
                    </motion.h4>
                    <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-lg">
                      {phase.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </section>

        {/* 4. What We Stand For - Full Width Accordion/List Style (SOFT CONCRETE GREY) */}
        <section className="relative py-24 md:py-32 bg-[#e6e6e9] border-t border-[#d4d4d8] overflow-hidden">
          {/* Subtle structural diagram background visual */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-[0.03] mix-blend-multiply pointer-events-none z-0">
             <Image 
              src="/images/about/about-values-lineart-temp.webp"
              alt="Structural model and architectural line art"
              fill
              className="object-cover object-left filter grayscale contrast-125"
             />
          </div>

          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-16 relative z-10">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
            >
              <div className="flex flex-col gap-3">
                <motion.span variants={itemFadeUp} className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-zinc-600 uppercase">Core Values</motion.span>
                <motion.h2 variants={itemFadeUp} className="font-display font-bold text-3xl sm:text-4xl text-[#1a1a1a] uppercase tracking-tight">
                  What We Stand For
                </motion.h2>
              </div>
            </motion.div>

            {/* List Layout with dark graphite borders */}
            <div className="flex flex-col border-t border-obsidian/10">
              {[
                { title: 'Practical Planning', desc: 'We do not sell impossible timelines. Every project schedule is built on realistic logistics, realistic material procurement, and realistic labor management.', icon: Ruler },
                { title: 'Reliable Execution', desc: 'Our word is our bond. Once a blueprint is approved, we execute exactly as designed, ensuring structural stability takes precedence over shortcuts.', icon: Compass },
                { title: 'Quality Workmanship', desc: 'From the depth of the foundation to the final coat of plaster, we utilize skilled labor and high-grade materials to guarantee enduring quality.', icon: Maximize },
                { title: 'Clear Communication', desc: 'Clients are kept entirely in the loop. No hidden costs, no surprise delays. We communicate progress transparently at every project milestone.', icon: ClipboardCheck }
              ].map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onMouseEnter={() => setActiveValueIndex(idx)}
                  className={`group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-10 border-b border-obsidian/10 overflow-hidden cursor-default transition-all duration-700
                    ${activeValueIndex === idx ? 'bg-[#f4f4f6] border-l-2 border-l-gold shadow-sm' : 'hover:bg-[#f4f4f6]/50 border-l-2 border-l-transparent'}`}
                >
                  <div className="flex items-center gap-6 md:gap-12 flex-1 relative z-10">
                    <span className={`font-mono text-xl md:text-2xl transition-colors duration-500 ${activeValueIndex === idx ? 'text-gold' : 'text-zinc-400'}`}>0{idx + 1}</span>
                    <h3 className={`font-display font-semibold text-xl md:text-3xl uppercase tracking-wide transition-colors duration-500 ${activeValueIndex === idx ? 'text-[#1a1a1a]' : 'text-zinc-600'}`}>
                      {value.title}
                    </h3>
                  </div>
                  
                  <div className="flex-1 md:max-w-md relative z-10">
                    <p className={`text-sm font-medium leading-relaxed transition-colors duration-500 ${activeValueIndex === idx ? 'text-zinc-700' : 'text-zinc-500'}`}>
                      {value.desc}
                    </p>
                  </div>

                  <div className="hidden md:flex shrink-0 items-center justify-center w-16 h-16 bg-[#e6e6e9] border border-obsidian/5 relative z-10 overflow-hidden">
                    {/* Icon container lifts gently on hover */}
                    <motion.div 
                      animate={{ y: activeValueIndex === idx ? -2 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className={`w-6 h-6 transition-all duration-500 ${activeValueIndex === idx ? 'text-gold' : 'text-zinc-500'}`} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </section>

        {/* 5. Site Discipline / Work Standards - Tech Spec Grid (IMAGE-LED / HYBRID) */}
        <section className="relative py-24 md:py-32 border-t border-obsidian/10 overflow-hidden min-h-[80vh] flex items-center">
          {/* Full bleed faded daylight image background */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/about-execution-temp.webp"
              alt="Organized active civil construction site"
              fill
              className="object-cover object-center opacity-80"
            />
            {/* Localized dark gradient strictly for text readability on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/70 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:col-span-5 flex flex-col gap-6 drop-shadow-xl"
            >
              <motion.span variants={itemFadeUp} className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase">Site Standards</motion.span>
              <motion.h2 variants={itemFadeUp} className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[1.1]">
                Execution <br/><span className="text-zinc-300">Discipline</span>
              </motion.h2>
              <motion.p variants={itemFadeUp} className="text-zinc-200 text-sm md:text-base font-light leading-relaxed max-w-sm mt-4">
                A chaotic site leads to a compromised structure. We maintain strict organizational discipline to ensure quality and safety on every live floor.
              </motion.p>
            </motion.div>

            {/* Clean translucent light panels */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-obsidian/10 backdrop-blur-sm p-px"
            >
              {[
                { title: 'Material Coordination', text: 'On-time procurement and safe, dry storage of sensitive materials like cement and steel.' },
                { title: 'Site Clarity', text: 'Maintaining clear, hazard-free pathways and organized work zones for daily labor efficiency.' },
                { title: 'Progress Reporting', text: 'Weekly photographic updates mapping physical execution against the initial blueprint.' },
                { title: 'Execution Quality', text: 'Daily inspections of formwork, rebar tying, and concrete curing processes.' }
              ].map((std, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemFadeUp}
                  className="bg-[#eef0f2]/95 backdrop-blur-xl p-8 md:p-10 flex flex-col gap-4 relative group hover:bg-white transition-colors duration-500 overflow-hidden border border-white/50"
                >
                  {/* Subtle drawing line top border on hover */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700 ease-out" />
                  
                  <div className="w-8 h-8 bg-zinc-200 border border-zinc-300 flex items-center justify-center font-mono text-[10px] text-zinc-600 group-hover:bg-gold group-hover:text-obsidian group-hover:border-gold transition-colors duration-500">
                    S{idx + 1}
                  </div>
                  <h4 className="font-display font-semibold text-lg text-obsidian uppercase tracking-wide mt-2">{std.title}</h4>
                  <p className="text-sm text-zinc-600 font-medium leading-relaxed">{std.text}</p>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </section>

        {/* 6. Local Presence (MEDIUM-SOFT GREY) */}
        <section className="relative py-24 md:py-32 border-t border-zinc-300 bg-[#d4d4d8] overflow-hidden flex flex-col items-center justify-center">
          
          {/* Background Mumbai Construction Visual */}
          <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.05] mix-blend-multiply pointer-events-none z-0">
            <Image 
              src="/images/about/about-mumbai-temp.webp"
              alt="Civil construction site in the Mumbai region"
              fill
              className="object-cover object-right filter grayscale contrast-125"
            />
          </div>

          {/* Enhanced structural/map background for richer local feel */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
            {/* Drafting Grid */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            {/* Regional expansion rings */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-obsidian/40 rounded-full" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-obsidian/20 rounded-full" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-obsidian/10 rounded-full" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#eef0f2]/90 via-transparent to-transparent pointer-events-none z-0" />
          
          <div className="max-w-4xl mx-auto px-4 xs:px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-16 h-16 bg-[#eef0f2] border border-gold/40 rounded-full flex items-center justify-center relative shadow-lg"
              >
                <MapPin className="w-6 h-6 text-gold relative z-10" />
                <div className="absolute inset-0 border border-gold rounded-full animate-ping opacity-40" style={{ animationDuration: '3s' }} />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-zinc-600 uppercase"
              >
                Nallasopara &bull; Vasai &bull; Virar &bull; Mumbai Region
              </motion.span>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="flex flex-col gap-4"
            >
              <motion.h2 variants={itemFadeUp} className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] uppercase tracking-tight">
                Grounded in <span className="text-gold">Mumbai</span>
              </motion.h2>
              <motion.p variants={itemFadeUp} className="text-zinc-700 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
                Headquartered in Nallasopara, Shree Umiya Construction supports rigorous civil and structural projects across the broader Mumbai and Maharashtra region. We are local, accountable, and deeply familiar with regional construction demands.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* 7. Final Conversion CTA Section (DEEP CHARCOAL) */}
        <section className="relative py-32 md:py-40 border-t border-obsidian/10 overflow-hidden bg-obsidian flex flex-col items-center">
          <div className="absolute inset-3 md:inset-6 border border-white/10 rounded-sm z-10 pointer-events-none" />
          <div className="absolute inset-6 md:inset-10 border border-white/5 rounded-sm z-10 pointer-events-none" />
          
          {/* Enhanced Blueprint/Structural background texture */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0" 
          >
            <Image 
              src="/images/about/about-cta-temp.webp"
              alt="Dark architectural blueprint and structural frame"
              fill
              className="object-cover filter grayscale contrast-125"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[url('/images/hero-video-poster.png')] bg-[length:150px_150px] opacity-[0.03] mix-blend-screen pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian z-0" />
          
          {/* Top glowing laser line */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 300 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
            className="absolute top-3 md:top-6 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent z-10 shadow-[0_0_15px_rgba(255,200,0,0.5)]" 
          />

          <div className="max-w-4xl mx-auto px-4 xs:px-6 relative z-10 flex flex-col items-center text-center gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemFadeUp}
              className="w-20 h-20 bg-obsidian/80 border border-gold/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(255,200,0,0.1)] rounded-sm"
            >
              <ClipboardCheck className="w-8 h-8 text-gold" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex flex-col gap-6 items-center"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05] max-w-3xl drop-shadow-lg">
                <span className="block overflow-hidden"><motion.span className="block" variants={itemFadeUp}>Ready to Discuss</motion.span></span>
                <span className="block overflow-hidden text-gold"><motion.span className="block" variants={itemFadeUp}>Your Project?</motion.span></span>
              </h2>
              <motion.p variants={itemFadeUp} className="text-zinc-300 text-base md:text-lg font-light max-w-xl leading-relaxed drop-shadow-md">
                Contact Shree Umiya Construction to arrange a site visit or discuss your structural requirements with our engineering team.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemFadeUp}
              className="flex flex-col items-center gap-6 w-full mt-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a href={getWhatsAppLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="accent" className="w-full sm:w-auto px-12 py-5 text-sm tracking-widest shadow-[0_0_20px_rgba(255,200,0,0.3)] hover:shadow-[0_0_35px_rgba(255,200,0,0.5)] transition-shadow duration-300 group" isMuted={isMuted} soundType="cta">
                    <span className="flex items-center gap-2 font-semibold">Start WhatsApp Enquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                  </Button>
                </a>
                <a href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-12 py-5 text-sm tracking-widest border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-md bg-obsidian/50 transition-colors duration-300" isMuted={isMuted} soundType="click">
                    View Contact Details
                  </Button>
                </a>
              </div>
              
              {/* Trust strip */}
              <div className="flex items-center gap-3 text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                <span>Quick Response</span>
                <span className="w-1 h-1 rounded-full bg-gold/50" />
                <span>Site-Based Discussion</span>
                <span className="w-1 h-1 rounded-full bg-gold/50" />
                <span>Regional Support</span>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer isMuted={isMuted} />
      <WhatsAppCTA isMuted={isMuted} />
    </div>
  );
}
