import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetails({ cars }) {
  let { carId } = useParams();
  const car = cars.find(car => car.id === carId);

  if (!car) {
    return <p>Car not found.</p>;
  }

  return (
    <div>
      <h2>{car.make} {car.model} - {car.year}</h2>
      <div>
        <p>Price: ${car.price}</p>
        <p>Fuel Economy: {car.economy}</p>
        <p>KBB Rating: {car.KBB}</p>
      </div>
    </div>
  );
}

export default CarDetails;
