'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import { playClickSound } from '@/lib/sound';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load heavy 3D asset for performance
const StructuralGirder3D = dynamic(() => import('@/components/ui/StructuralGirder3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center font-mono text-[8px] text-white/30 tracking-widest uppercase">LOADING_3D_ASSET...</div>
});

type Layer = 'foundation' | 'framing' | 'masonry';

interface InteractiveBlueprintProps {
  isMuted: boolean;
}

export const InteractiveBlueprint: React.FC<InteractiveBlueprintProps> = ({ isMuted }) => {
  const [activeLayer, setActiveLayer] = useState<Layer>('foundation');

  const handleLayerChange = (layerId: Layer) => {
    if (activeLayer === layerId) return;
    setActiveLayer(layerId);
    playClickSound(isMuted);
  };

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
    <section id="blueprints" className="relative py-24 md:py-36 bg-obsidian border-t border-white/5 overflow-hidden">
      <div className="absolute top-10 left-6 md:left-10 text-[9px] font-mono text-white/5 uppercase select-none">
        SECTION_03 // CAD_ENGINE // BLUEPRINTS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4">
          <Heading level={2} sectionTag="03 // ARCHITECTURAL SCHEMATICS">
            Interactive Blueprint Viewer
          </Heading>
          <p className="text-arch-grey text-sm max-w-2xl font-light leading-relaxed">
            Verify structural building layers by selecting the corresponding systems below. The visual schematics update to reflect engineered layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-3 font-mono text-xs">
              {layers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => handleLayerChange(layer.id)}
                  className={`w-full text-left p-4 border transition-all duration-300 cursor-pointer flex justify-between items-center min-h-[50px] ${
                    activeLayer === layer.id
                      ? 'border-gold text-gold bg-gold/5'
                      : 'border-white/10 text-arch-grey hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>{layer.label}</span>
                  <span className="text-[9px] font-mono tracking-wider">
                    {activeLayer === layer.id ? '● ACTIVE' : '○ VIEW'}
                  </span>
                </button>
              ))}
            </div>

            <Card hoverEffect={false} className="border-white/10 bg-charcoal-light/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLayer.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <span className="text-[10px] font-mono text-gold uppercase tracking-[0.2em]">[ LAYER_DETAILS ]</span>
                  <p className="text-sm text-arch-grey leading-relaxed font-light">{currentLayer.spec}</p>
                  
                  <div className="border border-white/5 bg-obsidian/40 h-48 relative overflow-hidden mt-2 rounded-sm touch-none">
                    <StructuralGirder3D />
                    <span className="absolute bottom-2 left-2 text-[8px] font-mono text-gold/40 z-20 pointer-events-none">
                      3D_FRAME // ORBIT_ACTIVE
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-white/5 text-[10px] sm:text-xs font-mono">
                    <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                      <span className="text-white/40 font-light">CALIBRATED THICKNESS</span>
                      <span className="text-white">{currentLayer.thickness}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 mt-2 sm:mt-0">
                      <span className="text-white/40 font-light">REBAR PARAMETERS</span>
                      <span className="text-white">{currentLayer.reinforcement}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>

          <div className="lg:col-span-7 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-[500px] aspect-square bg-charcoal-dark border border-white/10 blueprint-grid p-4 sm:p-8 flex items-center justify-center">
              <div className="absolute top-4 left-4 w-4 h-4 text-white/20 select-none font-mono text-[9px]">+</div>
              <div className="absolute top-4 right-4 w-4 h-4 text-white/20 select-none font-mono text-[9px]">+</div>
              <div className="absolute bottom-4 left-4 w-4 h-4 text-white/20 select-none font-mono text-[9px]">+</div>
              <div className="absolute bottom-4 right-4 w-4 h-4 text-white/20 select-none font-mono text-[9px]">+</div>

              <svg className="w-full h-full text-white/25" viewBox="0 0 200 200" fill="none">
                <line x1="20" y1="40" x2="180" y2="40" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="20" y1="160" x2="180" y2="160" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="40" y1="20" x2="40" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="160" y1="20" x2="160" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" strokeDasharray="3 3" />

                <motion.g
                  initial={false}
                  animate={{ opacity: activeLayer === 'foundation' ? 1 : 0.3 }}
                  className={`${activeLayer === 'foundation' ? 'stroke-gold' : 'stroke-white/10'}`}
                  strokeWidth="1.5"
                >
                  <motion.rect x="30" y="30" width="60" height="60" initial={{ pathLength: 0 }} animate={{ pathLength: activeLayer === 'foundation' ? 1 : 1 }} transition={{ duration: 1, ease: "easeOut" }} />
                  <motion.rect x="110" y="30" width="60" height="60" initial={{ pathLength: 0 }} animate={{ pathLength: activeLayer === 'foundation' ? 1 : 1 }} transition={{ duration: 1, ease: "easeOut" }} />
                  <motion.rect x="30" y="110" width="140" height="60" initial={{ pathLength: 0 }} animate={{ pathLength: activeLayer === 'foundation' ? 1 : 1 }} transition={{ duration: 1, ease: "easeOut" }} />
                </motion.g>

                <motion.g
                  initial={false}
                  animate={{ opacity: activeLayer === 'framing' ? 1 : 0.3 }}
                  className={`${activeLayer === 'framing' ? 'fill-gold' : 'fill-white/10'}`}
                >
                  {[37, 97, 157].map((x) => 
                    [37, 97, 157].map((y) => (
                      <motion.rect key={`${x}-${y}`} x={x} y={y} width="6" height="6"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: activeLayer === 'framing' ? 1 : 0.3 }}
                        transition={{ duration: 0.5, delay: activeLayer === 'framing' ? (x+y)/1000 : 0 }}
                        style={{ transformOrigin: `${x+3}px ${y+3}px` }}
                      />
                    ))
                  )}
                </motion.g>

                <motion.g
                  initial={false}
                  animate={{ opacity: activeLayer === 'masonry' ? 1 : 0.3 }}
                  className={`${activeLayer === 'masonry' ? 'stroke-gold' : 'stroke-white/10'}`}
                  strokeWidth="3"
                >
                  {[
                    { x1: 40, y1: 40, x2: 160, y2: 40 },
                    { x1: 40, y1: 40, x2: 40, y2: 160 },
                    { x1: 160, y1: 40, x2: 160, y2: 160 },
                    { x1: 40, y1: 100, x2: 160, y2: 100 },
                    { x1: 40, y1: 160, x2: 160, y2: 160 }
                  ].map((line, i) => (
                    <motion.line key={i} {...line}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: activeLayer === 'masonry' ? 1 : 1 }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    />
                  ))}
                </motion.g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InteractiveBlueprint;
