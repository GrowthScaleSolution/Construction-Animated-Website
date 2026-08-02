'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

interface AboutProps {
  isMuted?: boolean;
}

export const About: React.FC<AboutProps> = ({ isMuted = true }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-16 md:py-24 bg-section-alt1 border-t border-white/5 overflow-hidden select-none concrete-texture">
      
      {/* Gigantic Brutalist Background Typography */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 pointer-events-none select-none z-0 hidden lg:block opacity-5">
        <span className="text-[25vw] font-black font-display leading-none text-outline-thick-dark uppercase tracking-tighter">
          CORE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Card-framed Construction Image */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-2 bg-card-surf border border-white/10 shadow-2xl shadow-black/85 rounded-sm group overflow-hidden"
          >
            <div className="relative w-full h-[220px] xs:h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-sm">
              <Image 
                src="/images/about-construction-site.jpeg"
                alt="Active structural excavation and site planning at our primary construction zone"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Short premium text and CTA */}
        <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2"
          >
            <span className="text-[9px] xs:text-[10px] font-mono tracking-[0.4em] text-gold uppercase font-bold">
              Brand Philosophy
            </span>
            <Heading level={2} className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.05] uppercase text-white">
              Build with Integrity.
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 sm:gap-4 text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-xl"
          >
            <p className="text-zinc-100 font-medium text-sm sm:text-base md:text-lg tracking-wide leading-snug">
              At the core of every structural development is a strict commitment to quality, safety, and long-term value.
            </p>
            <p>
              Shree Umiya Construction translates raw engineering theory into durable physical frameworks. From certified soil compression loads to laser-verified column alignments, we ensure that every structure conforms to strict civil safety and design baselines in Mumbai's western zones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 w-full sm:w-auto"
          >
            <a href="#services" className="inline-block hover:-translate-y-0.5 transition-transform duration-300 w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto px-6 py-2.5 text-[10px] min-h-[44px] flex items-center justify-center" isMuted={isMuted} soundType="click">
                Explore Civil Services
              </Button>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
