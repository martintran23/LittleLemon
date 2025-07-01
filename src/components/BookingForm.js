import React, { useState } from 'react';
//import './App.css'; // Make sure this is imported somewhere globally

function BookingForm({ availableTimes, onSubmit }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Please select a date.';
    if (!formData.time) newErrors.time = 'Please select a time.';
    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Guests must be between 1 and 10.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit?.(formData); // Call parent function if provided
      alert('Booking submitted successfully!');
      // Optional: reset form
      setFormData({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
      });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Booking Form">
      <h1>Book a Table</h1>

      <div>
        <label htmlFor="date">Choose date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          aria-invalid={!!errors.date}
        />
        {errors.date && <span role="alert">{errors.date}</span>}
      </div>

      <div>
        <label htmlFor="time">Choose time:</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          aria-invalid={!!errors.time}
        >
          <option value="">Select a time</option>
          {availableTimes?.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {errors.time && <span role="alert">{errors.time}</span>}
      </div>

      <div>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          min="1"
          max="10"
          onChange={handleChange}
          aria-invalid={!!errors.guests}
        />
        {errors.guests && <span role="alert">{errors.guests}</span>}
      </div>

      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
      </div>

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
