'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { playClickSound } from '@/lib/sound';

interface MobileServiceTriggerProps {
  label: string;
  onClick: () => void;
  isMuted: boolean;
}

export function MobileServiceTrigger({ label, onClick, isMuted }: MobileServiceTriggerProps) {
  return (
    <div className="lg:hidden mt-8 w-full">
      <button
        onClick={() => {
          if (!isMuted) playClickSound(isMuted);
          onClick();
        }}
        className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] border border-white/10 rounded-sm active:bg-[#222] transition-colors focus:outline-none focus:ring-2 focus:ring-gold outline-none"
      >
        <span className="text-sm font-bold uppercase tracking-wider text-white">{label}</span>
        <ChevronRight className="w-4 h-4 text-gold" />
      </button>
    </div>
  );
}
