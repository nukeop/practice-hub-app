import { fireEvent, render, screen } from '@testing-library/react';
import { addHours } from 'date-fns';

import { WeeklyCalendar } from './WeeklyCalendar';

const mockDate = new Date('2024-01-15T00:00:00.000Z'); // A Monday

describe('WeeklyCalendar', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<WeeklyCalendar initialDate={mockDate} />);
    expect(container).toMatchSnapshot();
  });

  it('displays correct date range in header', () => {
    render(<WeeklyCalendar initialDate={mockDate} />);
    expect(screen.getByText(/15 — 21 Jan 2024/)).toBeInTheDocument();
  });

  it('navigates to previous week correctly', () => {
    const onNavigate = jest.fn();
    render(<WeeklyCalendar initialDate={mockDate} onNavigate={onNavigate} />);

    const prevButton = screen.getByRole('button', { name: /chevron-left/i });
    fireEvent.click(prevButton);

    // Should show previous week
    expect(screen.getByText(/8 — 14 Jan 2024/)).toBeInTheDocument();
    expect(onNavigate).toHaveBeenCalled();
  });

  it('navigates to next week correctly', () => {
    const onNavigate = jest.fn();
    render(<WeeklyCalendar initialDate={mockDate} onNavigate={onNavigate} />);

    const nextButton = screen.getByRole('button', { name: /chevron-right/i });
    fireEvent.click(nextButton);

    // Should show next week
    expect(screen.getByText(/22 — 28 Jan 2024/)).toBeInTheDocument();
    expect(onNavigate).toHaveBeenCalled();
  });

  it('displays bookings correctly', () => {
    const bookings = [
      {
        id: '1',
        start: addHours(mockDate, 2), // 2 AM on Monday
        end: addHours(mockDate, 4), // 4 AM on Monday
        color: 'blue' as const,
      },
    ];

    render(<WeeklyCalendar initialDate={mockDate} bookings={bookings} />);
    expect(screen.getByText('02:00 - 04:00')).toBeInTheDocument();
  });

  it('returns to today when clicking Today button', () => {
    const onNavigate = jest.fn();
    render(<WeeklyCalendar initialDate={mockDate} onNavigate={onNavigate} />);

    const todayButton = screen.getByRole('button', { name: /today/i });
    fireEvent.click(todayButton);

    expect(onNavigate).toHaveBeenCalled();
  });

  it('displays all 24 hours', () => {
    render(<WeeklyCalendar initialDate={mockDate} />);
    expect(screen.getByText('00:00')).toBeInTheDocument();
    expect(screen.getByText('23:00')).toBeInTheDocument();
  });

  it('displays all weekdays', () => {
    render(<WeeklyCalendar initialDate={mockDate} />);
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });
});
