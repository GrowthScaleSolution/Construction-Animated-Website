'use client';

import React from 'react';
import Heading from '@/components/ui/Heading';

export const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Geotechnical & Site Survey',
      desc: 'Executing soil plate load tests to verify bearing capacity thresholds, surveying coordinates, and preparing sub-surface layouts.',
    },
    {
      num: '02',
      title: 'Structural Design & Drafting',
      desc: 'Developing RCC beam and column layouts, detailing rebar bending schedules, and validating design stresses against code deflection margins.',
    },
    {
      num: '03',
      title: 'Foundations & Steel Tying',
      desc: 'Excavating foundation footings, laying raft slabs, placing Fe500D rebar skeletons, and validating forms before the concrete pour.',
    },
    {
      num: '04',
      title: 'RCC Casting & Plumb Masonry',
      desc: 'Casting columns and floor beams with certified M25 concrete, curing RCC cores, and executing partition blockwork within 2mm plumb alignments.',
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-obsidian border-t border-white/5">
      {/* CAD line aesthetics */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-white/5 uppercase select-none">
        SECTION_05 // WORKFLOW // PROCESS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <Heading level={2} sectionTag="05 // STRATIFIED WORKFLOW">
            The Construction Process
          </Heading>
          <p className="text-arch-grey text-sm max-w-2xl font-light leading-relaxed">
            Every project stage is executed under strict quality checklist parameters to verify structural compliance.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-6 relative group select-none">
              {/* Horizontal line joining steps on desktop */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-[18px] left-[50px] w-full h-[1px] bg-white/5 group-hover:bg-gold/20 transition-colors duration-500 z-0" />
              )}
              
              {/* Step indicator */}
              <div className="w-10 h-10 border border-white/10 group-hover:border-gold/50 bg-charcoal-dark flex items-center justify-center font-mono text-xs text-gold z-10 transition-colors duration-500">
                {step.num}
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-3">
                <h4 className="font-display font-semibold text-white uppercase text-xs tracking-wider">
                  {step.title}
                </h4>
                <p className="text-xs text-arch-grey leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
