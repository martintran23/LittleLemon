beforeAll(() => {
  // Mock window.alert to a no-op function to avoid errors during tests
  window.alert = jest.fn();
});

import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockTimes = ['17:00', '18:00', '19:00'];

describe('BookingForm', () => {
  test('renders form inputs correctly', () => {
    render(<BookingForm availableTimes={mockTimes} />);
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('shows error if date is missing on submit', () => {
    render(<BookingForm availableTimes={mockTimes} />);
    fireEvent.click(screen.getByText(/book now/i));
    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
  });

  test('submits form with valid data', () => {
    const handleSubmit = jest.fn();
    render(<BookingForm availableTimes={mockTimes} onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-12-25' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });

    fireEvent.click(screen.getByText(/book now/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      date: '2025-12-25',
      time: '17:00',
      guests: '4',
      occasion: 'Birthday',
    });
  });
});
