import { BookingCalendar } from '@practice-hub/common';

const sampleBookings = [
  {
    id: '1',
    start: new Date(2024, 11, 16, 9, 0), // 9:00
    end: new Date(2024, 11, 16, 17, 0), // 17:00
    color: 'blue' as const,
  },
  {
    id: '2',
    start: new Date(2024, 11, 17, 10, 0),
    end: new Date(2024, 11, 17, 14, 0),
    color: 'red' as const,
  },
  {
    id: '3',
    start: new Date(2024, 11, 18, 2, 0),
    end: new Date(2024, 11, 18, 6, 0),
    color: 'green' as const,
  },
  {
    id: '4',
    start: new Date(2024, 11, 20, 22, 0),
    end: new Date(2024, 11, 20, 23, 0),
    color: 'yellow' as const,
  },
];

export default function Page() {
  return (
    <div className="relative h-auto">
      <BookingCalendar bookings={sampleBookings} />
    </div>
  );
}
