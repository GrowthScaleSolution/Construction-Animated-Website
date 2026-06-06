'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  sectionTag?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  sectionTag,
  children,
  className,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const renderTag = () => {
    const classNames = cn(
      "text-white uppercase font-display",
      level === 1 && "text-[clamp(2.1rem,7vw,4.5rem)] font-extrabold tracking-tighter leading-[1.02]",
      level === 2 && "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]",
      level === 3 && "text-xl md:text-2xl font-bold tracking-tight leading-snug",
      level === 4 && "text-xs md:text-sm font-semibold tracking-[0.2em] text-white/95",
      className
    );

    const animationProps = {
      initial: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    switch (level) {
      case 1:
        return <motion.h1 {...animationProps} className={classNames} {...(props as any)}>{children}</motion.h1>;
      case 3:
        return <motion.h3 {...animationProps} className={classNames} {...(props as any)}>{children}</motion.h3>;
      case 4:
        return <motion.h4 {...animationProps} className={classNames} {...(props as any)}>{children}</motion.h4>;
      case 2:
      default:
        return <motion.h2 {...animationProps} className={classNames} {...(props as any)}>{children}</motion.h2>;
    }
  };

  return (
    <div className="flex flex-col gap-1.5 font-display select-none">
      {sectionTag && (
        <motion.span 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] uppercase tracking-[0.35em] text-gold font-semibold flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 border border-gold/40 rotate-45 inline-block" />
          {sectionTag}
        </motion.span>
      )}
      {renderTag()}
    </div>
  );
};

export default Heading;
