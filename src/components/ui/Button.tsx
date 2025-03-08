
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  href,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'relative inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide';
  
  const variantStyles = {
    primary: 'luxury-button',
    outline: 'border border-luxe-900 text-luxe-900 hover:bg-luxe-100 bg-transparent',
    ghost: 'bg-transparent text-luxe-900 hover:bg-luxe-100',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  
  const allStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );
  
  if (href) {
    return (
      <a href={href} className={allStyles}>
        {variant === 'primary' ? <span>{children}</span> : children}
      </a>
    );
  }
  
  return (
    <button className={allStyles} {...props}>
      {variant === 'primary' ? <span>{children}</span> : children}
    </button>
  );
};

export default Button;
