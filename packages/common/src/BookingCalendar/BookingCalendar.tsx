'use client';

import {
  addDays,
  differenceInMinutes,
  format,
  isSameDay,
  startOfWeek,
} from 'date-fns';
import { useState } from 'react';

import { BookingCalendarDateColumn } from './BookingCalendarDateColumn';
import { BookingCalendarHeader } from './BookingCalendarHeader';
import { BookingCalendarHoursColumn } from './BookingCalendarHoursColumn';

export type Booking = {
  id: string;
  start: Date;
  end: Date;
  color: 'blue' | 'red' | 'green' | 'yellow';
};

interface BookingCalendarProps {
  bookings?: Booking[];
  onNavigate?: (date: Date) => void;
  initialDate?: Date;
}

export function BookingCalendar({
  bookings = [],
  onNavigate,
  initialDate = new Date(),
}: BookingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });

  const weekDates = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfCurrentWeek, i),
  );
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = addDays(currentDate, direction === 'prev' ? -7 : 7);
    setCurrentDate(newDate);
    onNavigate?.(newDate);
  };

  const getBookingsForDate = (date: Date) => {
    return bookings.filter((booking) => isSameDay(date, booking.start));
  };

  return (
    <div className="relative mx-auto h-full w-full max-w-6xl overflow-hidden bg-stone-900 shadow-2xl ring-1 ring-stone-800">
      <BookingCalendarHeader
        onPrevious={() => navigateWeek('prev')}
        onNext={() => navigateWeek('next')}
        onToday={() => setCurrentDate(new Date())}
        weekDates={weekDates}
      />

      <div className="grid min-w-[800px] grid-cols-[auto_repeat(7,_minmax(120px,_1fr))] overflow-x-auto">
        <BookingCalendarHoursColumn />
        {weekDates.map((date) => (
          <BookingCalendarDateColumn
            date={date}
            bookings={getBookingsForDate(date)}
          />
        ))}
      </div>
    </div>
  );
}
