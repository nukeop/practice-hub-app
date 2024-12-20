import { WeeklyCalendar } from '@practice-hub/common';

import { HeroSection } from '../_components/HeroSection';
import { Navbar } from '../_components/Navbar';

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
    start: new Date(2024, 11, 20, 23, 0),
    end: new Date(2024, 11, 21, 1, 0),
    color: 'yellow' as const,
  },
];

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="relative h-96">
        <WeeklyCalendar bookings={sampleBookings} />
      </div>
    </div>
  );
}
