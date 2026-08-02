'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Button from '@/components/ui/Button';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { playClickSound, preloadAudioFiles, prewarmAudio } from '@/lib/sound';
import { MapPin, Phone, MessageSquare, Calendar, ArrowRight, Clock, ChevronDown, CheckCircle, Navigation2, FileText, Ruler, Info } from 'lucide-react';
import Image from 'next/image';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Inline FAQ Accordion Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const idBase = question.replace(/\s+/g, '-').toLowerCase().replace(/[^a-z0-9-]/g, '');

  return (
    <div className="border-b border-obsidian/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        aria-expanded={isOpen}
        aria-controls={`faq-${idBase}`}
        className="w-full flex justify-between items-center py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:px-4 rounded-sm transition-all"
      >
        <h4 className="font-display font-semibold uppercase text-sm md:text-base text-obsidian tracking-wide group-hover:text-gold transition-colors duration-300">
          {question}
        </h4>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-obsidian/5 group-hover:bg-gold/10 transition-colors shrink-0 ${isOpen ? 'rotate-180 text-gold' : 'text-obsidian/50 group-hover:text-gold'}`}>
          <ChevronDown className="w-4 h-4 transition-transform duration-300" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id={`faq-${idBase}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-obsidian/70 text-sm font-light leading-relaxed max-w-3xl focus:px-4 transition-all">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContactPage() {
  const [isMuted, setIsMuted] = useState(true);
  const shouldReduceMotion = useReducedMotion();

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const preventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Redirect to WhatsApp as a fallback
    window.open(getWhatsAppLink('Hello, I just submitted an enquiry on the website and would like to discuss it further.'), '_blank');
    
    // Reset state after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-obsidian text-white relative font-sans antialiased selection:bg-gold selection:text-obsidian flex flex-col">
      <Navbar isMuted={isMuted} onToggleSound={handleToggleSound} />

      <main className="flex-grow flex flex-col z-10 w-full overflow-hidden">
        
        {/* 1. Compact Contact Hero (Dark Graphite) */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#1a1a1a] border-b border-[#2a2a2a] overflow-hidden">
          {/* Subtle architectural grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.02, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute right-0 top-0 bottom-0 w-2/3 mix-blend-screen pointer-events-none"
          >
             <Image 
              src="/images/contact/contact-hero-temp.webp"
              alt="Construction professional reviewing structural plans on site"
              fill
              className="object-cover object-right grayscale"
              priority
             />
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 relative z-10">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start gap-4 max-w-3xl"
            >
              <motion.span variants={fadeUp} className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Contact / Site Visit
              </motion.span>
              
              <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-white uppercase tracking-tight leading-[1.1]">
                Let’s Discuss Your <span className="text-zinc-400 block mt-1">Construction Requirement</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mt-3 max-w-2xl">
                Share your project details, request a site visit or speak with the team directly through WhatsApp. Practical construction support based in Nallasopara, Mumbai.
              </motion.p>
              
              <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href={getWhatsAppLink('Hello, I would like to discuss a construction requirement.')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group">
                  <Button variant="accent" className="w-full sm:w-auto px-8 py-4 text-xs tracking-widest shadow-[0_0_20px_rgba(255,200,0,0.15)] relative overflow-hidden" isMuted={isMuted} soundType="cta">
                    <span className="relative z-10 flex items-center gap-2 justify-center">
                      Discuss on WhatsApp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-out z-0" />
                  </Button>
                </a>
                <a href="#site-visit" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-xs tracking-widest bg-obsidian/50 border-white/20 hover:border-white/40" isMuted={isMuted} soundType="click">
                    Request a Site Visit
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. Quick Contact Action Dock (Soft Concrete-Grey) */}
        <section className="relative py-12 md:py-16 bg-[#e6e6e9] border-b border-[#d4d4d8]">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-0 bg-white shadow-xl shadow-obsidian/5 border border-obsidian/10 rounded-sm overflow-hidden"
            >
              {/* WhatsApp Segment (Primary) */}
              <motion.a 
                variants={fadeUp}
                href={getWhatsAppLink('Hello')} target="_blank" rel="noopener noreferrer"
                className="flex-1 p-6 md:p-8 flex flex-col gap-3 group relative cursor-pointer md:border-r border-obsidian/10 hover:bg-gold/5 focus:outline-none focus-visible:bg-gold/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/50 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold uppercase text-sm text-obsidian tracking-wide">WhatsApp</h3>
                  <p className="text-xs text-obsidian/60 mt-1 font-light leading-relaxed">Fastest response for enquiries</p>
                </div>
              </motion.a>

              {/* Call Segment */}
              <motion.a 
                variants={fadeUp}
                href="tel:+919765802900"
                className="flex-1 p-6 md:p-8 flex flex-col gap-3 group relative cursor-pointer md:border-r border-obsidian/10 hover:bg-black/5 focus:outline-none focus-visible:bg-black/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-obsidian/30 transition-all duration-300 border-t border-obsidian/10 md:border-t-0"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-obsidian opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 bg-obsidian/5 rounded-full flex items-center justify-center text-obsidian/70 group-hover:scale-110 group-hover:text-obsidian transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold uppercase text-sm text-obsidian tracking-wide">Call Direct</h3>
                  <p className="text-xs text-obsidian/60 mt-1 font-light leading-relaxed">+91 97658 02900</p>
                </div>
              </motion.a>

              {/* Site Visit Segment */}
              <motion.a 
                variants={fadeUp}
                href="#site-visit"
                className="flex-1 p-6 md:p-8 flex flex-col gap-3 group relative cursor-pointer md:border-r border-obsidian/10 hover:bg-black/5 focus:outline-none focus-visible:bg-black/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-obsidian/30 transition-all duration-300 border-t border-obsidian/10 md:border-t-0"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-obsidian opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 bg-obsidian/5 rounded-full flex items-center justify-center text-obsidian/70 group-hover:scale-110 group-hover:text-obsidian transition-all">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold uppercase text-sm text-obsidian tracking-wide">Site Visit</h3>
                  <p className="text-xs text-obsidian/60 mt-1 font-light leading-relaxed">Plan an on-site evaluation</p>
                </div>
              </motion.a>

              {/* Location Segment */}
              <motion.a 
                variants={fadeUp}
                href="#location"
                className="flex-1 p-6 md:p-8 flex flex-col gap-3 group relative cursor-pointer hover:bg-black/5 focus:outline-none focus-visible:bg-black/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-obsidian/30 transition-all duration-300 border-t border-obsidian/10 md:border-t-0"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-obsidian opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 bg-obsidian/5 rounded-full flex items-center justify-center text-obsidian/70 group-hover:scale-110 group-hover:text-obsidian transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold uppercase text-sm text-obsidian tracking-wide">Location</h3>
                  <p className="text-xs text-obsidian/60 mt-1 font-light leading-relaxed">Nallasopara, Mumbai</p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* 3. Site Visit Request (Mid-Dark Graphite) */}
        <section id="site-visit" className="relative py-24 md:py-32 bg-[#2a2a2a] border-b border-[#333] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <motion.span variants={fadeUp} className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase">Practical Planning</motion.span>
                <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
                  Request a <br className="hidden lg:block"/>Site Visit
                </motion.h2>
              </div>
              
              <motion.p variants={fadeUp} className="text-zinc-400 text-sm leading-relaxed">
                A structured site discussion helps us evaluate feasibility, understand site conditions, and provide accurate estimations. Please share your details to arrange an evaluation.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-4 flex flex-col gap-4">
                <h4 className="text-xs text-white uppercase tracking-widest font-semibold pb-2 border-b border-white/10">What to prepare:</h4>
                <ul className="flex flex-col gap-3">
                  {['Exact site location or map pin', 'Basic idea of required work', 'Any existing plans or drawings', 'Site access permissions if gated'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20, filter: 'blur(4px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } } }} className="relative w-full aspect-[4/3] mt-4 border border-white/10 p-2 bg-[#1a1a1a]">
                <div className="relative w-full h-full overflow-hidden filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src="/images/contact/contact-site-visit-temp.webp"
                    alt="Construction professional discussing plans during a site visit"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Form Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 bg-[#1a1a1a] border border-white/10 p-6 sm:p-10 shadow-2xl relative"
            >
              <form onSubmit={preventSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2 group/field">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-semibold group-focus-within/field:text-gold transition-colors">Full Name *</label>
                  <input type="text" required className="bg-obsidian border border-white/10 px-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-white transition-all placeholder:text-zinc-600 rounded-sm" placeholder="e.g. John Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 group/field">
                    <label className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-semibold group-focus-within/field:text-gold transition-colors">Phone Number *</label>
                    <input type="tel" required className="bg-obsidian border border-white/10 px-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-white transition-all placeholder:text-zinc-600 rounded-sm" placeholder="+91 00000 00000" />
                  </div>
                  <div className="flex flex-col gap-2 group/field">
                    <label className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-semibold group-focus-within/field:text-gold transition-colors">Preferred Date</label>
                    <input type="date" className="bg-obsidian border border-white/10 px-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-white transition-all rounded-sm" style={{colorScheme: 'dark'}} />
                  </div>
                </div>

                <div className="flex flex-col gap-2 group/field">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-semibold group-focus-within/field:text-gold transition-colors">Site Location *</label>
                  <input type="text" required className="bg-obsidian border border-white/10 px-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-white transition-all placeholder:text-zinc-600 rounded-sm" placeholder="e.g. Nallasopara West" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 group/field">
                    <label className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-semibold group-focus-within/field:text-gold transition-colors">Type of Work *</label>
                    <select required defaultValue="" className="bg-obsidian border border-white/10 px-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-white transition-all rounded-sm cursor-pointer appearance-none">
                      <option value="" disabled>Select work type</option>
                      <option value="civil">Civil Construction</option>
                      <option value="structural">Structural Work</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 group/field">
                    <label className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-semibold group-focus-within/field:text-gold transition-colors">Project Type *</label>
                    <select required defaultValue="" className="bg-obsidian border border-white/10 px-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-white transition-all rounded-sm cursor-pointer appearance-none">
                      <option value="" disabled>Select category</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 group/field">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-semibold group-focus-within/field:text-gold transition-colors">Short Project Description</label>
                  <textarea rows={3} className="bg-obsidian border border-white/10 px-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-white transition-all placeholder:text-zinc-600 resize-y rounded-sm" placeholder="Brief details about the visit requirement..."></textarea>
                </div>

                <div className="mt-4 pt-6 border-t border-white/10 flex flex-col items-start gap-4">
                  <div className="bg-obsidian/50 p-4 border border-white/5 w-full flex gap-3 items-start">
                    <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                      Final submission integration will be connected during backend setup. Currently, clicking submit will redirect you to WhatsApp with your details prefilled for immediate assistance.
                    </p>
                  </div>
                  <Button type="submit" disabled={isSubmitting} variant="accent" className="w-full sm:w-auto px-10 py-4 text-xs tracking-widest shadow-[0_0_15px_rgba(255,200,0,0.1)] group relative overflow-hidden disabled:opacity-80 disabled:cursor-not-allowed transition-all" isMuted={isMuted} soundType="cta">
                    <span className="relative z-10 flex items-center gap-2">{isSubmitting ? 'Redirecting...' : 'Continue to WhatsApp'} {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}</span>
                    {!isSubmitting && <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-out z-0" />}
                  </Button>
                </div>
              </form>
            </motion.div>

          </div>
        </section>

        {/* 4. WhatsApp Enquiry Workflow (Concrete-Grey) */}
        <section className="relative py-20 md:py-24 bg-[#dfdfe4] border-b border-[#d4d4d8]">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start md:items-end border-b border-obsidian/10 pb-6">
                <div className="flex flex-col gap-2 max-w-xl">
                  <motion.span variants={fadeUp} className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-obsidian/50 uppercase">Fastest Response</motion.span>
                  <motion.h2 variants={fadeUp} className="font-display font-bold text-2xl sm:text-3xl text-obsidian uppercase tracking-tight">WhatsApp Process</motion.h2>
                </div>
                <motion.a variants={fadeUp} href={getWhatsAppLink('Hello')} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="w-full md:w-auto px-6 py-3 text-[10px] tracking-widest shadow-sm" isMuted={isMuted} soundType="click">
                    Start Discussion
                  </Button>
                </motion.a>
              </div>

              {/* Horizontal / Compact Workflow */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                {/* Connecting line (Desktop) */}
                <motion.div 
                  initial={{ scaleX: 0 }} 
                  whileInView={{ scaleX: 1 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ duration: 1.5, ease: "easeInOut" }} 
                  className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-obsidian/10 origin-left z-0" 
                />

                {[
                  { title: 'Share Requirement', icon: FileText },
                  { title: 'Send Location & Media', icon: MapPin },
                  { title: 'Initial Discussion', icon: MessageSquare },
                  { title: 'Schedule Site Visit', icon: Calendar },
                  { title: 'Planning & Estimate', icon: Ruler }
                ].map((step, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-4 group cursor-default relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#eef0f2] border border-obsidian/10 flex items-center justify-center shrink-0 group-hover:border-gold group-hover:bg-white transition-all shadow-sm relative z-10">
                      <step.icon className="w-4 h-4 text-obsidian/70 group-hover:text-gold transition-colors" />
                    </div>
                    {/* Connecting line (Mobile) */}
                    {idx < 4 && <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: "easeInOut", delay: idx * 0.2 }} className="md:hidden absolute top-12 left-6 w-[1px] h-8 bg-obsidian/10 origin-top z-0" />}
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-mono font-semibold text-obsidian/40 hidden md:block">STEP {idx + 1}</span>
                      <h4 className="font-display font-semibold uppercase text-xs sm:text-sm md:text-xs text-obsidian tracking-wide">{step.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Location and Map (Dark Graphite) */}
        <section id="location" className="relative py-24 md:py-32 bg-[#111] border-b border-[#222] overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] mix-blend-screen pointer-events-none">
            <Image 
              src="/images/contact/contact-map-temp.webp"
              alt="Map-inspired visual representing the Mumbai construction service area"
              fill
              className="object-cover object-right grayscale"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-8 justify-center"
            >
              <div className="flex flex-col gap-2">
                <motion.span variants={fadeUp} className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase">Headquarters</motion.span>
                <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                  Based in <br/>Nallasopara
                </motion.h2>
              </div>
              
              <motion.div variants={fadeUp} className="bg-[#1a1a1a] border border-white/10 p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-white tracking-wide">Shree Umiya Construction</h3>
                    <p className="text-zinc-400 font-light text-sm mt-1 leading-relaxed">Nallasopara, Mumbai<br/>Maharashtra, India</p>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4 mt-2">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold tracking-widest uppercase text-gold hover:text-white transition-colors flex items-center gap-2 group/link">
                    Open in Maps <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-square md:aspect-[4/3] bg-[#0a0a0a] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-8 group cursor-default shadow-2xl"
            >
              <div className="absolute inset-0 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-[#0a0a0a]/80 to-[#0a0a0a] group-hover:from-gold/10 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col items-center gap-4 max-w-[280px]">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center relative mb-2">
                  <MapPin className="w-6 h-6 text-gold relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  <motion.div whileInView={{ scale: [1, 1.4], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 border border-gold rounded-full pointer-events-none" />
                </div>
                <h4 className="font-display font-semibold uppercase text-sm text-white tracking-wide z-10 text-center">Interactive Map Awaiting Details</h4>
                <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest mt-1 z-10 text-center bg-obsidian/80 px-4 py-2 border border-white/10 group-hover:border-gold/30 group-hover:text-zinc-300 transition-colors duration-500">
                  Final Google Maps embed will be connected here
                </p>
              </div>

              {/* Crosshairs */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none group-hover:bg-gold/20 transition-colors duration-500" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5 pointer-events-none group-hover:bg-gold/20 transition-colors duration-500" />
            </motion.div>
          </div>
        </section>



        {/* 8. Frequently Asked Questions (Concrete-Grey) */}
        <section className="py-24 md:py-32 bg-[#d4d4d8] border-b border-obsidian/10">
          <div className="max-w-4xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.span variants={fadeUp} className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-obsidian/50 uppercase">Clarifications</motion.span>
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-obsidian mt-2">Frequently Asked Questions</motion.h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-obsidian/10 p-6 md:p-10 shadow-xl shadow-obsidian/5"
            >
              {[
                { q: 'What details should I share before requesting a site visit?', a: 'Please share your full name, phone number, exact site location, type of work required (e.g., civil, structural), and any available site photos. This ensures the site visit is productive.' },
                { q: 'Can I send project photos through WhatsApp?', a: 'Yes, we highly encourage sending site photos and basic plans via WhatsApp to help us understand the scope before formal discussions.' },
                { q: 'Which construction services can I enquire about?', a: 'You can enquire about civil construction, structural work, foundation building, and major renovation projects.' },
                { q: 'Is a site visit required before estimation?', a: 'Yes, a physical site evaluation is necessary to provide an accurate, practical estimation for most construction and structural work.' },
                { q: 'Which locations are currently served?', a: 'We primarily serve Nallasopara, Mumbai, and surrounding regions in Maharashtra. Projects outside this area require special evaluation.' }
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* 9. Final Contact Reassurance Panel (Deep Obsidian) */}
        <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden bg-obsidian">
          {/* Background Image Treatment */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/contact/contact-final-panel-temp.webp"
              alt="Structural construction frame used as a contact background"
              fill
              className="object-cover filter grayscale contrast-125 opacity-10 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto px-4 xs:px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-col items-center gap-4"
            >
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-[1.1]">
                Start With a Simple <br className="hidden sm:block"/><span className="text-gold">Project Discussion</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-zinc-400 font-light text-sm md:text-base max-w-2xl leading-relaxed mt-2">
                Share the basic requirement, location and preferred contact method. The team can then guide the next practical step.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto"
            >
              <a href={getWhatsAppLink('Hello, I would like to start a project discussion.')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="accent" className="w-full sm:w-auto px-10 py-4 text-xs tracking-widest shadow-[0_0_20px_rgba(255,200,0,0.15)] group relative overflow-hidden" isMuted={isMuted} soundType="cta">
                  <span className="relative z-10">Start WhatsApp Enquiry</span>
                  <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-out z-0" />
                </Button>
              </a>
              <a href="#site-visit" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-xs tracking-widest bg-white/5 border-white/20 hover:bg-white/10" isMuted={isMuted} soundType="click">
                  Request Site Visit
                </Button>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 pt-8 border-t border-white/10 w-full"
            >
              {['Clear initial discussion', 'Site-based understanding', 'Local construction support'].map((trust, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold/50" />
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-semibold">{trust}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      <Footer isMuted={isMuted} />
      <WhatsAppCTA isMuted={isMuted} />
    </div>
  );
}
