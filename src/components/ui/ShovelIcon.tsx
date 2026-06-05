import React from 'react';

interface ShovelIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ShovelIcon: React.FC<ShovelIconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Premium, clean, minimalist shovel outline */}
      <path d="M12 2v12" />
      <path d="M9 2h6" />
      <path d="M12 14c-1.8 0-3.5 1.2-3.9 2.8l-.9 3.6c-.1.5.2.9.7.9h8.2c.5 0 .8-.4.7-.9l-.9-3.6c-.4-1.6-2.1-2.8-3.9-2.8z" />
    </svg>
  );
};
export default ShovelIcon;
