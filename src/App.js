import React from 'react';
import './App.css';
import MenuBar from './MenuBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route from React Router
import AboutPage from './AboutPage'; // Import the AboutPage component

function App() {
  return (
    <Router> {/* Wrap your entire application with BrowserRouter */}
      <div className="App">
        <MenuBar />
        <Routes> {/* Use Routes to define your routes */}
          <Route path="/" element={ // Define the route for the home page
            <div className="image-container">
              <img src="/radiant_background.jpg" alt="background" className="background" style={{ width: '100%', height: '750px' }} />
              <div className="text-overlay">
                <h2>Empowering Through Therapy: Music Services in Australia</h2>
                <p>Unlock your potential with expert guidance. Discover Comprehensive Music Therapy Solutions for All Ages.</p>
              </div>
            </div>
          } />
          <Route path="/about" element={<AboutPage />} /> {/* Define the route for the About page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
