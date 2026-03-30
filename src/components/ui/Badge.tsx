import React from 'react';
import { cn } from '../../utils/cn';

export const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200 transition-colors hover:bg-purple-500/20", className)}>
      {children}
    </span>
  );
};
