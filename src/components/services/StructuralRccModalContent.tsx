import React from 'react';
import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { CheckCircle2, MessageSquare, Map, AlertTriangle } from 'lucide-react';

export function StructuralRccModalContent() {
  const whatsappMsg = "Hello Shree Umiya Construction, I would like to discuss a Structural & RCC requirement. Please guide me on the next steps.";
  
  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full h-48 sm:h-64 rounded-sm bg-[#1a1a1a] overflow-hidden border border-white/5">
        <Image src="/images/services/structural-modal-temp.webp" alt="Structural Work & RCC" fill className="object-cover opacity-80" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>

      <div className="space-y-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Reinforcement',
              'Columns and beams',
              'RCC work',
              'Formwork',
              'Foundations',
              'Site-condition review'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-gold/50 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
        </ul>
        
        <div className="bg-gold/10 border border-gold/20 p-4 rounded-sm flex items-start gap-3 mt-4">
          <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <p className="text-gold text-xs leading-relaxed">
            Final structural recommendations and execution decisions should be based on project requirements and an appropriate site or technical assessment.
          </p>
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
          Discuss Structural Requirement
        </a>
        <a 
          href="/contact"
          className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white py-3 px-4 font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <Map className="w-4 h-4" />
          Request Site Review
        </a>
      </div>
    </div>
  );
}
