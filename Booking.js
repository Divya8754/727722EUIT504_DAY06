import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [flightId, setFlightId] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFlightIdChange = (e) => {
    setFlightId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the booking logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Flight ID:', flightId);
  };

  return (
    <div>
      <h2>Flight Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="flightId">Flight ID:</label>
          <input type="text" id="flightId" value={flightId} onChange={handleFlightIdChange} />
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default BookingForm;
