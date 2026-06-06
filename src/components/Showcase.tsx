'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import { Layers, MapPin } from 'lucide-react';

export const Showcase = () => {
  const shouldReduceMotion = useReducedMotion();
  const projects = [
    {
      id: '01',
      title: 'Nallasopara Residential Core',
      type: 'RCC Framing & Slab Pour',
      location: 'Nallasopara East, Mumbai',
      status: 'RCC Slab Casting Complete',
      specs: 'M25 Concrete // Fe500D Reinforcement',
    },
    {
      id: '02',
      title: 'Vasai Industrial Shell',
      type: 'Foundation Raft & Earthworks',
      location: 'Vasai Phata, Mumbai',
      status: 'Geotechnical Soil Compaction',
      specs: 'M30 Concrete Foundation // plate load test verified',
    },
    {
      id: '03',
      title: 'Virar Partition Project',
      type: 'Load-Bearing Brickwork',
      location: 'Virar Link Road, Mumbai',
      status: 'AAC Block Masonry execution',
      specs: '± 2mm laser plumb validation',
    },
  ];

  return (
    <section id="showcase" className="relative py-16 md:py-24 bg-section-alt2 border-t border-white/5 concrete-texture">
      {/* Decorative details */}
      {/* Decorative details removed */}

      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3.5"
        >
          <Heading level={2} sectionTag="Active Portfolio" className="text-white">
            Active Building Showcases
          </Heading>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-2xl font-light leading-relaxed">
            A listing of active civil construction and concrete framing scopes managed under our strict engineering parameters.
          </p>
        </motion.div>

        {/* Project Layout: Featured Image Left, Stacked Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-stretch">
          
          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-2 bg-card-surf border border-white/10 shadow-2xl shadow-black/85 rounded-sm group overflow-hidden flex flex-col"
          >
            <div className="relative w-full flex-grow min-h-[260px] xs:min-h-[320px] md:min-h-[400px] lg:min-h-[580px] overflow-hidden rounded-sm">
              <Image 
                src="/images/project-site-work.jpeg" 
                alt="Active civil construction and structural concrete framing at our primary project site" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                className="object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
                priority
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-obsidian/90 border border-white/10 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest z-10">
                FEATURED ACTIVE SITE
              </div>
            </div>
          </motion.div>

          {/* Project Cards Stack */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="lg:col-span-5 flex flex-col gap-5 md:gap-6"
          >
            {projects.map((proj) => (
              <motion.div key={proj.id} variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }} className="h-full">
                <Card hoverEffect={true} className="flex flex-col h-full justify-between bg-card-surf border border-white/5 shadow-sm !p-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start font-mono text-[9px] text-zinc-400 uppercase">
                      <span>{proj.id}</span>
                      <span className="text-zinc-300 group-hover:text-gold transition-colors duration-500 font-semibold">{proj.status}</span>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-gold uppercase tracking-[0.2em]">Featured Project</span>
                      <Heading level={3} className="text-base sm:text-lg md:text-xl font-semibold mt-1 text-white">
                        {proj.title}
                      </Heading>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-300 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500 group-hover:text-gold transition-colors duration-500 shrink-0" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-300 border-t border-white/5 pt-3 mt-1">
                      <Layers className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span className="font-mono text-[9px] text-zinc-400 font-medium">Project {proj.id}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
