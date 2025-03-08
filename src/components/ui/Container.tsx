
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

const Container = ({ 
  children, 
  className, 
  as: Component = 'div',
  id
}: ContainerProps) => {
  return (
    <Component
      id={id}
      className={cn(
        'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
