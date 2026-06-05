'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={cn(
        "relative px-6 py-3.5 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 select-none overflow-hidden font-semibold border cursor-pointer flex items-center justify-center gap-2",
        variant === 'primary' && "bg-white text-obsidian border-white hover:bg-gold hover:border-gold hover:text-obsidian",
        variant === 'secondary' && "bg-transparent text-white border-white/20 hover:border-gold hover:text-gold",
        variant === 'accent' && "bg-gold text-obsidian border-gold hover:bg-white hover:border-white",
        variant === 'outline' && "bg-transparent text-white border-white hover:bg-white hover:text-obsidian",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
export default Button;
