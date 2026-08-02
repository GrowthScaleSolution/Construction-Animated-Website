'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
    <section id="contact" className="relative py-16 md:py-24 bg-obsidian border-t border-white/5 overflow-hidden concrete-texture">
      {/* Decorative details removed */}

      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3.5"
        >
          <Heading level={2} sectionTag="Contact Information">
            Project Location & Contact
          </Heading>
          <p className="text-arch-grey text-xs sm:text-sm max-w-2xl font-light leading-relaxed">
            Contact our engineering team to inquire about civil construction scopes, foundation pours, or blockwork packages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side: Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5 md:gap-6"
          >
            <Card hoverEffect={true} className="border border-white/5 bg-card-surf !p-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors duration-500 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-gold uppercase tracking-widest">Regional Office</span>
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

            <Card hoverEffect={true} className="border border-white/5 bg-card-surf !p-5">
              <div className="flex items-start gap-4">
                <PhoneCall className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors duration-500 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-gold uppercase tracking-widest">Direct WhatsApp</span>
                  <h4 className="font-display font-semibold text-white text-sm">+91 97658 02900</h4>
                  <p className="text-xs text-arch-grey leading-relaxed mt-1">
                    Click to initiate a WhatsApp chat directly for material estimates or scheduling layout consultations.
                  </p>
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block w-full sm:w-auto"
                  >
                    <Button variant="accent" className="w-full sm:w-auto px-5 py-2.5 text-[10px] min-h-[44px] flex items-center justify-center" isMuted={isMuted} soundType="cta">
                      Message on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Geographical index card removed */}
          </motion.div>

          {/* Right Side: Visual Map & Site Visit Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 md:gap-6"
          >
            {/* Site Visit Image Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card-surf border border-white/10 p-2 shadow-2xl rounded-sm overflow-hidden group flex flex-col relative"
            >
              <div className="relative w-full h-[360px] xs:h-[320px] sm:h-[350px] lg:h-[380px] rounded-sm overflow-hidden flex items-end justify-start">
                <Image 
                  src="/images/contact-site-visit.jpeg"
                  alt="In-person site inspection of active steel tying and concrete pouring"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
                />
                
                {/* Gradient backing to keep image details visible while anchoring text */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/65 via-black/25 to-transparent transition-all duration-500" />
                
                {/* Premium Dark Glass Text Backing Box for 100% Readability */}
                <div className="relative z-10 m-3 sm:m-6 p-4 sm:p-6 bg-obsidian/85 border border-white/15 backdrop-blur-md rounded-sm max-w-md flex flex-col gap-2 hover:bg-black/90 transition-all duration-500">
                  <span className="font-mono text-[9px] text-gold uppercase tracking-[0.2em] font-semibold">In-Person Tour</span>
                  <h4 className="font-display font-semibold text-white text-base sm:text-lg md:text-xl uppercase tracking-wide">Schedule a Site Visit</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    Inspect our active structural framing, foundation pours, and concrete quality directly at our active sites.
                  </p>
                  <a
                    href={getWhatsAppLink('Hello, I would like to request a site visit to inspect your active construction projects.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-block w-full sm:w-auto"
                  >
                    <Button variant="accent" className="w-full sm:w-auto px-5 py-2.5 text-[10px] min-h-[44px] flex items-center justify-center" isMuted={isMuted} soundType="cta">
                      Request Site Visit
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Embedded Google Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card-surf border border-white/15 shadow-2xl shadow-black/80 relative flex items-center justify-center h-[250px] lg:h-[300px] rounded-sm overflow-hidden group hover:border-gold/30 transition-all duration-500"
            >
              <iframe 
                 src="https://maps.google.com/maps?q=Nallasopara,+Mumbai&t=m&z=13&output=embed&iwloc=near"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 loading="lazy" 
                 title="Nallasopara, Mumbai Map"
                 className="absolute inset-0 w-full h-full pointer-events-auto"
               />
               
               {/* Clickable Overlay Action */}
               <div className="absolute bottom-4 right-4 z-10">
                 <a 
                   href="https://maps.google.com/?q=Nallasopara,+Mumbai"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 bg-charcoal-dark/95 hover:bg-gold hover:text-obsidian text-white border border-white/10 text-[9px] font-mono tracking-wider uppercase px-4 py-2 transition-all duration-300 rounded-sm shadow-md cursor-pointer"
                 >
                   Open in Google Maps →
                 </a>
               </div>

               <div className="absolute inset-0 pointer-events-none border border-white/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
