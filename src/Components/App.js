import React, { useState } from 'react';
import { getDatabase } from 'firebase/database';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MatchPage from './MatchPage';
import Login from './Login';
import Comparison from './Comparison';
import Favorites from './Favorites';
import CarDetails from './CarDetails';
import NotFound from './NotFound';
import '../index.css';

function App() {
  const [cars, setCars] = useState([]);
  const db = getDatabase();
  
  const handleCars = function(car) {
    const newCars = {...cars};
    if(newCars.length > 2) {
      newCars.splice(0, 1);
    }
    newCars.push(car);
    setCars(newCars);
  }

  const featuredCars = [];
  featuredCars.push({ year: 2024, make: 'Honda', model: 'Accord', price: 28990, economy: 32, KBB: 4.8 });
  featuredCars.push({ year: 2024, make: 'Honda', model: 'Civic', price: 25045, economy: 36, KBB: 4.7 });
  featuredCars.push({ year: 2024, make: 'Hyundai', model: 'Elantra', price: 22590, economy: 36, KBB: 4.6 });
  featuredCars.push({ year: 2024, make: 'Toyota', model: 'Camry', price: 27515, economy: 32, KBB: 4.6 });
  featuredCars.push({ year: 2023, make: 'Toyota', model: 'Crown', price: 41045, economy: 41, KBB: 4.6 });


  return (
    <Router>
      <div className='body'>
        <header className="app-header">
          <h1>CarAutoMatcher</h1>
        </header>
        <Routes>
          <Route path='/' element={<HomePage callback={handleCars} />} />
          <Route path="/match" element={<MatchPage cars={cars} />} />
          <Route path="/login" element={<Login />} />
          <Route path='favorites' element={<Favorites featuredCars={featuredCars} />} />
          <Route path='comparison' element={<Comparison cars={cars} />} />
          <Route path='/car/:carId' element={<CarDetails cars={cars} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;