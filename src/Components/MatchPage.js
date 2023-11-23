import React, { useState } from 'react';
import '../index.css';

function MatchPage({ cars }) {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    };

    const filteredCars = cars.filter(car => 
        car.make.toLowerCase().includes(filter) ||
        car.model.toLowerCase().includes(filter) ||
        car.year.toString().includes(filter)
    );

    return (
        <div className='body'>
            <h1>Car Filter and Match</h1>
            <section>
                <input 
                    type="text" 
                    placeholder="Filter by make, model, or year" 
                    value={filter} 
                    onChange={handleFilterChange}
                />
            </section>
            <section>
                <h2>Matching Cars</h2>
                <ul>
                    {filteredCars.length > 0 ? (
                        filteredCars.map(car => (
                            <li key={car.id}>{car.make} - {car.model} - {car.year}</li>
                        ))
                    ) : (
                        <li>No matching cars found.</li>
                    )}
                </ul>
            </section>
            <a href="/">Home</a>
            {/* Other static content */}
        </div>
    )
}

export default MatchPage;