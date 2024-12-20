import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'icon';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  href,
  variant = 'solid',
  size,
  children,
  className = '',
  onClick,
}: ButtonProps) => {
  const baseStyles = 'rounded-full px-6 py-3 font-bold transition-colors';
  const variantStyles = {
    solid: 'bg-amber-400 text-stone-800 hover:bg-amber-300',
    outline:
      'border-stone-800 text-stone-400 hover:bg-stone-900 hover:text-stone-200 border-2 bg-transparent',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return <button className={combinedStyles}>{children}</button>;
};
