'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import { Layers, MapPin } from 'lucide-react';

export const Showcase = () => {
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
    <section id="showcase" className="relative py-24 md:py-36 bg-[#EBEBEB] border-t border-black/10">
      {/* Decorative details */}
      {/* Decorative details removed */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <Heading level={2} sectionTag="Active Portfolio" className="text-charcoal-dark">
            Active Building Showcases
          </Heading>
          <p className="text-zinc-600 text-sm max-w-2xl font-light leading-relaxed">
            A listing of active civil construction and concrete framing scopes managed under our strict engineering parameters.
          </p>
        </motion.div>

        {/* Project Layout: Featured Image Left, Stacked Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30, clipPath: 'inset(10% 0 0 0)' }}
            whileInView={{ opacity: 1, x: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative w-full min-h-[400px] lg:min-h-[600px] rounded-sm overflow-hidden group"
          >
            <Image 
              src="/images/project-site-work.jpeg" 
              alt="Active Construction Site Work" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-charcoal-dark/10 group-hover:bg-transparent transition-colors duration-700" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
              [ FEATURED ACTIVE SITE ]
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
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {projects.map((proj) => (
              <motion.div key={proj.id} variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }} className="h-full">
                <Card hoverEffect={true} className="flex flex-col h-full justify-between bg-[#F5F5F5] border-black/5 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start font-mono text-[9px] text-black/30 uppercase">
                      <span>{proj.id}</span>
                      <span className="text-black/40 group-hover:text-gold transition-colors duration-500 font-semibold">{proj.status}</span>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-gold uppercase tracking-[0.2em]">Featured Project</span>
                      <Heading level={3} className="text-lg md:text-xl font-semibold mt-1 text-charcoal-dark">
                        {proj.title}
                      </Heading>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-600 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-black/30 group-hover:text-gold transition-colors duration-500 shrink-0" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-600 border-t border-black/5 pt-3 mt-1">
                      <Layers className="w-3.5 h-3.5 text-black/30 shrink-0" />
                      <span className="font-mono text-[9px] text-black/40">Project {proj.id}</span>
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
