import React from 'react';

export const Logo = () => {
  return (
    <div className="flex flex-col items-start select-none font-display leading-none group cursor-pointer">
      <div className="flex items-center gap-2">
        <span className="text-gold font-light transition-transform duration-500 group-hover:rotate-90 text-sm">[</span>
        <span className="text-xl md:text-2xl font-bold tracking-[0.25em] text-white">
          SHREE UNIYA
        </span>
        <span className="text-gold font-light transition-transform duration-500 group-hover:-rotate-90 text-sm">]</span>
      </div>
      <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.48em] text-gold uppercase mt-1 pl-2.5">
        CONSTRUCTION
      </span>
    </div>
  );
};
export default Logo;
