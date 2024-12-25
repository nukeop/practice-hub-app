import { differenceInMinutes, format } from 'date-fns';
import { FC } from 'react';

import { Booking } from './BookingCalendar';
import { BookingCard } from './BookingCard';

type BookingCalendarDateColumnProps = {
  date: Date;
  bookings: Booking[];
};

export const BookingCalendarDateColumn: FC<BookingCalendarDateColumnProps> = ({
  date,
  bookings,
}) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="relative h-full">
      <div className="flex h-8 items-center justify-center border-b border-stone-800 px-2 font-medium">
        <div className="flex flex-row gap-2 text-center">
          <div className="text-base">{format(date, 'EEE')}</div>
          <div className="text-base">{format(date, 'd.M')}</div>
        </div>
      </div>
      <div className="relative">
        {hours.map((hour) => (
          <div
            key={hour}
            className="group relative h-4 border-b border-r border-stone-800 py-2"
          />
        ))}
        {bookings.map((booking) => {
          const startOfDay = new Date(booking.start).setHours(0, 0, 0, 0);
          const top =
            (differenceInMinutes(booking.start, startOfDay) / 60) * 17;
          const height =
            (differenceInMinutes(booking.end, booking.start) / 60) * 17;

          return (
            <BookingCard
              key={booking.id}
              start={booking.start}
              end={booking.end}
              top={top}
              height={height}
              color={booking.color}
            />
          );
        })}
      </div>
    </div>
  );
};
