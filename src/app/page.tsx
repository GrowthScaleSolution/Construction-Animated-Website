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
import { playClickSound, preloadAudioFiles, prewarmAudio } from '@/lib/sound';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [isCivilModalOpen, setIsCivilModalOpen] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);

  // Handle hash scrolling after preloader finishes
  useEffect(() => {
    if (!isPreloaded) return;

    // Check layout hash and scroll smoothly to the target element if present
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPreloaded]);

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
      const isMutedVal = storedMute === 'true';
      setIsMuted(isMutedVal);
      if (!isMutedVal) {
        preloadAudioFiles();
        prewarmAudio();
      }
    }
  }, []);

  // Monitor scroll for structural elevation indicator (throttled using requestAnimationFrame)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
          setScrollDepth(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <Preloader isMuted={isMuted} onComplete={() => setIsPreloaded(true)} />
      <LeadPopup isMuted={isMuted} />
      <Navbar isMuted={isMuted} onToggleSound={handleToggleSound} />

      <div className="scroll-meter-track hidden md:block z-40">
        <div className="scroll-meter-fill transition-all duration-150" style={{ height: `${scrollDepth}%` }} />
      </div>

      <main className="flex-grow flex flex-col">
        <Hero isMuted={isMuted} />
        <About isMuted={isMuted} />
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
