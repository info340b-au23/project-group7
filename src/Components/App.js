import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MatchPage from './components/MatchPage';
import Login from './components/Login';

function App() {
  const featuredCars = [...]; // Your featured cars data
  const cars = [...]; // Your cars data for matching

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
          {/* Other routes */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
