import React from 'react';
import { triggerHaptic } from '../utils/haptics';

interface HapticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const HapticButton: React.FC<HapticButtonProps> = ({ onClick, children, className, ...props }) => {
  return (
    <button
      onClick={(e) => {
        triggerHaptic();
        onClick?.(e);
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};
