import React from 'react';
import { cn } from '../../utils/cn';

export const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("py-20 md:py-32 w-full", className)} {...props}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";
