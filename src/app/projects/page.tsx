'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { playClickSound, preloadAudioFiles, prewarmAudio } from '@/lib/sound';
import { X, ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, Info } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const galleryItemsData = [
  { id: 1, title: 'Commercial Core Execution', img: '/images/projects/filter-examples/ongoing-example-temp.jpg', cat: 'Ongoing', categoryMatch: ['Ongoing', 'Civil Construction'], sizeClass: 'md:col-span-8 md:row-span-2' },
  { id: 2, title: 'Completed Tower Facade', img: '/images/projects/filter-examples/completed-example-temp.jpg', cat: 'Completed', categoryMatch: ['Completed', 'Civil Construction'], sizeClass: 'md:col-span-4 md:row-span-2' },
  { id: 3, title: 'Structural Framing Detail', img: '/images/projects/filter-examples/structural-work-example-temp.jpg', cat: 'Structural Work', categoryMatch: ['Ongoing', 'Structural Work'], sizeClass: 'md:col-span-4' },
  { id: 4, title: 'Mass Concrete Shell', img: '/images/projects/filter-examples/civil-construction-example-temp.jpg', cat: 'Civil Construction', categoryMatch: ['Ongoing', 'Civil Construction'], sizeClass: 'md:col-span-4' },
  { id: 5, title: 'Interior Renovation Phase', img: '/images/projects/filter-examples/renovation-example-temp.jpg', cat: 'Renovation', categoryMatch: ['Ongoing', 'Renovation'], sizeClass: 'md:col-span-4' },
  { id: 6, title: 'Foundation Steel Grid', img: '/images/projects/filter-examples/rcc-foundation-example-temp.jpg', cat: 'RCC / Foundation', categoryMatch: ['Ongoing', 'RCC / Foundation', 'Structural Work'], sizeClass: 'md:col-span-4' },
];

export default function ProjectsPage() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    prewarmAudio();
    const muted = localStorage.getItem('siteMuted') === 'true';
    setIsMuted(muted);
    preloadAudioFiles();
  }, []);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem('siteMuted', String(nextMuted));
    playClickSound(nextMuted);
  };

  const categories = [
    'All', 'Ongoing', 'Completed', 'Civil Construction', 'Structural Work', 'Renovation', 'RCC / Foundation'
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItemsData 
    : galleryItemsData.filter(item => item.categoryMatch.includes(activeCategory));

  const handleScrollToProjects = () => {
    const el = document.getElementById('project-collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lightbox handlers
  const openLightbox = (index: number, e: React.MouseEvent<HTMLElement>) => {
    returnFocusRef.current = e.currentTarget as HTMLElement;
    setSelectedProjectIndex(index);
    if (!isMuted) playClickSound(isMuted);
  };

  const closeLightbox = useCallback(() => {
    setSelectedProjectIndex(null);
    if (!isMuted) playClickSound(isMuted);
    if (returnFocusRef.current) {
      returnFocusRef.current.focus();
    }
  }, [isMuted]);

  const nextProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProjectIndex === null) return;
    if (!isMuted) playClickSound(isMuted);
    setSelectedProjectIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [selectedProjectIndex, filteredItems.length, isMuted]);

  const prevProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProjectIndex === null) return;
    if (!isMuted) playClickSound(isMuted);
    setSelectedProjectIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedProjectIndex, filteredItems.length, isMuted]);

  // Lock scroll and handle keyboard
  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextProject();
        if (e.key === 'ArrowLeft') prevProject();
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProjectIndex, closeLightbox, nextProject, prevProject]);

  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-gold/30 selection:text-gold flex flex-col font-sans overflow-x-hidden">
      <Navbar isMuted={isMuted} onToggleSound={toggleSound} />

      <main className="flex-1 flex flex-col w-full relative z-10">
        
        {/* 1. PROJECT GALLERY HERO */}
        <section className="relative pt-[120px] pb-12 md:pt-[140px] md:pb-16 bg-[#1a1a1a] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-8 lg:gap-10 relative z-10">
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 max-w-3xl"
            >
              <motion.span variants={fadeUp} className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">PROJECTS / GALLERY</motion.span>
              
              <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[1.05]">
                BUILT THROUGH PLANNING.<br/>
                <span className="text-zinc-400">PROVEN THROUGH EXECUTION.</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-zinc-400 font-light text-base md:text-lg leading-relaxed max-w-xl">
                A curated view of construction stages, structural work and project execution.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <Button variant="primary" className="w-full sm:w-auto text-sm" isMuted={isMuted} soundType="click" onClick={handleScrollToProjects}>
                  Explore Project Work
                </Button>
                <a href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto text-sm bg-transparent border-white/20 text-white hover:bg-white hover:text-obsidian" isMuted={isMuted}>
                    Discuss Your Project
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Gallery Composition (Thin Border) */}
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(10% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-obsidian border border-white/10 rounded-lg md:rounded-xl overflow-hidden shadow-2xl mt-2 md:mt-4"
            >
              <Image 
                src="/images/projects/projects-hero-temp.webp"
                alt="Construction gallery overview"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-obsidian/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-sm pointer-events-none">
                <span className="text-gold font-mono text-[9px] uppercase tracking-[0.2em] font-semibold">01 / PROJECT WORK</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. FEATURED PROJECT PRESENTATION (Textured Charcoal) */}
        <section className="py-24 md:py-32 bg-[#222222] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
          
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 relative z-10 flex flex-col gap-16">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="flex flex-col gap-2"
            >
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">Featured Project Presentation</motion.h2>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mt-2 text-zinc-400">
                <Info className="w-4 h-4 shrink-0" />
                <p className="text-sm font-light">Temporary project visuals shown for layout demonstration. Final project details and images are awaiting client approval.</p>
              </motion.div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:items-center relative">
              {/* Dominant Landscape Image */}
              <div 
                className="w-full lg:w-[75%] relative aspect-video group overflow-hidden border border-white/5 bg-obsidian cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-obsidian" 
                tabIndex={0}
                role="button"
                aria-label="View Featured Project"
                onClick={(e) => openLightbox(0, e)}
                onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') openLightbox(0, e as any); }}
              >
                {/* Block Reveal Mask */}
                <motion.div
                  initial={{ scaleX: 1 }}
                  whileInView={{ scaleX: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-[#222222] z-30 origin-right pointer-events-none"
                />
                
                {/* Image Container */}
                <motion.div
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <Image 
                    src="/images/projects/featured-main-temp.webp"
                    alt="Featured Project Main"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-6 left-6 bg-obsidian px-3 py-1.5 border border-white/10 text-[10px] text-white uppercase tracking-widest pointer-events-none z-10">
                    Temporary Visual
                  </div>
                </motion.div>
              </div>

              {/* Technical Information Panel */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[35%] lg:-ml-[10%] relative z-20 bg-obsidian border border-white/10 shadow-2xl p-8 flex flex-col gap-8"
              >
                
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    Primary Showcase
                  </span>
                  <p className="text-zinc-300 font-light text-base leading-relaxed">
                    This featured layout uses an asymmetrical composition to highlight the most important structural achievement in the portfolio.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="relative aspect-square flex-1 border border-white/10 overflow-hidden cursor-pointer group focus:outline-none focus:ring-2 focus:ring-gold" tabIndex={0} role="button" aria-label="View Project Detail 1" onClick={(e) => openLightbox(0, e)} onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') openLightbox(0, e as any); }}>
                    <Image src="/images/projects/featured-detail-01-temp.webp" alt="Detail 1" fill className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="relative aspect-square flex-1 border border-white/10 overflow-hidden cursor-pointer group focus:outline-none focus:ring-2 focus:ring-gold" tabIndex={0} role="button" aria-label="View Project Detail 2" onClick={(e) => openLightbox(0, e)} onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') openLightbox(0, e as any); }}>
                    <Image src="/images/projects/featured-detail-02-temp.webp" alt="Detail 2" fill className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </section>

        {/* 3 & 4. PROJECT COLLECTION & FILTER RAIL (Soft Concrete-Grey bg-[#f0f0f4]) */}
        <section id="project-collection" className="pt-16 pb-24 md:pt-24 md:pb-32 bg-[#f0f0f4] text-obsidian border-b border-[#d4d4d8] min-h-[500px]">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-8 md:gap-10">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-2"
            >
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight">Project Collection</motion.h2>
              <motion.p variants={fadeUp} className="text-obsidian/60 text-sm font-light max-w-xl">
                A varied editorial grid displaying distinct stages and categories of construction work.
              </motion.p>
            </motion.div>

            {/* Category Filter Rail inside Collection */}
            <div className="flex flex-col gap-3 border-b border-obsidian/10 pb-4 sticky top-[60px] sm:top-[80px] z-40 bg-[#f0f0f4]/95 backdrop-blur-md -mx-4 px-4 sm:mx-0 sm:px-0">
              <span className="text-[10px] font-mono font-bold text-obsidian/50 uppercase tracking-[0.2em]">FILTER PROJECTS</span>
              <div 
                className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-x-visible hide-scrollbar gap-6 sm:gap-8 items-center w-full"
                role="tablist"
                aria-label="Project Categories"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    aria-controls="gallery-panel"
                    onClick={(e) => {
                      setActiveCategory(cat);
                      if (!isMuted) playClickSound(isMuted);
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }}
                    className={`shrink-0 text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors relative pb-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-4 focus:ring-offset-[#f0f0f4] rounded-sm ${
                      activeCategory === cat 
                      ? 'text-obsidian' 
                      : 'text-obsidian/50 hover:text-obsidian/80'
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <motion.div layoutId="filterIndicator" className="absolute bottom-0 left-0 w-full h-[2px] bg-obsidian" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div id="gallery-panel" role="tabpanel" className="relative min-h-[300px]">
              <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 md:auto-rows-[300px]">
                <AnimatePresence mode="popLayout">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, idx) => (
                      <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={`${item.sizeClass} min-h-[300px] relative group overflow-hidden bg-obsidian/5 border border-obsidian/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2`}
                        tabIndex={0}
                        role="button"
                        onClick={(e) => openLightbox(idx, e)}
                        onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(idx, e as any); } }}
                        aria-label={`View ${item.title}`}
                      >
                        <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                        
                        <div className="absolute top-4 left-4 bg-obsidian/80 backdrop-blur-md border border-white/10 px-2 py-1 text-[9px] text-white uppercase tracking-widest pointer-events-none z-10 rounded-sm">
                          Example Category Image
                        </div>

                        <div className="absolute bottom-6 left-6 flex flex-col gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 focus:opacity-100 focus:translate-y-0 transition-all duration-300 z-10">
                          <div className="bg-white text-obsidian px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest w-fit shadow-sm">{item.cat}</div>
                          <div className="bg-obsidian text-white px-3 py-1.5 text-[10px] uppercase tracking-widest w-fit flex items-center gap-2 shadow-sm">
                            Open Project <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="col-span-12 py-24 text-center flex flex-col items-center justify-center gap-4 text-obsidian/40 border border-dashed border-obsidian/10"
                    >
                      <Info className="w-6 h-6" />
                      <p className="font-medium text-sm">No project visuals are currently available in this category.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
            
          </div>
        </section>

        {/* 5. CONSTRUCTION PROGRESS STORY (Graphite bg-[#1a1a1a]) */}
        <section className="py-24 md:py-32 bg-[#1a1a1a] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-12">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="flex flex-col gap-4 max-w-3xl"
            >
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">Construction Progress Story</motion.h2>
              <motion.div variants={fadeUp} className="flex items-start gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Demonstration sequence using temporary visual assets. Final project progress photography will be added after client approval.
                </p>
              </motion.div>
            </motion.div>

            {/* Horizontal Swipeable/Grid Sequence */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative"
            >
              {/* Desktop Progress Line */}
              <div className="hidden md:block absolute top-[calc(40%-1px)] left-[15%] right-[15%] h-px bg-white/10 z-0 pointer-events-none" />

              {[
                { stage: 'Site Preparation', img: '/images/projects/progress-site-preparation-temp.webp' },
                { stage: 'Structural Execution', img: '/images/projects/progress-structural-temp.webp' },
                { stage: 'Finishing / Final Review', img: '/images/projects/progress-finishing-temp.webp' }
              ].map((item, idx) => (
                <motion.div variants={fadeUp} key={idx} className="flex flex-col gap-4 relative z-10 group">
                  <div className="relative aspect-[4/3] bg-obsidian overflow-hidden border border-white/10 transition-colors group-hover:border-white/30">
                    <Image src={item.img} alt={item.stage} fill className="object-cover transition-transform duration-700" />
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-obsidian text-gold flex items-center justify-center font-display text-sm border border-white/10 shadow-lg group-hover:bg-gold group-hover:text-obsidian transition-colors">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wide px-1 group-hover:text-gold transition-colors">{item.stage}</h3>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </section>

        {/* 7. COMPACT EXECUTION STANDARDS STRIP */}
        <section className="py-12 bg-obsidian border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12 w-full">
              {[
                'Practical Planning',
                'Site Coordination',
                'Execution Clarity',
                'Quality Focus'
              ].map((std, idx) => (
                <div key={idx} className="flex items-center gap-4 shrink-0 group cursor-default">
                  <span className="text-gold font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <span className="text-sm font-semibold text-zinc-300 uppercase tracking-[0.15em] whitespace-nowrap group-hover:text-white transition-colors">{std}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. PROJECT ENQUIRY CTA (Dark Final CTA bg-[#111111]) */}
        <section className="relative py-32 bg-[#111111] overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 0.2, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image src="/images/projects/projects-cta-temp.webp" alt="Construction structural background" fill className="object-cover filter grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/90" />
          </motion.div>
          
          <div className="max-w-4xl mx-auto px-4 xs:px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono text-gold uppercase tracking-[0.3em]"
            >
              PROJECTS / END
            </motion.span>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="flex flex-col items-center gap-4"
            >
              <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.05]">
                HAVE A SITE OR<br/>PROJECT IN MIND?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-zinc-400 font-light text-base md:text-lg max-w-2xl leading-relaxed mt-4">
                Share your location, construction requirement and available site details for an initial project discussion.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 w-full sm:w-auto"
            >
              <a href={getWhatsAppLink('Hello, I have a site/project in mind and would like to discuss it.')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto text-xs" isMuted={isMuted} soundType="cta">
                  Discuss on WhatsApp
                </Button>
              </a>
              <a href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto text-xs border-white/20 hover:bg-white hover:text-obsidian text-white" isMuted={isMuted} soundType="click">
                  Request a Site Visit
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer isMuted={isMuted} />
      <WhatsAppCTA isMuted={isMuted} />

      {/* 6. PROJECT DETAIL VIEWER (Image-First Lightbox) */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 backdrop-blur-md p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Project Visual Viewer"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={closeLightbox} aria-hidden="true" />
            
            <motion.div 
              initial={{ scale: 0.98, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-7xl max-h-[90vh] flex flex-col lg:flex-row bg-[#111111] border border-white/10 shadow-2xl z-10 overflow-hidden rounded-md"
            >
              
              {/* Image Dominant Area */}
              <div className="w-full lg:w-[75%] relative h-[40vh] lg:h-[85vh] bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProjectIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image src={filteredItems[selectedProjectIndex].img} alt={filteredItems[selectedProjectIndex].title} fill className="object-contain" priority />
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation Controls over image */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                  <button 
                    onClick={prevProject}
                    className="w-10 h-10 rounded-full bg-obsidian/50 text-white flex items-center justify-center backdrop-blur-md pointer-events-auto hover:bg-gold hover:text-obsidian transition-colors border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextProject}
                    className="w-10 h-10 rounded-full bg-obsidian/50 text-white flex items-center justify-center backdrop-blur-md pointer-events-auto hover:bg-gold hover:text-obsidian transition-colors border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold"
                    aria-label="Next image"
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Restrained Info Drawer */}
              <div className="w-full lg:w-[25%] p-8 flex flex-col h-auto lg:h-[85vh] overflow-y-auto hide-scrollbar bg-[#1a1a1a] relative" data-lenis-prevent="true">
                <button 
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
                  aria-label="Close viewer"
                  autoFocus
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col gap-6 mt-12 mb-8">
                  <div className="bg-white/5 border border-white/10 px-3 py-1.5 w-fit text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Temporary Content
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedProjectIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-2"
                    >
                      <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white leading-tight">
                        {filteredItems[selectedProjectIndex].title}
                      </h3>
                      <div className="text-xs font-semibold text-gold uppercase tracking-widest">
                        {filteredItems[selectedProjectIndex].cat}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-12">
                  This is an approved short description for the demonstration layout. Final project specifications and validated technical photography will populate this viewer after client approval.
                </p>

                <div className="mt-auto">
                  <a href={getWhatsAppLink(`Hello, I am interested in discussing the ${filteredItems[selectedProjectIndex].cat} visual.`)} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full text-[10px] border-white/20 hover:border-gold hover:text-gold" isMuted={isMuted}>
                      Enquire on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
