import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  'data-testid'?: string;
  href?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'icon';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  'data-testid': testId,
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
      <Link href={href} className={combinedStyles} data-testid={testId}>
        {children}
      </Link>
    );
  }

  return (
    <button data-testid={testId} className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};
