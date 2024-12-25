import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

const buttonVariants = cva(
  [
    'rounded-full px-2 py-1 font-bold flex flex-row items-center justify-center transition-colors leading-none hover:bg-stone-800',
  ],
  {
    variants: {
      variant: {
        solid: 'bg-amber-400 hover:bg-amber-300',
        outline:
          'ring-stone-800 text-stone-400 hover:ring-stone-700 ring-1 hover:text-stone-300 bg-transparent',
      },
      size: {
        sm: '',
        icon: '',
      },
    },
  },
);
type ButtonProps = {
  'data-testid'?: string;
  href?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'icon';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & VariantProps<typeof buttonVariants>;

export const Button = ({
  'data-testid': testId,
  href,
  variant = 'solid',
  size,
  children,
  className = '',
  onClick,
}: ButtonProps) => {
  const resolvedClassName = clsx(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={resolvedClassName} data-testid={testId}>
        {children}
      </Link>
    );
  }

  return (
    <button
      data-testid={testId}
      className={resolvedClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
