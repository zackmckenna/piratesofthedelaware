import React from 'react';
import compass from '../compass.png'
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={compass} className="App-logo" alt="logo" />
        <p>
          PIRATES OF THE DELAWARE
        </p>
        <p>coming soon</p>
      </header>
    </div>
  );
}

export default Home;
