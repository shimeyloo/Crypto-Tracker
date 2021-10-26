import React from 'react';
import Navbar from './Navbar';

function Intro() {
  return(
    <div className="section intro-section">
      <div className="container">
        <div className="main-section">
          <p className="main-text-1">Simple. Fast. Secure</p>
          <p className="main-text-2">The World's Best</p>
          <p className="main-text-2">Cryptocurrency</p>
          <p className="main-text-2">Tracker.</p>
          <p className="main-text-3">Get the latest prices of your cryptocurrency portfolio in one place.</p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div id="home">
      <Navbar />
      <Intro />
    </div>
  );
}

export default Home;
