'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Building2, Ruler, HelpCircle } from 'lucide-react';
import { playClickSound } from '@/lib/sound';

interface ServiceEdgePanelProps {
  id: string;
  side: 'left' | 'right';
  label: string;
  description: string;
  actionText: string;
  isActive: boolean;
  positionClass: string;
  onAction: () => void;
  isMuted: boolean;
}

export function ServiceEdgePanel({ id, side, label, description, actionText, isActive, positionClass, onAction, isMuted }: ServiceEdgePanelProps) {
  const [isHovered, setIsHovered] = useState(false);

  const panelWidth = 260; // total width
  const tabWidth = 52;    // visible tab
  const contentWidth = panelWidth - tabWidth;

  const getX = () => {
    if (side === 'left') {
      if (isHovered && isActive) return 8; // slide out a bit more on hover
      if (isActive) return 0; // partially slide inward
      if (isHovered && !isActive) return -contentWidth + 8; // peek on hover
      return -contentWidth; // hidden outside left edge
    } else {
      if (isHovered && isActive) return -8;
      if (isActive) return 0;
      if (isHovered && !isActive) return contentWidth - 8;
      return contentWidth; // hidden outside right edge
    }
  };

  const Icon = side === 'left' ? Ruler : (id === 'panel-3' ? HelpCircle : Building2);
  
  const Tab = (
    <div className={`w-[52px] h-[160px] bg-[#1a1a1a] border border-white/10 flex flex-col items-center justify-between py-4 shrink-0 shadow-xl ${side === 'left' ? 'border-l-0 rounded-r-sm' : 'border-r-0 rounded-l-sm'}`}>
      <Icon className="w-5 h-5 text-gold shrink-0" />
      <div className="flex-1 relative w-full flex items-center justify-center min-h-[100px]">
        <span className="absolute whitespace-nowrap -rotate-90 text-[10px] font-mono text-zinc-400 uppercase tracking-[0.15em] font-semibold">
          {label}
        </span>
      </div>
    </div>
  );

  const Content = (
    <div className={`w-[208px] bg-[#111111] border border-white/10 shadow-2xl p-5 flex flex-col justify-center gap-3 relative overflow-hidden ${side === 'left' ? 'border-r-0' : 'border-l-0'}`}>
      <div className="flex flex-col gap-1 z-10 relative">
        <span className="text-white text-sm font-bold uppercase tracking-wider leading-tight">{label}</span>
        <span className="text-zinc-500 text-xs">{description}</span>
      </div>
      
      <div className="flex items-center gap-2 mt-2 z-10 relative group-hover:translate-x-1 transition-transform">
        <span className="text-gold text-[10px] uppercase font-mono tracking-widest">{actionText}</span>
        <ChevronRight className="w-3 h-3 text-gold" />
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
    </div>
  );
  
  return (
    <motion.div
      className={`absolute ${positionClass} ${side === 'left' ? 'left-0' : 'right-0'} w-[260px] pointer-events-auto flex flex-row group outline-none cursor-pointer`}
      initial={{ x: side === 'left' ? -contentWidth : contentWidth, opacity: 0 }}
      animate={{ x: getX(), opacity: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={() => {
        if (!isMuted) playClickSound(isMuted);
        onAction();
      }}
      role="button"
      tabIndex={0}
      aria-label={`${label} Edge Panel`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (!isMuted) playClickSound(isMuted);
          onAction();
        }
      }}
    >
      {side === 'left' ? (
        <>
          {Content}
          {Tab}
        </>
      ) : (
        <>
          {Tab}
          {Content}
        </>
      )}
    </motion.div>
  );
}
