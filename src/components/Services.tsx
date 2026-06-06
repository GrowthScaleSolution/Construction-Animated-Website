'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import ShovelIcon from '@/components/ui/ShovelIcon';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

interface ServicesProps {
  onOpenModal: () => void;
  isMuted?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onOpenModal, isMuted = true }) => {
  const services = [
    {
      id: '01',
      title: 'Structural RCC Framing',
      desc: 'Casting reinforced concrete frameworks, shear walls, and columns designed to absorb and distribute load forces safely.',
      msg: WHATSAPP_MESSAGES.rcc,
      btnText: 'Inquire RCC Framing',
      image: '/images/service-structural-work.jpeg',
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
      image: '/images/service-civil-construction.jpeg',
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
      image: '/images/service-renovation.jpeg',
      bullets: [
        'Load-bearing blockwork and masonry partitions',
        'Autoclaved Aerated Concrete (AAC) configurations',
        'Mortar cement-to-sand ratios mixed by volume',
        'Wall tie reinforcement for seismic coupling',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-36 bg-charcoal-dark border-t border-white/5">
      {/* Structural layout decorations */}
      {/* Structural layout decorations removed */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <Heading level={2} sectionTag="Civil Capabilities">
            Civil Construction Services
          </Heading>
          
          <Button variant="outline" className="px-5 py-3 text-[10px]" onClick={onOpenModal} isMuted={isMuted} soundType="click">
            Review Technical Specs
          </Button>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((svc) => (
            <motion.div key={svc.id} variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}>
              <Card className="flex flex-col h-full justify-between bg-concrete-dark border-white/5 shadow-md group hover:-translate-y-1 transition-transform duration-500 !p-0">
                <motion.div 
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-48 md:h-56 overflow-hidden"
                >
                  <Image 
                    src={svc.image} 
                    alt={svc.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
                
                <div className="flex flex-col flex-grow p-6 md:p-8">
                  <div className="flex flex-col gap-6">


                    <div className="flex flex-col gap-3">
                      <Heading level={3} className="text-white group-hover:text-gold transition-colors duration-300">{svc.title}</Heading>
                      <p className="text-zinc-300 text-sm font-light leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Shovel-style bullet lists */}
                    <ul className="flex flex-col gap-3.5 mt-2">
                      {svc.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300 leading-relaxed">
                          <ShovelIcon className="w-3.5 h-3.5 text-white/30 group-hover:text-gold transition-colors duration-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service specific CTA button */}
                  <div className="mt-8 pt-6 border-t border-white/5 mt-auto">
                    <a
                      href={getWhatsAppLink(svc.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <Button variant="secondary" className="w-full text-[10px] py-3" isMuted={isMuted} soundType="cta">
                        {svc.btnText}
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
