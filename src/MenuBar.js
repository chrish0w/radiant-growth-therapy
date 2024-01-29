// MenuBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router

function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="logo-container">
        <img src="/radiant_logo_no_words.png" alt="logo" className="logo" style={{ width: '70px', height: '70px' }} />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to the Home page */}
        <li><Link to="/about">About</Link></li> {/* Link to the About page */}
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default MenuBar;
