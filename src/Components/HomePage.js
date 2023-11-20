import React, { useState } from 'react';

function HomePage({ featuredCars }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('year'); // Default sorting key

    return (
      <div>
        <h1>Welcome to CarAutoMatcher</h1>
        <h2>Featured Cars</h2>
        <div>
          {featuredCars.map(car => (
            <div key={car.id} className="featured-car">
              <img src={car.image} alt={`Featured-car ${car.id}`} />
              <p className="make">{car.make}</p>
              <p>Year: {car.year}</p>
            </div>
          ))}
        </div>

        <input 
            type="text" 
            placeholder="Search by make or model" 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={sortKey} onChange={e => setSortKey(e.target.value)}>
        <option value="year">Year</option>
        <option value="make">Make</option>
        </select>
      </div>
    );
  }
  