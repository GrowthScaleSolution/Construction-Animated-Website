'use client';

import React, { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import LeadPopup from '@/components/LeadPopup';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import InteractiveBlueprint from '@/components/InteractiveBlueprint';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Showcase from '@/components/Showcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CivilModal from '@/components/CivilModal';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { playClickSound, playHoverSound } from '@/lib/sound';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [isCivilModalOpen, setIsCivilModalOpen] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);

  // Monitor scroll for structural elevation indicator
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollDepth(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle sound triggers
  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    playClickSound(nextMuted); // Play feedback on click
  };

  const handleGlobalClick = () => {
    playClickSound(isMuted);
  };

  return (
    <div 
      onClick={handleGlobalClick}
      className="min-h-screen bg-obsidian text-white relative font-sans antialiased selection:bg-gold selection:text-obsidian flex flex-col"
    >
      {/* 1. Global Loading State */}
      <Preloader />

      {/* 2. Automated Site Lead Popup */}
      <LeadPopup />

      {/* 3. Navigation Header */}
      <Navbar isMuted={isMuted} onToggleSound={handleToggleSound} />

      {/* 4. Structural Scroll Elevation Meter (Floating Left) */}
      <div className="scroll-meter-track hidden md:block">
        <div 
          className="scroll-meter-fill transition-all duration-150"
          style={{ height: `${scrollDepth}%` }}
        />
        <div className="absolute top-full mt-2 left-0 -translate-x-1/2 font-mono text-[8px] text-white/20 uppercase whitespace-nowrap">
          Elev: {(scrollDepth * 0.45).toFixed(1)}m
        </div>
      </div>

      {/* 5. Page Sections */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <div 
          onMouseEnter={() => playHoverSound(isMuted)}
          className="w-full"
        >
          <Hero />
        </div>

        {/* Short Storytelling Section */}
        <div 
          onMouseEnter={() => playHoverSound(isMuted)}
          className="w-full"
        >
          <About />
        </div>

        {/* Services Section */}
        <div 
          onMouseEnter={() => playHoverSound(isMuted)}
          className="w-full"
        >
          <Services onOpenModal={() => setIsCivilModalOpen(true)} />
        </div>

        {/* Interactive Construction Tools / Details Section */}
        <div 
          onMouseEnter={() => playHoverSound(isMuted)}
          className="w-full"
        >
          <InteractiveBlueprint />
        </div>

        {/* Why Choose Us Section */}
        <div 
          onMouseEnter={() => playHoverSound(isMuted)}
          className="w-full"
        >
          <WhyChooseUs />
        </div>

        {/* Work Process Section */}
        <div 
          onMouseEnter={() => playHoverSound(isMuted)}
          className="w-full"
        >
          <Process />
        </div>

        {/* Project Showcase Section */}
        <div 
          onMouseEnter={() => playHoverSound(isMuted)}
          className="w-full"
        >
          <Showcase />
        </div>

        {/* Contact & Location Section */}
        <div 
          onMouseEnter={() => playHoverSound(isMuted)}
          className="w-full"
        >
          <ContactSection />
        </div>
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Civil Construction Detail Modal */}
      <CivilModal 
        isOpen={isCivilModalOpen} 
        onClose={() => setIsCivilModalOpen(false)} 
      />

      {/* 8. Floating WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  );
}
