'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="contact" className="relative py-24 md:py-36 bg-charcoal-dark/20 border-t border-white/5 overflow-hidden">
      {/* Decorative details removed */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <Heading level={2} sectionTag="07 // ESTABLISH CONNECTION">
            Project Coordinates & Contact
          </Heading>
          <p className="text-arch-grey text-sm max-w-2xl font-light leading-relaxed">
            Contact our engineering team to inquire about civil construction scopes, foundation pours, or blockwork packages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
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

            {/* Geographical index card removed */}
          </motion.div>

          {/* Right Side: Visual Map Blueprint Drawing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-charcoal-dark border border-white/10 blueprint-grid relative p-8 flex items-center justify-center min-h-[300px] lg:min-h-[400px]"
          >
            {/* Coordinate markings removed */}
            
            {/* Map Placeholder */}
            <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center z-10 p-6 select-none bg-obsidian/40 backdrop-blur-sm border border-white/5 rounded-lg shadow-2xl overflow-hidden group hover:border-gold/20 transition-colors duration-500 cursor-pointer">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors duration-500 mb-2">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <div className="flex flex-col gap-2 max-w-xs">
                <span className="font-display font-semibold text-white text-sm sm:text-base tracking-wider group-hover:text-gold transition-colors duration-500">
                  Nallasopara Site Office
                </span>
                <p className="text-xs text-arch-grey leading-relaxed">
                  Visit our regional office to discuss construction timelines, material estimates, and technical drawings.
                </p>
                <span className="mt-4 text-[10px] font-mono text-gold uppercase tracking-[0.2em] group-hover:opacity-100 opacity-60 transition-opacity">
                  Click to Open Maps
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
