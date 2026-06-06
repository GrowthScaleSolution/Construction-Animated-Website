'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative bg-charcoal-dark/70 border border-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-500 overflow-hidden group select-none",
        hoverEffect && "hover:border-gold/30 hover:bg-charcoal-dark/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/55",
        className
      )}
      {...props}
    >
      {/* Structural drafting corner marks */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/10 group-hover:border-gold/50 transition-colors duration-500" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-gold/50 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/10 group-hover:border-gold/50 transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/10 group-hover:border-gold/50 transition-colors duration-500" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
export default Card;
