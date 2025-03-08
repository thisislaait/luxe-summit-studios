
import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  threshold?: number;
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay, 
  threshold = 0.1 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
