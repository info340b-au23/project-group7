import React from 'react';

export default function SearchSection() {
    return (
      <section className="search-section">
        <h2>Find Your Dream Car</h2>
        <form id="search-form">
          <label htmlFor="search-input">Enter car details:</label>
          <input type="text" id="search-input" aria-label="Car Search Input" placeholder="e.g., Brand, Model, Year" />
          <button type="submit">Search</button>
        </form>
      </section>
    );
  }  