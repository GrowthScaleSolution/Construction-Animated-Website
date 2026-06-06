'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { playClickSound, playCTAConfirmSound } from '@/lib/sound';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  children: React.ReactNode;
  isMuted?: boolean;
  soundType?: 'click' | 'cta';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  isMuted = true,
  soundType = 'click',
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMuted) {
      if (soundType === 'cta') {
        playCTAConfirmSound(false);
      } else {
        playClickSound(false);
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      onClick={handleClick}
      className={cn(
        "relative min-h-[44px] px-6 py-3.5 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 select-none overflow-hidden font-semibold border cursor-pointer flex items-center justify-center gap-2 group",
        variant === 'primary' && "bg-white text-obsidian border-white hover:border-gold hover:text-obsidian",
        variant === 'secondary' && "bg-transparent text-white border-white/20 hover:border-gold hover:text-gold",
        variant === 'accent' && "bg-gold text-obsidian border-gold hover:border-white",
        variant === 'outline' && "bg-transparent text-white border-white hover:text-obsidian",
        className
      )}
      {...props}
    >
      {/* Premium hover slide effect */}
      {variant === 'primary' && <span className="absolute inset-0 bg-gold translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />}
      {variant === 'accent' && <span className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />}
      {variant === 'outline' && <span className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />}
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
export default Button;
