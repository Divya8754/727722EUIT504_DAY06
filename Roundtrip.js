import React, { useState } from 'react';

const Flight = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the flight booking logic here
    console.log('Departure:', departure);
    console.log('Destination:', destination);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
  };

  return (
    <div>
      <h2>Flight Booking</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="departure">Departure:</label>
          <input
            type="text"
            id="departure"
            value={departure}
            onChange={handleDepartureChange}
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <div>
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={handleDepartureDateChange}
          />
        </div>
        <div>
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={handleReturnDateChange}
          />
        </div>
        <button type="submit">Book Flight</button>
      </form>
    </div>
  );
};

export default Flight;
