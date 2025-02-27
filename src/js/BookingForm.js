import React, { useState } from 'react';

const BookingForm = ({ destination, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here
    alert(`Booking confirmed for ${destination.name}!`);
    onClose(); // Close the form after submission
  };

  return (
    <div className="booking-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Book Now: {destination.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" required />
          <label>Email:</label>
          <input type="email" required />
          <label>Number of Guests:</label>
          <input type="number" required min="1" />
          <button type="submit">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
