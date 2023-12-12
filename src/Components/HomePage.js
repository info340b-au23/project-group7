import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';

// Import images
import backgroundImage from '../img/background-image.jpg';
import '../index.css';

export default function HomePage(props) {
    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Match', link: '/match' },
        { name: 'Comparison', link: '/comparison' },
        { name: 'Favorites', link: '/favorites' },
        { name: 'User Login', link: '/login' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
        props.callback(searchTerm);
    };
    
    return (
        <div className='body'>
            <div className="home_page">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">CarAutoMatcher</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {navItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a className="nav-link" href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <main>
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
                </main>

                <div className="content">
                    <h2>Your Personal CarAutoMatcher</h2>
                    <br />
                    <p className="description">Welcome to CarAutoMatcher, your ultimate destination for finding the perfect car. Our platform helps you discover the ideal car based on your preferences, budget, and more. Whether you're looking for a new or used car, we've got you covered. Start your journey now by using our filter to find your dream car.</p>
                </div>

                <div className="background-image">
                    <img src={backgroundImage} alt="background-image" />
                </div>

                <footer>
                    <p>&copy; 2023 CarAutoMatcher</p>
                    <p>Contact: <a href="mailto:contact@carautomatcher.com">contact@carautomatcher.com</a></p>
                </footer>
            </div>
        </div>
    )
}