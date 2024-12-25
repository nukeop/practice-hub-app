import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addHours } from 'date-fns';

import { BookingCalendar } from './BookingCalendar';

const mockDate = new Date('2024-01-15T00:00:00.000Z'); // A Monday

describe('BookingCalendar', () => {
  it('should always be UTC', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });

  it('renders correctly with default props', () => {
    const { container } = render(<BookingCalendar initialDate={mockDate} />);
    expect(container).toMatchSnapshot();
  });

  it('displays correct date range in header', () => {
    render(<BookingCalendar initialDate={mockDate} />);
    expect(screen.getByText(/15 — 21 Jan 2024/)).toBeInTheDocument();
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

    render(<BookingCalendar initialDate={mockDate} bookings={bookings} />);

    expect(screen.getByText('02:00 - 04:00')).toBeInTheDocument();
  });

  it('returns to today when clicking Today button', () => {
    render(<BookingCalendar initialDate={mockDate} />);

    const todayButton = screen.getByRole('button', { name: /today/i });
    userEvent.click(todayButton);

    expect(screen.getByText(/15 — 21 Jan 2024/)).toBeInTheDocument();
  });

  it('navigates to next week when clicking Next button', async () => {
    const onNavigate = jest.fn();
    render(<BookingCalendar initialDate={mockDate} onNavigate={onNavigate} />);

    const nextButton = screen.getByTestId('next-week');
    await userEvent.click(nextButton);

    expect(onNavigate).toHaveBeenCalledWith(addHours(mockDate, 7 * 24));
  });

  it('navigates to previous week when clicking Previous button', async () => {
    const onNavigate = jest.fn();
    render(<BookingCalendar initialDate={mockDate} onNavigate={onNavigate} />);

    const prevButton = screen.getByTestId('prev-week');
    await userEvent.click(prevButton);

    expect(onNavigate).toHaveBeenCalledWith(addHours(mockDate, -7 * 24));
  });

  it('displays all 24 hours', () => {
    render(<BookingCalendar initialDate={mockDate} />);
    expect(screen.getByText('00:00')).toBeInTheDocument();
    expect(screen.getByText('23:00')).toBeInTheDocument();
  });

  it('displays all weekdays', () => {
    render(<BookingCalendar initialDate={mockDate} />);
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });
});
