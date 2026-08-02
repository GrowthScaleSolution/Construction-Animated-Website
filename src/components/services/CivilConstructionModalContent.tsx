import React from 'react';
import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { CheckCircle2, MessageSquare, Map } from 'lucide-react';

export function CivilConstructionModalContent() {
  const whatsappMsg = "Hello Shree Umiya Construction, I would like to discuss a Civil Construction requirement. Please guide me on the next steps.";
  
  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full h-48 sm:h-64 rounded-sm bg-[#1a1a1a] overflow-hidden border border-white/5">
        <Image src="/images/services/civil-modal-temp.webp" alt="Civil Construction" fill className="object-cover opacity-80" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>

      <div className="space-y-4">
        <p className="text-zinc-300 text-sm leading-relaxed">
          Residential and commercial construction context. We focus on initial requirement discussion, site-condition understanding, practical planning, execution coordination, and consistent progress communication.
        </p>
        
        <div className="bg-[#161616] border border-white/5 p-4 rounded-sm">
          <h3 className="text-gold text-xs font-mono uppercase tracking-widest mb-3">Information to Share</h3>
          <ul className="space-y-2">
            {[
              'Site location',
              'Type of construction',
              'Approximate requirement',
              'Available site photos',
              'Preferred discussion method'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-gold/50 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <a 
          href={getWhatsAppLink(whatsappMsg)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 px-4 font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#111111]"
        >
          <MessageSquare className="w-4 h-4" />
          Discuss Civil Construction on WhatsApp
        </a>
        <a 
          href="/contact"
          className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white py-3 px-4 font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <Map className="w-4 h-4" />
          Request a Site Visit
        </a>
      </div>
    </div>
  );
}
