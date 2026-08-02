import React from 'react';

export const Logo = () => {
  return (
    <div className="flex flex-col items-start select-none font-display leading-none group cursor-pointer shrink-0">
      <div className="flex items-center gap-1.5 xs:gap-2">
        <span className="text-gold font-light transition-transform duration-500 group-hover:rotate-90 text-xs sm:text-sm">[</span>
        <span className="text-[15px] xs:text-lg sm:text-xl md:text-2xl font-bold tracking-[0.18em] xs:tracking-[0.25em] text-white whitespace-nowrap">
          SHREE UMIYA
        </span>
        <span className="text-gold font-light transition-transform duration-500 group-hover:-rotate-90 text-xs sm:text-sm">]</span>
      </div>
      <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-semibold tracking-[0.38em] xs:tracking-[0.48em] text-gold uppercase mt-1 pl-1.5 sm:pl-2.5">
        CONSTRUCTION
      </span>
    </div>
  );
};
export default Logo;
