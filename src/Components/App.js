import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MatchPage from './components/MatchPage';
import Login from './components/Login';
import Comparison from './components/Comparison';
import Favorites from './components/Favorites';


function App() {

  const cars = [{make:'Honda', model:'Civic', year:2024, price:25045, economy:'City 31/Hwy 40/Comb 36 MPG', KBB: 4.7, seats:5, hp:'158 @ 6500 RPM', dt:'FWD'},
  {make:'Honda', model:'Accord', year:2024, price:28990, economy:'City 29/Hwy 37/Comb 32 MPG', KBB: 4.8, seats:5, hp:'192 @ 6000 RPM', dt:'FWD'}]

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <HomePage featuredCars={featuredCars} />
          </Route>
          <Route path="/match">
            <MatchPage cars={cars} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
          <Route path='/comparison'>
            <Comparison cars={cars}/>
          </Route>
          {/* Other routes */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
