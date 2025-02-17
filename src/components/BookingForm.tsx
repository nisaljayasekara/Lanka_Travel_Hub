import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} to ${destination}`);
  };

  return (
    <section>
      <h2>Book Your Trip</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Destination:
            <input 
              type="text" 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookingForm;
