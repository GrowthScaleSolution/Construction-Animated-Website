import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { MessageSquare, Map, ChevronRight } from 'lucide-react';

const SERVICES = [
  "New Civil Construction",
  "Structural Work",
  "RCC / Foundation",
  "Renovation / Repair",
  "Site Planning",
  "Project Execution Support",
  "Not Sure / Need Guidance"
];

export function ServiceSelectorModalContent() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const whatsappMsg = `Hello Shree Umiya Construction, I would like to discuss ${selectedService || 'my construction requirement'}. Please guide me on the next steps.`;
  
  return (
    <div className="flex flex-col gap-6">
      
      {!selectedService ? (
        <div className="space-y-2">
          {SERVICES.map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className="w-full flex items-center justify-between p-4 bg-[#161616] hover:bg-[#1a1a1a] border border-white/5 hover:border-white/20 transition-all rounded-sm text-left focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span className="text-zinc-200 text-sm font-medium">{service}</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
          ))}
        </div>
      ) : (
        <motion.div 
           initial={{ opacity: 0, y: 10 }} 
           animate={{ opacity: 1, y: 0 }} 
           className="space-y-6"
        >
          <div className="relative w-full h-32 sm:h-40 rounded-sm bg-[#1a1a1a] overflow-hidden border border-white/5">
             <Image src="/images/services/service-selector-temp.webp" alt="Service Selection" fill className="object-cover opacity-60" unoptimized />
             <div className="absolute inset-0 bg-[#111111]/40 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-gold font-mono text-[10px] tracking-widest uppercase mb-2">Selected Service</span>
                <span className="text-white font-bold text-lg">{selectedService}</span>
             </div>
          </div>

          <div className="bg-[#161616] p-4 rounded-sm border border-white/5">
            <p className="text-zinc-400 text-sm text-center">
              We are ready to assist you. Start a conversation on WhatsApp or request a site visit to discuss further details.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href={getWhatsAppLink(whatsappMsg)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 px-4 font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#111111]"
            >
              <MessageSquare className="w-4 h-4" />
              Start WhatsApp Enquiry
            </a>
            <a 
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white py-3 px-4 font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <Map className="w-4 h-4" />
              Request Site Visit
            </a>
            <button
              onClick={() => setSelectedService(null)}
              className="w-full py-3 text-zinc-500 hover:text-white text-xs uppercase tracking-widest font-mono transition-colors mt-2 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            >
              Back to Services
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
