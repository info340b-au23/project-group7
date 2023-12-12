import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function MatchPage({ cars = [], featuredCars = [] }) {
    const [makeFilter, setMakeFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');

    const handleFilterChange = (filterType, value) => {
        if (filterType === 'make') {
            setMakeFilter(value.toLowerCase());
        } else if (filterType === 'model') {
            setModelFilter(value.toLowerCase());
        } else if (filterType === 'year') {
            setYearFilter(value);
        }
    };

    const filteredCars = cars.filter(car =>
        car.make.toLowerCase().includes(makeFilter) &&
        car.model.toLowerCase().includes(modelFilter) &&
        car.year.toString().includes(yearFilter)
    );

    if (cars.length === 0 || featuredCars.length === 0) {
    }

    return (
        <div className='body'>
            <h1>Car Filter and Match</h1>
            <section>
                <input
                    type="text"
                    placeholder="Enter car make"
                    value={makeFilter}
                    onChange={(e) => handleFilterChange('make', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter car model"
                    value={modelFilter}
                    onChange={(e) => handleFilterChange('model', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter car year"
                    value={yearFilter}
                    onChange={(e) => handleFilterChange('year', e.target.value)}
                />
                <button onClick={() => {}}>Filter</button>
            </section>
            <section>
                <h2>Matching Cars</h2>
                {filteredCars.length > 0 ? (
                    <ul>
                        {filteredCars.map(car => (
                            <li key={car.id}>
                                <Link to={`/car/${car.id}`}>{car.make} - {car.model} - {car.year}</Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>No matching cars found.</div>
                )}
            </section>
            <section id="featured">
                <h2>Featured Cars</h2>
                {featuredCars.map((car, index) => (
                    <div className="featured-car" key={index}>
                        <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
                        <p className="make">{car.make} {car.model}</p>
                        <p>Year: {car.year}</p><br />
                    </div>
                ))}
            </section>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
}

export default MatchPage;