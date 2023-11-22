import React from 'react';

export default function NavBar(props) {
    const navItems = props.navItems;
  
    return (
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
    );
  }  