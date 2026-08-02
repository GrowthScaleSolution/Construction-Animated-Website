'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, HardHat, Ruler, Building2, Hammer, Map, ClipboardCheck, Settings2, ShieldCheck, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound, preloadAudioFiles, prewarmAudio } from '@/lib/sound';
import { ServicesEdgePanelSystem } from '@/components/services/ServicesEdgePanelSystem';
import { ServiceDetailModal } from '@/components/services/ServiceDetailModal';
import { MobileServiceTrigger } from '@/components/services/MobileServiceTrigger';

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ServicesPage() {
  const [isMuted, setIsMuted] = useState(true);
  const [openModalId, setOpenModalId] = useState<string | null>(null);

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

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (!isMuted) playClickSound(isMuted);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-gold/30 selection:text-gold flex flex-col font-sans overflow-x-hidden">
      <Navbar isMuted={isMuted} onToggleSound={toggleSound} />
      <ServicesEdgePanelSystem isMuted={isMuted} onOpenModal={(id) => setOpenModalId(id)} />

      <main className="flex-1 flex flex-col w-full relative z-10">
        
        {/* 1. COMPACT SERVICES HERO (Technical Graphite) */}
        <section className="relative pt-[140px] pb-12 md:pt-[160px] md:pb-20 bg-[#161616] overflow-hidden border-b border-white/5">
          {/* Strict Blueprint Grid Background */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px', backgroundPosition: 'center center' }} />
          
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10 lg:items-center">
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 w-full lg:w-[50%]"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <span className="w-8 h-px bg-gold/50" />
                <span className="text-gold font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                  CONSTRUCTION SERVICES
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[1.02]">
                PLANNED FOR<br/>
                <span className="text-zinc-500">PRACTICAL EXECUTION.</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-zinc-400 font-light text-base md:text-lg leading-relaxed max-w-lg mt-2 border-l border-white/10 pl-4">
                Present Shree Umiya Construction’s civil, structural, renovation and execution-support services clearly and professionally.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <a href={getWhatsAppLink('Hello, I would like to discuss my construction requirement.')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto text-sm" isMuted={isMuted} soundType="cta">
                    Discuss Your Requirement
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto text-sm border-white/20 text-white hover:bg-white hover:text-obsidian" 
                  isMuted={isMuted}
                  onClick={() => handleScrollToSection('capability-index')}
                >
                  Explore Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Technical Construction Image Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[50%] relative"
            >
              {/* Corner Crosshairs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-gold/50 z-20" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-gold/50 z-20" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-gold/50 z-20" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-gold/50 z-20" />

              <div className="relative aspect-[4/3] lg:aspect-[5/4] bg-obsidian border border-white/10 overflow-hidden shadow-2xl">
                <Image 
                  src="/images/services/services-hero-temp.webp"
                  alt="Technical Construction Services"
                  fill
                  priority
                  className="object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                />
                
                {/* Technical Overlay */}
                <div className="absolute top-6 right-6 bg-obsidian/90 backdrop-blur-sm border border-white/10 p-3 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                    <span className="text-white text-[10px] font-mono uppercase tracking-widest">Active System</span>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <span className="text-zinc-400 text-[9px] uppercase tracking-wider">Service Indexing Online</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. CAPABILITY INDEX / SERVICE RAIL (Soft Concrete-Grey) */}
        <section id="capability-index" className="py-20 bg-[#f4f4f6] text-obsidian border-b border-[#d4d4d8]">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col lg:flex-row gap-12 items-start lg:items-center">
            
            <div className="lg:w-[35%] flex flex-col gap-4 pr-8">
              <span className="text-obsidian/50 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                Capability Directory
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight leading-tight">
                Core<br/>Construction<br/>Expertise
              </h2>
            </div>

            {/* Technical Service Rail */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-[65%] w-full flex flex-col border-t border-obsidian/10"
            >
              {[
                { title: 'Civil Construction', no: '01', id: 'civil-construction' },
                { title: 'Structural Work & RCC', no: '02', id: 'structural-rcc' },
                { title: 'Renovation & Repair', no: '03', id: 'renovation-repair' },
                { title: 'Foundation & Site Prep', no: '04', id: 'foundation-site-preparation' },
                { title: 'Planning & Execution', no: '05', id: 'planning-execution' },
              ].map((service, idx) => (
                <motion.div 
                  variants={fadeUp}
                  key={idx}
                  className="flex items-center justify-between border-b border-obsidian/10 py-5 group cursor-pointer hover:bg-white/50 px-2 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleScrollToSection(service.id)}
                  onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleScrollToSection(service.id); } }}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-obsidian/40 group-hover:text-gold font-bold transition-colors">{service.no}</span>
                    <span className="font-semibold text-sm md:text-base uppercase tracking-wider text-obsidian/80 group-hover:text-obsidian transition-colors">{service.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-obsidian/30 group-hover:text-gold transition-all group-hover:translate-x-2" />
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </section>

        {/* 3. CIVIL CONSTRUCTION (Strong Asymmetrical Primary Service) */}
        <section id="civil-construction" className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 relative z-10">
            
            <div className="flex flex-col lg:flex-row gap-0">
              {/* Image Dominates Left */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[65%] relative aspect-square lg:aspect-[16/10] bg-obsidian overflow-hidden border border-white/5"
              >
                <Image src="/images/services/civil-construction-temp.webp" alt="Civil Construction Work" fill className="object-cover opacity-90 transition-transform duration-1000 hover:scale-105" />
                
                {/* Yellow Marker */}
                <div className="absolute top-8 left-8 bg-gold text-obsidian font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-bold shadow-lg">
                  Primary Service
                </div>
              </motion.div>

              {/* Text Overlaps Right */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[45%] lg:-ml-[10%] relative z-20 flex flex-col justify-center mt-[-40px] lg:mt-0"
              >
                <div className="bg-[#111111] border border-white/10 shadow-2xl p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden">
                  {/* Subtle Grid behind text */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  
                  <div className="relative z-10 flex flex-col gap-4 border-b border-white/10 pb-6">
                    <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight">
                      Civil<br/>Construction
                    </h2>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      Comprehensive civil construction services tailored for residential and commercial structures. Meticulously planned and practically executed from the ground up to guarantee enduring quality.
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
                        <Building2 className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-zinc-300 font-light text-sm">Residential & Commercial Scale</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
                        <Settings2 className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-zinc-300 font-light text-sm">Rigorous Practical Planning</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
                        <ShieldCheck className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-zinc-300 font-light text-sm">Stringent On-Site Execution</span>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col gap-3 mt-4">
                    <a href={getWhatsAppLink('Hello, I would like to discuss a Civil Construction requirement.')} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className="w-full text-xs justify-center" isMuted={isMuted}>
                        Discuss Requirement
                      </Button>
                    </a>
                    <a href="/contact">
                      <Button variant="outline" className="w-full text-xs justify-center border-white/10 hover:border-white/30" isMuted={isMuted}>
                        Request Site Visit
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <MobileServiceTrigger label="View Civil Construction Details" onClick={() => setOpenModalId('civil')} isMuted={isMuted} />
          </div>
        </section>

        {/* 4. STRUCTURAL WORK AND RCC (Technical Graphite & Blueprint style) */}
        <section id="structural-rcc" className="py-24 md:py-32 bg-[#1a1a1a] border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 flex flex-col gap-8 relative z-10"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Ruler className="w-4 h-4 text-zinc-500" />
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                    Engineering & Framing
                  </span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
                  Structural Work<br/>& RCC
                </h2>
                <p className="text-zinc-400 font-light text-base leading-relaxed mt-2">
                  Precision structural framing and Reinforced Cement Concrete execution. We focus on exact reinforcement placement, durable formwork, and rigorous site-condition reviews to establish load-bearing integrity.
                </p>
                
                <div className="bg-[#111111] border-l-2 border-gold p-4 mt-4">
                  <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider leading-relaxed">
                    Requirement: Final engineering specifications require comprehensive site assessment and approved architectural blueprints.
                  </p>
                </div>
              </div>

              {/* Technical Spec Grid */}
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mt-2">
                <div className="bg-[#1a1a1a] p-5 flex flex-col gap-2 hover:bg-[#222222] transition-colors">
                  <span className="text-gold text-[10px] font-mono tracking-widest">01</span>
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">RCC Framing</span>
                </div>
                <div className="bg-[#1a1a1a] p-5 flex flex-col gap-2 hover:bg-[#222222] transition-colors">
                  <span className="text-gold text-[10px] font-mono tracking-widest">02</span>
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Reinforcement</span>
                </div>
                <div className="bg-[#1a1a1a] p-5 flex flex-col gap-2 hover:bg-[#222222] transition-colors">
                  <span className="text-gold text-[10px] font-mono tracking-widest">03</span>
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Formwork</span>
                </div>
                <div className="bg-[#1a1a1a] p-5 flex flex-col gap-2 hover:bg-[#222222] transition-colors">
                  <span className="text-gold text-[10px] font-mono tracking-widest">04</span>
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Site Review</span>
                </div>
              </div>
            </motion.div>

            {/* Technical Image Treatment */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] border border-white/10 bg-[#111111] p-4 md:p-6 group"
            >
              <div className="relative w-full h-full bg-obsidian overflow-hidden border border-white/5">
                <Image src="/images/services/structural-rcc-temp.webp" alt="Structural and RCC Work" fill className="object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700" />
                
                {/* Structural Overlay Lines */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8">
                  <div className="w-full h-px bg-gold/20" />
                  <div className="w-full h-px bg-gold/20" />
                  <div className="w-full h-px bg-gold/20" />
                </div>
                <div className="absolute inset-0 pointer-events-none flex justify-between p-8">
                  <div className="w-px h-full bg-gold/20" />
                  <div className="w-px h-full bg-gold/20" />
                  <div className="w-px h-full bg-gold/20" />
                </div>

                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-obsidian px-3 py-1.5 border border-white/10 text-[9px] text-zinc-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
                  Technical Visual
                </div>
              </div>
            </motion.div>

            <MobileServiceTrigger label="View Structural & RCC Details" onClick={() => setOpenModalId('structural')} isMuted={isMuted} />
          </div>
        </section>

        {/* 5. RENOVATION AND REPAIR (Transformation Focus, Soft Concrete) */}
        <section id="renovation-repair" className="py-24 md:py-32 bg-[#f4f4f6] text-obsidian border-y border-[#d4d4d8] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[45%] flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <span className="text-obsidian/50 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                  Property Transformation
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight text-obsidian">
                  Renovation<br/>& Repair
                </h2>
                <p className="text-obsidian/70 font-light text-base leading-relaxed mt-2 border-l-2 border-obsidian/10 pl-4">
                  Breathing new life into existing structures. We focus on practical upgrades, structural improvement, and aesthetic enhancement for both internal spaces and external facades.
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="group flex justify-between items-center bg-white border border-obsidian/10 p-5 cursor-default hover:border-obsidian/30 transition-colors">
                  <span className="text-sm font-semibold uppercase tracking-wider text-obsidian">Internal Renovation</span>
                  <div className="w-2 h-2 rounded-full bg-obsidian/20 group-hover:bg-gold transition-colors" />
                </div>
                <div className="group flex justify-between items-center bg-white border border-obsidian/10 p-5 cursor-default hover:border-obsidian/30 transition-colors">
                  <span className="text-sm font-semibold uppercase tracking-wider text-obsidian">External Facade Upgrade</span>
                  <div className="w-2 h-2 rounded-full bg-obsidian/20 group-hover:bg-gold transition-colors" />
                </div>
                <div className="group flex justify-between items-center bg-white border border-obsidian/10 p-5 cursor-default hover:border-obsidian/30 transition-colors">
                  <span className="text-sm font-semibold uppercase tracking-wider text-obsidian">Structural Repair</span>
                  <div className="w-2 h-2 rounded-full bg-obsidian/20 group-hover:bg-gold transition-colors" />
                </div>
              </div>

              <div className="mt-4">
                <a href={getWhatsAppLink('Hello, I am interested in Renovation and Repair services.')} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="w-full sm:w-auto text-xs" isMuted={isMuted}>
                    Enquire About Renovation
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[55%] relative aspect-[4/3] bg-[#e4e4e7] p-2 md:p-4 shadow-sm border border-obsidian/5"
            >
              <div className="relative w-full h-full overflow-hidden border border-obsidian/10 bg-white">
                <Image src="/images/services/renovation-temp.webp" alt="Renovation Work" fill className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000" />
                {/* Transformation Tab Overlay */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 flex flex-col gap-1 border border-obsidian/10 shadow-md">
                  <span className="text-[9px] font-mono text-obsidian/50 uppercase tracking-widest">Scope</span>
                  <span className="text-xs font-bold text-obsidian uppercase tracking-wider">Property Upgrade</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 6. FOUNDATION AND SITE PREPARATION (Image-Led, Early Construction) */}
        <section id="foundation-site-preparation" className="relative bg-[#161616] border-b border-white/5">
          {/* Top Half: Image */}
          <div className="w-full aspect-video md:aspect-[21/9] relative bg-obsidian border-b border-white/10 overflow-hidden">
            <Image src="/images/services/foundation-temp.webp" alt="Foundation and Site Preparation" fill className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-4 xs:left-6 md:left-12">
              <span className="bg-obsidian/80 backdrop-blur-md border border-white/10 text-gold font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-semibold">
                Phase Zero
              </span>
            </div>
          </div>

          {/* Bottom Half: Content */}
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-[40%] flex flex-col gap-4"
            >
              <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                Foundation &<br/>Site Preparation
              </h2>
              <p className="text-zinc-400 font-light text-base leading-relaxed mt-2">
                A project's success is determined before the first brick is laid. We execute rigorous site preparation, precise excavation, and layout planning to ensure an unshakeable ground foundation.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-[60%] flex flex-col gap-8 justify-center"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                <div className="flex flex-col gap-3 relative before:absolute before:left-0 before:-top-4 before:w-8 before:h-px before:bg-gold/50">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Site Excavation</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Controlled earthwork and levelling to establish correct depth parameters and site stability.</p>
                </div>
                <div className="flex flex-col gap-3 relative before:absolute before:left-0 before:-top-4 before:w-8 before:h-px before:bg-gold/50">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Footing & Layout</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Precise dimensional plotting and concrete footings designed to distribute structural loads.</p>
                </div>
                <div className="flex flex-col gap-3 relative before:absolute before:left-0 before:-top-4 before:w-8 before:h-px before:bg-gold/50">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Reinforcement Prep</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Initial steel layout and ground preparation before major concrete pouring commences.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. PLANNING AND PROJECT EXECUTION (Organised Workflow Composition) */}
        <section id="planning-execution" className="py-24 md:py-32 bg-[#1a1a1a] border-b border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 relative z-10 flex flex-col gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row gap-8 justify-between items-end"
            >
              <div className="flex flex-col gap-4 max-w-2xl">
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-2">
                  <Box className="w-3 h-3" /> Execution Support
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
                  Planning &<br/>Execution Workflow
                </h2>
              </div>
              <p className="text-zinc-400 font-light text-base leading-relaxed max-w-lg lg:text-right border-l border-white/10 pl-4 lg:border-l-0 lg:border-r lg:pl-0 lg:pr-4">
                Comprehensive execution support that translates blueprints into reality. We manage coordination and maintain transparent communication.
              </p>
            </motion.div>

            {/* Horizontal Technical Flow (Staggered Grid) */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
            >
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-white/10 z-0" />

              <motion.div variants={fadeUp} className="bg-[#222222] border border-white/5 p-8 flex flex-col gap-6 relative z-10 hover:border-gold/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center font-mono text-gold font-bold">01</div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Concept & Feasibility</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Initial assessments, requirement gathering and constructability review before mobilization.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-[#222222] border border-white/5 p-8 flex flex-col gap-6 relative z-10 hover:border-gold/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center font-mono text-gold font-bold">02</div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Resource Allocation</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Strategic planning of materials, machinery, and specialized manpower required for each phase.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-[#222222] border border-white/5 p-8 flex flex-col gap-6 relative z-10 hover:border-gold/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center font-mono text-gold font-bold">03</div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Active Monitoring</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Continuous on-site supervision, quality control checks and timeline management.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* 8. HELP ME CHOOSE A SERVICE (Technical Control Panel) */}
        <section id="service-selector" className="py-24 md:py-32 bg-[#e4e4e7] text-obsidian border-b border-[#d4d4d8]">
          <div className="max-w-4xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-12 items-center text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 items-center"
            >
              <span className="text-obsidian/50 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                Guided Selection
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight">
                Service Selector
              </h2>
              <p className="text-obsidian/70 font-light text-sm md:text-base max-w-xl leading-relaxed mt-2">
                Select the option that closest matches your current requirement. We will prepare a targeted technical discussion based on your choice.
              </p>
            </motion.div>

            {/* Technical Toggles Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white border border-obsidian/10 p-4 md:p-8 shadow-sm flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {[
                  'New Civil Construction',
                  'Structural Work',
                  'RCC / Foundation',
                  'Renovation / Repair',
                  'Site Planning',
                  'Project Execution Support'
                ].map((opt, idx) => (
                  <button
                    key={idx}
                    className="flex items-center gap-4 p-4 border border-obsidian/10 hover:border-obsidian/40 hover:bg-[#f8f8fa] transition-colors focus:outline-none focus:ring-2 focus:ring-gold group"
                    onClick={() => {
                      if (!isMuted) playClickSound(isMuted);
                    }}
                  >
                    <div className="w-4 h-4 rounded-full border border-obsidian/30 flex items-center justify-center shrink-0 group-hover:border-gold">
                      <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-gold transition-colors" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-obsidian/80 group-hover:text-obsidian">{opt}</span>
                  </button>
                ))}
              </div>

              <div className="border-t border-obsidian/10 pt-6 mt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button
                  className="text-xs font-semibold uppercase tracking-wider text-obsidian/60 hover:text-obsidian flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-2 py-1"
                  onClick={() => { if (!isMuted) playClickSound(isMuted); }}
                >
                  <Map className="w-4 h-4" /> Not Sure / Need Guidance
                </button>
                
                <a href={getWhatsAppLink('Hello, I used the Service Selector and would like to request guidance.')} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="text-xs" isMuted={isMuted}>
                    Continue to WhatsApp <ArrowUpRight className="w-3 h-3 ml-1" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <MobileServiceTrigger label="Help Me Choose a Service" onClick={() => setOpenModalId('selector')} isMuted={isMuted} />
          </div>
        </section>

        {/* 9. FINAL SERVICE ENQUIRY CTA (Stark Minimal Black) */}
        <section className="relative py-32 md:py-40 bg-black overflow-hidden border-t border-white/10">
          {/* Very faint background */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/services/services-cta-temp.webp" alt="Construction execution background" fill className="object-cover filter grayscale opacity-10" />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 xs:px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-10">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-px bg-gold/50 origin-center" 
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6"
            >
              <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
                NOT SURE WHICH<br/>SERVICE FITS?
              </h2>
              <p className="text-zinc-400 font-light text-sm md:text-base max-w-xl leading-relaxed">
                Share your location, construction requirement and available project details for an initial discussion.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto"
            >
              <a href={getWhatsAppLink('Hello, I have a site in mind and am not sure which service fits best.')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto text-xs px-8" isMuted={isMuted} soundType="cta">
                  Discuss on WhatsApp
                </Button>
              </a>
              <a href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto text-xs px-8 border-white/20 hover:bg-white hover:text-black text-white" isMuted={isMuted} soundType="click">
                  Request Site Visit
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer isMuted={isMuted} />
      <WhatsAppCTA isMuted={isMuted} />
      <ServiceDetailModal isOpen={!!openModalId} onClose={() => setOpenModalId(null)} modalId={openModalId} />
    </div>
  );
}
