import React from 'react';
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
  const Tag = `h${level}` as const;

  return (
    <div className="flex flex-col gap-1.5 font-display select-none">
      {sectionTag && (
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 border border-gold/40 rotate-45 inline-block" />
          {sectionTag}
        </span>
      )}
      <Tag
        className={cn(
          "text-white leading-none uppercase font-display",
          level === 1 && "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
          level === 2 && "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide",
          level === 3 && "text-xl md:text-2xl font-semibold tracking-wide",
          level === 4 && "text-base md:text-lg font-medium tracking-wider text-white",
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    </div>
  );
};
export default Heading;
