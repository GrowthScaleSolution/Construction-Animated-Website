'use client';

import React from 'react';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { PhoneCall, MapPin, Mail, Compass } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

interface ContactSectionProps {
  isMuted?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isMuted = true }) => {
  return (
    <section id="contact" className="relative py-24 md:py-36 bg-obsidian border-t border-white/5 overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-white/5 uppercase select-none">
        SECTION_07 // COMMUNICATION // CONTACT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <Heading level={2} sectionTag="07 // ESTABLISH CONNECTION">
            Project Coordinates & Contact
          </Heading>
          <p className="text-arch-grey text-sm max-w-2xl font-light leading-relaxed">
            Contact our engineering team to inquire about civil construction scopes, foundation pours, or blockwork packages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card hoverEffect={true} className="border-white/5 bg-charcoal-dark/40">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors duration-500 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-gold uppercase tracking-widest">[ PROJECT OFFICE ]</span>
                  <h4 className="font-display font-semibold text-white text-sm">Nallasopara, Mumbai</h4>
                  <p className="text-xs text-arch-grey leading-relaxed mt-1">
                    Serving residential developments, commercial framing, and foundation scopes in Mumbai's western nodes.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Nallasopara,+Mumbai,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-gold/80 hover:text-gold hover:underline transition-colors duration-300 mt-2 inline-block font-mono tracking-wider"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </Card>

            <Card hoverEffect={true} className="border-white/5 bg-charcoal-dark/40">
              <div className="flex items-start gap-4">
                <PhoneCall className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors duration-500 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-gold uppercase tracking-widest">[ DIRECT WHATSAPP ]</span>
                  <h4 className="font-display font-semibold text-white text-sm">+91 97658 02900</h4>
                  <p className="text-xs text-arch-grey leading-relaxed mt-1">
                    Click to initiate a WhatsApp chat directly for material estimates or scheduling layout consultations.
                  </p>
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block"
                  >
                    <Button variant="accent" className="px-5 py-2.5 text-[10px]" isMuted={isMuted} soundType="cta">
                      Message on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            <Card hoverEffect={true} className="border-white/5 bg-charcoal-dark/40">
              <div className="flex items-start gap-4">
                <Compass className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors duration-500 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-gold uppercase tracking-widest">[ GEOGRAPHICAL INDEX ]</span>
                  <span className="text-white text-xs font-mono">LAT: 19.4184° N // LON: 72.7936° E</span>
                  <p className="text-xs text-arch-grey leading-relaxed mt-1">
                    Plotted using global coordinate systems for georeferencing construction nodes.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side: Visual Map Blueprint Drawing */}
          <div className="lg:col-span-7 bg-charcoal-dark border border-white/10 blueprint-grid relative p-8 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
            {/* Coordinate markings */}
            <div className="absolute top-4 left-4 text-[9px] font-mono text-white/20 select-none">
              GRID: NALLASOPARA_WEST_CORE
            </div>
            
            {/* Vector Blueprint Map Grid representation */}
            <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center z-10 p-6 select-none">
              <div className="w-16 h-16 border border-gold/40 rotate-45 flex items-center justify-center bg-obsidian/60 relative">
                {/* Crosshairs inside square */}
                <div className="absolute inset-0 drafting-crosshair opacity-30" />
                <Compass className="w-6 h-6 text-gold -rotate-45" />
              </div>
              <div className="flex flex-col gap-2 max-w-xs">
                <span className="font-display font-semibold text-white uppercase text-xs tracking-wider">
                  Mumbai Western Zone Node
                </span>
                <p className="text-xs text-arch-grey leading-relaxed">
                  Vector drafting of Nallasopara boundary lines configured in CAD. Real-time GPS coordinate logging active.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
