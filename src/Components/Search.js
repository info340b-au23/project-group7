import React, { useState } from 'react';

export default function SearchSection() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
      <section className="search-section">
        <h2>Find Your Dream Car</h2>
        <form id="search-form" onSubmit={handleSubmit}>
          <label htmlFor="search-input">Enter car details:</label>
          <input 
              type="text" 
              id="search-input" 
              aria-label="Car Search Input" 
              placeholder="Brand, Model, Year" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    );
}