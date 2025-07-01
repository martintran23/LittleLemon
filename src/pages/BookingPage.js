import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const times = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  const handleBookingSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={times} onSubmit={handleBookingSubmit} />
    </main>
  );
};

export default BookingPage;
