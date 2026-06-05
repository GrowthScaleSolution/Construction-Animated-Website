'use client';

import React, { useState } from 'react';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';

type Layer = 'foundation' | 'framing' | 'masonry';

export const InteractiveBlueprint = () => {
  const [activeLayer, setActiveLayer] = useState<Layer>('foundation');

  // Layer details
  const layers = [
    {
      id: 'foundation' as Layer,
      label: '01 // Foundation Raft',
      spec: 'RCC raft slab foundations designed for maximum structural load distribution. Reinforced with double-mesh rebar layouts.',
      thickness: '450mm Slab Thickness',
      reinforcement: 'Fe500D steel grids',
    },
    {
      id: 'framing' as Layer,
      label: '02 // Column Framing',
      spec: 'Reinforced concrete columns aligned strictly to structural axes. Engineered to handle vertical and shear forces.',
      thickness: '300mm x 450mm Columns',
      reinforcement: '16mm vertical rebar configurations',
    },
    {
      id: 'masonry' as Layer,
      label: '03 // Wall Masonry',
      spec: 'Laser-aligned blockwork layouts forming structural partitions. Mortar compounds mixed strictly by volume metrics.',
      thickness: '230mm Outer, 115mm Inner',
      reinforcement: 'Brickwork horizontal ties',
    },
  ];

  const currentLayer = layers.find((l) => l.id === activeLayer)!;

  return (
    <section id="blueprints" className="relative py-24 bg-obsidian border-t border-white/5 overflow-hidden">
      {/* Drafting metadata */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-white/5 uppercase select-none">
        SECTION_03 // CAD_ENGINE // BLUEPRINTS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <Heading level={2} sectionTag="03 // ARCHITECTURAL SCHEMATICS">
            Interactive Blueprint Viewer
          </Heading>
          <p className="text-arch-grey text-sm max-w-2xl font-light leading-relaxed">
            Verify structural building layers by selecting the corresponding systems below. The visual schematics update to reflect engineered layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Interactive Buttons and Spec Sheet */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Buttons */}
            <div className="flex flex-col gap-3 font-mono text-xs">
              {layers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-4 border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                    activeLayer === layer.id
                      ? 'border-gold text-gold bg-gold/5'
                      : 'border-white/10 text-arch-grey hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>{layer.label}</span>
                  <span className="text-[10px] opacity-60">
                    {activeLayer === layer.id ? '[ ACTIVE ]' : '[ SHOW ]'}
                  </span>
                </button>
              ))}
            </div>

            {/* Spec Sheet Card */}
            <Card hoverEffect={false} className="border-white/10 bg-charcoal-light/10">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono text-gold uppercase tracking-widest">[ LAYER_DETAILS ]</span>
                <p className="text-sm text-arch-grey leading-relaxed">{currentLayer.spec}</p>
                <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-white/5 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-white/40">CALIBRATED THICKNESS</span>
                    <span className="text-white">{currentLayer.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">REBAR PARAMETERS</span>
                    <span className="text-white">{currentLayer.reinforcement}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side: Visual Blueprint Rendering */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square bg-charcoal-dark border border-white/10 blueprint-grid p-8 flex items-center justify-center">
              {/* Corner crosshairs */}
              <div className="absolute top-4 left-4 w-4 h-4 text-white/20 select-none font-mono text-[9px]">+</div>
              <div className="absolute top-4 right-4 w-4 h-4 text-white/20 select-none font-mono text-[9px]">+</div>
              <div className="absolute bottom-4 left-4 w-4 h-4 text-white/20 select-none font-mono text-[9px]">+</div>
              <div className="absolute bottom-4 right-4 w-4 h-4 text-white/20 select-none font-mono text-[9px]">+</div>

              {/* Vector Blueprint Drawing */}
              <svg className="w-full h-full text-white/25" viewBox="0 0 200 200" fill="none">
                {/* Structural axes grids */}
                <line x1="20" y1="40" x2="180" y2="40" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="20" y1="160" x2="180" y2="160" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                
                <line x1="40" y1="20" x2="40" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="160" y1="20" x2="160" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />

                {/* Layer 01: Foundations (Raft slabs) */}
                <g className={`transition-all duration-500 ${activeLayer === 'foundation' ? 'stroke-gold opacity-100' : 'stroke-white/10 opacity-30'}`} strokeWidth="1.5">
                  <rect x="30" y="30" width="60" height="60" />
                  <rect x="110" y="30" width="60" height="60" />
                  <rect x="30" y="110" width="140" height="60" />
                </g>

                {/* Layer 02: Column Framing (RCC columns) */}
                <g className={`transition-all duration-500 ${activeLayer === 'framing' ? 'fill-gold opacity-100' : 'fill-white/10 opacity-30'}`}>
                  <rect x="37" y="37" width="6" height="6" />
                  <rect x="97" y="37" width="6" height="6" />
                  <rect x="157" y="37" width="6" height="6" />
                  <rect x="37" y="97" width="6" height="6" />
                  <rect x="97" y="97" width="6" height="6" />
                  <rect x="157" y="97" width="6" height="6" />
                  <rect x="37" y="157" width="6" height="6" />
                  <rect x="97" y="157" width="6" height="6" />
                  <rect x="157" y="157" width="6" height="6" />
                </g>

                {/* Layer 03: Wall Masonry (Brick lines) */}
                <g className={`transition-all duration-500 ${activeLayer === 'masonry' ? 'stroke-gold opacity-100' : 'stroke-white/10 opacity-30'}`} strokeWidth="3">
                  {/* Connect columns */}
                  <line x1="40" y1="40" x2="160" y2="40" />
                  <line x1="40" y1="40" x2="40" y2="160" />
                  <line x1="160" y1="40" x2="160" y2="160" />
                  <line x1="40" y1="100" x2="160" y2="100" />
                  <line x1="40" y1="160" x2="160" y2="160" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InteractiveBlueprint;
