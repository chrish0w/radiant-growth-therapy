import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage'; // Import the new HomePage component
import ServicesPage from './pages/Services/ServicesPage';
import ContactPage from './pages/Contact/ContactPage';
import Footer from './components/Footer/Footer';  // Import Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use HomePage for the "/" route */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Add this route */}
          </Routes>
        <Footer />  {/*Add Footer below Routes to appear on all pages */}
      </div>
    </Router>
  );
}

export default App;
