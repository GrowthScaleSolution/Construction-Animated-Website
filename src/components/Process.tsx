'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Heading from '@/components/ui/Heading';

export const Process = () => {
  const shouldReduceMotion = useReducedMotion();
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
    <section id="process" className="relative py-16 md:py-24 bg-section-alt1 border-t border-white/5 concrete-texture">
      {/* CAD line aesthetics removed */}

      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3.5"
        >
          <Heading level={2} sectionTag="Workflow Stages">
            The Construction Process
          </Heading>
          <p className="text-arch-grey text-xs sm:text-sm max-w-2xl font-light leading-relaxed">
            Every project stage is executed under strict quality checklist parameters to verify structural compliance.
          </p>
        </motion.div>

        {/* Process Timeline Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }} className="flex flex-col gap-4 sm:gap-6 relative group select-none pb-2 sm:pb-0">
              {/* Horizontal line joining steps on desktop */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-[18px] left-[50px] w-full h-[1px] bg-white/5 group-hover:bg-gold/20 transition-colors duration-500 z-0" />
              )}
              
              {/* Vertical line joining steps on mobile */}
              {idx < 3 && (
                <div className="sm:hidden absolute top-[40px] left-[19px] w-[1px] h-[calc(100%+24px)] bg-white/5 group-hover:bg-gold/20 transition-colors duration-500 z-0" />
              )}
              
              {/* Step indicator */}
              <div className="w-10 h-10 border border-white/10 group-hover:border-gold text-white/60 group-hover:text-gold bg-card-surf flex items-center justify-center font-mono text-xs z-10 transition-colors duration-500 rounded-sm shrink-0">
                {step.num}
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-2">
                <h4 className="font-display font-semibold text-white uppercase text-xs tracking-wider">
                  {step.title}
                </h4>
                <p className="text-xs text-arch-grey leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Process;
