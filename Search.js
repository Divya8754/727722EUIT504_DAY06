import React, { useState } from 'react';

const FlightSearch = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [flights, setFlights] = useState([]);

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform the flight search logic here
    // For demonstration purposes, we're just setting dummy search results
    const dummyFlights = [
      { airline: 'Airline A', flightNumber: 'A123', price: '$100' },
      { airline: 'Airline B', flightNumber: 'B456', price: '$150' },
      { airline: 'Airline C', flightNumber: 'C789', price: '$200' },
    ];
    setFlights(dummyFlights);
  };

  return (
    <div>
      <h2>Flight Search</h2>
      <form onSubmit={handleSearch}>
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
        <button type="submit">Search</button>
      </form>
      {flights.length > 0 && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {flights.map((flight, index) => (
              <li key={index}>
                <div>
                  <strong>Airline:</strong> {flight.airline}
                </div>
                <div>
                  <strong>Flight Number:</strong> {flight.flightNumber}
                </div>
                <div>
                  <strong>Price:</strong> {flight.price}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
