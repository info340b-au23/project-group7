import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MatchPage from './MatchPage';
import Login from './Login';
import Comparison from './Comparison';
import Favorites from './Favorites';
import '../index.css';

function App() {
  const cars = [];
  cars.push({year:2024, make:'Honda', model:'Civic', price:25045, economy:'City 31/Hwy 40/Comb 36 MPG', KBB:4.7, seats:5, hp:'158 @ 6500 RPM', dt: 'FWD'});
  cars.push({year:2024, make:'Honda', model:'Accord', price:28990, economy:'City 29/Hwy 37/Comb 32 MPG', KBB:4.8, seats:5, hp:'192 @ 6000 RPM', dt: 'FWD'});
  const featuredCars = [];
  featuredCars.push({year:2024, make:'Honda', model:'Accord', price:28990, economy:32, KBB:4.8});
  featuredCars.push({year:2024, make:'Honda', model:'Civic', price:25045, economy:36, KBB:4.7});
  featuredCars.push({year:2024, make:'Hyundai', model:'Elantra', price:22590, economy:36, KBB:4.6});
  featuredCars.push({year:2024, make:'Toyota', model:'Camry', price:27515, economy:32, KBB:4.6});
  featuredCars.push({year:2023, make:'Toyota', model:'Crown', price:41045, economy:41, KBB:4.6});

  return (
    <Router>
      <div className='body'>
        <Routes>
          <Route path='/' element={<HomePage />} />
            <Route path="/match" element={<MatchPage cars={cars} />} />
            <Route path="/login" element={<Login />} />
            <Route path='favorites' element={<Favorites featuredCars={featuredCars} />} />
            <Route path='comparison' element={<Comparison cars={cars}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;