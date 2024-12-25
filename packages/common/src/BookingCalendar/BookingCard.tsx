import { cva, VariantProps } from 'class-variance-authority';
import { format } from 'date-fns';
import { FC } from 'react';

const bookingVariants = cva(
  [
    'absolute left-0 right-0 mx-1 flex items-center overflow-hidden rounded-md px-2 text-xs font-medium ring-1 text-stone-200',
  ],
  {
    variants: {
      color: {
        blue: 'bg-blue-900 text-blue-100 ring-blue-500',
        red: 'bg-red-900 text-red-100 ring-red-500',
        green: 'bg-green-900 text-green-100 ring-green-500',
        yellow: 'bg-yellow-900 text-yellow-100 ring-yellow-500',
      },
    },
    defaultVariants: {
      color: 'blue',
    },
  },
);

type BookingCardProps = {
  start: Date;
  end: Date;
  top: number;
  height: number;
} & VariantProps<typeof bookingVariants>;

export const BookingCard: FC<BookingCardProps> = ({
  start,
  end,
  top,
  height,
  color,
}) => {
  return (
    <div
      data-testid="booking"
      style={{
        top: `${top}px`,
        height: `${height}px`,
      }}
      className={bookingVariants({ color })}
    >
      <div className="relative w-auto max-w-full truncate">
        {format(start, 'HH:mm')} - {format(end, 'HH:mm')}
      </div>
    </div>
  );
};
