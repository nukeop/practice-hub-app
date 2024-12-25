import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC } from 'react';

import { Button } from '../Button';

type BookingCalendarHeaderProps = {
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  weekDates: Date[];
};

export const BookingCalendarHeader: FC<BookingCalendarHeaderProps> = ({
  onPrevious,
  onNext,
  onToday,
  weekDates,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-stone-800 px-2 py-1">
      <h2 className="bg-gradient-to-b from-stone-200 to-stone-300 bg-clip-text text-lg font-bold text-transparent">
        {format(weekDates[0], 'd')} — {format(weekDates[6], 'd MMM yyyy')}
      </h2>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={onToday}>
          Today
        </Button>
        <Button
          data-testid="prev-week"
          variant="outline"
          size="icon"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          data-testid="next-week"
          variant="outline"
          size="icon"
          onClick={onNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
