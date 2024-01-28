// App.js
import React from 'react';
import './App.css';
import Header from './Header';
import MenuBar from './MenuBar'; // Import the MenuBar component

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Header />
      <p>Welcome to my GAY AF website!</p>
      <img src="/twogays.gif" alt="logo" style={{ width: '700px', height: '500px' }} />
    </div>
  );
}

export default App;
