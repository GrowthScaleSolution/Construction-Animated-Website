'use client';

import React from 'react';
import Heading from '@/components/ui/Heading';

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-obsidian border-t border-white/5 overflow-hidden">
      {/* Structural elements */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-white/5 uppercase select-none">
        SECTION_01 // CORE NARRATIVE // PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Side: Typography and Title */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Heading level={2} sectionTag="01 // ENGINEERING ETHOS">
            Where Rigidity Meets Precision.
          </Heading>
          <div className="w-12 h-1 bg-gold mt-2" />
        </div>

        {/* Right Side: Description Blocks */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-arch-grey leading-relaxed text-sm md:text-base">
          <p className="font-light">
            Shree Uniya Construction was established to bridge the gap between complex architectural design and raw structural execution. Operating with a zero-compromise approach to building codes, we specialize in high-end civil execution and concrete framing nodes in Mumbai's western developments.
          </p>

          <p className="font-light">
            We believe that a structure's permanence is decided before the concrete is ever poured. By integrating digital leveling, certified material grades, and rigorous coordinate checks, our team delivers structures engineered to withstand nominal loading and seismic forces.
          </p>

          {/* Details list indicating specs */}
          <div className="grid grid-cols-2 gap-6 mt-6 border-t border-white/5 pt-8">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-gold">[ MATERIAL_GRADE ]</span>
              <span className="text-white font-medium text-lg">M25 - M40 Certified</span>
              <p className="text-xs text-arch-grey/70">Structural concrete ratios mixed under strict volume controls for high load-bearing capacity.</p>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-gold">[ QUALITY_TOLERANCE ]</span>
              <span className="text-white font-medium text-lg">&lt; 2.0mm Deviation</span>
              <p className="text-xs text-arch-grey/70">Rigid vertical alignment parameters verified through laser plumb measurements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
