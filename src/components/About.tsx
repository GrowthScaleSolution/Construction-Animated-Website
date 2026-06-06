'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/ui/Heading';

export const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-stone-50 border-t border-black/5 overflow-hidden select-none">
      
      {/* 1. Gigantic Brutalist Outline Background Typography (BUILD reference style) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 pointer-events-none select-none z-0 hidden lg:block opacity-10">
        <span className="text-[25vw] font-black font-display leading-none text-outline-thick-dark uppercase tracking-tighter">
          CORE
        </span>
      </div>

      {/* Drafting metadata removed for cleaner look */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Left Col: Giant Typography Headline (BUILD style) */}
        <div className="lg:col-span-5 flex flex-col gap-6 items-start justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] font-mono tracking-[0.4em] text-gold uppercase font-bold">
              // 01 // CRITICAL VALUE
            </span>
            
            <Heading level={2} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] uppercase">
              Build <br />
              <span className="text-outline-thin-dark">with</span> <br />
              Integrity.
            </Heading>
            
            <div className="w-16 h-1 bg-gold mt-4" />
          </motion.div>
        </div>

        {/* Right Col: Editorial copy and layout specs */}
        <div className="lg:col-span-7 flex flex-col gap-10 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 text-zinc-600 text-sm md:text-base leading-relaxed font-light max-w-xl"
          >
            <p className="text-black font-medium text-lg tracking-wide leading-snug">
              At the core of every structural development is a strict commitment to quality, safety, and long-term value.
            </p>
            
            <p>
              Shree Uniya Construction operates under the principle that structural stability is decided before the concrete mix is ever poured. From certified soil compression loads to laser-verified alignments, we translate raw engineering theory into durable physical frameworks.
            </p>

            <p>
              We focus on building nodes that conform strictly to local and international construction safety standards. By excluding unverified claims, our structural RCC framing and precision civil works speak for themselves in Mumbai's western zones.
            </p>
          </motion.div>

          {/* Grid Indicators (spec parameters) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-black/10 pt-8 mt-4 max-w-xl"
          >
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
                <span className="text-gold/80">[</span> <span className="text-black/80">RCC STABILITY</span> <span className="text-gold/80">]</span>
              </span>
              <span className="text-black font-bold text-lg">M25 to M40 baselines</span>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                High-strength engineered concrete design mixes configured for seismic safety.
              </p>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
                <span className="text-gold/80">[</span> <span className="text-black/80">PLUMB DEVIATION</span> <span className="text-gold/80">]</span>
              </span>
              <span className="text-black font-bold text-lg">&lt; 2.0mm tolerances</span>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                Laser vertical alignment controls checked at every core column cast.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
export default About;
