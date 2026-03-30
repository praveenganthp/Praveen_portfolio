import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-purple-500/10 bg-[#120c24]/60 backdrop-blur-xl p-8 shadow-2xl xl:p-10",
          hoverEffect && "group transition-all duration-500 hover:border-purple-500/30 hover:bg-[#1a1133]/80 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.15)]",
          className
        )}
        {...props}
      >
        {hoverEffect && (
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-b from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);
Card.displayName = "Card";
