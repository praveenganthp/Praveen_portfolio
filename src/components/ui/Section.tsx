import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, ...props }, ref) => {
    return (
      <section ref={ref} {...props}>
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";
