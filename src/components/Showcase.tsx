'use client';

import React from 'react';
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
    <section id="showcase" className="relative py-24 md:py-36 bg-charcoal-dark/20 border-t border-white/5">
      {/* Decorative details */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-white/5 uppercase select-none">
        SECTION_06 // PROJECTS // SHOWCASE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <Heading level={2} sectionTag="06 // CIVIL PORTFOLIO">
            Active Building Showcases
          </Heading>
          <p className="text-arch-grey text-sm max-w-2xl font-light leading-relaxed">
            A listing of active civil construction and concrete framing scopes managed under our strict engineering parameters.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <Card key={proj.id} hoverEffect={true} className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-start font-mono text-[9px] text-white/20 uppercase">
                  <span>PROJECT // {proj.id}</span>
                  <span className="text-white/40 group-hover:text-gold/90 transition-colors duration-500 font-semibold">{proj.status}</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold/80 uppercase tracking-wider">{proj.type}</span>
                  <Heading level={3} className="text-lg md:text-xl font-semibold mt-1">
                    {proj.title}
                  </Heading>
                </div>

                <div className="flex items-center gap-2 text-xs text-arch-grey mt-2">
                  <MapPin className="w-3.5 h-3.5 text-white/30 group-hover:text-gold transition-colors duration-500 shrink-0" />
                  <span>{proj.location}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-arch-grey border-t border-white/5 pt-4 mt-2">
                  <Layers className="w-3.5 h-3.5 text-white/30 shrink-0" />
                  <span className="font-mono text-[10px]">{proj.specs}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Showcase;
