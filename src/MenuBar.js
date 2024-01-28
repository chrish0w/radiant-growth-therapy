// MenuBar.js
import React from 'react';


function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="logo-container">
        <img src="/radiant_logo.png" alt="logo" className="logo" style={{ width: '100px', height: '100px' }} />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default MenuBar;
