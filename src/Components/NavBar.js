import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <button className="hamburger" onClick={toggleMenu}>☰</button>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="match.html">Match</Link></li>
                <li><Link to="comparison.html">Comparison</Link></li>
                <li><Link to="favorites.html">Favorites</Link></li>
                <li><Link to="login.html">User Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;