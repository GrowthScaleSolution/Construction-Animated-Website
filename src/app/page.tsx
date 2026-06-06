'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
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
import { playClickSound } from '@/lib/sound';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [isCivilModalOpen, setIsCivilModalOpen] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);

  // Initialize Lenis smooth scrolling for desktop
  useEffect(() => {
    // Only enable on non-touch devices for better mobile native feel
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Synchronize sound settings with localStorage post-hydration
  useEffect(() => {
    const storedMute = localStorage.getItem('suc_sound_muted');
    if (storedMute !== null) {
      setIsMuted(storedMute === 'true');
    }
  }, []);

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

  // Handle sound toggle states
  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem('suc_sound_muted', String(nextMuted));
    playClickSound(nextMuted); // Play feedback click sound
  };

  return (
    <div className="min-h-screen bg-obsidian text-white relative font-sans antialiased selection:bg-gold selection:text-obsidian flex flex-col">
      <Preloader isMuted={isMuted} />
      <LeadPopup isMuted={isMuted} />
      <Navbar isMuted={isMuted} onToggleSound={handleToggleSound} />

      <div className="scroll-meter-track hidden md:block z-40">
        <div className="scroll-meter-fill transition-all duration-150" style={{ height: `${scrollDepth}%` }} />
      </div>

      <main className="flex-grow flex flex-col">
        <Hero isMuted={isMuted} />
        <About />
        <Services onOpenModal={() => setIsCivilModalOpen(true)} isMuted={isMuted} />
        <InteractiveBlueprint isMuted={isMuted} />
        <WhyChooseUs />
        <Process />
        <Showcase />
        <ContactSection isMuted={isMuted} />
      </main>

      <Footer isMuted={isMuted} />

      <CivilModal isOpen={isCivilModalOpen} onClose={() => setIsCivilModalOpen(false)} isMuted={isMuted} />
      <WhatsAppCTA isMuted={isMuted} />
    </div>
  );
}
