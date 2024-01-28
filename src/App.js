// App.js
import React from 'react';
import './App.css';
//import Header from './Header';
import MenuBar from './MenuBar'; // Import the MenuBar component

function App() {
  return (
    <div className="App">
      <MenuBar />
      <div className="image-container">
        <img src="/radiant_background.jpg" alt="background" className="background" style={{ width: '100%', height: '750px' }} />
        <div className="text-overlay">
          <h2>Empowering Through Therapy: Music Services in Australia</h2>
          <p>Unlock your potential with expert guidance. Discover Comprehensive Speech and Music Therapy Solutions for All Ages.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
