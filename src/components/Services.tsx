'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import ShovelIcon from '@/components/ui/ShovelIcon';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

interface ServicesProps {
  onOpenModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenModal }) => {
  const services = [
    {
      id: '01',
      title: 'Structural RCC Framing',
      desc: 'Casting reinforced concrete frameworks, shear walls, and columns designed to absorb and distribute load forces safely.',
      msg: WHATSAPP_MESSAGES.rcc,
      btnText: 'Inquire RCC Framing',
      bullets: [
        'Seismic-resistant column and beam casting',
        'Standard concrete grade mixes (M25, M30)',
        'Ductile steel rebar placement (Fe500D)',
        'Laser-aligned slab shuttering and leveling',
      ],
    },
    {
      id: '02',
      title: 'Earthworks & Foundation Prep',
      desc: 'Precision excavation, grading, and geotechnical preparation to establish a stable structural sub-base.',
      msg: WHATSAPP_MESSAGES.earthworks,
      btnText: 'Inquire Foundation Prep',
      bullets: [
        'Foundation footing trenching & grading',
        'Geotechnical plate load-bearing audits',
        'Soil consolidation and sub-base leveling',
        'Site clearing and technical backfilling',
      ],
    },
    {
      id: '03',
      title: 'Structural Masonry',
      desc: 'Premium brickwork and partition blockwork structures executed under strict vertical alignment parameters.',
      msg: WHATSAPP_MESSAGES.masonry,
      btnText: 'Inquire Masonry',
      bullets: [
        'Load-bearing blockwork and masonry partitions',
        'Autoclaved Aerated Concrete (AAC) configurations',
        'Mortar cement-to-sand ratios mixed by volume',
        'Wall tie reinforcement for seismic coupling',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-charcoal-dark/20 border-t border-white/5">
      {/* Structural layout decorations */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-white/5 uppercase select-none">
        SECTION_02 // PORTFOLIO // CORE_SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <Heading level={2} sectionTag="02 // CIVIL CAPABILITIES">
            Civil Construction Services
          </Heading>
          
          <Button variant="outline" className="px-5 py-3 text-[10px]" onClick={onOpenModal}>
            Review Technical Specs
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <Card key={svc.id} className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-gold">[ UNIT_{svc.id} ]</span>
                  <span className="font-mono text-[9px] text-white/20 uppercase">SPEC_CHECK // PASS</span>
                </div>

                <div className="flex flex-col gap-3">
                  <Heading level={3}>{svc.title}</Heading>
                  <p className="text-arch-grey text-sm font-light leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Shovel-style bullet lists */}
                <ul className="flex flex-col gap-3.5 mt-2">
                  {svc.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-arch-grey leading-relaxed">
                      <ShovelIcon className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service specific CTA button */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={getWhatsAppLink(svc.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button variant="secondary" className="w-full text-[10px] py-3">
                    {svc.btnText}
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
