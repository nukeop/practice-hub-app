import { format } from 'date-fns';

export const BookingCalendarHoursColumn = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="sticky left-0 z-10 h-full bg-transparent">
      <div className="h-4 border-none border-stone-800" />
      <div className="h-4 border-b border-stone-800" />
      {hours.map((hour) => (
        <div
          key={hour}
          className="flex h-4 items-center border-b border-r border-stone-800 px-2 py-2 text-sm text-stone-400"
        >
          {format(new Date().setHours(hour, 0), 'HH:mm')}
        </div>
      ))}
    </div>
  );
};
