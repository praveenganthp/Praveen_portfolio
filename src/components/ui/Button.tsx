import React from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | AnchorProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const isAnchor = 'href' in props;
    const baseStyles = 'group relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50 overflow-hidden';
    
    const themeVariants = {
      primary: 'bg-purple-600 shadow-[0_4px_14px_0_rgb(147,51,234,0.39)] hover:shadow-[0_6px_20px_rgba(147,51,234,0.23)] hover:bg-purple-500 text-white rounded-xl border border-purple-400/30',
      secondary: 'bg-[#1a142c] shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.03)] hover:bg-[#221a38] text-gray-200 rounded-xl border border-purple-500/20',
      outline: 'bg-transparent text-gray-300 border border-purple-500/20 hover:border-purple-500/50 hover:text-white rounded-xl hover:bg-purple-500/5',
      ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-[#1a142c] rounded-xl',
    };

    const sizes = {
      sm: 'h-10 px-5 text-sm',
      md: 'h-12 px-6 py-2 text-[15px]',
      lg: 'h-14 px-8 text-base font-semibold',
    };

    const classes = cn(baseStyles, themeVariants[variant], sizes[size], className);

    const innerContent = (
      <>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {props.children}
        </span>
        {variant === 'primary' && (
           <div className="absolute inset-0 z-0 bg-linear-to-tr from-purple-600 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}
        {variant === 'secondary' && (
           <div className="absolute inset-0 z-0 bg-linear-to-tr from-purple-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}
      </>
    );

    if (isAnchor) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { children: _children, ...rest } = props as AnchorProps;
      return (
        <a ref={ref as React.ForwardedRef<HTMLAnchorElement>} className={classes} {...rest}>
          {innerContent}
        </a>
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children: _children, ...rest } = props as ButtonProps;
    return (
      <button ref={ref as React.ForwardedRef<HTMLButtonElement>} className={classes} {...rest}>
        {innerContent}
      </button>
    );
  }
);
Button.displayName = 'Button';
