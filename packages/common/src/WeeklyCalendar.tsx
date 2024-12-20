'use client';

import {
  addDays,
  differenceInMinutes,
  format,
  isSameDay,
  startOfWeek,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Button } from './Button';

interface Booking {
  id: string;
  start: Date;
  end: Date;
  color: 'blue' | 'red' | 'green' | 'yellow';
}

interface WeeklyCalendarProps {
  bookings?: Booking[];
  onNavigate?: (date: Date) => void;
  initialDate?: Date; // Add this prop
}

export function WeeklyCalendar({
  bookings = [],
  onNavigate,
  initialDate = new Date(), // Use initialDate with default
}: WeeklyCalendarProps) {
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
    <div className="relative mx-auto h-full w-full max-w-7xl overflow-hidden bg-gray-900 text-gray-100 shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-800 p-6">
        <h2 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
          {format(weekDates[0], 'd')} — {format(weekDates[6], 'd MMM yyyy')}
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentDate(new Date())}
            className="border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700"
          >
            Today
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateWeek('prev')}
            className="border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateWeek('next')}
            className="border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="grid min-w-[800px] grid-cols-[auto_repeat(7,_minmax(120px,_1fr))]">
          {/* Time column */}
          <div className="sticky left-0 z-10 bg-gray-900">
            <div className="h-14 border-b border-gray-800" />
            {hours.map((hour) => (
              <div
                key={hour}
                className="flex h-16 items-center border-b border-r border-gray-800 px-2 text-gray-400"
              >
                {format(new Date().setHours(hour, 0), 'HH:mm')}
              </div>
            ))}
          </div>

          {/* Days columns */}
          {weekDates.map((date) => (
            <div key={date.toString()}>
              <div className="flex h-14 items-center justify-center border-b border-gray-800 px-2 font-medium">
                <div className="text-center">
                  <div className="text-gray-400">{format(date, 'EEE')}</div>
                  <div className="text-lg">{format(date, 'd')}</div>
                </div>
              </div>
              <div className="relative">
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className="group relative h-16 border-b border-r border-gray-800"
                  />
                ))}
                {getBookingsForDate(date).map((booking) => {
                  const startOfDay = new Date(booking.start).setHours(
                    0,
                    0,
                    0,
                    0,
                  );
                  const top =
                    (differenceInMinutes(booking.start, startOfDay) / 60) * 64; // 64px = height of hour cell
                  const height =
                    (differenceInMinutes(booking.end, booking.start) / 60) * 64;

                  return (
                    <div
                      key={booking.id}
                      style={{
                        top: `${top}px`,
                        height: `${height}px`,
                      }}
                      className={`absolute left-0 right-0 mx-1 flex items-center overflow-hidden rounded-md px-2 text-xs font-medium ${booking.color === 'blue' ? 'bg-blue-500 text-white' : ''} ${booking.color === 'red' ? 'bg-red-500 text-white' : ''} ${booking.color === 'green' ? 'bg-green-500 text-white' : ''} ${booking.color === 'yellow' ? 'bg-yellow-500 text-gray-900' : ''} `}
                    >
                      <div className="truncate">
                        {format(booking.start, 'HH:mm')} -{' '}
                        {format(booking.end, 'HH:mm')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
